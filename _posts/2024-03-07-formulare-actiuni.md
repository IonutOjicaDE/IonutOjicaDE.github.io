---
icon: fas fa-brands fa-wpforms
title: După completarea formularului, să ...
categories: [formulare]
tags: [formulare,forms,actiuni,inwork,novideo]
author: ionut
---

## În Mautic putem crea 2 tipuri de formulare:
* formulare de campanie (porneşte o campanie pentru fiecare înscris)
* formulare autonome (fac acţiuni independent de campanii şi liste)

![Adăugăm un nou formular](/assets/img/formulare/2024-03-08-formulare-adaug.png){: w='601' h='359' .shadow .rounded-10 }
_Atunci când adăugăm un nou formular, putem alege tipul: **pentru campanie**, cu mai puţine acţiuni sau **autonom**, cu toate acţiunile disponibile_

### Formulare de campanie
Dacă avem acţiuni mai complexe, care includ condiţii sau programarea unor evenimente în viitor, atunci este nevoie de o automatizare/campanie şi vom alege un formular de campanie (varianta verde din poză). Acest tip de formular are doar puţine acţiuni diponibile - şi din acest motiv nu este potrivit fără o automatizare/campanie care să pornească la completarea formularului.

### Formulare autonome

Când cineva se înscrie printr-un formular, putem face ca Mautic să facă anumite acţiuni cu acele contacte, fără a fi nevoie de automatizări/campanii. Prin formularele autonome (varianta albastră din poză) sunt mai multe acţiuni disponibile. Dacă nu dorim neapărat să creăm o automatizare/campanie, acest tip de formular este cel potrivit.

În continuare ne vom concentra pe acţiunile disponibile unui **formular autonom**:

## <i class='fas fa-brands fa-wpforms'></i> Cum să primesc un email când cineva completează un formular?
Atunci când eu, ca administrator a Mautic, doresc să fiu informat automat când cineva a completat un formular, avem următoarele acţiuni la dispoziţie:
* `Trimite rezultatele formularului`
  * cu această acţiune putem trimite toate intrările din formular prin email
* `Trimite email la utilizator`
  * pentru această acţiune putem trimite prin email doar acele informaţii care sunt salvate în dreptul contactului

### Trimite rezultatele formularului
Elementele ferestrei sunt destul de clar descrise în Mautic:
![Trimitem rezultatele formularului](/assets/img/formulare/2024-04-23-trimite-rezultatele-formularului.png){: w='600' h='1058' .shadow .rounded-10 }

Totuşi câteva menţiuni putem face:
* nu avem nevoie de un email creat în prealabil, dar putem alege un email pe care să-l folosim ca şablon
* avem posibilitatea să trimitem email nu doar utilizatorului, ci şi contactului, chiar şi altor adrese de email, la cc sau bcc
* nu este nevoie să compunem noi mesajul care să conţină valorile formularului, ci asta va face Mautic automat: va include toate intrările din formular
* putem personaliza subiectul emailului şi să adăugăm un mesaj care va fi introdus înaintea valorilor introduse de contact

### Trimite email la utilizator

![Trimitem email la utilizator](/assets/img/formulare/2024-04-23-trimite-rezultatele-formularului.png){: w='600' h='631' .shadow .rounded-10 }





## <i class='fas fa-brands fa-wpforms'></i> Cum să trimit un email la contact după ce a completat un formular?


## <i class='fas fa-brands fa-wpforms'></i> Cum adaug contactul într-o listă după ce a completat un formular?


## <i class='fas fa-brands fa-wpforms'></i> Cum să atribui o etichetă contactului care a completat un formular?

[//]: # (Comming soon video)

{% include embed/youtube.html id='LMlCN6_vUvs' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=LMlCN6_vUvs)
