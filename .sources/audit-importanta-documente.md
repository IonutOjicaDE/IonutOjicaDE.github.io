# Audit importanță documente

Rol audit: strategie de conversie pentru oferte educaționale și DFY, conversion copywriting, UX content audit și brand governance.

Scară:

| Scor | Sens |
| ---: | --- |
| 0 | Absolut neimportant; se poate șterge fără pierdere. |
| 1-2 | Foarte slab relevant; doar arhivă sau context rar. |
| 3-4 | Relevant secundar; păstrează doar dacă nu încarcă documentul principal. |
| 5-6 | Util, dar nu critic; poate fi compactat sau mutat. |
| 7-8 | Important; afectează claritate, încredere, conversie sau implementare. |
| 9 | Extrem de important; regulă de guvernanță sau element direct de conversie. |

## Observații strategice rapide

1. **Documentele au o arhitectură bună**, dar există redundanță între `structura.md`, `biblioteca-mesaje.md`, `audienta.md` și fișierele de audiență pe domenii.
2. **Cel mai important document de conversie este `structura.md`**, pentru că definește traseul paginii, poziția CTA-ului, risc controlat, scope lock, FAQ și garanție.
3. **Cel mai important document de claritate comercială este `audienta.md`**, pentru că definește cine cumpără, cine nu cumpără și cum se face redirecționarea DIY / DFY.
4. **Cel mai important document pentru execuție UI este `manual-identitate-vizuala.md`**; capitolele fără reguli active de Logo și Iconografie au fost eliminate din fluxul principal.
5. **`biblioteca-mesaje.md` trebuie să rămână bibliotecă, nu strategie.** Dacă începe să explice prea mult raționamentul, dublează `ghid-editorial.md` și `structura.md`.
6. **Fișierele de audiență pe domenii sunt utile operațional**, dar conțin multe câmpuri `[Propunere]` și `[Lipsă]`. Acestea trebuie transformate în backlog de cercetare sau marcate clar ca ipoteze.
7. **Linkurile de checkout din fișierele de audiență sunt fragile.** Recomand mutarea lor într-un fișier de ofertă/config comercial, nu în documentul de audiență.
8. **„Costul inacțiunii” apare în mai multe documente.** Păstrează regula generică în `ghid-editorial.md`, expresiile segment-specific în fișierele de audiență și exemplele reutilizabile în `biblioteca-mesaje.md`.
9. **`structura.md` folosește blocuri interne, nu heading-uri Markdown.** Pentru guvernanță, fiecare `[GRUP]` și `[SEC]` ar trebui să primească `importanta: N`.
10. **Recomandarea de implementare:** păstrează acest fișier ca index centralizat v1; după validare, adaugă scorurile inline doar în `structura.md` și în fișierele de audiență.

---

# 1. `manual-identitate-vizuala.md`

Rol: implementare vizuală, UI/UX, componente, token-uri, layout și reguli minime de limbaj de interfață.

## Index de importanță

