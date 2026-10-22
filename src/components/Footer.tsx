export default function Footer({ name }: { name: string }) {
  return (
    <footer className="border-t border-ink/10 px-6 py-8 text-center text-sm text-ink/60">
      © {new Date().getFullYear()} {name}. Built with Next.js &amp; Tailwind CSS.
    </footer>
  );
}
