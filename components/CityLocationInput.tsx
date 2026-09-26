'use client';

import React, { useState, useEffect, useRef, useId, useCallback } from 'react';
import { MapPin, X, Loader2, Check } from 'lucide-react';
import {
  searchLocations,
  preloadLocationData,
  type ResolvedLocation,
} from '@/lib/location-search';

export type { ResolvedLocation };

export interface CityLocationInputProps {
  value?: ResolvedLocation | null;
  onChange?: (location: ResolvedLocation | null) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
  placeholder?: string;
  label?: string;
  id?: string;
}

export function CityLocationInput({
  value,
  onChange,
  error,
  required = true,
  disabled = false,
  className = '',
  inputClassName = '',
  placeholder = 'Search city or province (e.g. Toronto, Jaipur, Ontario)...',
  label = 'City / Residential Location',
  id: customId,
}: CityLocationInputProps) {
  const generatedId = useId();
  const inputId = customId || `location-input-${generatedId}`;
  const listboxId = `location-listbox-${generatedId}`;

  const [query, setQuery] = useState(value?.displayText || '');
  const [results, setResults] = useState<ResolvedLocation[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Sync external value changes
  const prevValueRef = useRef(value);
  useEffect(() => {
    if (value !== prevValueRef.current) {
      prevValueRef.current = value;
      if (value) {
        setQuery(value.displayText);
      } else if (value === null) {
        setQuery('');
      }
    }
  }, [value]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  const executeSearch = useCallback(async (searchQuery: string) => {
    const trimmed = searchQuery.trim();
    if (trimmed.length < 2) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    try {
      const items = await searchLocations(trimmed, 40);
      setResults(items);
      setIsOpen(true);
      setActiveIndex(-1);
    } catch (err) {
      console.error('Error searching locations:', err);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  const handleQueryChange = (val: string) => {
    setQuery(val);

    // If candidate alters text, uncommit current selection until an option is picked
    if (value && val !== value.displayText) {
      onChange?.(null);
    }

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (val.trim().length >= 2) {
      setIsSearching(true);
      debounceTimerRef.current = setTimeout(() => {
        executeSearch(val);
      }, 120); // ~120ms debounce
    } else {
      setResults([]);
      setIsOpen(false);
      setIsSearching(false);
      setActiveIndex(-1);
    }
  };

  const handleSelect = (item: ResolvedLocation) => {
    setQuery(item.displayText);
    setIsOpen(false);
    setResults([]);
    setActiveIndex(-1);
    onChange?.(item);
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    setActiveIndex(-1);
    onChange?.(null);
    inputRef.current?.focus();
  };

  const scrollItemIntoView = (index: number) => {
    if (listRef.current) {
      const items = listRef.current.children;
      if (items[index]) {
        (items[index] as HTMLElement).scrollIntoView({ block: 'nearest' });
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || results.length === 0) {
      if (e.key === 'ArrowDown' && query.trim().length >= 2 && results.length > 0) {
        setIsOpen(true);
        e.preventDefault();
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        const nextIndex = activeIndex < results.length - 1 ? activeIndex + 1 : 0;
        setActiveIndex(nextIndex);
        scrollItemIntoView(nextIndex);
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        const prevIndex = activeIndex > 0 ? activeIndex - 1 : results.length - 1;
        setActiveIndex(prevIndex);
        scrollItemIntoView(prevIndex);
        break;
      }
      case 'Enter': {
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < results.length) {
          handleSelect(results[activeIndex]);
        }
        break;
      }
      case 'Escape': {
        e.preventDefault();
        setIsOpen(false);
        setActiveIndex(-1);
        break;
      }
      case 'Tab': {
        if (isOpen && activeIndex >= 0 && activeIndex < results.length) {
          handleSelect(results[activeIndex]);
        } else {
          setIsOpen(false);
        }
        break;
      }
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Hidden inputs to pass resolved location values in FormData */}
      <input type="hidden" name="city" value={value?.city || ''} />
      <input type="hidden" name="state" value={value?.state || ''} />
      <input type="hidden" name="province" value={value?.province || value?.state || ''} />
      <input type="hidden" name="state_province" value={value?.state_province || value?.state || ''} />
      <input type="hidden" name="country" value={value?.country || ''} />
      <input type="hidden" name="country_code" value={value?.countryCode || ''} />
      <input
        type="hidden"
        name="residential_location"
        value={value?.residentialLocation || value?.displayText || ''}
      />

      {/* Label: Exactly "City / Residential Location *" */}
      <label
        htmlFor={inputId}
        className="mb-1 block text-xs font-semibold text-brand-ink/70"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {/* Single clean search input container */}
      <div className="relative">
        {/* Left MapPin Icon */}
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
          <MapPin
            className="h-4 w-4 text-slate-400"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>

        {/* Search Input */}
        <input
          ref={inputRef}
          id={inputId}
          type="text"
          role="combobox"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-haspopup="listbox"
          aria-controls={listboxId}
          disabled={disabled}
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          onFocus={() => {
            preloadLocationData().catch(() => {});
            if (query.trim().length >= 2 && results.length > 0) {
              setIsOpen(true);
            }
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoComplete="off"
          spellCheck={false}
          className={
            inputClassName ||
            `w-full rounded-lg border ${
              error
                ? 'border-red-500'
                : 'border-brand-line/20'
            } bg-white/30 py-2 pl-9 pr-8 text-sm text-brand-navy placeholder:text-brand-ink-mute/50 focus:outline-none focus:ring-2 focus:ring-gold-600`
          }
        />

        {/* Right side Clear (X) or Searching Spinner */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-2.5">
          {isSearching ? (
            <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
          ) : query.length > 0 && !disabled ? (
            <button
              type="button"
              onClick={handleClear}
              className="rounded p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
              aria-label="Clear location search"
            >
              <X className="h-3.5 w-3.5" strokeWidth={1.75} />
            </button>
          ) : null}
        </div>
      </div>

      {/* Validation Error Message */}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}

      {/* Autocomplete Dropdown Popup */}
      {isOpen && query.trim().length >= 2 && (
        <div
          id={listboxId}
          className="absolute left-0 right-0 z-50 mt-1.5 max-h-72 overflow-hidden rounded-xl border border-brand-line bg-white p-1 shadow-xl ring-1 ring-black/5 animate-in fade-in-0 zoom-in-95 duration-100"
        >
          {results.length > 0 ? (
            <ul
              ref={listRef}
              role="listbox"
              className="max-h-72 overflow-y-auto p-1 focus:outline-none space-y-0.5"
            >
              {results.map((item, index) => {
                const isSelected =
                  value?.id === item.id || value?.displayText === item.displayText;
                const isActive = activeIndex === index;

                return (
                  <li
                    key={item.id}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 cursor-pointer text-left transition-colors select-none rounded-lg ${
                      isActive || isSelected
                        ? 'bg-slate-100 text-brand-navy'
                        : 'text-brand-ink-soft hover:bg-slate-50'
                    }`}
                  >
                    {/* Country Code Badge */}
                    <span className="inline-flex shrink-0 items-center justify-center rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-600 border border-slate-200/60">
                      {item.countryCode}
                    </span>

                    {/* MapPin Icon */}
                    <MapPin
                      className="h-4 w-4 shrink-0 text-slate-400"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    {/* Name & Region */}
                    <div className="min-w-0 flex-1 flex flex-wrap items-baseline gap-x-1.5 text-sm">
                      <span className="font-bold text-brand-navy truncate">
                        {item.primaryText}
                      </span>
                      <span className="text-xs text-brand-ink-mute truncate">
                        {item.secondaryText}
                      </span>
                    </div>

                    {/* Selected Checkmark */}
                    {isSelected && (
                      <Check
                        className="h-4 w-4 shrink-0 text-brand-navy"
                        aria-hidden="true"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          ) : !isSearching ? (
            <div className="p-4 text-center">
              <p className="text-xs font-semibold text-brand-navy">
                No matching location found.
              </p>
              <p className="mt-1 text-[11px] text-brand-ink-mute">
                Try searching for a nearby major city, district, or your state/province name.
              </p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default CityLocationInput;
