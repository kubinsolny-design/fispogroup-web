import Link from "next/link";

export function CtaBand({ title = "Pojďme vyřešit váš provoz." }: { title?: string }) {
  return <section className="cta-band"><p>Máte konkrétní požadavek?</p><h2>{title}</h2><div><Link className="button button-dark" href="/poptavka">Nezávazná poptávka <span>↗</span></Link><a href="tel:+420606657161">+420 606 657 161</a></div></section>;
}
