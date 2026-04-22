import Link from "next/link";
import { FiAnchor } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Our Plans", href: "/our-plans" },
  { label: "Sign In", href: "/sign-in" },
];

export default function Navbar() {
  return (
    <nav className="relative w-full bg-surface/90 backdrop-blur-sm after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:h-8 after:bg-linear-to-b after:from-primary/10 after:to-transparent">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-4 text-xl font-semibold tracking-tight text-text"
        >
          <FiAnchor className="h-5 w-5 text-primary" aria-hidden="true" />
          <span>Anchor</span>
        </Link>

        <ul className="flex items-center gap-6 text-sm font-medium text-text/85 md:gap-8 md:text-base">
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
      </div>
    </nav>
  );
}
