# STRUCT2
* STRUCT=Structura paginilor
* 2=Versiune: 2.0
Limba: ro

# Paginile, structura si generarea continutului paginilor

## Setul minim coerent pentru V1 este de 14 pagini publice:
Titlu pagină: Acasă | Slug complet: `/` | Scop: orientare rapidă, separare pe segmente și trimitere către oferta corectă.
Titlu pagină: Administrare platformă de cursuri (DIY) | Slug complet: `/cursuri/administrare-learndash` | Scop: prezentarea ofertei pentru cei care vor să învețe să administreze singuri platforma de cursuri.
Titlu pagină: Platformă de cursuri implementată complet (DFY) | Slug complet: `/cursuri/implementare-learndash` | Scop: prezentarea ofertei pentru cei care vor platforma instalată și configurată pentru ei.
Titlu pagină: Administrare magazin WooCommerce (DIY) | Slug complet: `/magazin/administrare-woocommerce` | Scop: prezentarea ofertei pentru cei care vor să învețe să opereze singuri magazinul.
Titlu pagină: Magazin WooCommerce implementat complet (DFY) | Slug complet: `/magazin/implementare-woocommerce` | Scop: prezentarea ofertei pentru cei care vor magazinul gata configurat.
Titlu pagină: Administrare website WordPress (DIY) | Slug complet: `/website/administrare-wordpress` | Scop: prezentarea ofertei pentru cei care vor să administreze singuri website-ul.
Titlu pagină: Website WordPress implementat complet (DFY) | Slug complet: `/website/implementare-wordpress` | Scop: prezentarea ofertei pentru cei care vor website-ul realizat și predat operabil.
Titlu pagină: Email marketing Mautic + SES (DFY) | Slug complet: `/email/mautic-ses` | Scop: prezentarea ofertei de infrastructură email gata configurată și predată pentru operare. 
Titlu pagină: Despre | Slug complet: `/despre` | Scop: consolidarea credibilității și clarificarea modului de lucru.
Titlu pagină: Contact / Cerere | Slug complet: `/contact` | Scop: colectarea solicitărilor directe și a cazurilor care nu intră imediat pe un flux standard.
Titlu pagină: Listă de așteptare | Slug complet: `/lista-de-asteptare` | Scop: captarea interesului pentru ofertele DFY aflate în stadiu pre-open.
Titlu pagină: Confirmare | Slug complet: `/confirmare` | Scop: confirmarea acțiunii trimise și clarificarea pasului următor pentru utilizator.
Titlu pagină: Termeni și condiții | Slug complet: `/termeni-si-conditii` | Scop: definirea cadrului contractual și operațional minim al colaborării.
Titlu pagină: Politică de confidențialitate | Slug complet: `/politica-de-confidentialitate` | Scop: definirea regulilor privind datele colectate prin formulare și fluxurile site-ului.
Pentru V1, nu aș trata ca pagini obligatorii separate încă: Resurse, Blog, Studii de caz, FAQ, pagini individuale de checkout; ele pot fi adăugate după ce nucleul de ofertă și conversie este stabil.


## Gruparea si structura paginilor
[FORMAT]
tip: bloc ierarhic cu chei scurte

[DEFINIȚII]
titlu: Titlul secțiunii
scop: Scopul secțiunii
zona: Zona de decizie: Orientare, Evaluare, Decizie
cod-zona: Cod tehnic al zonei: ZONA-UNDE, ZONA-CUM, ZONA-START
rol: Rolul dominant: orientare, delimitare, risc, filtrare, acțiune, dovadă, proof, credibilitate, validare, validare socială, clarificare, confirmare, comparare, scope lock, risk reversal / consent
tip-layout: Tipul secțiunii: cadru aerisit, modul dens, formular, CTA, confirmare
format: Formatul dominant: hero split, paragraf, listă, pași, carduri, checklist, tabel, accordion, accordion FAQ, workflow rail, roadmap / stepper, showcase grid / gallery cards, quote cards / proof strips, guarantee panel, formular, CTA, CTA console
(doar unde este relevant) regula-cta: soft, secondary, major

[VALORI regula-cta]
soft: acțiune de orientare sau navigare; apare înainte de Decizie; nu folosește stil Primary CTA.
secondary: acțiune subordonată; poate trimite către o ofertă alternativă sau către informații relevante; nu concurează vizual cu oferta principală.
major: acțiune principală de conversie; apare în Decizie / ZONA-START și trimite către destinația principală de conversie a paginii.

