export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fispogroup-web.vercel.app";

export const offices = [
  { city: "Praha / centrála", address: "Na Drahách 22, 252 41 Zlatníky", phone: "+420 261 219 860", email: "info@fispo.cz", note: "Po–Pá 7:30–16:30" },
  { city: "Brno", address: "Gorkého 99/60, 602 00 Brno", phone: "+420 543 234 430", email: "brno@fispo.cz", note: "Návštěva po telefonické domluvě" },
  { city: "Opava", address: "Služovice 218, 747 28 Štěpánkovice", phone: "+420 596 624 642", email: "opava@fispo.cz", note: "Návštěva po telefonické domluvě" }
];

export const divisions = [
  { number: "01", short: "FISPO.cz", title: "Profesionální úklidové technologie", text: "Stroje, chemie a hygienické vybavení pro malé provozy i náročné průmyslové prostředí.", href: "/uklidove-technologie", color: "lime" },
  { number: "02", short: "FISPOSERVIS", title: "Servis úklidových strojů po celé ČR", text: "Záruční i pozáruční opravy většiny výrobců, servisní programy a odborné konzultace.", href: "/servis", color: "blue" },
  { number: "03", short: "FISPOBAU", title: "Jádrové vrtání a stavební práce", text: "Přesné prostupy s výplachem i bez výplachu, práce v náročných podmínkách a expresní termíny.", href: "/stavebni-prace", color: "orange" }
];
