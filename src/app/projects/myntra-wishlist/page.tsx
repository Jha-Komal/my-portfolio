import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import {
  Callout,
  CaseSection,
  EvidenceTag,
  MetricsHierarchy,
  OptionMatrix,
  StatTile,
} from "@/components/case-study/CaseStudyParts";
import JourneyStepper from "@/components/case-study/JourneyStepper";
import portfolio from "@/data/portfolio.json";

const SLIDES_URL =
  "https://docs.google.com/presentation/d/1GMZ_dBwD8c0oBd2MEP2bjXiiBordF5rHH-Am4gy1JxI/edit?usp=sharing";

export const metadata: Metadata = {
  title: `Myntra Wishlist Conversion | ${portfolio.profile.name}`,
  description:
    "Product case study: helping high-intent Myntra shoppers choose between Wishlist items without discounts or incentives.",
};

const stack = [
  "Next.js 16",
  "TypeScript",
  "OpenAI API",
  "Tailwind CSS 4",
  "Recharts",
  "TanStack Query",
  "Zod",
];

const journey = [
  {
    label: "Browse & Save",
    stage: "Existing" as const,
    heading: "Interest is captured, purchase readiness is not",
    body: "Users save several products that could meet the same need. Saving signals interest, but not that a decision has been made.",
  },
  {
    label: "Shortlist",
    stage: "Help Me Choose" as const,
    heading: "Pick the 2–4 products you are genuinely considering",
    body: "Users select viable alternatives for the same purchase need, so the comparison stays small and relevant.",
  },
  {
    label: "Diagnose",
    stage: "Help Me Choose" as const,
    heading: "Ask what matters first",
    body: "Users describe their purchase context and what matters most: fit, quality, price, reviews, styling, reusability or the occasion.",
    example: "Core principle: ask what matters first, then resolve the shortlist against that criterion.",
  },
  {
    label: "Resolve",
    stage: "Help Me Choose" as const,
    heading: "See which option best matches your priorities",
    body: "The shortlist is compared against the stated priorities and the relevant trade-offs are synthesized from available product and review evidence.",
  },
  {
    label: "Act",
    stage: "Help Me Choose" as const,
    heading: "Move the preferred product straight to Bag",
    body: "The user commits to a finalist without reopening each product detail page.",
  },
];

const options = [
  {
    name: "Option A",
    title: "Richer product detail pages",
    what: "Improve fit, sizing, review and photo information on each product page.",
    rootCause: "Partial. Builds confidence in individual products.",
    gap: "Users still compare across products manually.",
  },
  {
    name: "Option B",
    title: "Wishlist reminders",
    what: "Nudge users to revisit products they saved.",
    rootCause: "Weak. Brings users back but does not help them decide.",
    gap: "The underlying decision problem is unchanged.",
  },
  {
    name: "Option C",
    title: "Help Me Choose",
    what: "Compare viable Wishlist alternatives in one workspace and synthesize trade-offs around the user's priorities.",
    rootCause: "Direct. Targets the research-supported root cause.",
    gap: "Impact and effort are not yet quantified; needs an experiment.",
    chosen: true,
  },
];

const learnings = [
  "A strong opportunity can exist after user interest is already established.",
  "More information does not always solve a decision problem; users may need help synthesizing evidence they already have.",
  "AI-assisted analysis can turn large volumes of qualitative feedback into testable hypotheses, but primary research is needed to validate the problem.",
  "Prioritize by the mechanism behind user friction, not by how attractive a feature looks.",
  "Measure business outcomes alongside trust, returns, cancellations and friction.",
];