[REGULI-GLOBALE-DE-PAGINĂ]

1. Fiecare pagină de prezentare urmează traseul:
   Orientare / ZONA-UNDE → Evaluare / ZONA-CUM → Decizie / ZONA-START.

2. Înainte de orice CTA major trebuie să existe două secțiuni de Evaluare:
   - Risc controlat;
   - Scope lock.

3. Risc controlat:
   - include 2–3 riscuri reale;
   - fiecare risc are forma: condiție → consecință → acțiune sigură / alternativă;
   - folosește WARNING sau DANGER doar pentru risc tehnic real;
   - nu se folosește ca presiune de conversie.

4. Scope lock:
   - include Ce este inclus / Ce nu este inclus;
   - include Ce trebuie să aduci;
   - include Decizii obligatorii;
   - nu include proof, metrici sau CTA major.

4A. Proof, garanție și FAQ:
   - proof-ul extins apare în Evaluare / ZONA-CUM, înainte de Risc controlat sau între mecanism și risc;
   - FAQ de evaluare apare în Evaluare / ZONA-CUM, după comparație și înainte de Garanție;
   - pe paginile DIY, Garanția apare în Decizie / ZONA-START, înainte de CTA major;
   - pe paginile DFY, zona de reducere a riscului apare în Decizie / ZONA-START și poate include garanție, condiții de colaborare, protocol, scope, livrabile și condiții specifice, dacă sunt definite în oferta concretă;
   - FAQ de decizie apare în Decizie / ZONA-START, după Garanție și înainte de CTA major;
   - proof-ul din Decizie este subordonat CTA-ului și nu concurează vizual cu acesta.

4B. Garanția / reducerea riscului perceput:
   - apare obligatoriu pe toate paginile DIY;
   - pentru DIY, are rol de reducere a riscului perceput la plată;
   - pentru DIY, clarifică simplu când și cum poate fi returnată investiția;
   - pentru cursurile live DIY, termenul garanției se formulează conform ofertei concrete; dacă oferta menționează „30 de zile de la începerea cursului”, termenul se calculează de la prima sesiune live, nu de la data achiziției;
   - pentru DFY, nu se folosește automat aceeași garanție ca la DIY;
   - pentru DFY, secțiunea trebuie să clarifice condițiile de colaborare, scope-ul, livrabilele, protocolul de început, responsabilitățile clientului și condițiile specifice de retur / ajustare, dacă există;
   - dacă o ofertă DFY are garanție, aceasta trebuie menționată explicit în oferta concretă;
   - nu se folosește ca presiune comercială;
   - nu înlocuiește Scope lock;
   - nu introduce promisiuni noi față de oferta documentată.

4C. FAQ-uri:
   - FAQ de evaluare / ZONA-CUM clarifică potrivirea, procesul, limitele, efortul, prerechizitele și scope-ul;
   - FAQ de decizie / ZONA-START clarifică plata, accesul, garanția, confirmarea, ce urmează după înscriere / cumpărare și cum începe efectiv parcursul;
   - FAQ-urile nu introduc CTA major în interiorul răspunsurilor;
   - fiecare răspuns trebuie să fie scurt, procedural și orientat pe decizie informată.

5. CTA major:
   - fiecare pagină de prezentare are o singură ofertă principală;
   - fiecare pagină de prezentare are o singură destinație principală de conversie;
   - CTA-ul major trimite către destinația principală de conversie a paginii;
   - CTA-ul major apare în Decizie / ZONA-START;
   - același CTA major poate fi repetat pe pagină dacă trimite către aceeași ofertă principală și ajută navigarea sau decizia;
   - nu trebuie să existe mai multe CTA-uri primare vizibile simultan în același viewport;
   - pentru DIY: înscriere / plată;
   - pentru DFY: cumpărare / rezervare serviciu / cerere calificată, în funcție de stadiul ofertei;
   - linkurile către oferte alternative rămân secondary CTA sau text link.

6. CTA soft:
   - poate apărea înainte de Decizie;
   - are rol de navigație, nu conversie;
   - se implementează ca link, ghost sau secondary;
   - nu folosește stilul vizual de Primary CTA.

7. Ritm layout:
   - paginile alternează cadre aerisite și module dense;
   - două module dense nu se pun consecutiv fără un cadru aerisit între ele.

[REGULI-CTA]

