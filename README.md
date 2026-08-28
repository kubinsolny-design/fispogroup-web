# FISPOGROUP web

Moderní vícestránkový firemní web pro FISPOGROUP s.r.o. postavený v Next.js 16, TypeScriptu a App Routeru.

## Spuštění

```bash
npm install
npm run dev
```

Produkční kontrola: `npm run build`.

## Stránky

- `/` – úvod
- `/uklidove-technologie` – FISPO.cz
- `/servis` – FISPOSERVIS
- `/stavebni-prace` – FISPOBAU
- `/o-spolecnosti` – o společnosti
- `/pobocky` – pobočky
- `/kontakt` – kontakt
- `/poptavka` – poptávkový formulář

## Formulář

Formulář obsahuje validaci, honeypot proti spamu, stav odesílání a potvrzení. API endpoint je záměrně v demo režimu a neposílá e-mail. Pro ostré nasazení doplňte e-mailovou službu (např. Resend) v `app/api/poptavka/route.ts` a nastavte proměnné podle `.env.example`.

## Obsah

Firemní údaje vycházejí z veřejných webů fispogroup.cz, fispo.cz a fisposervis.cz. Před ostrým spuštěním doporučujeme potvrdit aktuálnost adresy opavské pobočky a znění certifikace ISO.

