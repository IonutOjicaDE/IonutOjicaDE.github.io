# MES2
* MES=Biblioteca Mesaje
* 2=Versiune: 2.0
Limba: ro
Rol: bibliotecă de mesaje, microcopy, CTA-uri și pattern-uri SEM pentru segmentele A1/A2/B1/B2/C1/C2/D2.

Regulă generală:
Biblioteca oferă formule reutilizabile, nu copy final de pagină. Conținutul se adaptează în funcție de zona paginii: Orientare / Evaluare / Decizie.

## 1) Mesaje și microcopy pe segmente

Format standard:
- **COLD / Orientare / ZONA-UNDE** = utilizatorul înțelege ce este oferta, pentru cine este și ce rezultat urmărește.
- **WARM / Evaluare / ZONA-CUM** = utilizatorul înțelege riscuri, limite, mecanism, scope și condiții de potrivire.
- **HOT / Decizie / ZONA-START** = utilizatorul vede pasul următor concret: înscriere, plată, rezervare, cerere calificată sau listă de așteptare.

Reguli:
- `WARNING` = risc real + consecință + acțiune sigură.
- `DANGER` = interdicție / oprire + motiv + alternativă sigură.
- `CONSENT` = clarifică ce presupune decizia și ce acceptă utilizatorul.
- `SCOPE` = clarifică ce intră, ce nu intră, ce trebuie furnizat și ce decizii sunt obligatorii.
- CTA-ul major nu apare în COLD sau WARM.
- În COLD și WARM se folosesc doar CTA-uri soft: link, ghost sau secondary.

---

### 1.1. A1_DIY_CURS — Administrare platformă de cursuri LearnDash

**COLD / Orientare**
- Devii administratorul platformei tale de cursuri.
- Înveți fluxul complet: structură → acces → testare.
- Nu înveți doar „pluginuri”. Înveți operare aplicată.

**WARM / Evaluare**
- WARNING: Dacă sari peste testarea accesului, cursanții pot rămâne blocați după plată. Acțiune sigură: testezi fluxul complet ca utilizator nou.
- DANGER: Nu lansa cursul fără test plată → acces → email. Alternativă sigură: rulezi o simulare completă înainte de publicare.
- CONSENT: Cursul cere pași în ordine, testare și disciplină de operare; nu este un parcurs de improvizație.

**HOT / Decizie**
- CTA major recomandat: Înscrie-te la cursul LearnDash.
- CTA major alternativ, dacă există checkout direct: Plătește și rezervă locul.
- Microcopy pas următor: După înscriere primești confirmarea și pașii de pregătire.

Microcopy utilitar:
- Verificare: ai testat accesul ca utilizator nou?
- Checkpoint: ai un curs demo pentru test?
- Confirmare: fluxul plată → acces → email a fost verificat.

---

### 1.2. A2_DFY_CURS — Platformă LearnDash implementată complet

**COLD / Orientare**
- Primești platforma de cursuri instalată și configurată în hostingul tău.
- Structura cursului, accesul și testarea sunt pregătite în schema agreată.
- Ownership complet: sistemul rămâne în infrastructura ta.

**WARM / Evaluare**
- WARNING: Dacă setările de acces sunt greșite, apar blocaje pentru cursanți, refund-uri și suport manual. Acțiune sigură: accesul se configurează și se testează înainte de predare.
- DANGER: Fără domeniu, hosting și datele necesare, implementarea nu poate începe corect. Alternativă sigură: pregătești checklist-ul înainte de start.
- SCOPE: Clarificăm înainte ce este inclus, ce nu este inclus, ce furnizezi tu și ce decizii trebuie luate.

**HOT / Decizie**
- CTA major recomandat: Rezervă implementarea LearnDash.
- CTA major alternativ: Trimite cererea pentru platforma de cursuri.
- Microcopy pas următor: După cerere primești lista de pregătire și pașii de start.

Microcopy utilitar:
- Status: Pregătire / Integrare / Testare / Predare.
- Predare: sistem operabil + pași de administrare.
- Checklist: domeniu, hosting, acces, structură curs, Stripe.

---

### 1.3. B1_DIY_WOO — Administrare magazin WooCommerce

**COLD / Orientare**
- Devii administratorul magazinului tău WooCommerce.
- Înveți produse, comenzi, livrare, checkout și emailuri.
- Scop: magazin operabil, cu mai puține incidente.