1. Fiecare pagină de prezentare are o singură ofertă principală.

   Exemple:
   - pe o pagină DIY, oferta principală este cursul DIY;
   - pe o pagină DFY, oferta principală este serviciul DFY;
   - pe Home, acțiunea principală este direcționarea spre oferta potrivită, nu plata directă.

2. Fiecare pagină de prezentare are o singură destinație principală de conversie.

   Exemple:
   - checkout pentru curs DIY;
   - checkout / rezervare / cerere calificată pentru serviciu DFY;
   - formular de contact sau listă de așteptare, dacă oferta nu este deschisă.

3. CTA-ul major exprimă acțiunea reală:

   - înscriere;
   - plată;
   - rezervare;
   - cerere calificată;
   - listă de așteptare.

4. CTA-ul major apare în Decizie / ZONA-START.

5. CTA-ul major poate fi repetat pe pagină dacă:

   - trimite către aceeași ofertă principală;
   - susține navigarea sau decizia;
   - nu creează două acțiuni comerciale concurente;
   - nu apare simultan cu alt CTA primar în același viewport.

6. CTA-ul soft este permis înainte de Decizie doar pentru orientare:

   - vezi dacă ți se potrivește;
   - vezi detalii;
   - compară variantele;
   - continuă spre secțiunea următoare.

7. CTA-ul soft:

   - are rol de navigație, nu conversie directă;
   - se implementează ca link, ghost sau secondary;
   - nu folosește stilul vizual de Primary CTA.

8. CTA-ul secondary este folosit pentru acțiuni relevante, dar subordonate:

   - trimitere către ofertă alternativă;
   - comparație DIY / DFY;
   - contact pentru cazuri neclare;
   - documente utile;
   - întrebări suplimentare.

9. Linkurile către oferte secundare nu concurează cu oferta principală.

   Exemple:
   - pe pagina DIY, linkul către DFY rămâne secondary CTA sau text link;
   - pe pagina DFY, linkul către DIY rămâne secondary CTA sau text link;
   - în comparații, ambele variante pot fi menționate, dar doar oferta paginii are CTA major.

10. Nu se folosesc formulări de presiune:

   - „nu rata”;
   - „ultimele locuri”;
   - „acum sau pierzi”;
   - countdown-uri agresive.

11. Constrângerile factuale sunt permise doar ca informație separată de CTA:

   - dată de start;
   - capacitate grupă;
   - stadiu ofertă;
   - preț de lansare, dacă este documentat.

12. CTA-ul nu introduce promisiuni noi.

   Textul butonului spune ce face utilizatorul, nu amplifică artificial rezultatul.

[GRUP-01]
nume: Pagini de orientare
id-uri: HOME
aplicare: structură unică, dedicată paginii Home

  [SEC-01]
  titlu: Definire rapidă
  scop: explică imediat ce tip de sisteme WordPress sunt oferite, pentru cine sunt și ce problemă generală rezolvă
  zona: Orientare
  cod-zona: ZONA-UNDE
  rol: orientare
  tip-layout: cadru aerisit
  format: paragraf
  regula-cta: soft

  [SEC-02]
  titlu: Mapare oferte
  scop: ajută utilizatorul să se recunoască rapid într-un segment corect și să înțeleagă ce domeniu i se potrivește: CURS, WOO, SITE sau EMAIL
  zona: Orientare
  cod-zona: ZONA-UNDE
  rol: filtrare
  tip-layout: modul dens
  format: carduri
  regula-cta: soft

  [SEC-03]
  titlu: Cum funcționează în ansamblu
  scop: arată logica generală a sistemelor și a modului de lucru: plăți, acces, livrare, email, operare și predare
  zona: Orientare
  cod-zona: ZONA-UNDE
  rol: orientare
  tip-layout: cadru aerisit
  format: pași

  [SEC-04]
  titlu: Riscuri controlate
  scop: arată ce probleme reale sunt prevenite prin structură, verificare și configurare corectă
  zona: Evaluare
  cod-zona: ZONA-CUM
  rol: risc
  tip-layout: cadru aerisit
  format: carduri semantice

  [SEC-05]
  titlu: DIY vs DFY
  scop: reduce alegerea greșită între învățare pentru administrare proprie și livrare completă operabilă
  zona: Evaluare
  cod-zona: ZONA-CUM
  rol: delimitare
  tip-layout: modul dens
  format: tabel / carduri comparative

  [SEC-06]
  titlu: Scope lock general
  scop: clarifică ce tip de ajutor oferă site-ul, ce nu promite și ce trebuie să aducă utilizatorul pentru o alegere corectă
  zona: Evaluare
  cod-zona: ZONA-CUM
  rol: delimitare
  tip-layout: cadru aerisit
  format: In / Out + cerințe + decizii

  [SEC-07]
  titlu: Trimitere spre oferta potrivită
  scop: duce utilizatorul spre oferta relevantă, în funcție de segmentul ales și de tipul de livrare potrivit
  zona: Decizie
  cod-zona: ZONA-START
  rol: acțiune
  tip-layout: modul dens
  format: CTA
  regula-cta: major: direcționare spre oferta potrivită, nu plată directă; fiecare card / link trimite către pagina segmentului relevant.

