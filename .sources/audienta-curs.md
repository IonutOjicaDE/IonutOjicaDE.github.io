# AUDIENTA CURS V1

Segmente: A1_DIY_CURS, A2_DFY_CURS  
Domeniu: CURS / LearnDash

Se citește împreună cu `audienta.md`.
Regulile transversale despre calificare comercială, DIY vs DFY, trasee de pagină, limbaj public și redirecționare între oferte rămân definite în `audienta.md`.
Acest fișier conține specificul domeniului CURS și al segmentelor A1_DIY_CURS / A2_DFY_CURS.

---

## 1) Rolul domeniului în arhitectura ofertelor

Domeniul CURS acoperă sistemele LearnDash în care produsul principal este accesul la conținut educațional: cursuri, lecții, chestionare, progres, acces după plată și confirmări.

În arhitectura ofertelor, CURS are două forme:

- **A1_DIY_CURS:** instruire și proceduri pentru administrare proprie.
- **A2_DFY_CURS:** platformă de cursuri implementată complet, în hostingul clientului.

---

## 2) Job-to-be-done specific domeniului

„Plată → acces → progres → confirmări, fără blocaje.”

Clientul vrea o platformă de cursuri care nu se rupe în punctele critice: structură, acces, testare, emailuri esențiale și predare / operare.

---

## 3) Segmente incluse

- **A1_DIY_CURS:** administrare platformă de cursuri LearnDash.
- **A2_DFY_CURS:** platformă de cursuri LearnDash implementată complet.

---

## 4) Costul inacțiunii

### A1_DIY_CURS

Dacă amână:

- rămâne dependent de altcineva pentru structură, acces și testare;
- crește riscul să lanseze fără simulare completă și să blocheze cursanți;
- pierde timp în încercări fragmentate, fără mod de lucru.

Cost real al inacțiunii:

- autonomie amânată;
- incidente de acces și suport manual;
- lansare întârziată sau compromisă.

### A2_DFY_CURS

Dacă amână:

- rămâne fără un sistem operabil plată → acces → emailuri esențiale;
- continuă să lucreze cu o configurație improvizată sau incompletă;
- păstrează dependența și incertitudinea privind corectitudinea implementării.

Cost real al inacțiunii:

- timp pierdut până la lansare;
- risc de refund-uri, blocaje și suport manual;
- lipsă de ownership clar asupra sistemului.

---

## 5) Segment DIY: A1_DIY_CURS

### Fișă de audiență

- **Domeniu / mod de livrare:** [Confirmat] CURS / DIY
- **Ce cumpără de fapt:** [Confirmat] Instruire și proceduri ca să devină administrator LearnDash.
- **Problema concretă:** [Confirmat] Vrea să poată administra singur platforma de cursuri fără să blocheze accesul, progresul sau lansarea.
- **Ce trăiește acum:** [Confirmat] Depinde de altcineva pentru structură, acces și testare; riscă să lanseze fără simulare completă; pierde timp în încercări fragmentate fără mod de lucru.
- **Nivel de conștientizare a problemei:** [Propunere] Mediu spre ridicat.
- **Nivel de urgență:** [Propunere] Mediu spre ridicat; crește înainte de lansare.
- **Capacitate de cumpărare:** [Propunere] Poate susține investiția pentru curs și o vede ca investiție în autonomie operațională pentru platforma de cursuri, nu ca simplu cost pentru informație.
- **Disponibilitate de efort:** [Propunere] Acceptă aplicare între sesiuni și înțelege că rezultatul depinde de lucru efectiv pe propria platformă sau pe un mediu de test.
- **Motivație de cumpărare acum:** [Propunere] Devine ridicată când are un curs de lansat, cursanți de înscris, acces de configurat sau a avut deja blocaje în fluxul plată → acces → email.
- **Semnale de buyer intent:** [Propunere] Întreabă despre LearnDash, structură curs, acces cursanți, Stripe, testare, replay, pași de pregătire sau diferența DIY vs DFY.
- **Semnale de necalificare:** [Propunere] Vrea platforma făcută complet pentru el, nu are timp de aplicare, nu poate plăti, nu are structură minimă de curs sau caută doar tutoriale gratuite despre pluginuri.
- **Ce a încercat deja:** [Lipsă]
- **Ce nu i-a mers:** [Lipsă]
- **Rezultatul dorit:** [Confirmat] Să poată opera singur cursuri, lecții, chestionare, acces și testare.
- **Cum arată succesul pentru el:** [Confirmat] Sistem cu: plată → acces → progres → confirmări, fără blocaje.
- **Frica dominantă:** [Confirmat] „Îmi blochez cursanții / îmi stric lansarea.”
- **Frustrarea dominantă:** [Propunere] Nu are control clar și nu are o rutină de testare.
- **Ce îl face să amâne:** [Confirmat] Frica de complexitate, de greșeală și de lipsă de timp.
- **Ce crede greșit / unde se confundă:** [Propunere] Că trebuie să „învețe pluginul”, nu operarea completă; că poate lansa fără simulare completă.
- **Limbaj explicit disponibil în documente:** [Confirmat] platformă de cursuri, acces, testare, structură, lansare, progres, chestionare.
- **Verbatim real de colectat ulterior:** [Lipsă]
- **Ce trebuie să audă ca să simtă relevanță:** [Propunere] „Înveți operare, în ordine, cu test și checklist.”
- **CTA major potrivit:** [Confirmat] Cumpărare / înscriere directă prin checkout: https://pro.ionutojica.ro/checkout-link/?products=779:1

