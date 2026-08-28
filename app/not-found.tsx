import Link from "next/link";
export default function NotFound() { return <section className="not-found"><span>404</span><h1>Tudy cesta nevede.</h1><p>Požadovaná stránka neexistuje nebo byla přesunuta.</p><Link className="button button-lime" href="/">Zpět na úvod <span>→</span></Link></section>; }