[GRUP-02]
nume: Pagini de prezentare DIY
id-uri: A1_DIY_CURS, B1_DIY_WOO, C1_DIY_SITE
aplicare: structură unică, comună tuturor paginilor DIY
regulă-cta: oferta principală este cursul DIY; linkurile către varianta DFY sunt permise pentru orientare și alegere corectă, dar rămân secondary CTA sau text link.

  [SEC-00]
  titlu: Hero — promisiune operațională
  scop: fixează imediat ce este oferta, pentru cine este, ce rezultat urmărește și care este pasul următor de orientare
  zona: Orientare
  cod-zona: ZONA-UNDE
  rol: orientare
  tip-layout: cadru aerisit
  format: hero split
  regula-cta: soft

  [SEC-01]
  titlu: Pentru cine este / pentru cine nu este
  scop: filtrează rapid potrivirea și reduce alegerea greșită între învățare DIY și execuție DFY
  zona: Orientare
  cod-zona: ZONA-UNDE
  rol: filtrare
  tip-layout: modul dens
  format: matrice 2 coloane
  regula-cta: soft

  [SEC-02]
  titlu: Ce vei putea face concret până la final
  scop: transformă promisiunea din „înveți” în rezultate observabile, verificabile și aplicabile pe sistemul propriu
  zona: Orientare
  cod-zona: ZONA-UNDE
  rol: validare
  tip-layout: cadru aerisit
  format: checklist de rezultat / clustere

  [SEC-03]
  titlu: Formatul real de livrare
  scop: clarifică forma exactă a ofertei: durată, ritm, live-uri, replay, grup, materiale, sesiuni bonus și mod de acces
  zona: Orientare
  cod-zona: ZONA-UNDE
  rol: delimitare
  tip-layout: modul dens
  format: facts strip + panel

  [SEC-04]
  titlu: Cum se lucrează efectiv
  scop: explică mecanismul real de învățare: explicație, demonstrație, checkpoint-uri, aplicare proprie și întrebări între sesiuni
  zona: Orientare
  cod-zona: ZONA-UNDE
  rol: orientare
  tip-layout: cadru aerisit
  format: workflow rail / pași

  [SEC-04A]
  titlu: Despre Ionuț
  scop: consolidează credibilitatea instructorului și clarifică unghiul profesional din care este livrată oferta: lucru real, structură clară, protocol și evitare a improvizației
  zona: Evaluare
  cod-zona: ZONA-CUM
  rol: credibilitate
  tip-layout: cadru aerisit
  format: split bio + principles

  [SEC-05]
  titlu: Ce înveți, în ordinea corectă
  scop: face vizibilă programa, progresia logică și ordinea în care utilizatorul dobândește control operațional
  zona: Evaluare
  cod-zona: ZONA-CUM
  rol: orientare
  tip-layout: modul dens
  format: roadmap / stepper / accordion

  [SEC-05A]
  titlu: Exemple de implementare / sisteme create
  scop: dovedește că experiența din spatele ofertei vine din lucru real și face tangibil standardul de lucru predat
  zona: Evaluare
  cod-zona: ZONA-CUM
  rol: dovadă
  tip-layout: cadru aerisit
  format: showcase grid / gallery cards

  [SEC-05B]
  titlu: Ce spun cei cu care am lucrat
  scop: validează claritatea explicațiilor, sprijinul oferit și încrederea în proces, înainte de intrarea în zona de risc și calificare finală
  zona: Evaluare
  cod-zona: ZONA-CUM
  rol: validare socială
  tip-layout: modul dens
  format: quote cards / proof strips

  [SEC-06]
  titlu: Greșelile care produc incidente și ce faci în loc
  scop: arată riscurile reale, consecințele operaționale și alternativele sigure, astfel încât utilizatorul să înțeleagă de ce oferta există
  zona: Evaluare
  cod-zona: ZONA-CUM
  rol: risc
  tip-layout: cadru aerisit
  format: WARNING / DANGER cards

  [SEC-07]
  titlu: Ce intră, ce nu intră și ce ai nevoie înainte să te înscrii
  scop: fixează limitele ofertei, prerechizitele minime și deciziile obligatorii pentru o alegere informată
  zona: Evaluare
  cod-zona: ZONA-CUM
  rol: scope lock
  tip-layout: cadru aerisit
  format: In / Out + ce trebuie să aduci + decizii obligatorii

  [SEC-08]
  titlu: DIY sau ai nevoie de DFY?
  scop: reduce alegerea greșită între învățare pentru administrare proprie și implementare completă făcută pentru client
  zona: Evaluare
  cod-zona: ZONA-CUM
  rol: comparare
  tip-layout: modul dens
  format: tabel de decizie / carduri responsive
   regula-cta: secondary

  [SEC-08A]
  titlu: FAQ de evaluare
  scop: clarifică întrebările despre potrivire, proces, materiale, acces, limite, responsabilități, calendar și scope înainte de decizia de plată sau rezervare
  zona: Evaluare
  cod-zona: ZONA-CUM
  rol: clarificare
  tip-layout: cadru aerisit
  format: accordion FAQ

  [SEC-08B]
  titlu: Garanția
  scop: reduce riscul perceput la plată și clarifică simplu când și cum poate fi returnată investiția
  zona: Decizie
  cod-zona: ZONA-START
  rol: risk reversal / consent
  tip-layout: cadru aerisit
  format: guarantee panel + bullets

  [SEC-08C]
  titlu: FAQ de decizie
  scop: tratează întrebările care pot bloca pasul final: plată, acces, garanție, ce se întâmplă după înscriere și cum începe efectiv parcursul
  zona: Decizie
  cod-zona: ZONA-START
  rol: clarificare
  tip-layout: modul dens
  format: accordion FAQ

  [SEC-09]
  titlu: Înscriere / Plată
  scop: concentrează decizia finală într-un singur modul de acțiune, cu ofertă clară, dată, preț, garanție subordonată și CTA major
  zona: Decizie
  cod-zona: ZONA-START
  rol: acțiune
  tip-layout: CTA
  format: CTA console + microcopy risc + confirmare pas următor
  regula-cta: major