| Secțiune | Importanță | Observație |
| --- | ---: | --- |
| `# MIV9` | 4 | Meta util, dar nu conține decizii de conversie. |
| `# 1. Scopul și direcția proiectului web` | 9 | Definește cadrul de guvernanță pentru experiența web. |
| `1.0 Relația cu celelalte documente` | 9 | Critic pentru evitarea duplicării între manual, structură, ghid editorial și bibliotecă. |
| `1.1 Obiectivele site-ului` | 9 | Direct legat de conversie și claritate. |
| `Obiectiv primar` | 9 | Conversie; trebuie păstrat scurt și operațional. |
| `Obiectiv secundar` | 8 | Încredere; important pentru oferte educaționale și DFY. |
| `Obiective suport` | 8 | Bun ca checklist UX. |
| `1.2 Zone de decizie` | 9 | Sistem central: Orientare / Evaluare / Decizie. |
| `1.3 Impresia experienței web` | 7 | Important pentru brand, dar trebuie ferit de formulări vagi. |
| `Ton vizual țintă` | 7 | Bun pentru direcție creativă. |
| `Ce trebuie să se simtă în 3 secunde` | 6 | Util, dar ușor abstract; poate fi convertit în criterii observabile. |
| `Ce trebuie să se evite` | 8 | Important pentru controlul hype-ului și al presiunii. |
| `Schimbarea susținută de experiența web` | 8 | Strategic important, dar versiunea lungă aparține în `ghid-editorial.md`. |
| `1.4 Direcția creativă` | 9 | Conectează brandul vizual cu traseul de conversie. |
| `1.5 Criterii de reușită` | 9 | Foarte util ca acceptance criteria pentru design. |
| `# 2. Arhitectură vizuală generală` | 8 | Important pentru coerență. |
| `2.1 Nivelul de minimalism / complexitate` | 7 | Clarifică densitatea; risc de bla-bla dacă nu rămâne operațional. |
| `Principiu` | 8 | „Complexitate densă, dar funcțională” este o regulă bună. |
| `Stratificare` | 8 | Ajută implementarea vizuală. |
| `Densitate admisă` | 7 | Bun, dar poate fi compactat. |
| `2.2 Ton vizual general` | 8 | Important pentru consistență. |
| `Mod global` | 8 | Definește progresia vizuală pe pagini. |
| `Personalitate vizuală` | 6 | Util, dar termeni ca „calm-authority” trebuie ancorați în reguli. |
| `Cele 3 registre vizuale` | 9 | Critic pentru sistemul de zone. |
| `Principii de limbaj pentru interfață` | 8 | Trebuie păstrat scurt; detaliile sunt în `ghid-editorial.md` și `biblioteca-mesaje.md`. |
| `2.3 Ritmul vizual` | 7 | Ajută UX-ul, dar poate rămâne concis. |
| `Ritm macro` | 8 | Important pentru alternarea cadru/modul dens. |
| `Ritm micro` | 7 | Important pentru scanare. |
| `Spațiere` | 7 | Util pentru implementare. |
| `2.4 Reguli de coerență globală` | 9 | Esențial pentru brand governance. |
| `Consistență vizuală` | 8 | Important. |
| `Consistență semantică` | 9 | Critic; previne folosirea SEM ca presiune comercială. |
| `Consistență de zonă` | 9 | Critic pentru sistem. |
| `2.5 Permis vs interzis` | 7 | Bun ca guardrail; poate fi compactat. |
| `2.6 Motion & Attention Budget` | 8 | Important pentru accesibilitate și claritate. |
| `# 3. Paleta de culori` | 9 | Critic pentru implementare vizuală. |
| `3.1 Principii de utilizare` | 8 | Important. |
| `3.2 Culori de zonă` | 9 | Critic pentru Orientare / Evaluare / Decizie. |
| `ZONA-UNDE` | 9 | Critic. |
| `ZONA-CUM` | 9 | Critic. |
| `ZONA-START` | 9 | Critic. |
| `3.3 Token-uri neutre` | 8 | Important pentru sistem. |
| `3.4 Culori semantice` | 9 | Critic pentru stări și risc. |
| `3.5 Culori pentru interacțiuni` | 9 | Critic pentru CTA/focus/link. |
| `Buton primar` | 9 | Direct conversie. |
| `Link-uri` | 8 | Important pentru navigare. |
| `Focus` | 9 | Accesibilitate și UX. |
| `Mesaje semantice hover / active` | 7 | Util, dar nu critic. |
| `3.6 Suprafețe, secțiuni și carduri` | 8 | Important pentru implementare. |
| `3.7 Test de contrast minim` | 9 | Critic pentru accesibilitate. |
| `3.8 Contract de naming pentru token-uri` | 9 | Critic pentru coerență între design, conținut și implementare. |
| `3.9 Identificatori tehnici de zonă` | 9 | Critic pentru wireframe-uri și implementare. |
| `3.10 Aplicare pe componente` | 8 | Important. |
| `CTA primar` | 9 | Direct conversie. |
| `3.11 Registru vizual pagini utilitare` | 7 | Important, dar nu trebuie să devină ghid editorial. |
| `# 4. Tipografie` | 8 | Important pentru scanare și încredere. |
| `4.1 Fonturi` | 7 | Util, dar schimbabil. |
| `4.2 Type Scale` | 8 | Important pentru ierarhie. |
| `4.3 Line-height și spacing` | 8 | Important pentru lizibilitate. |
| `4.4 Text ca UI` | 8 | Important pentru UX content. |
| `4.5 Note de implementare tipografică` | 6 | Util, dar valorile exacte se decid în implementare. |
| `# 5. Elemente UI principale` | 9 | Critic pentru design system. |
| `5.1 Convenții globale` | 9 | Critic. |
| `Motion System` | 8 | Important, dar poate fi compactat dacă devine prea tehnic. |
| `5.2 Butoane` | 9 | Direct conversie. |
| `5.3 Formulare` | 9 | Direct conversie și lead quality. |
| `5.4 Carduri` | 8 | Important pentru scanare și dovadă. |
| `5.5 Navigație` | 8 | Important pentru orientare. |
| `5.6 Footer` | 5 | Util, dar secundar. |
| `5.7 Badge-uri` | 5 | Secundar; păstrează scurt. |
| `5.8 Tab-uri` | 5 | Secundar. |
| `5.9 Breadcrumbs` | 5 | Secundar. |
| `5.10 Secțiuni tipice` | 8 | Important pentru implementare rapidă. |
| `Hero` | 8 | Important pentru orientare. |
| `Features` | 7 | Important, dar nu critic. |
| `CTA Section` | 9 | Direct conversie. |
| `Testimonials` | 7 | Important pentru proof, dar depinde de material real. |
| `5.11 Consistență UI` | 9 | Critic pentru sistem. |
| `# 6. Imagery` | 6 | Important pentru brand, dar mai puțin critic decât structură/CTA. |
| `6.1 Stil imagini` | 6 | Util. |
| `6.2 Hero images` | 7 | Important dacă se folosesc imagini reale. |
| `6.3 Ton fotografii` | 6 | Util. |
| `6.4 Background vs product shot` | 6 | Util pentru execuție. |
| `6.5 Iconografie ilustrată` | 4 | Secundar până există asset-uri. |
| `6.6 Consistență imagery` | 6 | Util. |
| `# 7. Grile, layout și compoziție` | 9 | Critic pentru UI și conversie. |
| `7.1 Sistemul de grid` | 9 | Critic pentru implementare. |
| `7.2 Breakpoints` | 8 | Important. |
| `7.3 Spațiere între secțiuni` | 8 | Important. |
| `7.4 Compoziție` | 9 | Critic pentru un singur focus pe viewport. |
| `7.5 Principii layout-uri standard` | 8 | Important; logica detaliată rămâne în `structura.md`. |
| `7.6 Implementare Kadence` | 8 | Important pentru execuție practică. |

