import type { ReactNode } from "react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

export type Evidence = "Research finding" | "Hypothesis" | "Proposed" | "Not yet measured";

const evidenceStyle: Record<Evidence, string> = {
  "Research finding": "bg-sage/30 text-ink border-sage/60",
  Hypothesis: "bg-lavender/40 text-ink border-lavender",
  Proposed: "bg-peach/50 text-terracotta-deep border-peach",
  "Not yet measured": "bg-white/60 text-ink/70 border-ink/20",
};

export function EvidenceTag({ kind }: { kind: Evidence }) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-0.5 text-xs font-bold uppercase tracking-wide ${evidenceStyle[kind]}`}
    >
      {kind}
    </span>
  );
}

export function CaseSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow={eyebrow} title={title} />
        {children}
      </div>
    </section>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <blockquote className="glass rounded-3xl border-l-8 border-l-terracotta p-8 text-center sm:p-12">
        <p className="text-2xl font-extrabold leading-snug tracking-tight text-ink sm:text-4xl">
          {children}
        </p>
      </blockquote>
    </Reveal>
  );
}

export function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass rounded-2xl p-5 text-center">
      <p className="text-3xl font-extrabold text-terracotta-deep sm:text-4xl">{value}</p>
      <p className="mt-1 text-sm font-semibold text-ink/75">{label}</p>
    </div>
  );
}

type Option = {
  name: string;
  title: string;
  what: string;
  rootCause: string;
  gap: string;
  chosen?: boolean;
};

export function OptionMatrix({ options }: { options: Option[] }) {
  const rows: { label: string; key: keyof Omit<Option, "chosen" | "name" | "title"> }[] = [
    { label: "What it does", key: "what" },
    { label: "Fit with root cause", key: "rootCause" },
    { label: "What remains unsolved", key: "gap" },
  ];

  return (
    <div className="glass overflow-x-auto rounded-3xl p-2 sm:p-4">
      <table className="w-full min-w-[640px] border-separate border-spacing-2 text-left text-sm">
        <caption className="sr-only">
          Comparison of three Wishlist interventions against the research-supported root cause
        </caption>
        <thead>
          <tr>
            <td />
            {options.map((option) => (
              <th
                key={option.name}
                scope="col"
                className={`rounded-2xl p-4 align-top ${
                  option.chosen ? "bg-terracotta text-white" : "bg-white/50 text-ink"
                }`}
              >
                <span className="block text-xs font-bold uppercase tracking-wide opacity-80">
                  {option.name}
                </span>
                <span className="mt-1 block text-base font-extrabold">{option.title}</span>
                {option.chosen && (
                  <span className="mt-2 inline-block rounded-full bg-white/25 px-2 py-0.5 text-xs font-bold">
                    Advanced
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key}>
              <th
                scope="row"
                className="w-32 p-3 align-top text-xs font-bold uppercase tracking-wide text-terracotta-deep"
              >
                {row.label}
              </th>
              {options.map((option) => (
                <td
                  key={option.name}
                  className={`rounded-2xl p-4 align-top leading-relaxed text-ink/85 ${
                    option.chosen ? "bg-peach/40" : "bg-white/40"
                  }`}
                >
                  {option[row.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MetricCard({
  tier,
  title,
  items,
  accent,
}: {
  tier: string;
  title: string;
  items: string[];
  accent: string;
}) {
  return (
    <div className={`glass h-full rounded-3xl border-t-4 p-6 ${accent}`}>
      <p className="text-xs font-bold uppercase tracking-wide text-terracotta-deep">{tier}</p>
      <h3 className="mt-1 text-lg font-extrabold text-ink">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/85">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-terracotta" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MetricsHierarchy() {
  return (
    <div className="flex flex-col items-stretch">
      <Reveal>
        <MetricCard
          tier="Primary business metric"
          title="30-Day Wishlist-to-Order Conversion"
          items={[
            "Share of eligible users who buy at least one qualifying Wishlisted item within 30 days.",
          ]}
          accent="border-t-terracotta"
        />
      </Reveal>
      <div aria-hidden="true" className="mx-auto h-6 w-0.5 bg-lavender" />
      <div className="grid gap-4 md:grid-cols-2">
        <Reveal from="left" className="h-full">
          <MetricCard
            tier="Target-cohort metrics"
            title="Is the intended segment moving?"
            items={[
              "Target-cohort 30-day Wishlist-to-Order conversion",
              "Target Wishlist-to-Bag progression",
            ]}
            accent="border-t-peach"
          />
        </Reveal>
        <Reveal from="right" className="h-full">
          <MetricCard
            tier="Leading and diagnostic"
            title="Is the feature working as designed?"
            items={[
              "Compare-to-Bag conversion",
              "Median time from comparison start to first Bag addition",
              "Comparison abandonment rate",
            ]}
            accent="border-t-blush"
          />
        </Reveal>
      </div>
      <div aria-hidden="true" className="mx-auto h-6 w-0.5 bg-lavender" />
      <Reveal>
        <MetricCard
          tier="Guardrails"
          title="Is purchase quality and trust intact?"
          items={[
            "Returns and exchanges",
            "Order cancellations",
            "AI-generated claim quality",
            "Feature adoption and friction during shortlist selection",
          ]}
          accent="border-t-sage"
        />
      </Reveal>
    </div>
  );
}
