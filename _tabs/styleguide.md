---
layout: page
permalink: "/styleguide/"
content_type: "styleguide"
title: "Styleguide"
description: "Pagină de test pentru stilurile disponibile în Markdown și tema Chirpy."
toc: true
comments: false
---

Această pagină este pentru verificarea stilurilor disponibile în Markdown, Kramdown, Bootstrap și tema Chirpy, fără CSS personalizat.

Scopul ei este practic: verifici cum arată paragrafele, titlurile, blockquote-urile, callout-urile, coloanele, butoanele, listele, tabelele, codul și acordeoanele în contextul real al site-ului.

---

## Navigare rapidă

- [Paragrafe și text inline](#paragrafe-si-text-inline)
- [Titluri H1-H6](#titluri-h1-h6)
- [Liste](#liste)
- [Blockquote și callout-uri Chirpy](#blockquote-si-callout-uri-chirpy)
- [Callout-uri pe două coloane](#callout-uri-pe-doua-coloane)
- [Butoane](#butoane)
- [Acordeon](#acordeon)
- [Tabele](#tabele)
- [Cod și evidențiere](#cod-si-evidentiere)
- [Imagini](#imagini)
- [Separatoare și ritm](#separatoare-si-ritm)

---

## Paragrafe și text inline {#paragrafe-si-text-inline}

Acesta este un paragraf normal. Trebuie să fie ușor de citit, cu spațiere suficientă între rânduri și fără ca lățimea textului să obosească lectura.

Acesta este un paragraf mai lung, folosit pentru a testa citirea pe mobil și desktop. Textul trebuie să rămână clar, chiar dacă propozițiile sunt mai multe. În paginile de ofertă, paragrafele lungi ar trebui folosite rar, iar informația importantă ar trebui spartă în liste, pași sau callout-uri.

Text cu **bold**, *italic*, ***bold italic***, `cod inline`, [link intern](#butoane) și [link extern](https://ionutojica.ro/).

Text cu termeni tehnici explicați scurt: **scope** = ce intră și ce nu intră; **review** = verificare și ajustări în limita lucrărilor agreate; **stack** = setul de instrumente folosite.

---

## Titluri H1-H6 {#titluri-h1-h6}

# H1 — Titlu principal de test

Text scurt sub H1. În mod normal, pagina are deja titlul principal generat de layout, deci H1 în conținut trebuie folosit rar.

## H2 — Secțiune principală

Text scurt sub H2. Acesta este nivelul recomandat pentru secțiunile majore din pagină.

### H3 — Subsecțiune

Text scurt sub H3. Acest nivel este potrivit pentru grupuri din interiorul unei secțiuni.

#### H4 — Detaliu operațional

Text scurt sub H4. Acest nivel poate fi folosit pentru criterii, reguli sau item-uri explicate.

##### H5 — Label secundar

Text scurt sub H5. Folosește rar acest nivel, doar pentru structură densă.

###### H6 — Label fin

Text scurt sub H6. Folosește foarte rar acest nivel, pentru meta sau delimitări secundare.

---

## Liste {#liste}

### Listă simplă

- pagină de prezentare;
- pagină de contact;
- formular funcțional;
- email profesional;
- backup înainte de schimbări;
- update-uri controlate.

### Listă numerotată

1. Clarifici obiectivul.
2. Pregătești materialele.
3. Blochezi direcția în brief.
4. Construiești pe structura agreată.
5. Verifici și ajustezi.
6. Publici și predai operabil.

### Listă cu item-uri explicate

- **Brief**  
  Fixează obiectivul site-ului, paginile și materialele disponibile.

- **Build**  
  Construiește website-ul pe structura agreată, fără schimbări improvizate de direcție.

- **Review**  
  Verifică rezultatul și permite ajustări în limita lucrărilor stabilite.

### Checklist vizual simplu

- [x] Domeniu clarificat
- [x] Hosting disponibil
- [ ] Textele paginilor pregătite
- [ ] Imaginile selectate
- [ ] Formular verificat

---

## Blockquote și callout-uri Chirpy {#blockquote-si-callout-uri-chirpy}

### Blockquote normal

> Acesta este un blockquote simplu. Poate fi folosit pentru citate, observații editoriale sau extrase scurte.

### Prompt info

> ### INFO — Context util
>
> Folosește acest tip de callout pentru clarificări neutre, explicații și informații care ajută cititorul să înțeleagă contextul.
{: .prompt-info }

### Prompt tip

> ### TIP — Recomandare practică
>
> Folosește acest tip de callout pentru recomandări, variante potrivite, exemple bune sau direcții preferate.
{: .prompt-tip }

### Prompt warning

> ### WARNING — Risc controlabil
>
> - **Condiție:** faci update fără backup.
> - **Consecință:** site-ul poate deveni instabil.
> - **În loc:** faci backup înainte și verifici site-ul după schimbare.
{: .prompt-warning }

### Prompt danger

> ### DANGER — Oprire / risc major
>
> - **Condiție:** ștergi fișiere sau setări fără backup.
> - **Consecință:** poți pierde date sau poți opri funcționarea site-ului.
> - **În loc:** verifici backup-ul și lucrezi doar după ce ai o variantă de revenire.
{: .prompt-danger }

---

## Callout-uri pe două coloane {#callout-uri-pe-doua-coloane}

### Două coloane: potrivire / nepotrivire

<div class="row gx-3 gy-3" markdown="1">

<div class="col-11 col-md-6 me-auto" markdown="1">
> ### Este potrivit dacă
>
> - vrei structură clară;
> - accepți pași și verificări;
> - vrei să reduci improvizația;
> - poți furniza materiale și decizii.
{: .prompt-tip }
</div>

<div class="col-11 col-md-6 ms-auto" markdown="1">
> ### Nu este potrivit dacă
>
> - vrei schimbări nelimitate;
> - nu ai materiale minime;
> - nu poți lua decizii;
> - cauți doar o instalare rapidă.
{: .prompt-warning }
</div>

</div>

### Două coloane: INFO / WARNING

<div class="row gx-3 gy-3" markdown="1">

<div class="col-11 col-md-6 me-auto" markdown="1">
> ### Ce clarificăm înainte
>
> Obiectivul site-ului, paginile, materialele disponibile, direcția vizuală și pașii de review.
{: .prompt-info }
</div>

<div class="col-11 col-md-6 ms-auto" markdown="1">
> ### Ce poate bloca proiectul
>
> Materiale lipsă, accesuri neclare, decizii întârziate sau schimbări mari după brief.
{: .prompt-warning }
</div>

</div>

---

## Butoane {#butoane}

Această secțiune testează clasele Bootstrap / Chirpy disponibile pentru linkuri afișate ca butoane.

### Butoane primare și secundare

[Primary](#butoane){: .btn .btn-primary }

[Primary + text alb — test pentru hover](#butoane){: .btn .btn-primary .text-white }

[Outline primary](#butoane){: .btn .btn-outline-primary }

[Outline secondary — recomandat pentru CTA intern](#butoane){: .btn .btn-outline-secondary }

[Secondary](#butoane){: .btn .btn-secondary }

[Light](#butoane){: .btn .btn-light }

[Dark](#butoane){: .btn .btn-dark }

### Butoane în linie

[Buton primar](#butoane){: .btn .btn-primary .text-white } [Buton secundar](#butoane){: .btn .btn-outline-secondary }

### Butoane mari și mici

[Buton mare](#butoane){: .btn .btn-primary .btn-lg .text-white }

[Buton mic](#butoane){: .btn .btn-outline-secondary .btn-sm }

### Butoane cu animație

[Primary + text alb — test pentru hover cu shadow-sm](#butoane){: .btn .btn-primary .text-white .shadow-sm }

[Secondary + text alb — test pentru hover cu shadow-sm](#butoane){: .btn .btn-secondary .text-white .shadow-sm }

[Buton mare cu shadow-sm](#butoane){: .btn .btn-primary .btn-lg .text-white .shadow-sm }

[Primary + text alb — test pentru hover cu shadow](#butoane){: .btn .btn-primary .text-white .shadow }

[Secondary + text alb — test pentru hover cu shadow](#butoane){: .btn .btn-secondary .text-white .shadow }

[Buton mare cu shadow](#butoane){: .btn .btn-primary .btn-lg .text-white .shadow }

### Recomandare pentru problema de hover

> ### Test pentru hover pe butoane
>
> Dacă `{: .btn .btn-primary }` afișează text portocaliu la hover, testează varianta `{: .btn .btn-primary .text-white }`.
>
> Dacă `{: .btn .btn-outline-primary }` are hover neplăcut, folosește pentru CTA-uri intermediare `{: .btn .btn-outline-secondary }` sau păstrează CTA-ul ca link într-un callout.
>
> Pentru CTA final spre checkout, folosește prima dată varianta: `[Rezervă](link){: .btn .btn-primary .text-white }`.
{: .prompt-tip }

### CTA final de test

[Rezervă implementarea website-ului](https://pro.ionutojica.ro/checkout-link/?products=785:1){: .btn .btn-primary .text-white }

După click, utilizatorul ajunge în checkout. Textul de sub buton trebuie să explice ce se întâmplă după plată.

---

## Acordeon {#acordeon}

<details markdown="block">
<summary><strong>Ce se întâmplă după plată?</strong></summary>

Primești confirmarea, checklist-ul de pregătire și linkul pentru programarea primei ședințe.

</details>

<details markdown="block">
<summary><strong>Pot cere modificări după review?</strong></summary>

Da, dacă modificările țin de direcția și limitele stabilite în brief. Schimbările mari de direcție, paginile noi sau funcțiile noi se tratează separat.

</details>

<details markdown="block">
<summary><strong>Ce se întâmplă dacă nu am textele pregătite?</strong></summary>

Proiectul poate începe doar dacă există conținut minim sau dacă stabilim clar ce poate fi folosit temporar. Fără obiectiv, pagini și mesaje de bază, implementarea riscă să devină improvizată.

</details>

---

## Tabele {#tabele}

| Element | Rol | Observație |
|---|---|---|
| Hero | Orientare | Spune rapid ce este oferta. |
| Proof | Evaluare | Susține încrederea prin exemple reale. |
| Risc | Evaluare | Arată ce poate merge prost și cum se previne. |
| Scope | Evaluare | Clarifică ce intră și ce nu intră. |
| CTA | Decizie | Trimite spre acțiunea principală. |

---

## Cod și evidențiere {#cod-si-evidentiere}

### Cod inline

Folosește `backup`, `update`, `scope`, `review` sau `checkout` doar când termenul este clar în context.

### Bloc de cod Markdown

```markdown
[Rezervă implementarea website-ului](https://pro.ionutojica.ro/checkout-link/?products=785:1){: .btn .btn-primary .text-white }
```

### Bloc de cod HTML permis în Markdown

```html
<div class="row gx-3 gy-3" markdown="1">
  <div class="col-11 col-md-6 me-auto" markdown="1">
    Conținut coloana 1
  </div>
  <div class="col-11 col-md-6 ms-auto" markdown="1">
    Conținut coloana 2
  </div>
</div>
```

---

## Imagini {#imagini}

### Imagine simplă

![Imagine de test pentru styleguide](/assets/img/pages/website-administrare-wordpress/hero-administrare-wordpress-800.jpg){: width="500" height="400" .shadow .rounded-10 }

### Imagine aliniată la dreapta

![Imagine aliniată dreapta](/assets/img/pages/website-administrare-wordpress/proces-curs-wordpress-800.jpg){: width="300" height="375" .w-50 .right .shadow .rounded-10 }

Acest paragraf testează cum curge textul lângă o imagine aliniată la dreapta. Dacă imaginea ocupă prea mult pe mobil sau creează spațiere ciudată, verifică dacă are sens să fie eliminată, redusă sau mutată între secțiuni.

---

## Separatoare și ritm {#separatoare-si-ritm}

Text înainte de separator.

---

Text după separator. Separatorul trebuie folosit pentru delimitări majore, nu după fiecare paragraf.

### Mini-secțiune CTA fără callout

Această variantă este utilă când nu vrei încă un `prompt-tip` după o serie de testimoniale.

[Continuă spre rezervare](#butoane){: .btn .btn-outline-secondary }

---

## Concluzie de test

Această pagină trebuie verificată pe desktop și mobil. În special, verifică:

- hover pe `.btn-primary`;
- hover pe `.btn-outline-primary`;
- lizibilitatea `.prompt-tip`, `.prompt-info`, `.prompt-warning`, `.prompt-danger`;
- afișarea coloanelor pe desktop;
- rearanjarea coloanelor pe mobil;
- spațierea înainte și după `details`;
- imaginile aliniate stânga/dreapta;
- contrastul linkurilor în butoane.