**WARM / Evaluare**
- WARNING: Dacă variațiile, taxele sau livrarea sunt configurate greșit, poți pierde bani sau comenzi. Acțiune sigură: verifici fiecare setare printr-o comandă test.
- DANGER: Nu activa plățile fără produs de test și comandă completă. Alternativă sigură: simulezi checkout-ul înainte de vânzare.
- CONSENT: Magazinul cere rigoare: setări puține, clare și verificate.

**HOT / Decizie**
- CTA major recomandat: Înscrie-te la cursul WooCommerce.
- CTA major alternativ, dacă există checkout direct: Plătește și rezervă locul.
- Microcopy pas următor: După înscriere primești confirmarea și pașii de pregătire.

Microcopy utilitar:
- Simulare: comandă test completă.
- Checkpoint: emailul de confirmare ajunge corect?
- Verificare: produs → coș → plată → confirmare → livrare.

---

### 1.4. B2_DFY_WOO — Magazin WooCommerce implementat complet

**COLD / Orientare**
- Primești magazinul WooCommerce instalat și configurat în hostingul tău.
- Checkout-ul și plățile sunt configurate și verificate.
- Produsele pot fi încărcate dacă sunt furnizate în formatul agreat.

**WARM / Evaluare**
- WARNING: Pluginurile adăugate fără rol clar cresc riscul de conflict și instabilitate. Acțiune sigură: păstrăm un stack strict, cu funcții justificate.
- DANGER: Fără structură clară de produse, configurarea magazinului se blochează sau devine incoerentă. Alternativă sigură: pregătești datele produselor în format standardizat.
- SCOPE: Clarificăm cine furnizează datele produselor, ce se configurează, ce se testează și ce rămâne în afara pachetului.

**HOT / Decizie**
- CTA major recomandat: Rezervă implementarea magazinului.
- CTA major alternativ: Trimite cererea pentru magazin WooCommerce.
- Microcopy pas următor: După cerere primești checklist-ul pentru produse, acces și configurări.

Microcopy utilitar:
- Încărcare produse: format standardizat.
- Test: comandă completă.
- Status: Pregătire / Integrare / Testare / Predare.

---

### 1.5. C1_DIY_SITE — Administrare website WordPress

**COLD / Orientare**
- Devii administratorul website-ului tău WordPress.
- Înveți operare: pagini, structură, mentenanță, backup și securitate de bază.
- Scop: site stabil, administrabil și mai puțin fragil la schimbări.

**WARM / Evaluare**
- WARNING: Dacă faci update-uri fără backup și verificare, site-ul poate deveni instabil. Acțiune sigură: backup înainte, update-uri în ordine și verificare după.
- DANGER: Nu modifica live pagini, pluginuri sau setări fără backup și plan de revenire. Alternativă sigură: creezi plasă de siguranță înainte de schimbări.
- CONSENT: Administrarea WordPress cere rutină: nu apeși update la întâmplare și nu adaugi pluginuri fără rol clar.

**HOT / Decizie**
- CTA major recomandat: Plătește și rezervă locul.
- CTA major alternativ: Înscrie-te la cursul de administrare WordPress.
- Microcopy pas următor: După plată primești confirmarea, accesul la grup și pașii de pregătire.

Microcopy utilitar:
- Checkpoint: backup înainte de schimbări.
- Protocol: update policy — când actualizezi, cum actualizezi, ce verifici.
- Verificare: pagini, meniu, formular, email, backup, update-uri.

---

### 1.6. C2_DFY_SITE — Website WordPress implementat complet

**COLD / Orientare**
- Primești un website WordPress publicabil și predat operabil.
- Structura, paginile și configurările sunt realizate în scope-ul agreat.
- Securizarea de bază intră doar dacă este definită explicit în pachet.

**WARM / Evaluare**
- WARNING: Fără materialele tale minime — obiectiv, pagini, texte, imagini — proiectul se poate bloca. Acțiune sigură: pregătești brief-ul și materialele înainte de start.
- WARNING: Schimbările de direcție după start cresc timpul și costul. Acțiune sigură: blochezi direcția în brief; schimbările ulterioare devin extensii.
- SCOPE: Clarificăm ce pagini, configurări și livrabile intră; checkout, acces, email marketing sau funcții extra intră doar dacă sunt menționate explicit.