### Funnel A1

- **S0:** Ads / YouTube / articole „cum instalezi platformă de curs”.
- **S1 (landing DIY curs):** alegere clară: „Devii administrator LearnDash”.
- **S2:** parcursul de învățare + ce vei ști să faci concret.
- **S3:** timp, prerechizite, greșeli comune, ce este și ce nu este cursul.
- **S4:** înscriere / plată / acces.
- **S5:** confirmare + cum te pregătești.
- **S6:** vânzare / acces în platformă.
- **S7:** post-conversie: operare și mentenanță + ofertă DFY dacă vrea execuție.

---

## 6) Segment DFY: A2_DFY_CURS

### Fișă de audiență

- **Domeniu / mod de livrare:** [Confirmat] CURS / DFY
- **Ce cumpără de fapt:** [Confirmat] LearnDash instalat și configurat complet în hostingul lui, cu sistem operabil și structură scalabilă.
- **Problema concretă:** [Confirmat] Vrea platforma gata, corect implementată, fără dependență și fără incertitudine legată de corectitudinea tehnică.
- **Ce trăiește acum:** [Confirmat] Nu are un sistem operabil plată → acces → emailuri esențiale; lucrează cu o configurație improvizată sau incompletă; păstrează dependența și incertitudinea.
- **Nivel de conștientizare a problemei:** [Propunere] Ridicat pe rezultat, mediu pe cauzele tehnice.
- **Nivel de urgență:** [Propunere] Ridicat când lansarea depinde de platformă.
- **Capacitate de cumpărare:** [Propunere] Poate susține investiția pentru implementare DFY și o vede ca investiție în lansarea / stabilizarea unei platforme operabile, nu ca simplă instalare de plugin.
- **Disponibilitate de colaborare:** [Propunere] Poate furniza materiale, accesuri și decizii la timp, în formatul agreat.
- **Motivație de cumpărare acum:** [Propunere] Devine ridicată când are un curs de lansat, o audiență deja pregătită, presiune de calendar sau blocaje în acces, plată, emailuri și organizarea cursurilor.
- **Semnale de buyer intent:** [Propunere] Întreabă despre hosting, LearnDash, Stripe, structură curs, acces cursanți, testare, predare, timeline, scope sau ce trebuie să trimită înainte de start.
- **Semnale de necalificare:** [Propunere] Nu are structură curs, nu poate furniza conținut, nu are accesuri, nu poate plăti, vrea implementare fără brief sau se așteaptă la strategie completă de lansare inclusă implicit.
- **Ce a încercat deja:** [Lipsă]
- **Ce nu i-a mers:** [Lipsă]
- **Rezultatul dorit:** [Confirmat] Platformă funcțională în hostingul lui, cu ownership clar și sistem verificat.
- **Cum arată succesul pentru el:** [Confirmat] Plată → acces → emailuri esențiale funcționale; cursuri structurabile și scalabile.
- **Frica dominantă:** [Confirmat] „Rămân dependent / nu știu dacă e făcut corect.”
- **Frustrarea dominantă:** [Propunere] Improvizația tehnică și lipsa de ownership clar.
- **Ce îl face să amâne:** [Confirmat] Frica de dependență, risc și complexitate.
- **Ce crede greșit / unde se confundă:** [Propunere] Că implementarea înseamnă doar instalare, nu și structură, testare și predare operabilă.
- **Limbaj explicit disponibil în documente:** [Confirmat] hostingul tău, ownership, sistem plată → acces → emailuri, predare, structură scalabilă.
- **Verbatim real de colectat ulterior:** [Lipsă]
- **Ce trebuie să audă ca să simtă relevanță:** [Propunere] „Primești sistemul în infrastructura ta, cu pași verificați și predare clară.”
- **CTA major potrivit:** [Confirmat] Cumpărare / rezervare serviciu prin checkout: https://pro.ionutojica.ro/checkout-link/?products=780:1

