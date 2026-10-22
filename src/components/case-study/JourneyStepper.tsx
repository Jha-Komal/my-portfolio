"use client";

import { useState } from "react";

type Step = {
  label: string;
  stage: "Existing" | "Help Me Choose";
  heading: string;
  body: string;
  example?: string;
};

export default function JourneyStepper({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(1);
  const step = steps[active];

  return (
    <div>
      <ol className="grid gap-3 sm:grid-cols-5">
        {steps.map((item, index) => {
          const selected = index === active;
          return (
            <li key={item.label} className="relative">
              <button
                type="button"
                aria-pressed={selected}
                aria-controls="journey-panel"
                onClick={() => setActive(index)}
                className={`glass h-full w-full rounded-2xl p-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta ${
                  selected ? "!bg-terracotta text-white" : "text-ink"
                }`}
              >
                <span className="block text-xs font-bold opacity-80">Step {index + 1}</span>
                <span className="mt-1 block text-base font-extrabold">{item.label}</span>
                <span
                  className={`mt-2 inline-block rounded-full px-2 py-0.5 text-[11px] font-bold ${
                    selected ? "bg-white/25" : "bg-peach/60 text-terracotta-deep"
                  }`}
                >
                  {item.stage}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div
        id="journey-panel"
        aria-live="polite"
        className="glass mt-4 rounded-3xl p-6 sm:p-8"
      >
        <p className="text-xs font-bold uppercase tracking-wide text-terracotta-deep">
          {step.label}
        </p>
        <h3 className="mt-1 text-xl font-extrabold text-ink">{step.heading}</h3>
        <p className="mt-3 text-base leading-relaxed text-ink/85">{step.body}</p>
        {step.example && (
          <p className="mt-3 rounded-2xl bg-white/50 p-4 text-sm leading-relaxed text-ink/80">
            {step.example}
          </p>
        )}
      </div>
    </div>
  );
}
