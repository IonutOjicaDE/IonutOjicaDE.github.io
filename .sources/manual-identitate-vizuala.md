# MANUAL IDENTITATE VIZUALĂ

Rol: reguli pentru website și landing pages.  
Index: **0 = irelevant, 10 = esențial**.

## 1. Principii

- **10/10** Claritate > decor.
- **10/10** Design calm, ordonat, credibil; fără hype vizual.
- **9/10** O secțiune = o idee principală.
- **9/10** Spațiu alb generos; fără aglomerare.
- **8/10** Consistență > varietate.

## 2. Culori

| Rol | Valoare |
|---|---|
| Fundal principal | `#FFFFFF` |
| Fundal secundar | `#F8F9FA` |
| Titluri | `#212529` |
| Text principal | `#343A40` |
| Text secundar | `#6C757D` |
| Borduri | `#DEE2E6` |
| CTA | `#198754` |
| CTA hover | `#157347` |
| CTA active | `#146C43` |
| CTA focus | `#B7DFC8` |
| Text CTA | `#FFFFFF` |
| Link | `#146C43` |
| Link hover | `#0F5132` |
| Pozitiv fundal | `#EAF7EE` |
| Pozitiv text | `#0F5132` |
| Pozitiv bordură | `#A3CFBB` |
| Negativ fundal | `#FFF1F0` |
| Negativ text | `#842029` |
| Negativ bordură | `#F1AEB5` |

- **10/10** CTA principal = `#198754`. Verdele este semnalul de acțiune/permisiune al brandului; nu se tratează ca garanție universală de conversie.
- **10/10** Nu folosi `#000000` pentru text.
- **9/10** Nu folosi albastru pentru blocurile „Este pentru tine”.
- **9/10** Verdele și roșul nu se folosesc ca fundal dominant de pagină.

## 3. Tipografie

**Font unic obligatoriu:** `Inter`  
**CSS fallback tehnic:** `Inter, sans-serif`  
**Implementare:** fontul `Inter` trebuie încărcat explicit; fallback-ul nu este variantă vizuală acceptată.  
**Greutăți:** `400`, `700`  
**Stil:** `normal`  
**Letter-spacing:** `0`  
**Aliniere text:** `left`

| Element | Desktop `>=768px` | Mobil `<=767px` | Weight | Line-height | Margin-bottom |
|---|---:|---:|---:|---:|---:|
| H1 | `48px` | `36px` | `700` | `1.10` | `24px` |
| H2 | `36px` | `30px` | `700` | `1.20` | `20px` |
| H3 | `28px` | `24px` | `700` | `1.25` | `16px` |
| H4 | `22px` | `20px` | `700` | `1.30` | `16px` |
| H5 | `18px` | `18px` | `700` | `1.40` | `12px` |
| H6 | `16px` | `16px` | `700` | `1.40` | `12px` |
| Text | `18px` | `17px` | `400` | `1.65` | `16px` |
| Lead | `20px` | `18px` | `400` | `1.55` | `24px` |
| Small | `14px` | `14px` | `400` | `1.50` | `12px` |
| Buton | `16px` | `16px` | `700` | `1.25` | `0` |
| Navigație | `16px` | `16px` | `400` | `1.40` | `0` |

- **9/10** Liste: `padding-left: 24px`; gap între itemi `8px`; margin-bottom `16px`.
- **9/10** Text lung: `max-width: 760px`.
- **9/10** Lead hero: `max-width: 700px`.

## 4. Layout și spacing

**Breakpoint unic:** desktop `>=768px`; mobil `<=767px`.

| Element | Desktop | Mobil |
|---|---:|---:|
| Container principal | `max-width: 1120px` | `width: 100%` |
| Padding lateral pagină | `24px` | `20px` |
| Hero text | `max-width: 820px` | `100%` |
| Text lung | `max-width: 760px` | `100%` |
| Hero padding vertical | `80px` | `56px` |
| Secțiune padding vertical | `72px` | `48px` |
| Gap între blocuri | `24px` | `20px` |
| Grid 2 coloane | `1fr 1fr`; gap `32px` | `1fr`; gap `20px` |
| Gap hero → „Pentru cine nu este” | `32px` | `24px` |

- **10/10** Conținutul landing page-ului nu depășește `1120px`.
- **10/10** Pe mobil toate layout-urile devin o singură coloană.
- **9/10** Fundalurile secțiunilor alternează exclusiv `#FFFFFF` și `#F8F9FA`.
- **9/10** Box-shadow global: `none`.

## 5. Butoane

### CTA principal

| Proprietate | Valoare |
|---|---|
| Background | `#198754` |
| Text | `#FFFFFF` |
| Border | `1px solid #198754` |
| Radius | `8px` |
| Padding | `14px 22px` |
| Min-height | `48px` |
| Font | `Inter`; `16px`; `700`; `1.25` |
| Width desktop | `auto` |
| Width mobil | `100%` |
| Hover | background/border `#157347` |
| Active | background/border `#146C43` |
| Focus | `0 0 0 4px #B7DFC8` |
| Shadow | `none` |
| Transition | `background-color 150ms ease, border-color 150ms ease` |

### CTA secundar