### Funnel A2

- **S0:** trafic din „vreau platformă de curs” / referral.
- **S1 (landing DFY curs):** „Primești platforma instalată în hostingul tău”.
- **S2:** faze de implementare + livrabile.
- **S3:** ce trebuie să ai pregătit: acces hosting, Stripe, structură conținut.
- **S4:** cumpărare / rezervare serviciu prin checkout.
- **S5:** confirmare + programare / estimare + cerințe.
- **S6:** ofertare + contract + kickoff.
- **S7:** predare + ghid scurt de operare + mentenanță opțională.

---

## 7) Criterii de calificare

### A1_DIY_CURS

- Are deja website WordPress funcțional sau poate instala WordPress în hostingul lui.
- Acceptă disciplină de pași și testare.
- Are conținut minim: măcar schiță de structură curs.
- Are sau vrea să aibă o platformă LearnDash pe care o va administra efectiv.
- Are disponibilitate reală de aplicare între sesiuni.
- Poate susține investiția financiară pentru curs.
- Înțelege că DIY înseamnă învățare și aplicare proprie, nu platformă construită complet pentru el.
- Are un motiv concret pentru autonomie: structură curs, lecții, acces, testare, progres, emailuri sau verificări înainte de lansare.
- Acceptă să lucreze după pași, nu din tutoriale amestecate sau pluginuri instalate din impuls.

### A2_DFY_CURS

- Hosting WordPress existent sau acceptă configurare în hostingul lui.
- Are sau poate crea cont Stripe și poate furniza accesul necesar.
- Poate furniza structura cursului și conținutul într-un format agreat.
- Acceptă limită de scope.
- Are un proiect real de platformă de cursuri, nu doar o idee vagă.
- Poate susține investiția financiară pentru implementare DFY.
- Acceptă fazele proiectului: pregătire, integrare, testare, predare.
- Poate lua decizii despre structură curs, acces, plăți, emailuri și reguli de înscriere.
- Înțelege că DFY înseamnă implementare tehnică și predare operabilă, nu strategie completă de lansare, copywriting sau marketing, dacă acestea nu sunt definite separat.

---

## 8) Semnale de necalificare temporară

### A1_DIY_CURS

Nu este prioritar pentru A1_DIY_CURS acum dacă:

- vrea platforma de cursuri implementată complet pentru el;
- nu are timp sau disponibilitate să aplice între sesiuni;
- nu are măcar o structură minimă de curs sau nu vrea să o clarifice;
- nu poate lucra cu hostingul, WordPressul sau LearnDash și nu vrea să ia aceste decizii;
- vrea doar să urmărească live-urile, fără să aplice pe propria platformă;
- nu poate susține investiția financiară;
- nu vede încă lansarea / organizarea cursului ca suficient de importantă pentru a acționa acum.

### A2_DFY_CURS

Nu este prioritar pentru A2_DFY_CURS acum dacă:

- nu are structură minimă de curs;
- nu poate furniza conținutul într-un format clar;
- nu are acces la domeniu / hosting / Stripe și nu poate obține aceste accesuri;
- vrea implementare fără brief, fără decizii și fără validări;
- schimbă constant direcția proiectului înainte de start;
- nu poate susține investiția financiară pentru DFY;
- se așteaptă ca implementarea tehnică să includă automat strategie de lansare, campanii, funnel complet sau conținut comercial.

---

## 9) Semnale de buyer intent

### A1_DIY_CURS

- Întreabă despre LearnDash, structură de curs, lecții, chestionare, progres sau acces cursanți.
- Întreabă despre cum poate testa singur fluxul plată → acces → email.
- Întreabă despre ce trebuie pregătit înainte de curs.
- Întreabă despre replay, ritm de aplicare sau diferența DIY vs DFY.
- Are o lansare apropiată, cursanți de înscris sau blocaje reale în platformă.

### A2_DFY_CURS

