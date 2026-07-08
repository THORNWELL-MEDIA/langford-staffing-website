'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, ChevronDown, X } from 'lucide-react'
import { useCareersFilter } from './careers-filter-context'

export default function JobFilterControls({ scrollToId }: { scrollToId?: string }) {
  const {
    search, setSearch,
    selectedCountries,
    selectedCities,
    locationSearch, setLocationSearch,
    selectedCategories,
    locationHierarchy,
    categoriesWithCounts,
    countryHasSelectedCities,
    handleCountryClick,
    handleCityClick,
    toggleCategory,
    clearFilters,
    totalLocationSelected,
    filteredRoles
  } = useCareersFilter()

  const [locationOpen, setLocationOpen] = useState(false)
  const [categoryOpen, setCategoryOpen] = useState(false)

  const locationRef = useRef<HTMLDivElement>(null)
  const categoryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setLocationOpen(false)
      }
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setCategoryOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleInteraction = () => {
    if (scrollToId) {
      const el = document.getElementById(scrollToId)
      // Only scroll if we are not already near it
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top > 100 || rect.top < -100) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  const filteredLocationHierarchy = (() => {
    const q = locationSearch.toLowerCase()
    if (!q) return locationHierarchy
    return locationHierarchy.map(h => {
      const matchCountry = h.country.toLowerCase().includes(q)
      const matchingCities = h.cities.filter(c => c.city.toLowerCase().includes(q))
      if (matchCountry || matchingCities.length > 0) {
        return { ...h, cities: matchCountry ? h.cities : matchingCities }
      }
      return null
    }).filter(Boolean) as typeof locationHierarchy
  })()

  return (
    <div className="space-y-4">
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <Search className="h-5 w-5 text-brand-ink/40" aria-hidden="true" />
        </div>
        <input
          type="text"
          className="block w-full rounded-xl border-0 py-4 pl-11 pr-16 text-brand-navy shadow-sm ring-1 ring-inset ring-brand-line placeholder:text-brand-ink/40 focus:ring-2 focus:ring-inset focus:ring-brand-saffron-dark sm:text-sm sm:leading-6"
          placeholder="Search for job positions..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            // don't scroll on every keystroke, let them hit enter or just type
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleInteraction()
          }}
        />
        {search && (
          <div className="absolute inset-y-0 right-2 flex items-center">
            <button
              type="button"
              onClick={() => {
                setSearch('')
                handleInteraction()
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-paper-warm text-brand-ink/50 hover:bg-brand-saffron-dark hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-saffron-dark focus:ring-offset-2"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
      
      <div className="flex flex-wrap gap-4 items-center">
        {/* Location Dropdown */}
        <div className="relative" ref={locationRef}>
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-brand-navy shadow-sm ring-1 ring-inset ring-brand-line hover:bg-brand-paper-warm focus:outline-none"
            onClick={() => {
              setLocationOpen(!locationOpen)
              setCategoryOpen(false)
            }}
          >
            Location {totalLocationSelected > 0 && <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-saffron-dark text-[10px] text-white">{totalLocationSelected}</span>}
            <ChevronDown className="h-4 w-4 text-brand-ink/40" />
          </button>
          {locationOpen && (
            <div className="absolute left-0 z-10 mt-2 w-72 origin-top-left rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col max-h-[400px]">
              <div className="p-2 border-b border-brand-line shrink-0">
                <div className="relative">
                  <Search className="h-4 w-4 text-brand-ink/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text"
                    className="block w-full rounded-md border-0 py-2 pl-9 pr-3 text-sm text-brand-navy shadow-sm ring-1 ring-inset ring-brand-line focus:ring-2 focus:ring-brand-saffron-dark"
                    placeholder="Search locations..."
                    value={locationSearch}
                    onChange={(e) => setLocationSearch(e.target.value)}
                  />
                </div>
              </div>
              <div className="overflow-y-auto p-2 space-y-2">
                {filteredLocationHierarchy.map(h => {
                  const isCountryChecked = selectedCountries.includes(h.country) || countryHasSelectedCities(h.country)
                  
                  return (
                    <div key={h.country} className="space-y-1">
                      <label className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-brand-paper-warm">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-brand-line text-brand-saffron-dark focus:ring-brand-saffron-dark accent-brand-saffron-dark"
                          checked={isCountryChecked}
                          onChange={() => {
                            handleCountryClick(h.country)
                            handleInteraction()
                          }}
                        />
                        <span className="text-sm font-bold text-brand-navy flex-1">{h.country}</span>
                        <span className="text-xs text-brand-ink/40">({h.count})</span>
                      </label>
                      {h.cities.length > 0 && (
                        <div className="ml-6 space-y-1 border-l-2 border-brand-line pl-2">
                          {h.cities.map(c => (
                            <label key={c.city} className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1 hover:bg-brand-paper-warm">
                              <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-brand-line text-brand-saffron-dark focus:ring-brand-saffron-dark accent-brand-saffron-dark"
                                checked={selectedCities.includes(c.city)}
                                onChange={() => {
                                  handleCityClick(c.city, h.country)
                                  handleInteraction()
                                }}
                              />
                              <span className="text-sm text-brand-ink flex-1">{c.city}</span>
                              <span className="text-xs text-brand-ink/40">({c.count})</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
                {filteredLocationHierarchy.length === 0 && (
                  <div className="p-3 text-center text-sm text-brand-ink/50">No locations found.</div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Category Dropdown */}
        <div className="relative" ref={categoryRef}>
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-brand-navy shadow-sm ring-1 ring-inset ring-brand-line hover:bg-brand-paper-warm focus:outline-none"
            onClick={() => {
              setCategoryOpen(!categoryOpen)
              setLocationOpen(false)
            }}
          >
            Job Category {selectedCategories.length > 0 && <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-saffron-dark text-[10px] text-white">{selectedCategories.length}</span>}
            <ChevronDown className="h-4 w-4 text-brand-ink/40" />
          </button>
          {categoryOpen && (
            <div className="absolute left-0 z-10 mt-2 w-72 origin-top-left rounded-xl bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-80 overflow-y-auto">
              <div className="space-y-1">
                {categoriesWithCounts.map(cat => (
                  <label key={cat.name} className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 hover:bg-brand-paper-warm">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-brand-line text-brand-saffron-dark focus:ring-brand-saffron-dark accent-brand-saffron-dark"
                      checked={selectedCategories.includes(cat.name)}
                      onChange={() => {
                        toggleCategory(cat.name)
                        handleInteraction()
                      }}
                    />
                    <span className="text-sm text-brand-navy flex-1">{cat.name}</span>
                    <span className="text-xs text-brand-ink/40">({cat.count})</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {(totalLocationSelected > 0 || selectedCategories.length > 0 || search) && (
          <button
            onClick={() => {
              clearFilters()
              setSearch('')
              handleInteraction()
            }}
            className="px-4 py-3 text-sm font-medium text-brand-saffron-dark hover:text-brand-saffron-dark transition-colors"
          >
            Clear all
          </button>
        )}

        <div className="ml-auto text-sm text-brand-ink/60 font-medium">
          Showing {filteredRoles.length} {filteredRoles.length === 1 ? 'role' : 'roles'}
        </div>
      </div>
    </div>
  )
}