[GRUP-03]
nume: Pagini de prezentare DFY
id-uri: A2_DFY_CURS, B2_DFY_WOO, C2_DFY_SITE, D2_DFY_EMAIL
aplicare: structură unică, comună tuturor paginilor DFY
regulă: toate secțiunile sunt obligatorii; conținutul concret se adaptează pe segment
regulă-cta: oferta principală este serviciul DFY; linkurile către varianta DIY sunt permise pentru orientare și alegere corectă, dar rămân secondary CTA sau text link.

  [SEC-00]
  titlu: Hero — rezultat implementat complet
  scop: fixează imediat ce sistem primește clientul, unde este implementat, ce problemă reduce și care este pasul următor de orientare
  zona: Orientare
  cod-zona: ZONA-UNDE
  rol: orientare
  tip-layout: cadru aerisit
  format: hero split
  regula-cta: soft

  [SEC-01]
  titlu: Pentru cine este / pentru cine nu este
  scop: filtrează rapid potrivirea și separă clar nevoia de delegare DFY de nevoia de învățare DIY
  zona: Orientare
  cod-zona: ZONA-UNDE
  rol: filtrare
  tip-layout: modul dens
  format: matrice 2 coloane
  regula-cta: soft

  [SEC-02]
  titlu: Ce primești concret
  scop: transformă oferta din „implementare” în livrabile verificabile, operabile și ușor de înțeles
  zona: Orientare
  cod-zona: ZONA-UNDE
  rol: validare
  tip-layout: cadru aerisit
  format: checklist de rezultat / clustere

  [SEC-03]
  titlu: Cum decurge implementarea
  scop: arată fazele colaborării: pregătire, integrare, testare, review, predare și lansare / activare
  zona: Orientare
  cod-zona: ZONA-UNDE
  rol: orientare
  tip-layout: modul dens
  format: workflow rail / pași

  [SEC-04]
  titlu: Ce se face concret
  scop: clarifică livrabilele principale, configurațiile, integrările și forma operațională a sistemului implementat
  zona: Orientare
  cod-zona: ZONA-UNDE
  rol: delimitare
  tip-layout: cadru aerisit
  format: carduri / listă structurată

  [SEC-04A]
  titlu: Despre Ionuț
  scop: consolidează credibilitatea executantului și clarifică modul de lucru: structură, implementare reală, ownership, testare și predare operabilă
  zona: Evaluare
  cod-zona: ZONA-CUM
  rol: credibilitate
  tip-layout: cadru aerisit
  format: split bio + principles

  [SEC-05]
  titlu: Etapele proiectului, în ordinea corectă
  scop: face vizibilă progresia proiectului și reduce incertitudinea privind calendarul, responsabilitățile și punctele de decizie
  zona: Evaluare
  cod-zona: ZONA-CUM
  rol: orientare
  tip-layout: modul dens
  format: roadmap / stepper

  [SEC-05A]
  titlu: Exemple de implementare / sisteme create
  scop: dovedește că oferta se bazează pe implementare reală și face tangibil standardul de lucru livrat clientului
  zona: Evaluare
  cod-zona: ZONA-CUM
  rol: dovadă
  tip-layout: cadru aerisit
  format: showcase grid / gallery cards

  [SEC-05B]
  titlu: Ce spun cei cu care am lucrat
  scop: validează experiența de colaborare, claritatea procesului, seriozitatea execuției și încrederea înainte de calificarea finală
  zona: Evaluare
  cod-zona: ZONA-CUM
  rol: validare socială
  tip-layout: modul dens
  format: quote cards / proof strips

  [SEC-06]
  titlu: Ce poate bloca proiectul și cum prevenim
  scop: arată riscurile reale ale implementării, consecințele operaționale și măsurile de prevenire înainte de start
  zona: Evaluare
  cod-zona: ZONA-CUM
  rol: risc
  tip-layout: cadru aerisit
  format: WARNING / DANGER cards

  [SEC-07]
  titlu: Ce intră, ce nu intră și ce trebuie să furnizezi
  scop: fixează scope-ul, responsabilitățile clientului, materialele necesare și deciziile obligatorii înainte de cumpărare sau rezervare
  zona: Evaluare
  cod-zona: ZONA-CUM
  rol: scope lock
  tip-layout: cadru aerisit
  format: In / Out + ce trebuie să aduci + decizii obligatorii

  [SEC-08]
  titlu: DFY sau ai nevoie de DIY?
  scop: reduce alegerea greșită între implementare completă făcută pentru client și învățare pentru administrare proprie
  zona: Evaluare
  cod-zona: ZONA-CUM
  rol: comparare
  tip-layout: modul dens
  format: tabel de decizie / carduri responsive
  regula-cta: secondary

  [SEC-08A]
  titlu: FAQ de evaluare
  scop: clarifică întrebările despre potrivire, proces, materiale, acces, limite, responsabilități, calendar și scope înainte de decizia de plată sau rezervare
  zona: Evaluare
  cod-zona: ZONA-CUM
  rol: clarificare
  tip-layout: cadru aerisit
  format: accordion FAQ

  [SEC-08B]
  titlu: Garanția
  scop: reduce riscul perceput la plată și clarifică simplu când și cum poate fi returnată investiția
  zona: Decizie
  cod-zona: ZONA-START
  rol: risk reversal / consent
  tip-layout: cadru aerisit
  format: guarantee panel + bullets

  [SEC-08C]
  titlu: FAQ de decizie
  scop: tratează întrebările care pot bloca pasul final: plată, rezervare, acces, garanție, ce urmează după achiziție și cum începe proiectul
  zona: Decizie
  cod-zona: ZONA-START
  rol: clarificare
  tip-layout: modul dens
  format: accordion FAQ

  [SEC-09]
  titlu: Cerere / Rezervare / Plată
  scop: concentrează decizia finală într-un singur modul de acțiune, cu ofertă clară, pas următor, microcopy de risc și CTA major
  zona: Decizie
  cod-zona: ZONA-START
  rol: acțiune
  tip-layout: CTA
  format: CTA console + microcopy risc + confirmare pas următor
  regula-cta: major


