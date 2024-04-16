---
icon: fas fa-video
title: Cum schimbăm data următorului webinar?
categories: [webinar]
tags: [webinar,actualizare data,schimbare data]
author: ionut
---

Pentru a reprograma webinarul şi a implementa în Mautic schimbarea, ar fi următorii 3 paşi de făcut:
1. Emailurile de reamintire (WG-1 şi WG-3) de analizat:
  * cele care deja au fost trimise, să le dezactivăm (să nu mai fie publicate) pentru ca să nu se trimită a 2-a oară la cei care le-au primit deja
1. Actualizăm data nouă în campania WG-0-Inscriere***, pentru ca cei nou abonaţi să primească data corectă
1. Apoi rămâne să actualizăm data la toate contactele care sunt deja înscrise
  * pentru aceasta creăm o nouă campanie
  * având ca sursă segmentul WG-0-Inscrisi
  * şi o singură acţiune: Actualizează contactul
  * şi în dreptul WG-Data introducem data nouă a webinarului
  * publicăm campania şi o salvăm
  * aşteptăm 1 minut să se execute
  * verificăm execuţia campaniei şi a acţiunii din campanie în istoricul unui contact
  * apoi **ştergem campania** - este foarte important !

> Asigură-te că în final ai şters campania creată temporar, cu actualizarea datei pentru cei deja înscrişi la webinar.
{: .prompt-warning }

Toţi aceşti paşi îi poţi urmări în următorul video:

{% include embed/youtube.html id='_YXi8kzz6LA' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=_YXi8kzz6LA)