## Recomandări pentru manual

- Dacă apar asset-uri reale pentru Logo sau Iconografie, documentează-le separat și leagă manualul la acel document.
- Transformă formulările abstracte în criterii verificabile: „se simte controlat” → „un singur CTA dominant, contrast validat, stare semantică clară”.
- Păstrează manualul ca document de implementare; evită revenirea la explicații editoriale lungi.
- Pentru capitolele cu scor 4-6, păstrează rezumate; nu le extinde înainte de finalizarea paginilor.

---

# 2. `structura.md`

Rol: arhitectura paginilor, ordinea secțiunilor, logica CTA, risc controlat, scope lock, FAQ, garanție și generarea conținutului.

## Index de importanță

| Secțiune | Importanță | Observație |
| --- | ---: | --- |
| `# STRUCT2` | 4 | Meta. |
| `# Paginile, structura si generarea continutului paginilor` | 9 | Document central pentru conversie. |
| `Setul minim coerent pentru V1` | 9 | Critic pentru scope-ul site-ului. |
| `Gruparea si structura paginilor` | 9 | Baza arhitecturii. |
| `[DEFINIȚII]` | 7 | Util pentru interpretarea blocurilor. |
| `[VALORI regula-cta]` | 9 | Critic pentru conversie. |
| `[REGULI-GLOBALE-DE-PAGINĂ]` | 9 | Cel mai important bloc din document. |
| `[REGULI-CTA]` | 9 | Direct conversie. |
| `GRUP-01 Pagini de orientare / HOME` | 9 | Home face trierea inițială. |
| `HOME SEC-01 Definire rapidă` | 9 | Primul moment de claritate. |
| `HOME SEC-02 Mapare oferte` | 9 | Separă domeniile și reduce alegerea greșită. |
| `HOME SEC-03 Cum funcționează în ansamblu` | 7 | Important, dar poate fi compact. |
| `HOME SEC-04 Riscuri controlate` | 8 | Crește relevanța și credibilitatea. |
| `HOME SEC-05 DIY vs DFY` | 9 | Critic pentru self-selection. |
| `HOME SEC-06 Scope lock general` | 8 | Important pentru așteptări corecte. |
| `HOME SEC-07 Trimitere spre oferta potrivită` | 9 | Direct conversie/navigare. |
| `GRUP-02 Pagini DIY` | 9 | Pagini comerciale principale. |
| `DIY SEC-00 Hero` | 9 | Claritate și relevanță instant. |
| `DIY SEC-01 Pentru cine este / nu este` | 9 | Calificare. |
| `DIY SEC-02 Ce vei putea face` | 9 | Transformă oferta în outcome observabil. |
| `DIY SEC-03 Format real de livrare` | 8 | Reduce incertitudinea. |
| `DIY SEC-04 Cum se lucrează` | 8 | Vinde mecanismul, nu doar promisiunea. |
| `DIY SEC-04A Despre Ionuț` | 6 | Proof de autoritate; poate fi scurt. |
| `DIY SEC-05 Ce înveți` | 8 | Important pentru cursuri. |
| `DIY SEC-05A Exemple implementare` | 7 | Important doar cu materiale reale. |
| `DIY SEC-05B Testimoniale` | 7 | Important dacă există proof verificabil. |
| `DIY SEC-06 Greșeli și prevenire` | 9 | Conversie prin risc real. |
| `DIY SEC-07 Scope lock` | 9 | Critic pentru așteptări și refund prevention. |
| `DIY SEC-08 DIY sau DFY` | 9 | Previne cumpărarea formatului greșit. |
| `DIY SEC-08A FAQ evaluare` | 8 | Reduce fricțiune. |
| `DIY SEC-08B Garanția` | 8 | Important pentru risc perceput. |
| `DIY SEC-08C FAQ decizie` | 8 | Susține ultimul pas. |
| `DIY SEC-09 Înscriere / Plată` | 9 | Direct conversie. |
| `GRUP-03 Pagini DFY` | 9 | Pagini comerciale principale. |
| `DFY SEC-00 Hero` | 9 | Claritate imediată. |
| `DFY SEC-01 Pentru cine este / nu este` | 9 | Calificare. |
| `DFY SEC-02 Ce primești concret` | 9 | Livrabile verificabile. |
| `DFY SEC-03 Cum decurge implementarea` | 8 | Reduce incertitudine. |
| `DFY SEC-04 Ce se face concret` | 8 | Clarifică livrarea. |
| `DFY SEC-04A Despre Ionuț` | 6 | Proof secundar. |
| `DFY SEC-05 Etapele proiectului` | 8 | Important pentru încredere. |
| `DFY SEC-05A Exemple implementare` | 7 | Important cu materiale reale. |
| `DFY SEC-05B Testimoniale` | 7 | Important cu proof real. |
| `DFY SEC-06 Ce poate bloca proiectul` | 9 | Critic pentru calitate lead și scope. |
| `DFY SEC-07 Ce intră / ce trebuie furnizat` | 9 | Critic pentru scope. |
| `DFY SEC-08 DFY sau DIY` | 9 | Previne leaduri nepotrivite. |
| `DFY SEC-08A FAQ evaluare` | 8 | Important. |
| `DFY SEC-08B Garanția` | 6 | Depinde de oferta concretă; nu generaliza. |
| `DFY SEC-08C FAQ decizie` | 8 | Important. |
| `DFY SEC-09 Cerere / Rezervare / Plată` | 9 | Direct conversie. |
| `GRUP-04 Pagini suport conversie` | 8 | Susțin încrederea și lead quality. |
| `DESPRE Poziționare` | 7 | Important pentru încredere. |
| `DESPRE Mod de lucru` | 8 | Important pentru diferențiere. |
| `DESPRE Criterii / limite` | 8 | Calificare. |
| `DESPRE Pas următor` | 7 | Navigare. |
| `CONTACT Clarificare scop formular` | 8 | Reduce solicitări vagi. |
| `CONTACT Așteptări minime` | 9 | Calitate lead. |
| `CONTACT Formular` | 9 | Conversie / lead capture. |
| `CONTACT Ce urmează` | 8 | Reduce anxietate. |
| `LISTA_ASTEPTARE Pentru cine este` | 7 | Calificare pre-open. |
| `LISTA_ASTEPTARE Ce primește` | 7 | Valoare clară. |
| `LISTA_ASTEPTARE Ce nu primește încă` | 8 | Previne așteptări greșite. |
| `LISTA_ASTEPTARE Formular scurt` | 8 | Captare interes. |
| `LISTA_ASTEPTARE Confirmare` | 7 | UX post-acțiune. |
| `CONFIRMARE Confirmare acțiune` | 8 | Închide bucla. |
| `CONFIRMARE Ce urmează` | 8 | Reduce incertitudine. |
| `CONFIRMARE Ieșire utilă` | 6 | Util, dar secundar. |
| `GRUP-05 Pagini juridice` | 5 | Necesare, dar nu motor de conversie. |
| `TERMENI/POLITICA Identificare pagină` | 5 | Claritate. |
| `TERMENI/POLITICA Conținut legal` | 7 | Necesitate legală și trust. |
| `TERMENI/POLITICA Contact` | 5 | Utilitar. |
| `Pași pentru generarea conținutului` | 8 | Important pentru execuție și consistență. |