- Întreabă despre hosting, LearnDash, Stripe, structură curs, acces cursanți, testare sau predare.
- Întreabă despre timeline, scope, ownership sau ce trebuie să trimită înainte de start.
- Are structură de curs sau conținut aproape pregătit.
- Are presiune de calendar pentru lansare.
- Vrea sistemul implementat în infrastructura lui, fără dependență neclară.

---

## 10) Direcționare recomandată

### A1_DIY_CURS

- Dacă vrea să învețe să administreze singur: A1_DIY_CURS.
- Dacă vrea platforma făcută complet pentru el: A2_DFY_CURS.
- Dacă nu are încă structură de curs: conținut gratuit / listă de educare / material de pregătire.
- Dacă nu are timp de aplicare: A2_DFY_CURS sau amânare.
- Dacă nu poate susține investiția pentru curs: conținut gratuit / listă de educare.
- Dacă vrea strategie completă de lansare, campanii, funnel sau copy: ofertă separată, doar dacă există documentată.

### A2_DFY_CURS

- Dacă vrea execuție completă: A2_DFY_CURS.
- Dacă vrea să învețe să administreze singur: A1_DIY_CURS.
- Dacă nu are structură minimă de curs: material de pregătire / listă de educare.
- Dacă nu are accesuri sau nu poate lua decizii: amânare până la clarificare.
- Dacă nu are buget DFY: A1_DIY_CURS sau amânare.
- Dacă vrea strategie de lansare / funnel / copy: ofertă separată, doar dacă există documentată.

---

## 11) Eșecuri și prevenire

### A1_DIY_CURS

1. **Eșec:** cumpără DIY, dar se așteaptă la platformă făcută complet pentru el.  
   **Prevenire:** pagina și formularul clarifică diferența dintre învățare DIY și execuție DFY.

2. **Eșec:** nu are structură minimă de curs și se blochează în aplicare.  
   **Prevenire:** se cere schiță de structură curs înainte de înscriere sau se recomandă material de pregătire.

3. **Eșec:** lansează fără simulare completă plată → acces → email.  
   **Prevenire:** se folosește mesaj `DANGER` și checklist de testare înainte de lansare.

4. **Eșec:** tratează LearnDash ca plugin izolat, nu ca sistem de operare a cursului.  
   **Prevenire:** mesajele insistă pe structură, acces, progres, testare și confirmări.

### A2_DFY_CURS

1. **Eșec:** clientul nu livrează structura cursului și conținutul minim.  
   **Prevenire:** formularul și kickoff-ul cer materialele obligatorii înainte de start.

2. **Eșec:** accesul la hosting / WordPress / Stripe întârzie proiectul.  
   **Prevenire:** checklist pre-kickoff și confirmare explicită a accesurilor necesare.

3. **Eșec:** clientul schimbă direcția proiectului după începerea implementării.  
   **Prevenire:** direcția se blochează după brief; schimbările ulterioare devin extensii.

4. **Eșec:** clientul crede că implementarea include automat strategie de lansare, copywriting sau campanii.  
   **Prevenire:** `SCOPE` clar: implementare tehnică și predare operabilă; strategia intră doar dacă este ofertată separat.

---

## 12) Implicații pentru pagini, mesaje și formulare

### Pagini

- Pagina A1 trebuie să clarifice devreme că utilizatorul învață operare aplicată, nu primește platforma făcută complet.
- Pagina A2 trebuie să pună în Orientare ownership-ul și implementarea în hostingul clientului.
- În Evaluare trebuie să apară riscul major: acces greșit, testare lipsă, cursanți blocați, suport manual.
- În Decizie CTA-ul major rămâne unul singur: înscriere / plată pentru A1, rezervare / cerere pentru A2.

### Mesaje

- A1 COLD: „Devii administratorul platformei tale de cursuri.”
- A1 WARM: `DANGER`: „Nu lansa cursul fără test plată → acces → email.”
- A1 HOT: „Înscrie-te la cursul LearnDash.”
- A2 COLD: „Primești platforma de cursuri instalată și configurată în hostingul tău.”
- A2 WARM: `SCOPE`: se clarifică ce este inclus, ce nu este inclus, ce furnizează clientul și ce decizii trebuie luate.
- A2 HOT: „Rezervă implementarea LearnDash.”

### Formulare

- A1: confirmă existența unei structuri minime de curs, disponibilitatea de aplicare și accesul la WordPress / hosting.
- A2: colectează domeniu, hosting, Stripe, structură curs, conținut disponibil, decizii despre acces și emailuri.
- Ambele: includ întrebare explicită despre alegerea DIY vs DFY pentru a preveni cumpărarea formatului greșit.
