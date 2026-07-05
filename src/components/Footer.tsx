export default function Footer({ name }: { name: string }) {
  return (
    <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-white/40">
      © {new Date().getFullYear()} {name}. Built with Next.js &amp; Tailwind CSS.
    </footer>
  );
}
