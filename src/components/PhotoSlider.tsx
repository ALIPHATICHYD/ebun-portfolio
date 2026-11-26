"use client";

import { useEffect, useRef } from "react";
import { about } from "@/content/data";

const NORMAL_RATE = 1;
const SLOW_RATE = 0.25;
const SPEED = 70;
const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

/** Polaroid strip of photos that drifts sideways, slows on hover, and stops under reduced motion. */
export default function PhotoSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const photos = about.photos.filter((p) => p.type === "image");

  const setRate = (rate: number) => {
    trackRef.current?.getAnimations().forEach((animation) => {
      animation.playbackRate = rate;
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const recalculate = () => {
      track.style.setProperty("--marquee-duration", `${track.scrollWidth / 2 / SPEED}s`);
    };
    recalculate();
    const observer = new ResizeObserver(recalculate);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  if (photos.length === 0) return null;
  const track = [...photos, ...photos];

  return (
    <div
      className="edge-fade overflow-hidden py-6"
      role="region"
      aria-label="Photo gallery"
      onMouseEnter={() => setRate(SLOW_RATE)}
      onMouseLeave={() => setRate(NORMAL_RATE)}
    >
      <div ref={trackRef} className="marquee-track flex gap-6 pr-6">
        {track.map((photo, i) => (
          <figure
            key={`${photo.src}-${i}`}
            aria-hidden={i >= photos.length}
            className={`polaroid w-56 shrink-0 sm:w-64 ${tilts[i % tilts.length]}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo.src} alt={i < photos.length ? photo.alt : ""} className="aspect-[4/5]" loading="lazy" />
          </figure>
        ))}
      </div>
    </div>
  );
}
