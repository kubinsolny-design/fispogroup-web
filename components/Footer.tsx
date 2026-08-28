import Link from "next/link";
import { offices } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div><Logo inverse /><p>Silný a spolehlivý partner pro vaši firmu.</p></div>
        <div className="footer-links"><Link href="/uklidove-technologie">Úklidové technologie</Link><Link href="/servis">Servis strojů</Link><Link href="/stavebni-prace">Stavební práce</Link><Link href="/kontakt">Kontakt</Link></div>
        <div className="footer-contact"><a href="tel:+420606657161">+420 606 657 161</a><a href="mailto:info@fispo.cz">info@fispo.cz</a></div>
      </div>
      <div className="footer-offices">{offices.map((office) => <div key={office.city}><span>{office.city}</span><p>{office.address}</p></div>)}</div>
      <div className="footer-bottom"><span>© 2026 FISPOGROUP s.r.o.</span><span>IČ 29142482 · DIČ CZ29142482</span><Link href="/kontakt">Ochrana osobních údajů</Link></div>
    </footer>
  );
}