**HOT / Decizie**
- CTA major recomandat: Rezervă implementarea website-ului.
- CTA major alternativ: Trimite cererea pentru website.
- Microcopy pas următor: După cerere urmează brief-ul, materialele, build-ul, review-ul și lansarea.

Microcopy utilitar:
- Status: Brief / Build / Review / Launch.
- Brief minim: obiectiv + pagini + conținut.
- Predare: website publicabil + pași de administrare.

Notă de verificare:
- „Hosting inclus” se folosește doar dacă este confirmat în oferta concretă. Dacă nu este confirmat, se marchează ca Lipsă sau condiționat.

---

### 1.7. D2_DFY_EMAIL — Email marketing Mautic + SES implementat complet

**COLD / Orientare**
- Primești infrastructura de email marketing gata de operat.
- Mautic + SES sunt configurate într-un flux controlat.
- Scop: trimitere predictibilă, cu ownership și reguli clare.

**WARM / Evaluare**
- WARNING: Dacă DNS-ul nu este configurat corect, livrarea emailurilor poate deveni imprevizibilă. Acțiune sigură: verificăm SPF, DKIM, DMARC și domeniul de trimitere înainte de utilizare.
- DANGER: Nu trimite volum mare înainte de warm-up și reguli de trimitere. Alternativă sigură: începi controlat, cu volum progresiv și monitorizare.
- SCOPE: Implementarea include instalare, configurare și testare; strategia de conținut și campaniile comerciale intră doar dacă sunt definite separat.

**HOT / Decizie**
- CTA major recomandat: Rezervă configurarea email marketing.
- CTA major alternativ: Trimite cererea pentru Mautic + SES.
- Microcopy pas următor: După cerere urmează verificarea DNS, configurarea SES, configurarea Mautic, testarea și predarea.

Microcopy utilitar:
- Scanare DNS: SPF / DKIM / DMARC.
- Test: livrare de bază în inbox.
- Status: DNS / SES / Mautic / Test / Predare.

---

## 2) Dicționar de label-uri tehnice și aliasuri controlate

Regulă principală:
Termenul public normal rămâne termenul principal. Aliasul tehnic sau futurist poate apărea doar ca label secundar, decor funcțional sau microcopy contextual.

Nu se folosesc aliasuri futuriste în:
- CTA major;
- formular;
- checkout;
- navigație critică;
- mesaje de eroare;
- confirmări;
- instrucțiuni care pot schimba o acțiune.

### 2.1. Termeni blocați în limbaj public

Acești termeni rămân convenționali în interfață și în copy public:

- Formular
- Înscriere
- Plată
- Checkout
- Buton
- Pași
- Confirmare
- Eroare
- Contact
- Comandă
- Livrare
- Acces
- Meniu
- Pagină

Motiv:
Sunt termeni critici pentru înțelegere, acțiune și reducerea fricțiunii. Nu se înlocuiesc cu aliasuri.

### 2.2. Termeni permiși ca limbaj editorial

Acești termeni pot fi folosiți în copy, dacă sunt clari în context:

- Protocol = mod de lucru în pași.
- Checkpoint = punct de verificare.
- Stack = setul de instrumente folosite.
- Scope = ce intră și ce nu intră.
- Status = stadiul curent al procesului.
- Predare = momentul în care sistemul este explicat și poate fi operat.

Regulă:
La prima apariție, termenul tehnic se clarifică scurt.

Exemplu:
„Lucrezi după un protocol: o ordine clară de pași, verificări și limite.”

### 2.3. Aliasuri permise doar secundar

Aliasurile pot apărea ca label vizual, nu ca text principal:

| Termen public | Alias permis secundar | Utilizare permisă |
|---|---|---|
| Formular | Portal | label decorativ lângă formular, niciodată ca singur termen |
| Pași | Protocol | secțiuni de proces, checklist-uri, roadmap |
| Verificare | Checkpoint | microcopy de progres |
| Lansare | Activare publică | label secundar în context de publicare |
| Campanie | Orchestrare | doar în context Mautic, explicat imediat |
| Segment | Cohortă | doar în context de email marketing, explicat imediat |

### 2.4. Exemple corecte

Corect:
- „Completează formularul de cerere.”
- „Plătește și rezervă locul.”
- „Continuă cu lista de verificare.”
- „Checkpoint: ai testat formularul de contact?”
- „Protocol: backup înainte de update.”

Incorect:
- „Deschide Portalul.”
- „Activează Traiectoria.”
- „Deblochează Segmentul 1.”
- „Apasă Comutatorul.”
- „Intră în Depozit.”

