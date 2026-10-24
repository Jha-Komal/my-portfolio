import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="font-script text-3xl text-terracotta">{eyebrow}</p>
        <h2 className="mt-1 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
      </div>
      {action}
    </Reveal>
  );
}