[GRUP-04]
nume: Pagini de suport pentru conversie
id-uri: DESPRE, CONTACT, LISTA_ASTEPTARE, CONFIRMARE
aplicare: structuri dedicate pe subgrup

  [SUBGRUP-04A]
  nume: Pagina Despre
  id-uri: DESPRE
  aplicare: structură dedicată paginii Despre

    [SEC-01]
    titlu: Poziționare
    scop: clarifică cine livrează, din ce unghi profesional și de ce modul de lucru este relevant pentru sistemele WordPress oferite
    zona: Orientare
    cod-zona: ZONA-UNDE
    rol: orientare
    tip-layout: cadru aerisit
    format: paragraf
    regula-cta: none

    [SEC-02]
    titlu: Mod de lucru
    scop: arată cum sunt abordate proiectele și de ce există ordine în execuție
    zona: Evaluare
    cod-zona: ZONA-CUM
    rol: orientare
    tip-layout: modul dens
    format: pași
    regula-cta: none

    [SEC-03]
    titlu: Criterii / limite
    scop: spune cu ce tipuri de clienți și proiecte există potrivire și unde colaborarea nu este potrivită
    zona: Evaluare
    cod-zona: ZONA-CUM
    rol: filtrare
    tip-layout: cadru aerisit
    format: In / Out
    regula-cta: none

    [SEC-04]
    titlu: Pas următor
    scop: trimite spre contact sau oferta relevantă
    zona: Decizie
    cod-zona: ZONA-START
    rol: acțiune
    tip-layout: modul dens
    format: CTA
    regula-cta: major

  [SUBGRUP-04B]
  nume: Pagina Contact
  id-uri: CONTACT
  aplicare: structură dedicată paginii Contact

    [SEC-01]
    titlu: Clarificare scop formular
    scop: spune pentru ce tip de solicitări se folosește formularul
    zona: Orientare
    cod-zona: ZONA-UNDE
    rol: orientare
    tip-layout: cadru aerisit
    format: paragraf
    regula-cta: none

    [SEC-02]
    titlu: Așteptări minime
    scop: spune ce informații trebuie pregătite înainte de completare și ce tipuri de cereri sunt potrivite
    zona: Evaluare
    cod-zona: ZONA-CUM
    rol: filtrare
    tip-layout: cadru aerisit
    format: listă scurtă
    regula-cta: none

    [SEC-03]
    titlu: Formular
    scop: colectează datele strict necesare pentru solicitare
    zona: Decizie
    cod-zona: ZONA-START
    rol: acțiune
    tip-layout: formular
    format: inputuri + validări + microcopy
    regula-cta: major

    [SEC-04]
    titlu: Ce urmează
    scop: reduce incertitudinea după trimitere și explică pasul următor
    zona: Orientare
    cod-zona: ZONA-UNDE
    rol: confirmare
    tip-layout: cadru aerisit
    format: paragraf / SUCCESS
    regula-cta: none

  [SUBGRUP-04C]
  nume: Pagina Listă de așteptare
  id-uri: LISTA_ASTEPTARE
  aplicare: structură dedicată paginii Listă de așteptare

    [SEC-01]
    titlu: Pentru cine este
    scop: filtrează rapid potrivirea pentru ofertele aflate în stadiu pre-open
    zona: Orientare
    cod-zona: ZONA-UNDE
    rol: filtrare
    tip-layout: cadru aerisit
    format: listă
    regula-cta: none

    [SEC-02]
    titlu: Ce primește utilizatorul
    scop: clarifică valoarea concretă a înscrierii pe listă
    zona: Orientare
    cod-zona: ZONA-UNDE
    rol: orientare
    tip-layout: modul dens
    format: listă
    regula-cta: none

    [SEC-03]
    titlu: Ce nu primește încă
    scop: evită așteptările greșite și clarifică faptul că înscrierea nu înseamnă livrare sau rezervare contractuală
    zona: Evaluare
    cod-zona: ZONA-CUM
    rol: delimitare
    tip-layout: cadru aerisit
    format: CONSENT / listă
    regula-cta: none

    [SEC-04]
    titlu: Formular scurt
    scop: captează interesul cu fricțiune minimă
    zona: Decizie
    cod-zona: ZONA-START
    rol: acțiune
    tip-layout: formular
    format: inputuri + CTA
    regula-cta: major

    [SEC-05]
    titlu: Confirmare de pas următor
    scop: spune clar ce se întâmplă după înscriere
    zona: Orientare
    cod-zona: ZONA-UNDE
    rol: confirmare
    tip-layout: cadru aerisit
    format: SUCCESS
    regula-cta: none

  [SUBGRUP-04D]
  nume: Pagina Confirmare
  id-uri: CONFIRMARE
  aplicare: structură dedicată paginii Confirmare

    [SEC-01]
    titlu: Confirmare acțiune
    scop: validează că trimiterea, înscrierea sau plata a fost făcută
    zona: Orientare
    cod-zona: ZONA-UNDE
    rol: confirmare
    tip-layout: cadru aerisit
    format: SUCCESS
    regula-cta: none

    [SEC-02]
    titlu: Ce urmează
    scop: spune următorul pas operațional
    zona: Orientare
    cod-zona: ZONA-UNDE
    rol: orientare
    tip-layout: cadru aerisit
    format: pași
    regula-cta: none

    [SEC-03]
    titlu: Ieșire utilă
    scop: oferă o singură direcție clară de continuare
    zona: Orientare
    cod-zona: ZONA-UNDE
    rol: acțiune
    tip-layout: cadru aerisit
    format: link / secondary CTA
    regula-cta: soft