### 2.5. Regula de decizie

Dacă un termen cere explicație ca utilizatorul să poată acționa, termenul nu se folosește ca text principal.

---

## 3) Exemple de microcopy permis / interzis pentru interfață

Această secțiune conține exemple reutilizabile pentru butoane, formulare, mesaje de stare și instrucțiuni scurte. Regulile vizuale sunt în `manual-identitate-vizuala.md`; tonul pe contexte este în `ghid-editorial.md`.

### 3.1. Exemple potrivite pentru interfață

- „Vezi dacă acest curs ți se potrivește”
- „Continuă cu lista de verificare”
- „Trimite cererea”
- „Plătește și rezervă locul”
- „Verifică formularul înainte de publicare”
- „Fă backup înainte de update”
- „Corectează câmpurile marcate”
- „După plată primești confirmarea și pașii de acces”

### 3.2. Exemple nepotrivite pentru interfață

- „Nu rata”
- „Ultima șansă”
- „Dacă nu intri acum, nu ești pregătit”
- „Apasă aici ca să nu pierzi”
- „Transformă-ți viața cu WordPress”
- „Scapă definitiv de toate problemele tehnice”

### 3.3. Exemple rezervate doar pentru contexte tehnice interne

- coduri de zonă: `ZONA-UNDE`, `ZONA-CUM`, `ZONA-START`
- identificatori tehnici: `zona-unde`, `zona-cum`, `zona-start`
- token-uri de design și stare UI

Regulă: un termen tehnic intern poate apărea în documentație, clase, token-uri sau label decorativ secundar, dar nu devine text principal pentru o acțiune critică.

---

## 4) Microcopy pentru CTA-uri

Regulă principală:
CTA-ul spune acțiunea reală pe care o face utilizatorul.

CTA major permis:
- înscriere;
- plată;
- rezervare;
- cerere calificată;
- listă de așteptare.

CTA soft permis:
- orientare;
- navigare;
- comparare;
- continuare către secțiunea următoare.

Interzis:
- „nu rata”;
- „ultimele locuri”;
- „acum sau pierzi”;
- countdown-uri agresive;
- formulări care folosesc presiune în loc de claritate.

Constrângerile factuale se comunică separat de CTA:
- dată de start;
- capacitate grupă;
- stadiu ofertă;
- preț de lansare, dacă este documentat.

---

### 4.1. CTA major — DIY

Pentru pagini DIY:
- Înscrie-te la curs
- Plătește și rezervă locul
- Rezervă locul în grupa live
- Continuă spre plată

Pentru C1_DIY_SITE:
- Plătește și rezervă locul

Microcopy sub CTA:
- După plată primești confirmarea și pașii de pregătire.
- Accesul și detaliile de participare sunt trimise după confirmare.
- Replay-ul și grupul sunt incluse conform ofertei.

---

### 4.2. CTA major — DFY

Pentru pagini DFY deschise:
- Rezervă implementarea
- Plătește și rezervă serviciul
- Trimite cererea calificată
- Cumpără serviciul

Pentru DFY pre-open:
- Intră pe lista de așteptare
- Anunță-mă când se deschide oferta
- Trimite interesul pentru această implementare

Microcopy sub CTA:
- După trimitere primești pașii de pregătire.
- Cererea clarifică dacă proiectul se potrivește cu scope-ul ofertei.
- Rezervarea nu înlocuiește materialele și deciziile necesare pentru start.

---

### 4.3. CTA soft — Orientare

Se folosesc înainte de Decizie, fără stil de Primary CTA:

- Vezi dacă ți se potrivește
- Vezi ce primești concret
- Vezi cum funcționează
- Continuă spre pașii cursului
- Continuă spre procesul de implementare
- Compară DIY cu DFY

---

### 4.4. CTA soft — Evaluare

Se folosesc pentru navigare și clarificare:

- Vezi ce intră și ce nu intră
- Verifică prerechizitele
- Compară opțiunile
- Vezi riscurile prevenite
- Continuă spre garanție
- Continuă spre întrebările finale

---

### 4.5. CTA formular

- Trimite cererea
- Trimite formularul
- Confirmă datele
- Continuă
- Revino la formular
- Corectează câmpul marcat

---

### 4.6. CTA după eroare

- Corectează și retrimite
- Revino la câmpul lipsă
- Verifică adresa de email
- Încearcă din nou

