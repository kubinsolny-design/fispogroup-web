import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "./CtaBand";

type ServicePageProps = { eyebrow: string; title: string; accent: string; intro: string; image: string; imageAlt: string; facts: { value: string; label: string }[]; services: { title: string; text: string }[]; proofTitle: string; proofText: string; relatedHref: string; relatedLabel: string };

export function ServicePage(props: ServicePageProps) {
  return <>
    <section className="subhero"><div className="subhero-copy"><p className="eyebrow"><span />{props.eyebrow}</p><h1>{props.title}<em>{props.accent}</em></h1><p>{props.intro}</p><Link className="button button-lime" href="/poptavka">Nezávazně poptat <span>↗</span></Link></div><div className="subhero-media"><Image src={props.image} alt={props.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 52vw" /></div></section>
    <section className="fact-strip">{props.facts.map((fact) => <div key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}</section>
    <section className="content-section"><div className="section-label">Co pro vás zajistíme</div><div><h2>Řešení postavené<br />na praxi.</h2><div className="service-grid">{props.services.map((service, index) => <article key={service.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{service.title}</h3><p>{service.text}</p></article>)}</div></div></section>
    <section className="proof-section"><div><p className="eyebrow"><span />Proč FISPOGROUP</p><h2>{props.proofTitle}</h2></div><div><p>{props.proofText}</p><Link href={props.relatedHref}>Prohlédnout související službu <span>→</span></Link></div></section>
    <CtaBand />
  </>;
}