[GRUP-05]
nume: Pagini juridice și utilitare
id-uri: TERMENI, POLITICA_CONFIDENTIALITATE
aplicare: structură comună, cu registru vizual predominant Orientare / ZONA-UNDE

  [SEC-01]
  titlu: Identificare pagină
  scop: clarifică rolul paginii și cadrul documentului
  zona: Orientare
  cod-zona: ZONA-UNDE
  rol: orientare
  tip-layout: cadru aerisit
  format: paragraf

  [SEC-02]
  titlu: Conținut legal / informativ
  scop: prezintă informațiile necesare în ordine clară și ușor de parcurs
  zona: Orientare
  cod-zona: ZONA-UNDE
  rol: clarificare
  tip-layout: cadru aerisit
  format: secțiuni text

  [SEC-03]
  titlu: Contact / clarificări
  scop: oferă o cale utilă pentru întrebări legate de document
  zona: Orientare
  cod-zona: ZONA-UNDE
  rol: acțiune
  tip-layout: cadru aerisit
  format: link
  regula-cta: soft


## Pași pentru generarea conținutului

Pentru generarea conținutului, lucrează în următorii 10 pași:

Pasul 1: identifică tipul paginii și segmentul.
- Exemple: HOME, A1_DIY_CURS, C1_DIY_SITE, C2_DFY_SITE, CONTACT.
- Nu inventa segmente noi.

