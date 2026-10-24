import type { Metadata } from "next";
import { CaseSection, Callout, EvidenceTag } from "@/components/case-study/CaseStudyParts";
import { BulletList, CaseStudyShell, Panel } from "@/components/case-study/CaseStudyShell";
import Reveal from "@/components/Reveal";
import portfolio from "@/data/portfolio.json";

const DOC_URL =
  "https://docs.google.com/document/d/1ss_E7sWYNpPZlc1K9nEDFtr56SxZZzQD1sZGy5-knRY/edit?tab=t.0";

export const metadata: Metadata = {
  title: `Subspace.money Teardown | ${portfolio.profile.name}`,
  description:
    "Product teardown of a consumer fintech app: trust, onboarding and go-to-market, with fixes prioritised by sprint capacity.",
};

const priorities = [
  ["This week", "Trust and UX fixes"],
  ["This sprint", "Features and services"],
  ["Next sprint", "Go-to-market"],
  ["Next quarter", "Collaborations"],
  ["Ongoing", "Competitor watch"],
];

export default function SubspaceCaseStudy() {
  return (
    <CaseStudyShell
      sourceUrl={DOC_URL}
      sourceLabel="Read the full teardown"
      hero={{
        eyebrow: "Product Teardown · May 2026",
        title: "A fintech app people want to trust, and a few moments that make it hard to",
        intro:
          "I used Subspace.money end to end across onboarding, gift cards, rentals and shared subscriptions, then ranked what to fix first.",
        stats: [
          { value: "4", label: "journeys tested" },
          { value: "1.6★", label: "Play Store rating, far below in-app ratings" },
        ],
        note: "An independent teardown from the outside, based on using the product. It is not affiliated with Subspace.",
      }}
    >
      <CaseSection id="trust" eyebrow="Features & Trust" title="Where trust breaks">
        <div className="grid gap-6 md:grid-cols-2">
          <Panel title="What I found" tag={<EvidenceTag kind="Research finding" />}>
            <BulletList
              items={[
                "Admins hold all the credentials, with no escrow and no dispute process.",
                "The Play Store rating is 1.6 stars, far below the ratings shown in the app.",
              ]}
            />
          </Panel>
          <Panel title="What I'd change" tag={<EvidenceTag kind="Proposed" />}>
            <BulletList
              items={[
                "A 48-hour escrow before money reaches the admin.",
                "A verified admin badge.",
                "Show Play Store reviews inside the app.",
              ]}
            />
          </Panel>
        </div>
      </CaseSection>

      <CaseSection id="ux" eyebrow="UX" title="The small moments that cost trust">
        <div className="grid gap-6 md:grid-cols-2">
          <Panel title="What I found" tag={<EvidenceTag kind="Research finding" />}>
            <BulletList
              items={[
                "A blank screen after payment.",
                "No order history.",
                "Wallet transfers that happen silently.",
                "Reward percentages with no label.",
              ]}
            />
          </Panel>
          <Panel title="Fixed in tiers" tag={<EvidenceTag kind="Proposed" />}>
            <BulletList
              items={[
                "Trust issues this week.",
                "Labelling this sprint.",
                "Friction issues next quarter.",
              ]}
            />
          </Panel>
        </div>
      </CaseSection>

      <section className="px-6 py-14" aria-label="Key insight">
        <div className="mx-auto max-w-4xl">
          <Callout>Subspace has no direct competitor today, but that window is closing.</Callout>
        </div>
      </section>

      <CaseSection id="competition" eyebrow="Competition" title="A window that won't stay open">
        <div className="grid gap-6 md:grid-cols-2">
          <Panel title="The landscape" tag={<EvidenceTag kind="Hypothesis" />}>
            <BulletList
              items={[
                "No funded competitor for subscription sharing in India.",
                "Rentals are exposed to Blinkit, Zepto and Instamart, who already have the delivery network.",
                "OTT policy changes, like account-sharing crackdowns, are a major risk.",
              ]}
            />
          </Panel>
          <Panel title="What I'd do" tag={<EvidenceTag kind="Proposed" />}>
            <BulletList
              items={["Give admins analytics.", "Monitor OTT policy, with a contingency plan ready."]}
            />
          </Panel>
        </div>
      </CaseSection>

      <CaseSection id="gtm" eyebrow="Go-To-Market" title="Three users, one empty home screen">
        <div className="grid gap-6 md:grid-cols-2">
          <Panel title="The gap" tag={<EvidenceTag kind="Research finding" />}>
            <p>
              The home screen is nearly empty and treats three different people the same: the Saver,
              the Renter and the Earner.
            </p>
          </Panel>
          <Panel title="What I'd try" tag={<EvidenceTag kind="Proposed" />}>
            <BulletList
              items={[
                "Ask about intent during onboarding.",
                "Nudge a second purchase after a transaction.",
                "Review at 60 days: if cross-sell is under 5%, rethink it.",
              ]}
            />
          </Panel>
        </div>
      </CaseSection>

      <CaseSection id="collaborations" eyebrow="Collaborations" title="Gift cards people can actually find">
        <div className="grid gap-6 md:grid-cols-2">
          <Panel title="What I found" tag={<EvidenceTag kind="Research finding" />}>
            <p>
              Gift cards are buried in Explore, and Zepto, Blinkit and Instamart are missing or hard
              to find.
            </p>
          </Panel>
          <Panel title="What I'd propose" tag={<EvidenceTag kind="Proposed" />}>
            <BulletList
              items={[
                "Feature grocery gift cards for weekly habits.",
                "Contextual gift card nudges.",
                "Later, a B2B gifting portal with HR tools such as Keka or Darwinbox.",
              ]}
            />
          </Panel>
        </div>
      </CaseSection>

      <CaseSection id="priority" eyebrow="Prioritisation" title="What to do first">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {priorities.map(([when, what], index) => (
            <li key={when}>
              <Reveal delay={index * 80} className="h-full">
                <div className="glass h-full rounded-3xl p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-terracotta-deep">{when}</p>
                  <p className="mt-2 font-display font-medium text-ink">{what}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal>
          <p className="mt-6 text-center text-lg font-semibold text-ink">
            Fix trust first. Growth built on a shaky experience only grows the problem.
          </p>
        </Reveal>
      </CaseSection>
    </CaseStudyShell>
  );
}