## Recomandări pentru structură

- Adaugă inline `importanta: N` la fiecare `[GRUP]` și `[SEC]`.
- Nu repeta în `biblioteca-mesaje.md` logica de apariție a CTA-urilor; acolo trebuie să rămână doar formulele.
- `Garanția` pe DFY are scor mai mic decât pe DIY pentru că depinde de oferta concretă; evită reguli generice de refund pentru servicii.
- `Despre Ionuț`, testimonialele și exemplele trebuie ținute compacte până există proof real verificabil.

---

# 3. `ghid-editorial.md`

Rol: voce, ton, emoție, structură de mesaj, pagini neutre și reguli editoriale.

| Secțiune | Importanță | Observație |
| --- | ---: | --- |
| `# Ghid editorial` | 8 | Document nou, necesar ca manualul să rămână UI/UX. |
| `1. Schimbarea operațională` | 8 | Poziționare strategică. |
| `2. Registre de limbaj` | 9 | Critic pentru consistență între pagini și canale. |
| `Pagini de prezentare / ofertă` | 9 | Direct conversie. |
| `Pagini neutre / utilitare` | 7 | UX și trust. |
| `Conținut editorial / organic` | 8 | Important pentru funnel, dar cere dezvoltare ulterioară. |
| `3. Emoție, presiune și promisiuni` | 9 | Guardrail critic pentru brand și conversie etică. |
| `4. Costul inacțiunii` | 8 | Important; să rămână regulă generică, nu listă de exemple pe segment. |
| `5. Home, Despre și Contact` | 7 | Util, dar riscă să dubleze `structura.md`; păstrează editorial, nu layout. |

