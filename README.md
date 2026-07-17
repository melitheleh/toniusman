# Toni Usman / Toni Usman Produksjoner — wireframe

Statisk HTML/CSS/JS-mockup for et forslag til ny nettside for skuespiller/regissør/dramatiker Toni Usman og teaterkompaniet hans, Toni Usman Produksjoner (TUP). Ingen build-steg — alt lastes via CDN (Bootstrap 5 + AOS scroll-animasjoner), resten er rene HTML-, CSS- og JS-filer.

**Rammeverk:** Bootstrap 5.3 (navbar, dropdown-meny, mobilmeny) + AOS-biblioteket for fade-in-animasjoner ved scroll, pluss egendefinerte hover-effekter, en "Ken Burns"-zoom på hero-bilder og en logo-lockup for TUP.

**TUP-logo:** Den opplastede PNG-filen var ikke tilgjengelig som fil i dette miljøet, så logoen («tup» i rødt/grått + «Toni Usman Produksjoner») er rekonstruert som ren kode (inline SVG) i samme ånd som originalen — samme farger og oppsett. Skal dere bruke den eksakte PNG-filen, kan den legges i `assets/img/` og byttes inn i `tup/index.html` (hero) og footer på alle TUP-sider.

## Struktur

```
index.html            Hjem
om-meg.html            Om meg (Toni, personlig)
english-intro.html     English intro
galleri.html           Galleri (bilder + video)
inspirasjon.html       Inspirasjon
kontakt.html           Kontakt
media/
  artikler.html        Artikler (presseomtale)
  intervju.html         Intervju (plassholder-eksempler)
tup/
  index.html           TUP — om kompaniet + prosjektoversikt
  morketid.html
  kaffetar.html
  hundre-prosent.html
  dodsstraff.html
  onkel-sam.html
assets/
  css/style.css
  js/main.js
```

Toni og TUP er delt i to seksjoner: personlige sider (rot) bruker gull som aksentfarge, mens hele `/tup`-seksjonen bruker en egen dyp rødfarge og egen footer-tekst («Toni Usman Produksjoner»), for å signalisere at det er et eget kunstnerisk «merke» innenfor samme nettsted. Menyen er delt og felles for alle sider, slik kravet beskriver.

## Viktig — før dette går live

- **Bilder er midlertidig lenket direkte til toniusman.com** (hotlinket) for å vise layoutet raskt. Disse må lastes ned og legges i eget `assets/img`-mappe (med tillatelse/rettigheter avklart) før publisering.
- **Kontaktskjemaet** er kun visuelt. Koble det til en tjeneste som Formspree eller Netlify Forms for at det skal sende e-post på GitHub Pages (som er en ren statisk vert, uten backend).
- **Intervju-siden** har plassholder-eksempler — ingen publiserte intervjuer ble funnet på eksisterende side.
- Siden nevner at endelig løsning skal være **WordPress** — denne HTML-mockupen er ment som visuelt/strukturelt forslag for tilbakemelding før WordPress-bygget starter (layout, sidestruktur, tone) — ikke som ferdig WordPress-tema.

## Vise lokalt

Åpne `index.html` direkte i nettleseren, eller kjør en enkel lokal server fra prosjektmappen:

```
python3 -m http.server 8000
```

og gå til `http://localhost:8000`.

## Publisere på GitHub Pages

1. Push mappen til et GitHub-repo.
2. Gå til **Settings → Pages**.
3. Velg branch `main` og mappe `/ (root)`.
4. Nettsiden blir tilgjengelig på `https://<brukernavn>.github.io/<repo-navn>/`.
