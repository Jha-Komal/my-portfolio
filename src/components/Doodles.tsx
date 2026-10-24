const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function CoffeeCup({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 80 72" className={className} {...stroke}>
      <path d="M26 10c-4 5 4 7 0 13M38 8c-4 5 4 7 0 13" />
      <path d="M14 30h42v14c0 9-8 16-21 16S14 53 14 44Z" />
      <path d="M56 34h4c6 0 6 12 0 12h-5" />
      <path d="M6 64c14 6 48 6 66 0" />
      <path d="M22 38c0 6 5 11 13 11" opacity="0.5" />
    </svg>
  );
}

export function Notebook({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 84 64" className={className} {...stroke}>
      <path d="M4 12c14-4 26-3 38 4v40C30 49 18 48 4 52Z" />
      <path d="M80 12c-14-4-26-3-38 4v40c12-7 24-8 38-4Z" />
      <path d="M12 22c8-2 14-1 22 3M12 32c8-2 14-1 22 3M12 42c8-2 14-1 22 3" opacity="0.55" />
      <path d="M52 24h20M52 34h20M52 44h12" opacity="0.55" />
      <path d="M66 6l8 8-12 4Z" />
    </svg>
  );
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className={className} {...stroke}>
      <path d="M24 4c1 11 4 16 16 20-12 4-15 9-16 20-1-11-4-16-16-20 12-4 15-9 16-20Z" />
      <path d="M40 6v8M36 10h8" opacity="0.6" />
    </svg>
  );
}

export function Cat({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 84 92" className={className} {...stroke}>
      <path d="M22 30 20 12l12 8q8-2 16 0l12-8-2 18q4 10-6 16-12 5-24 0-10-6-6-16Z" />
      <path d="M30 32q2-2 4 0M46 32q2-2 4 0" />
      <path d="m38 38 2 2 2-2Z" />
      <path d="M40 40v2M36 43q4 3 8 0" />
      <path d="M24 38 12 36M24 41 12 44M56 38l12-2M56 41l12 3" opacity="0.7" />
      <path d="M28 46Q18 60 22 80h36q4-20-6-34" />
      <path d="M58 78q18 0 14-18-2-6-6-2" />
      <path d="M30 80v5M50 80v5" />
    </svg>
  );
}
