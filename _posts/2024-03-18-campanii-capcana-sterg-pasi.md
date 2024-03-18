---
icon: fas fa-clock
title: Capcana provocată de modificarea unei campanii cu contacte
categories: [campanii]
tags: [campanii,capcane,inwork,novideo]
---

> Dacă o campanie are contacte înăuntru, este foarte **FOARTE** recomandat să nu ştergi paşi, nici să modifici ordinea de execuţie, nici să adaugi paşi la campanie.
{: .prompt-warning }

## De ce recomandarea să nu modificăm o campanie cu contacte?
Specific Mautic este acest lucru:

> Toţi paşii campaniei sunt înregistraţi în dreptul contactului în momentul în care contactul este adăugat la campanie.
{: .prompt-tip }

Paşii campaniei cum ar fi:
* Acţiuni precum:
  * Modifică segmentele
  * Modifică atributele contactului
  * Modifică campaniile
  * Modifică etichetele
* Condiţii precum:
  * A vizitat pagina
  * A dat clic
  * Valoarea din formular
  * Este în segment
* Decizii precum:
  * Dacă vizitează pagina
  * Dacă dă click

Ceea ce **nu este înregistrat** în dreptul contactului este valoarea din respectiva acţiune, condiţie sau decizie. Şi aceasta poate fi modificată.

Adică acţiunea *Modifică segmentele* să nu o ştergi, însă poţi modifica despre ce segmente este vorba.

Sau condiţia *A dat clic* şă nu o ştergi, însă poţi modifica linkul care va fi verificat.

De asemenea mai poate fi modificată şi perioada de aşteptare dintre paşi - modificarea va fi aplicată la contactele care vor ajunge în viitor la paşii respectivi.


Care este de fapt capcana? Hai să luăm pe rând cazurile menţionate:

## Capcana provocată când ştergi paşi dintr-o campanie cu contacte
Contactele care sunt încă la paşii anteriori pasului şters, vor rămâne blocate în campanie când vor ajunge la pasul şters.

Contactele nu vor ieşi din campanie, nici paşii următori nu vor fi executaţi.




## Capcana provocată când modifici ordinea de execuţie a unei campanii cu contacte





## Capcana provocată când adaugi paşi la campanie cu contacte





[//]: # (Comming soon video)

{% include embed/youtube.html id='LMlCN6_vUvs' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=LMlCN6_vUvs)
