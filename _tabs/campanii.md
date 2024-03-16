---
icon: fas fa-clock
title: Campanii / Automatizări
categorie: [campanii]
order: 7
---

Specific la Mautic este: campaniile care au deja contacte în ele nu pot fi modificate.

De fapt ele pot fi modificate, dar este foarte recomandat să nu o faci, sau să te limitezi doar la unele puţine schimbări.

### Cum creez o campanie ce trimite o serie de 5 emailuri?
Presupunem că ai:
* 5 emailuri pe care le poţi deja trimite ca o serie de emailuri
  * sunt deja create în Mautic
* un formular (sau mai multe) prin care oamenii se pot înscrie să primească emailurile
* un segment în care vei adăuga contactele cât timp primesc emailurile (numit spre ex SerieEmailuri)

Dacă ai cele de sus, atunci în acest moment poţi crea campania:
1. Ca sursă alegi formularul (sau formularele)
1. Poţi înlătura roboţii şi cei cu adrese de email invalide
1. Verifică dacă este deja înscris să primească seria de emailuri
   * asta este o condiţie: _Verifică segmentul_ şi alege segmentul în care ar trebui să fie contactele care primesc seria de emailuri
   * dacă primeşte deja seria de emailuri, atunci îi poţi trimite un email cu "Eşti deja înscris" şi atât. **Nu-l scoţi din campanie** deoarece el este în campanie deja şi dorim să rămână.
1. Îl adaugi în segmentul corespunzător. Alternativ îi adaugi şi o etichetă (spre ex SerieEmailuri).
1. Adaugi acţiunile de trimitere a emailurilor.
1. La final adaugi o acţiune de modificare a segmentelor şi scoţi contactul din segment.
1. Înlătură contactul explicit din campanie, deoarece el a fost adăugat în campanie de formular.

Şi poţi publica campania, ca oamenii să se înscrie şi să primească emailurile.

### Cum extind seria de emailuri cu alte emailuri?
Campania originală care trimite seria de emailuri rămâne neschimbată! **Este important!**

Creezi un segment nou (numit spre ex SerieEmailuri02) şi o campanie nouă:
1. Ca sursă alegi segmentul nou creat
1. Adaugi acţiunile de trimitere a emailurilor noi.
1. La final adaugi o acţiune de modificare a segmentelor şi scoţi contactul din segment.
1. Important: nu înlătura contactul explicit din campanie, deoarece el a fost adăugat în campanie de segment şi la pasul anterior îl scoatem din segment => implicit va fi scos şi din campanie.

Poţi publica campania şi o poţi testa.

Încă un pas este necesar!

În campania care trimite primele emailuri, este nevoie să modificăm penultima acţiune care scoate contactul din segment. Aici va fi nevoie să-i spunem să-l şi adauge la segmentul nou.

### Cum trimit următoarele emailuri din serie la cei care au parcurs prima serie de emailuri?
Aici este nevoie ca prim pas să identificăm contactele "care au parcurs prima serie de emailuri". Dacă ai adăugat o etichetă acestor contacte, atunci îi putem identifica astfel:
1. creez un segment folosind acest filtru
1. are eticheta "SerieEmailuri" (sau numele care l-ai dat tu etichetei)
1. nu este in segmentul "SerieEmailuri" (este nevoie ca aceste contacte să nu fie încă în prima serie de emailuri ci să fi terminat deja seria)

Aştepţi să se populeze segmentul.

Apoi pe aceştia îi adaugi în segmentul SerieEmailuri02.
* dacă sunt sub 100 de contacte: vezi aici
* dacă sunt peste 100 de contacte, vezi aici

Imediat ce s-a terminat operaţia, poţi şterge segmentul cu filtru.

### Cum modific o campanie în care sunt deja contacte?
Acţiunile în sine ale unei campanii le poţi modifica, adică:
* poţi specifica alt email să fie trimis
* poţi spune ca un email să fie trimis la altă oră
* poţi specifica altă etichetă să fie adăugată sau înlăturată
* poţi specifica ca contactul să fie adăugat la alt segment
* poţi schimba linkul din condiţia care verifică vizitarea unui link

Ceea ce să **NU** faci este:
* să nu adaugi acţiuni în plus, nici condiţii, nici decizii
* să nu ştergi acţiuni, nici condiţii, nici decizii
* nici traseul printre ele, adică ordinea de executare

#### Dar cum poate fi "modificată" o campanie în care sunt deja contacte?

##### Dacă sursa campaniei este un formular (sau mai multe)
1. Faci o clonă a campaniei originale - poţi adăuga un "-2" la nume.
1. Modifici campania "-2" aşa cum doreşti, dar **înainte de a o salva**:
   1. nu publica campania
   1. neaparat este nevoie **să modifici sursa** campaniei să fie un formular nefolosit
   1. acum poţi publica campania
   1. şi o poţi testa
1. Preferabil: alegi un moment în care nu se înscriu persoane
1. Modifici sursa campaniei originale să fie un formular nefolosit => salvezi campania
1. Imediat modifici sursa campaniei "-2" pentru ca să fie formularele care erau folosite pentru campania originală

Gata:
* pentru contactele care sunt deja în campania originală, se vor executa toate acţiunile din campania respectivă
* contactele noi vor intra în campania nouă şi vor fi executate noile acţiuni

##### Dacă sursa campaniei este un segment (sau mai multe)
Tot în ideea de mai sus este nevoie de gândit, doar că va fi nevoie să clonăm şi segmentul.

### Capcana de la acţiunea "Înlatur din campania aceasta"

[Vezi detaliat aici]({% post_url 2024-03-11-campanii-capcana-inlatura-din-campanie %})

### Capcană: Acţiunea "Înlatură din segment"
Se aplica atunci cand: segmentul are filtru.

<<<<<<< HEAD
[Vezi detaliat aici]({% post_url 2024-03-14-campanii-capcana-inlatura-din-segment %})
=======
[Vezi detaliat aici]({% post_url 2024-03-14-campanii-capcana-inlatura-din-segment.md %})
>>>>>>> a08d6c5548d195609ec930e41b955d33385ac8ec

### Capcană: Modific paşii campaniei în care sunt contacte
Urmarea este: contactele se blochează în campanie, în funcţie de pasul la care se află şi ce anume modificăm în campanie.

### Capcană: Las paşi neconectaţi în campanie
Toţi paşii neconectaţi vor fi executaţi imediat ce contactul intră în campanie.

### Postări despre campanii

{% include posts_by_categorie.html %}