Pasul 2: identifică zona secțiunii.
- Orientare / ZONA-UNDE;
- Evaluare / ZONA-CUM;
- Decizie / ZONA-START.

Pasul 3: definește rolul secțiunii în pagină.
- orientare;
- delimitare;
- risc;
- filtrare;
- acțiune;
- dovadă;
- confirmare.

Pasul 4: definește scopul ultra-specific.
- Ce trebuie să înțeleagă utilizatorul după această secțiune?
- Ce confuzie se reduce?

Pasul 5: definește schimbarea produsă în utilizator.
- „înțelege dacă este pentru el”;
- „înțelege mecanismul”;
- „înțelege riscul”;
- „știe ce trebuie să pregătească”;
- „poate decide”.

Pasul 6: definește obiecția, riscul sau confuzia rezolvată.
- Pentru risc real, folosește WARNING / DANGER.
- Pentru limită comercială sau de scope, folosește CONSENT / SCOPE.
- Pentru validări de formular, folosește ERROR.

Pasul 7: definește ce NU trebuie să includă.
- fără hype;
- fără presiune artificială;
- fără promisiuni care nu apar în documente;
- fără CTA major înainte de Decizie;
- fără proof în Scope lock.

Pasul 8: definește lungimea și formatul.
- cadru aerisit sau modul dens;
- paragraf, listă, pași, carduri, tabel, accordion, formular, CTA;
- text scanabil, liste scurte, o singură idee dominantă per viewport.

Pasul 9: verifică regulile speciale.
- Dacă secțiunea este Risc controlat: 2–3 riscuri, fiecare cu condiție → consecință → acțiune sigură.
- Dacă secțiunea este Scope lock: In / Out + ce trebuie să aduci + decizii obligatorii.
- Dacă secțiunea este CTA: trebuie să fie în Decizie / ZONA-START.
- Dacă pagina este utilitară: registru predominant ZONA-UNDE.

Pasul 10: generează conținutul.
- folosește limbaj public clar;
- păstrează termenii tehnici explicați;
- marchează explicit „Lipsă” unde informația nu există;
- marchează explicit „Propunere” unde este deducție de marketing.
