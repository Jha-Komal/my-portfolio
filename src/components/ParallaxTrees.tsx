"use client";

import { useEffect, useRef } from "react";

// Deterministic PRNG so server and client render the same trees.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const WIDTH = 1600;
const HEIGHT = 420;

// A row of conifers drawn as stacked triangles on a single path.
function forestPath(seed: number, count: number, minH: number, maxH: number) {
  const rand = mulberry32(seed);
  let d = "";
  for (let i = 0; i < count; i++) {
    const x = (i + rand() * 0.8) * (WIDTH / count);
    const h = minH + rand() * (maxH - minH);
    const w = h * 0.36;
    for (let tier = 0; tier < 4; tier++) {
      const top = HEIGHT - h + tier * h * 0.2;
      const half = w * (0.3 + tier * 0.2);
      const bottom = top + h * 0.38;
      d += `M${x.toFixed(1)} ${top.toFixed(1)}L${(x + half).toFixed(1)} ${bottom.toFixed(1)}L${(x - half).toFixed(1)} ${bottom.toFixed(1)}Z`;
    }
    d += `M${(x - 3).toFixed(1)} ${HEIGHT - h * 0.1}h6V${HEIGHT}h-6Z`;
  }
  return d;
}

const layers = [
  { path: forestPath(7, 26, 150, 260), color: "#c9b8dc", opacity: 0.35, blur: 3, amp: 6 },
  { path: forestPath(21, 20, 190, 320), color: "#b09ccb", opacity: 0.3, blur: 2, amp: 14 },
  { path: forestPath(42, 14, 240, 390), color: "#9a84ba", opacity: 0.24, blur: 1, amp: 24 },
];

export default function ParallaxTrees() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      layers.forEach((layer, i) => {
        const el = refs.current[i];
        if (el) el.style.transform = `translate3d(0, ${-progress * layer.amp}vh, 0)`;
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="trees" aria-hidden="true">
      {layers.map((layer, i) => (
        <div
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className="tree-layer will-change-transform"
          style={{ filter: `blur(${layer.blur}px)`, opacity: layer.opacity }}
        >
          <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            preserveAspectRatio="xMidYMax slice"
            className="h-full w-full"
          >
            <path d={layer.path} fill={layer.color} />
          </svg>
          <div className={`fog fog-${i + 1}`} />
        </div>
      ))}
    </div>
  );
}
