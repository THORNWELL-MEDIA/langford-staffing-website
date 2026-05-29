"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { img, type ImageKey } from "@/lib/images";
import { cn } from "@/lib/cn";

interface Tile {
  key: ImageKey;
  caption?: string;
  className?: string;
}

interface Props {
  tiles: Tile[];
  className?: string;
}

/**
 * Asymmetric image grid for hero collages and gallery sections.
 * Pass tile-level className to override row/col span for masonry layouts.
 */
export default function ImageGrid({ tiles, className }: Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2",
        className
      )}
    >
      {tiles.map((tile, i) => (
        <Tile key={tile.key + i} tile={tile} idx={i} />
      ))}
    </div>
  );
}

function Tile({ tile, idx }: { tile: Tile; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.55, delay: idx * 0.07, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-brand-navy",
        tile.className
      )}
    >
      <Image
        src={img(tile.key, 1000)}
        alt=""
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      {tile.caption && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/85 via-transparent to-transparent" />
          <p className="absolute inset-x-3 bottom-3 text-xs font-semibold uppercase tracking-wider text-white">
            {tile.caption}
          </p>
        </>
      )}
    </motion.div>
  );
}