export default function MyntraWishlistCaseStudy() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/60 bg-cream/70 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/#projects" className="nav-link text-sm font-semibold text-ink">
            ← Back to portfolio
          </Link>
          <a
            href={SLIDES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-terracotta-deep hover:text-terracotta"
          >
            View slides →
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 pb-10 pt-16 sm:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta-deep">
              Product Case Study · Myntra Wishlist
            </p>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Shoppers save the products they want, then can&apos;t decide between them
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-ink/75">
              How a unified decision workspace could lift Wishlist-to-order conversion, with no
              discounts, cashback or other incentives.
            </p>

            <div className="mx-auto mt-10 grid max-w-3xl gap-4 text-left sm:grid-cols-3">
              <StatTile value="2,055" label="public conversations analysed with AI" />
              <StatTile value="20" label="survey responses" />
              <StatTile value="6" label="user interviews" />
            </div>

            <div className="glass mx-auto mt-4 max-w-3xl rounded-3xl p-6 text-left">
              <p className="text-xs font-bold uppercase tracking-wide text-terracotta-deep">Role</p>
              <p className="mt-1 text-base font-semibold text-ink">
                Product Management · Product Discovery · User Research · AI-Powered Product
                Development
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-terracotta-deep">
                Built with
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/70 bg-blush/40 px-3 py-1 text-sm text-ink/85"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mx-auto mt-6 max-w-2xl rounded-2xl bg-white/50 p-4 text-sm leading-relaxed text-ink/80">
              An independent case study and prototype. It is not a feature shipped at Myntra, no
              controlled experiment has been run, and no conversion results are claimed.
            </p>
          </div>
        </section>

        <CaseSection id="problem" eyebrow="Business Problem" title="Saved is not the same as ready to buy">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal from="left" className="h-full">
              <div className="glass h-full rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg font-extrabold text-ink">The problem</h3>
                <p className="mt-3 leading-relaxed text-ink/85">
                  Users save several products that could meet the same need, but those products
                  differ in fit, quality, material, styling, reviews and reusability. The
                  information lives on separate product pages, so users keep reopening them and
                  rebuilding the comparison in their heads.
                </p>
                <p className="mt-4 rounded-2xl bg-peach/40 p-4 text-sm font-semibold leading-relaxed text-ink">
                  Fragmented comparative evidence delays commitment to one Wishlist finalist,
                  preventing high-intent users from progressing toward purchase.
                </p>
              </div>
            </Reveal>
            <Reveal from="right" className="h-full">
              <div className="glass h-full rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg font-extrabold text-ink">The business opportunity</h3>
                <p className="mt-3 leading-relaxed text-ink/85">
                  Improve Wishlist-to-Bag progression and 30-day Wishlist-to-Order conversion by
                  helping users make confident purchase decisions, without monetary incentives.
                </p>
              </div>
            </Reveal>
          </div>
        </CaseSection>

        <CaseSection id="research" eyebrow="Research" title="AI-assisted discovery, then primary research">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal from="left" className="h-full">
              <div className="glass h-full rounded-3xl p-6 sm:p-8">
                <EvidenceTag kind="Hypothesis" />
                <h3 className="mt-3 text-lg font-extrabold text-ink">AI review discovery engine</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/85">
                  <li>
                    Analysed 2,055 public conversations from Google Play, the App Store, Reddit
                    and complaint forums.
                  </li>
                  <li>
                    AI classification of themes: purchase intent, decision uncertainty, product
                    information, price sensitivity, postponement and comparison behaviour.
                  </li>
                  <li>
                    Aggregated evidence into prioritized opportunity hypotheses. Decision
                    confidence and product-information uncertainty looked most promising.
                  </li>
                </ul>
                <p className="mt-4 text-sm font-semibold text-ink/75">
                  Built to generate hypotheses, not to establish root causes or estimate how
                  common a problem is across Myntra&apos;s users.
                </p>
              </div>
            </Reveal>
            <Reveal from="right" className="h-full">
              <div className="glass h-full rounded-3xl p-6 sm:p-8">
                <EvidenceTag kind="Research finding" />
                <h3 className="mt-3 text-lg font-extrabold text-ink">Primary research</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/85">
                  <li>Surveyed 20 users.</li>
                  <li>
                    Interviewed 6 participants from the chosen behavioural segment: people with a
                    real purchase need whose Wishlist decisions were still unresolved.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </CaseSection>

        <section className="px-6 py-14" aria-label="Key insight">
          <div className="mx-auto max-w-4xl">
            <Callout>The problem wasn&apos;t finding products. It was deciding between them.</Callout>
            <Reveal>
              <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-ink/80">
                Users could have enough information to shortlist several viable products and still
                not know which fit them best. Different products won on different attributes,
                leaving trade-offs unresolved and sending users back into comparison loops.
              </p>
            </Reveal>
          </div>
        </section>

        <CaseSection id="root-cause" eyebrow="Root Cause" title="No unified way to compare viable alternatives">
          <Reveal>
            <p className="mx-auto mb-8 max-w-3xl text-center text-lg font-semibold text-ink">
              Users lack a single way to compare viable Wishlist alternatives against their own
              purchase priorities. The experience shows information product by product, but the
              decision needs several products side by side.
            </p>
          </Reveal>
          <ol className="grid gap-4 md:grid-cols-3">
            {[
              "Repeatedly reopening product detail pages.",
              "Reconstructing comparisons across fit, material, reviews, styling and more.",
              "Delayed commitment because no single product clearly wins.",
            ].map((text, index) => (
              <li key={text}>
                <Reveal delay={index * 120} className="h-full">
                  <div className="glass h-full rounded-3xl p-6">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta text-base font-extrabold text-white">
                      {index + 1}
                    </span>
                    <p className="mt-3 leading-relaxed text-ink/85">{text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-center text-sm font-semibold text-terracotta-deep">
            The critical friction sits in Evaluate → Choose → Move to Bag.
          </p>
        </CaseSection>

        <CaseSection id="solution" eyebrow="Solution" title="Help Me Choose">
          <Reveal>
            <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-ink/80">
              A decision-support workspace inside Wishlist for resolving a shortlist of 2–4 viable
              products. Rather than more reminders or more raw information, it synthesizes trade-offs
              around the user&apos;s purchase context and priorities.
            </p>
          </Reveal>
          <JourneyStepper steps={journey} />
          <p className="mt-4 text-center text-sm text-ink/70">
            Select a step to see what happens there. <EvidenceTag kind="Proposed" />
          </p>
        </CaseSection>

        <CaseSection id="prioritization" eyebrow="Prioritization" title="Three interventions considered">
          <Reveal>
            <OptionMatrix options={options} />
          </Reveal>
          <p className="mt-4 text-center text-sm leading-relaxed text-ink/75">
            Decision: advance Help Me Choose because it most directly addresses the root cause. The
            call weighed root-cause fit, potential impact, research confidence and implementation
            effort. Impact and effort were not yet quantified, so this is directional, not a
            numerically validated ICE score.
          </p>
        </CaseSection>

        <CaseSection id="metrics" eyebrow="Success Metrics" title="Conversion without hurting trust">
          <MetricsHierarchy />
        </CaseSection>

        <CaseSection id="experiment" eyebrow="Experimentation" title="How rollout would be decided">
          <Reveal>
            <p className="mx-auto mb-6 max-w-3xl text-center text-ink/80">
              The proposed design compares the target cohort against an appropriate control group.
              Rollout depends on three conditions:
            </p>
          </Reveal>
          <ol className="grid gap-4 md:grid-cols-3">
            {[
              "Conversion improves in the intended user segment.",
              "Returns, exchanges and cancellations do not materially worsen.",
              "AI comparisons stay evidence-grounded, with no unsupported product claims.",
            ].map((text, index) => (
              <li key={text}>
                <Reveal delay={index * 120} className="h-full">
                  <div className="glass h-full rounded-3xl p-6">
                    <p className="text-xs font-bold uppercase tracking-wide text-terracotta-deep">
                      Condition {index + 1}
                    </p>
                    <p className="mt-2 leading-relaxed text-ink/85">{text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="glass rounded-3xl p-5 text-sm leading-relaxed text-ink/85">
              <strong className="text-ink">If the eligible segment is too small,</strong> broaden the
              entry point.
            </div>
            <div className="glass rounded-3xl p-5 text-sm leading-relaxed text-ink/85">
              <strong className="text-ink">If users abandon the flow,</strong> simplify shortlist
              selection.
            </div>
          </div>
          <p className="mt-6 text-center text-lg font-bold text-ink">
            Scale only if conversion improves while purchase quality, trust and user experience
            stay stable.
          </p>
        </CaseSection>

        <CaseSection id="evidence" eyebrow="Evidence Status" title="What is known, proposed and measured">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                kind: "Research finding" as const,
                points: [
                  "Survey of 20 users and 6 interviews with the target segment.",
                  "Users can shortlist several viable products yet struggle to choose between them.",
                ],
              },
              {
                kind: "Hypothesis" as const,
                points: [
                  "AI discovery themes: decision confidence and product-information uncertainty.",
                  "Cross-product comparison around stated priorities will speed commitment.",
                ],
              },
              {
                kind: "Not yet measured" as const,
                points: [
                  "No controlled experiment has been run.",
                  "No conversion lift, returns or cancellation results exist.",
                ],
              },
            ].map((column, index) => (
              <Reveal key={column.kind} delay={index * 120} className="h-full">
                <div className="glass h-full rounded-3xl p-6">
                  <EvidenceTag kind={column.kind} />
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink/85">
                    {column.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-terracotta" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </CaseSection>

        <CaseSection id="build" eyebrow="Implementation" title="Prototypes, not production">
          <Reveal>
            <div className="glass mx-auto max-w-3xl rounded-3xl p-6 sm:p-8">
              <p className="leading-relaxed text-ink/85">
                I built the AI discovery engine and a Help Me Choose MVP as prototypes to test the
                thinking. They are separate from any production system at Myntra and are covered in
                the slides.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/70 bg-blush/40 px-3 py-1 text-sm text-ink/85"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </CaseSection>

        <CaseSection id="learnings" eyebrow="Reflection" title="Key learnings">
          <ul className="mx-auto max-w-3xl space-y-3">
            {learnings.map((text, index) => (
              <li key={text}>
                <Reveal delay={index * 80}>
                  <div className="glass flex gap-4 rounded-2xl p-5">
                    <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-terracotta" />
                    <p className="leading-relaxed text-ink/90">{text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </CaseSection>

        <section className="px-6 pb-24 pt-6 text-center">
          <Reveal>
            <a
              href={SLIDES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-terracotta px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-terracotta/30 transition-transform hover:scale-105"
            >
              View the full slides →
            </a>
          </Reveal>
        </section>
      </main>

      <Footer name={portfolio.profile.name} />
    </>
  );
}