## Recomandări pentru ghid editorial

- Adaugă secțiuni pentru emailuri, postări, newslettere și storytelling; acum sunt menționate, dar nu dezvoltate.
- Separă clar `ton pe canal` de `ton pe tip de pagină`.
- Transformă exemplele din acest document în principii; exemplele concrete trebuie să stea în `biblioteca-mesaje.md`.

---

# 4. `biblioteca-mesaje.md`

Rol: formule reutilizabile, CTA-uri, microcopy, pattern-uri SEM și mesaje pe segmente.

| Secțiune | Importanță | Observație |
| --- | ---: | --- |
| `# MES2` | 4 | Meta. |
| `1) Mesaje și microcopy pe segmente` | 9 | Direct reutilizabil pe pagini. |
| `A1_DIY_CURS` | 8 | Important pentru landing și emailuri. |
| `A2_DFY_CURS` | 8 | Important. |
| `B1_DIY_WOO` | 8 | Important. |
| `B2_DFY_WOO` | 8 | Important. |
| `C1_DIY_SITE` | 9 | Probabil ofertă prioritară în acest proiect. |
| `C2_DFY_SITE` | 9 | Probabil ofertă prioritară. |
| `D2_DFY_EMAIL` | 8 | Important, dar fără pereche DIY. |
| `2) Dicționar de label-uri` | 8 | Important pentru claritate și reducerea aliasurilor confuze. |
| `Termeni blocați` | 9 | Critic pentru UX. |
| `Termeni permiși` | 7 | Util. |
| `Aliasuri secundare` | 6 | Folosește rar; risc de decor inutil. |
| `Exemple corecte` | 8 | Util pentru execuție. |
| `Regula de decizie` | 9 | Foarte bună: dacă cere explicație, nu e text principal. |
| `3) Exemple microcopy permis/interzis` | 8 | Guardrail util. |
| `Exemple potrivite` | 8 | Reutilizabil. |
| `Exemple nepotrivite` | 8 | Previne presiunea artificială. |
| `Exemple tehnice interne` | 7 | Util pentru separarea public/intern. |
| `4) Microcopy pentru CTA-uri` | 9 | Direct conversie. |
| `CTA major DIY` | 9 | Direct conversie. |
| `CTA major DFY` | 9 | Direct conversie. |
| `CTA soft Orientare` | 8 | Important pentru flow fără presiune. |
| `CTA soft Evaluare` | 8 | Important. |
| `CTA formular` | 9 | Lead capture. |
| `CTA după eroare` | 8 | UX și recuperare. |
| `CTA după confirmare` | 7 | Post-action clarity. |
| `5) Pattern-uri SEM` | 9 | Critic pentru risc, consimțământ și scope. |
| `WARNING` | 9 | Critic. |
| `DANGER` | 9 | Critic. |
| `CONSENT` | 8 | Important pentru decizii asumate. |
| `SCOPE` | 9 | Critic pentru așteptări. |
| `6) Mapare COLD / WARM / HOT` | 8 | Important pentru funnel. |
| `COLD` | 8 | Orientare. |
| `WARM` | 8 | Evaluare. |
| `HOT` | 9 | Decizie. |