| Proprietate | Valoare |
|---|---|
| Background | `#FFFFFF` |
| Text | `#146C43` |
| Border | `1px solid #198754` |
| Radius | `8px` |
| Padding | `14px 22px` |
| Min-height | `48px` |
| Font | `Inter`; `16px`; `700`; `1.25` |
| Width desktop | `auto` |
| Width mobil | `100%` |
| Hover | background `#EAF7EE`; text `#0F5132` |
| Active | background `#D8F0E0`; text `#0F5132` |
| Focus | `0 0 0 4px #B7DFC8` |
| Shadow | `none` |
| Transition | `background-color 150ms ease, color 150ms ease` |

- **10/10** Maximum `1` CTA principal dominant per secțiune.
- **9/10** Gap între CTA-uri: `12px`.

## 6. Linkuri și navigație

### Link text

- Culoare: `#146C43`.
- Hover: `#0F5132`.
- Decoration: `underline`.
- Underline offset: `2px`.

### Navigație

- Text: `#343A40`.
- Hover: `#146C43`.
- Font: `Inter`; `16px`; `400`.
- Gap desktop: `24px`.
- CTA din header: stil CTA principal.

- **10/10** Fără linkuri externe către exemple de website-uri în corpul landing page-ului.
- **10/10** În corp sunt permise doar CTA-urile necesare acțiunii principale.
- **9/10** Footer: sunt permise linkurile legale.

## 7. Carduri și blocuri de calificare

### Card standard

- Background: `#FFFFFF`.
- Text: `#343A40`.
- Border: `1px solid #DEE2E6`.
- Radius: `12px`.
- Padding: `24px`.
- Shadow: `none`.

### „Este pentru tine”

- Background: `#EAF7EE`.
- Text: `#0F5132`.
- Border: `1px solid #A3CFBB`.
- Radius: `12px`.
- Padding: `24px`.

### „Nu este pentru tine”

- Background: `#FFF1F0`.
- Text: `#842029`.
- Border: `1px solid #F1AEB5`.
- Radius: `12px`.
- Padding: `24px`.

- **9/10** Verde și roșu nu apar în același card.

## 8. Hero și ordine landing page

Ordine V1 fixă:

1. **Hero:** rezultat dorit + de ce contează + CTA.
2. **Pentru cine nu este.**
3. **Beneficii / transformare.**
4. **Este pentru tine dacă.**
5. **Cum funcționează.**
6. **Ce primești.**
7. **FAQ.**
8. **CTA final.**

### Hero

- H1: maximum `12` cuvinte.
- Lead: maximum `40` cuvinte.
- CTA principal: maximum `5` cuvinte.
- Maximum `1` CTA principal în hero.
- H1 + lead: `max-width: 820px`.
- Lead singur: `max-width: 700px`.

- **10/10** Hero-ul descrie clientul după obținerea rezultatului, nu furnizorul.
- **10/10** Accent pe speranță, soluție și acțiune; nu pe frică.
- **10/10** Propunerea de valoare răspunde: **pentru cine → rezultat → de ce contează**.
- **9/10** „Pentru cine nu este” începe exact cu: „Din respect pentru timpul tău, îți spun din start pentru cine nu se potrivește acest serviciu.”
- **9/10** Bullet = **beneficiu → avantaj ulterior**. Nu formula rezultate comerciale necontrolabile ca garanții.

## 9. Limbaj

- **10/10** Folosește situații și rezultate concrete.
- **10/10** Nu folosi în headline-uri sau beneficii: `page builder`, `plugin`, `mentenanță`, `design avansat`, `dezvoltare custom`.
- **9/10** Dacă un termen tehnic este indispensabil, îl explici în aceeași propoziție în maximum `12` cuvinte.

## 10. Imagini

### Screenshot / diagramă

- Width: `100%`.
- Aspect-ratio: `16/9`.
- Radius: `8px`.
- Border: `1px solid #DEE2E6`.
- Shadow: `none`.

### Fotografie autentică

- Width: `100%`.
- Aspect-ratio: `3/2`.
- Object-fit: `cover`.
- Radius: `8px`.
- Border: `0`.
- Shadow: `none`.

- **10/10** Pentru servicii premium: `0` imagini AI prezentate ca reprezentări ale serviciului, clientului sau rezultatului.
- **9/10** Ordine de preferință: `1)` screenshot real, `2)` diagramă simplă, `3)` fotografie autentică.
- **9/10** Nu adăuga text în imagini create pentru pagină; excepție: textul existent într-un screenshot real.
- **9/10** Maximum `1` imagine principală per secțiune.

## 11. FAQ / acordeon

- Background: `#FFFFFF`.
- Text: `#343A40`.
- Titlu întrebare: `18px`; `700`; `1.40`.
- Border-bottom: `1px solid #DEE2E6`.
- Padding vertical item: `20px`.
- Gap între întrebare și răspuns: `12px`.
- Icon: `+` închis, `−` deschis; `20px`; `#343A40`.
- Radius: `0`.
- Shadow: `none`.

## 12. Regula de utilizare

- Aplică obligatoriu regulile de **9–10/10**.
- **7–8/10** se aplică doar elementelor existente în pagină.
- **0–6/10** se omit.
- Orice valoare diferită de V1 este abatere și trebuie documentată înainte de implementare.
