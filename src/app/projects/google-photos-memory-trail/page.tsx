import type { Metadata } from "next";
import { CaseSection, Callout, EvidenceTag } from "@/components/case-study/CaseStudyParts";
import { BulletList, CaseStudyShell, Panel } from "@/components/case-study/CaseStudyShell";
import Reveal from "@/components/Reveal";
import portfolio from "@/data/portfolio.json";

const SLIDES_URL =
  "https://docs.google.com/presentation/d/12mNxwqFPTn8Cet7wAnNqhGkoUoEzPecThyYjDGBEP2k/edit?usp=sharing";

export const metadata: Metadata = {
  title: `Google Photos: Memory Trail | ${portfolio.profile.name}`,
  description:
    "Product discovery case study: helping people recover after a failed first search for a photo they only half remember.",
};

const steps = [
  { name: "Express the memory", note: "Put a vague recollection into words." },
  { name: "Generate candidates", note: "The strongest visible failure signal in public feedback." },
  { name: "Recognise the target", note: "Spot the right photo among the results." },
  { name: "Refine or recover", note: "Under-observed publicly, so it needed primary research." },
];

export default function GooglePhotosCaseStudy() {
  return (
    <CaseStudyShell
      sourceUrl={SLIDES_URL}
      sourceLabel="View slides"
      hero={{
        eyebrow: "Product Case Study · Google Photos",
        title: "People remember the moment, not the date, and stall when the first search fails",
        intro:
          "How an AI-native search companion could help people recover after a miss, without starting over.",
        stats: [
          { value: "10,641", label: "public documents analysed" },
          { value: "31", label: "survey responses" },
          { value: "6", label: "user interviews" },
        ],
        note: "An independent case study and concept. It is not a feature shipped at Google, and the test below is directional evidence, not proof of better retrieval in real libraries.",
      }}
    >
      <CaseSection id="goal" eyebrow="The Goal" title="Find the photo you half remember">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-lg text-muted">
            Increase the share of retrieval attempts, starting from a vaguely remembered photo, that
            end with the person finding it.
          </p>
        </Reveal>
      </CaseSection>

      <CaseSection id="public-signal" eyebrow="Public Feedback" title="What people say when search lets them down">
        <div className="grid gap-6 md:grid-cols-2">
          <Panel title="A first scan of public feedback" tag={<EvidenceTag kind="Hypothesis" />}>
            <BulletList
              items={[
                "An AI-assisted scan surfaced 157 vague-memory cases.",
                "People often remember when something happened or what was going on, but not the exact date or what the photo shows.",
                "“No useful result” was the most common reported failure.",
              ]}
            />
            <p className="mt-4 font-semibold text-ink">
              Useful for finding patterns. It can&apos;t show how common a problem is or why it happens.
            </p>
          </Panel>
          <Panel title="Where retrieval breaks down" tag={<EvidenceTag kind="Hypothesis" />}>
            <ol className="space-y-3">
              {steps.map((step, index) => (
                <li key={step.name} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terracotta text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span>
                    <strong className="text-ink">{step.name}.</strong> {step.note}
                  </span>
                </li>
              ))}
            </ol>
          </Panel>
        </div>
      </CaseSection>

      <CaseSection id="research" eyebrow="Primary Research" title="Talking to people who got stuck">
        <div className="grid gap-6 md:grid-cols-2">
          <Panel title="Survey of 31" tag={<EvidenceTag kind="Research finding" />}>
            <p>
              <strong className="text-ink">26 of 31</strong> respondents had hit friction on their
              first attempt.
            </p>
          </Panel>
          <Panel title="Six interviews" tag={<EvidenceTag kind="Research finding" />}>
            <BulletList
              items={[
                "People usually remembered enough to start.",
                "The struggle was narrowing a broad set of results.",
                "Related photos often triggered new clues.",
              ]}
            />
          </Panel>
        </div>
      </CaseSection>

      <section className="px-6 py-14" aria-label="Key insight">
        <div className="mx-auto max-w-4xl">
          <Callout>After a miss, people gain new clues, then have to turn each one into another search by hand.</Callout>
        </div>
      </section>

      <CaseSection id="segment" eyebrow="Who It&apos;s For" title="The Repeat Retriever">
        <div className="grid gap-6 md:grid-cols-2">
          <Panel title="Defined by behaviour">
            <p>
              People who repeatedly miss on the first attempt and aren&apos;t sure what to do next. The
              demographics in the slides are illustrative, so the segment rests on behaviour.
            </p>
          </Panel>
          <Panel title="How many fit" tag={<EvidenceTag kind="Research finding" />}>
            <p>
              <strong className="text-ink">18 of 31</strong> survey respondents and{" "}
              <strong className="text-ink">5 of 6</strong> interviewees matched.
            </p>
          </Panel>
        </div>
      </CaseSection>

      <CaseSection id="solution" eyebrow="The Idea" title="Memory Trail">
        <Reveal>
          <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-muted">
            Memory Trail keeps the query, the clues and feedback on near-matches active through a
            search, so results re-rank without anyone starting over.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <Panel title="Why this direction" tag={<EvidenceTag kind="Proposed" />}>
            <p>
              Four directions were scored and Memory Trail came out highest, at 4.8. Those scores are
              my judgement as the product manager, not measured impact.
            </p>
          </Panel>
          <Panel title="What the test showed" tag={<EvidenceTag kind="Research finding" />}>
            <BulletList
              items={[
                "Three users searched seeded photo sets.",
                "All three found their target after a first miss.",
                "Two hesitated when options overlapped.",
              ]}
            />
            <p className="mt-4 font-semibold text-ink">
              It tested the interaction, not performance in a large real library.
            </p>
          </Panel>
        </div>
      </CaseSection>

      <CaseSection id="metrics" eyebrow="Success" title="Measuring recovery, not just search">
        <div className="grid gap-6 md:grid-cols-3">
          <Panel title="Primary metric">
            <p>The share of first-attempt misses that end with the intended photo confirmed.</p>
          </Panel>
          <Panel title="Guardrails">
            <BulletList items={["Time to target", "False narrowing", "Irrelevant suggestions"]} />
          </Panel>
          <Panel title="Risks to watch">
            <BulletList
              items={[
                "Misleading context",
                "Overlapping options",
                "Wrong suggestions",
                "Too much interaction",
              ]}
            />
          </Panel>
        </div>
        <Reveal>
          <p className="mt-6 text-center text-lg font-semibold text-ink">
            Scale only if recovery improves without breaching the guardrails.
          </p>
        </Reveal>
      </CaseSection>

      <CaseSection id="evidence" eyebrow="Evidence Status" title="What is known, proposed and measured">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              kind: "Research finding" as const,
              points: [
                "26 of 31 survey respondents hit first-attempt friction.",
                "Six interviews: enough memory to start, trouble narrowing results.",
              ],
            },
            {
              kind: "Hypothesis" as const,
              points: [
                "Candidate generation is the main failure point.",
                "Carrying context through a search will help people recover.",
              ],
            },
            {
              kind: "Not yet measured" as const,
              points: [
                "No test in a large real photo library.",
                "No measured change in retrieval success.",
              ],
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
