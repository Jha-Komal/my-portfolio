"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ name }: { name: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-lavender/70 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-[56rem] items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-ink">
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
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta sm:hidden"
        >
          <span className="relative block h-3.5 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 h-0.5 w-6 rounded-full bg-ink transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-6 rounded-full bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 rounded-full bg-ink transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>
      <ul
        id="mobile-menu"
        className={`overflow-hidden px-6 text-base font-semibold text-ink transition-[max-height,padding] duration-300 sm:hidden ${
          open ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 hover:bg-peach hover:text-terracotta-deep"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