## Recomandări pentru biblioteca de mesaje

- Păstrează exemplele, nu raționamentul strategic.
- Evită duplicarea regulilor CTA din `structura.md`; aici stau textele, nu logica de plasare.
- Adaugă status la fiecare formulă: `validat`, `propus`, `de testat`.
- Separă CTA-uri comerciale de CTA-uri utilitare pentru a evita folosirea unui CTA de presiune în pagini neutre.

---

# 5. `audienta.md`

Rol: document central pentru audiență, segmentare și reguli transversale.

| Secțiune | Importanță | Observație |
| --- | ---: | --- |
| `# AUDIENTA V1` | 4 | Meta. |
| `1) Definiția audienței` | 9 | Critic pentru poziționare. |
| `2) Contextul serviciilor` | 8 | Important pentru arhitectură. |
| `Domenii` | 8 | Important. |
| `Moduri de livrare` | 9 | Critic pentru DIY/DFY. |
| `3) Axele de segmentare` | 9 | Critic pentru toate documentele. |
| `4) Job-to-be-done comun` | 9 | Fundament de copy și ofertă. |
| `5) Strat psihografic transversal` | 7 | Util pentru brand, dar nu trebuie supraestimat fără date. |
| `Atractori` | 7 | Bun pentru direcție. |
| `Repulsori` | 7 | Important pentru evitarea mismatch-ului. |
| `6) Tensiuni comune` | 9 | Critic pentru copy și ofertă. |
| `7) Calificare comercială` | 9 | Critic pentru conversie și lead quality. |
| `8) Traseul Orientare → Evaluare → Decizie` | 8 | Important, dar deja detaliat în `structura.md` și manual. |
| `9) Reguli generale DIY / DFY` | 9 | Critic. |
| `DIY` | 9 | Critic. |
| `DFY` | 9 | Critic. |
| `10) Criterii transversale` | 9 | Critic pentru qualification. |
| `Criterii de calificare` | 9 | Critic. |
| `Semnale de necalificare` | 9 | Critic. |
| `11) Redirecționare DIY / DFY` | 8 | Important pentru cross-sell și evitare mismatch. |
| `Regula de ton` | 8 | Important pentru brand. |
| `12) Index către fișiere specifice` | 6 | Util, dar administrativ. |

## Recomandări pentru audiență centrală

- Păstrează regulile transversale aici; nu le repeta în fișierele pe domenii.
- Adaugă o secțiune scurtă `Date lipsă / cercetare necesară`, ca să nu rămână ipotezele ascunse în fișe.
- Evită ca `Traseul Orientare → Evaluare → Decizie` să dubleze prea mult `structura.md`.

---

# 6. Fișiere de audiență pe domenii

Se aplică pentru:

- `audienta-curs.md`
- `audienta-woo.md`
- `audienta-site.md`
- `audienta-email.md`

## Index de importanță comun

