"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/uklidove-technologie", label: "Technologie" },
  { href: "/servis", label: "Servis" },
  { href: "/stavebni-prace", label: "Stavební práce" },
  { href: "/o-spolecnosti", label: "O společnosti" },
  { href: "/pobocky", label: "Pobočky" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Logo />
      <button className="menu-button" type="button" aria-label={open ? "Zavřít menu" : "Otevřít menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}><span /><span /></button>
      <nav className={open ? "site-nav is-open" : "site-nav"} aria-label="Hlavní navigace">
        {links.map((link) => <Link className={pathname === link.href ? "active" : ""} key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <Link className="header-cta" href="/poptavka" onClick={() => setOpen(false)}>Nezávazná poptávka <span>↗</span></Link>
      </nav>
    </header>
  );
}
