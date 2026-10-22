const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ name }: { name: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-cream/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-bold tracking-tight text-ink">
          {name}
        </a>
        <ul className="hidden gap-8 text-sm font-medium text-ink/70 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link transition-colors hover:text-terracotta-deep">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