| Secțiune | Importanță | Observație |
| --- | ---: | --- |
| `Rolul domeniului` | 7 | Context util, dar scurt. |
| `Job-to-be-done specific` | 9 | Critic pentru copy și ofertă. |
| `Segmente incluse` | 7 | Administrativ, dar necesar. |
| `Costul inacțiunii` | 8 | Important pentru Evaluare, dar să rămână specific segmentului. |
| `Segment DIY / Fișă audiență` | 9 | Critic unde există ofertă DIY. |
| `Segment DIY / Funnel` | 8 | Important pentru traseu și messaging. |
| `Segment DFY / Fișă audiență` | 9 | Critic unde există ofertă DFY. |
| `Segment DFY / Funnel` | 8 | Important. |
| `Criterii de calificare` | 9 | Critic pentru lead quality. |
| `Semnale de necalificare temporară` | 8 | Important pentru filtrare. |
| `Semnale de buyer intent` | 9 | Critic pentru copy, ads și sales routing. |
| `Direcționare recomandată` | 8 | Important pentru DIY/DFY routing. |
| `Eșecuri și prevenire` | 9 | Foarte valoros pentru risc controlat și SEM. |
| `Implicații pentru pagini` | 9 | Direct aplicabil în landing pages. |
| `Implicații pentru mesaje` | 9 | Direct aplicabil în `biblioteca-mesaje.md`. |
| `Implicații pentru formulare` | 9 | Direct aplicabil în lead quality. |

## Diferențe pe domeniu

| Fișier | Importanță totală | Observație |
| --- | ---: | --- |
| `audienta-curs.md` | 8 | Puternic pentru oferta educațională; multe ipoteze trebuie validate. |
| `audienta-woo.md` | 8 | Bun pentru risc financiar și operațional; foarte conversion-friendly. |
| `audienta-site.md` | 9 | Probabil nucleu comercial principal; trebuie prioritizat. |
| `audienta-email.md` | 7 | Important, dar are doar DFY; atenție să nu pară ofertă izolată fără context. |

## Probleme de guvernanță în fișierele de audiență

- Câmpurile `Ce a încercat deja`, `Ce nu i-a mers` și `Verbatim real de colectat ulterior` sunt marcate `[Lipsă]` în toate fișele. Scor operațional actual: 3; scor potențial după cercetare: 9.
- Multe câmpuri sunt `[Propunere]`. Sunt utile, dar trebuie tratate ca ipoteze, nu adevăr de piață.
- CTA-urile cu URL de checkout nu ar trebui să stea în fișele de audiență. Recomand fișier separat `oferte.md` sau `config-oferte.md`.
- Structura fișelor este repetitivă. Redundanța este acceptabilă doar dacă aceste fișiere sunt folosite ca briefing independent pentru fiecare ofertă.

---

# 7. Priorități de curățare

| Prioritate | Acțiune | Impact |
| ---: | --- | --- |
| 1 | Adaugă `importanta: N` inline în `structura.md` pentru fiecare `[GRUP]` și `[SEC]`. | Foarte mare: clarifică ce contează când generezi pagini. |
| 2 | Mută linkurile de checkout din `audienta-*.md` într-un document de ofertă/config. | Mare: reduce riscul de date comerciale stale. |
| 3 | Creează backlog pentru toate câmpurile `[Lipsă]` și `[Propunere]`. | Mare: separă cercetarea de ipoteze. |
| 4 | Creează document separat pentru Logo/Iconografie doar când există asset-uri reale. | Mediu: evită secțiunile goale în manualul final. |
| 5 | Normalizează „Costul inacțiunii”: regulă în ghid, expresii în audiență, formule în bibliotecă. | Mediu-mare: reduce duplicarea. |
| 6 | Adaugă status la mesajele din bibliotecă: `validat`, `propus`, `de testat`. | Mediu: ajută testing și governance. |
| 7 | Dezvoltă în `ghid-editorial.md` canalele: email, postări, newslettere, storytelling. | Mediu: documentul promite aceste reguli, dar încă nu le dezvoltă. |

## Decizie recomandată

Pentru pasul următor, nu aș adăuga scoruri inline în toate documentele. Aș începe cu `structura.md`, pentru că este documentul care controlează paginile și conversia. Format recomandat:

```markdown
[SEC-07]
importanta: 9
titlu: Ce intră, ce nu intră și ce ai nevoie înainte să te înscrii
```

După aceea, aș adăuga scorurile în fișierele de audiență la nivel de secțiune mare, nu la fiecare bullet din fișă.


