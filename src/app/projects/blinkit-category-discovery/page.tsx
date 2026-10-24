import type { Metadata } from "next";
import { CaseSection, Callout, EvidenceTag } from "@/components/case-study/CaseStudyParts";
import { BulletList, CaseStudyShell, Panel } from "@/components/case-study/CaseStudyShell";
import Reveal from "@/components/Reveal";
import portfolio from "@/data/portfolio.json";

const SLIDES_URL =
  "https://docs.google.com/presentation/d/1T5MaAMLffBdH-_6l5EIKYTt-q_3Nlv40nxDw1gdWedI/edit?usp=sharing";

export const metadata: Metadata = {
  title: `Blinkit: Contextual Category Discovery | ${portfolio.profile.name}`,
  description:
    "Growth strategy case study: helping frequent Blinkit shoppers discover new categories without slowing checkout.",
};

export default function BlinkitCaseStudy() {
  return (
    <CaseStudyShell
      sourceUrl={SLIDES_URL}
      sourceLabel="View slides"
      hero={{
        eyebrow: "Product Strategy · Blinkit",
        title: "Frequent shoppers keep buying the same things and rarely try a new category",
        intro:
          "How one well-timed, relevant suggestion at checkout could widen what people buy, without slowing them down.",
        stats: [
          { value: "3,098+", label: "customer conversations analysed" },
          { value: "1", label: "suggestion per checkout, accepted or ignored" },
        ],
        note: "An independent case study. It is not a feature shipped at Blinkit, and no experiment results are claimed.",
      }}
    >
      <CaseSection id="problem" eyebrow="The Problem" title="Habit beats discovery">
        <div className="grid gap-6 md:grid-cols-2">
          <Panel title="What I looked at">
            <p>
              The existing discovery surfaces, and the friction behind repeat-purchase behaviour:
              why people who shop often still stay inside the same familiar items.
            </p>
          </Panel>
          <Panel title="How the thinking changed" tag={<EvidenceTag kind="Hypothesis" />}>
            <p>
              Across 3,098+ customer conversations, my first hypothesis didn&apos;t hold up as stated. It
              moved toward <strong className="text-ink">contextual discovery</strong>: suggesting
              something that fits what is already in the basket.
            </p>
          </Panel>
        </div>
      </CaseSection>

      <section className="px-6 py-14" aria-label="Key insight">
        <div className="mx-auto max-w-4xl">
          <Callout>Don&apos;t ask people to browse. Meet them in the middle of the mission they are already on.</Callout>
        </div>
      </section>

      <CaseSection id="idea" eyebrow="The Idea" title="A contextual add-on at checkout">
        <Reveal>
          <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-muted">
            An AI-powered add-on that reads the basket and keeps the interaction light.
          </p>
        </Reveal>
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            ["Infer the mission", "From the basket, work out what the shopper is likely trying to do."],
            ["Suggest one item, with a reason", "Recommend a single relevant item and say plainly why."],
            ["Accept or ignore", "Either choice is easy, and checkout isn't slowed."],
          ].map(([title, body], index) => (
            <li key={title}>
              <Reveal delay={index * 120} className="h-full">
                <div className="glass h-full rounded-3xl p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta text-base font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-medium text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-center text-sm text-muted">
          <EvidenceTag kind="Proposed" />
        </p>
      </CaseSection>

      <CaseSection id="metrics" eyebrow="Success Metrics" title="Growth that doesn't cost the checkout">
        <div className="grid gap-6 md:grid-cols-2">
          <Panel title="North-star metric">
            <p>
              The share of eligible checkouts where a <strong className="text-ink">new-category item</strong>{" "}
              is bought.
            </p>
            <p className="mt-3">
              Alongside it: trial, repeat purchase and GMV, to show whether the new habit sticks and
              whether it adds value.
            </p>
          </Panel>
          <Panel title="Guardrails">
            <BulletList
              items={[
                "Checkout time shouldn't rise.",
                "Cart abandonment shouldn't rise.",
                "Suggestions have to stay relevant.",
              ]}
            />
          </Panel>
        </div>
        <Reveal>
          <p className="mt-6 text-center text-lg font-semibold text-ink">
            The feature earns a wider rollout only if the north star moves and the guardrails hold.
          </p>
        </Reveal>
      </CaseSection>

      <CaseSection id="evidence" eyebrow="Evidence Status" title="What is known, proposed and measured">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              kind: "Research finding" as const,
              points: ["3,098+ customer conversations analysed.", "The first hypothesis was revised after reading them."],
            },
            {
              kind: "Proposed" as const,
              points: ["Contextual discovery at checkout.", "One suggestion, one reason, easy to ignore."],
            },
            {
              kind: "Not yet measured" as const,
              points: ["No experiment has been run.", "No lift in new-category purchases is claimed."],
            },
          ].map((column) => (
            <Panel key={column.kind} tag={<EvidenceTag kind={column.kind} />}>
              <BulletList items={column.points} />
            </Panel>
          ))}
        </div>
      </CaseSection>
    </CaseStudyShell>
  );
}