Regulă:
Nu se folosește `DANGER` pentru validări de formular. Validările reparabile folosesc `ERROR`.

---

### 4.7. CTA după confirmare

- Vezi pasul următor
- Revino la site
- Deschide emailul de confirmare
- Pregătește checklist-ul
- Continuă cu instrucțiunile primite

## 5) Pattern-uri SEM pentru mesaje de risc, limită și acțiune

### 5.1. WARNING

Rol:
Atenționează asupra unui risc real, dar acțiunea rămâne permisă dacă utilizatorul urmează măsuri clare.

Format:
- Condiție: dacă faci X.
- Consecință: se poate întâmpla Y.
- Acțiune sigură: fă Z înainte.

Template:
WARNING: Dacă [condiție], [consecință]. Acțiune sigură: [măsură concretă].

Exemplu:
WARNING: Dacă faci update-uri fără backup și verificare, site-ul poate deveni instabil. Acțiune sigură: backup înainte, update-uri în ordine și verificare după.

---

### 5.2. DANGER

Rol:
Oprește o acțiune cu risc major: pierdere de date, downtime, compromitere, reputație afectată sau cost mare.

Format:
- NU face X.
- Motiv: risc major Y.
- Alternativă sigură: fă Z.

Template:
DANGER: Nu [acțiune riscantă]. Motiv: [risc major]. Alternativă sigură: [măsură concretă].

Exemplu:
DANGER: Nu modifica live pluginuri sau setări fără backup. Motiv: poți strica funcții importante și poți rămâne fără variantă clară de revenire. Alternativă sigură: backup înainte și plan minim de revert.

---

### 5.3. CONSENT

Rol:
Clarifică ce acceptă utilizatorul când alege o ofertă sau un proces.

Format:
- Ce primește.
- Ce nu primește.
- Ce responsabilitate rămâne la el.

Template:
CONSENT: Alegând [oferta], primești [ce primește]. Nu primești [ce nu primește]. Pentru rezultat, ai nevoie de [responsabilitate utilizator].

Exemplu:
CONSENT: Alegând cursul DIY, primești ghidare, structură și checkpoint-uri. Nu primești website făcut complet pentru tine. Pentru rezultat, ai nevoie să aplici pe propriul site între sesiuni.

---

### 5.4. SCOPE

Rol:
Fixează limitele ofertei înainte de decizie.

Format:
- Ce intră.
- Ce nu intră.
- Ce trebuie să aduci.
- Ce decizii sunt obligatorii.

Template:
SCOPE: Include [includeri]. Nu include [excluderi]. Ai nevoie de [cerințe]. Decizii obligatorii: [decizii].

Exemplu:
SCOPE: Include pagini, meniu, formular, email profesional, backup și update-uri controlate. Nu include design premium, dezvoltare custom sau administrare făcută în locul tău. Ai nevoie de acces la domeniu și hosting. Decizii obligatorii: domeniu, hosting, structură minimă de pagini, ritm de aplicare.

## 6) Mapare COLD / WARM / HOT pe zone de pagină

### 6.1. COLD = Orientare / ZONA-UNDE

Rol:
- clarifică oferta;
- arată pentru cine este;
- spune rezultatul urmărit;
- permite CTA soft de orientare.

Nu conține:
- CTA major;
- presiune comercială;
- risc tehnic extins;
- detalii de plată.

Exemple CTA soft:
- Vezi dacă ți se potrivește
- Vezi ce primești concret
- Continuă spre pași

---

### 6.2. WARM = Evaluare / ZONA-CUM

Rol:
- explică mecanismul;
- clarifică riscuri;
- fixează limite;
- arată ce trebuie pregătit;
- compară DIY cu DFY.

Conține:
- WARNING;
- DANGER;
- SCOPE;
- CONSENT;
- FAQ de evaluare;
- comparații;
- prerechizite.

Nu conține:
- CTA major;
- proof sub formă de presiune;
- urgență artificială.

---

### 6.3. HOT = Decizie / ZONA-START

Rol:
- clarifică pasul final;
- reduce fricțiunea;
- prezintă garanția;
- răspunde la întrebările de plată, acces, confirmare și start;
- include CTA major unic.

Conține:
- CTA major;
- microcopy de risc;
- garanție;
- FAQ de decizie;
- confirmare pas următor.

Nu conține:
- informații noi de scope;
- promisiuni noi;
- presiune artificială.
