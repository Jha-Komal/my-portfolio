export default function Footer({ name }: { name: string }) {
  return (
    <footer className="bg-stage px-6 pb-10 pt-6 text-sm text-muted">
      <div className="mx-auto max-w-[56rem] border-t border-ink/15 pt-6">
        © {new Date().getFullYear()} {name}. Built with Next.js &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
