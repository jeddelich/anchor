"use client";

import Link from "next/link";
import { useState } from "react";
import { FiAnchor, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Our Plans", href: "/our-plans" },
  { label: "Sign In", href: "/sign-in" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative w-full bg-surface/90 backdrop-blur-sm after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:h-8 after:bg-linear-to-b after:from-primary/10 after:to-transparent">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="group/brand inline-flex items-center gap-4 text-xl font-semibold tracking-tight text-text"
        >
          <span className="relative inline-flex h-10 w-6 -mb-4 items-end overflow-hidden pb-4">
            <FiAnchor className="anchor-sink-icon h-5 w-5 text-primary" aria-hidden="true" />
          </span>
          <span>Anchor</span>
        </Link>

        <ul className="items-center hidden gap-6 text-sm font-medium text-text/85 md:gap-8 md:text-base lg:flex ">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="visible inline-flex items-center justify-center p-2 rounded hover:cursor-pointer text-text transition-colors duration-200 hover:bg-primary/10 lg:hidden"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-sidebar-menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <FiMenu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-sidebar-menu"
        className={`fixed inset-y-0 right-0 z-50 h-screen w-72 max-w-[85vw] bg-surface px-6 py-6 shadow-2xl transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="text-base font-semibold text-text">Menu</span>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-primary/30 p-2 text-text transition-colors duration-200 hover:bg-primary/10"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiX className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <ul className="flex flex-col gap-5 text-base font-medium text-text/90">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block transition-colors duration-200 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
}
