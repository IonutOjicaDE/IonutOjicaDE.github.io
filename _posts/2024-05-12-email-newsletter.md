---
icon: fas fa-envelope
title: Cum programez un Newsletter
categories: [emailuri]
tags: [emailuri,email,newsletter,programare]
author: ionut
---

Newsletterele sunt emailuri care se trimit la un segment sau mai multe.

În video-ul de mai jos, poţi vedea cum anume creezi un astfel de email şi la ce anume să fii atent, ca spre exemplu:
* duplici un email existent şi alegi "Email de segment"
* dacă newsletter-ul este doar publicat, fără dată de activare sau dezactivare, atunci
  * nu se va trimite automat la contactele din segmentele selectate
  * este nevoie să trimiţi tu emailul manual, apăsând pe butonul "Trimite"
  * ulterior poţi retrimite emailul apăsând pe butonul "Trimite" - emailul va fi trimis doar contactelor care încă n-au primit emailul - Mautic nu va trimite incă o dată emailul la cei care l-au primit deja
* când introduci o dată de activare, Mautic va trimite la toate contactele din segmentele selectate începând cu data aleasă
  * dacă nu introduci şi o dată de dezactivare, atunci Mautic va trimite emailul imediat ce un contact intră în segmentele alese, chiar şi peste o zi, 10 sau o lună

De regulă doreşti să trimiţi Newsletter-ul la o oră aleasă, la contactele care sunt în lista respectivă în acel moment. Pentru aceasta:
* publică emailul
* alege o dată de activare
* şi alege data de dezactivare la ... o oră după activare (ideea este ca să fie destul timp pentru a trimite emailurile, din punct de vedere tehnic)

Cum programezi un Newsletter poţi vedea în video-ul următor:

{% include embed/youtube.html id='gOULAyPgNOk' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=gOULAyPgNOk)
