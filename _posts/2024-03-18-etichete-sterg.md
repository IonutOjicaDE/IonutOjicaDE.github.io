---
icon: fas fa-tags
title: Şterg o etichetă
categories: [etichete]
tags: [etichete,şterg,inwork,novideo]
---

> Chiar trebuie să ştergi eticheta? Nu consumă "deloc" spaţiu în baza de date.
{: .prompt-info }

Pentru a şterge o etichetă:
1. verificăm toate campaniile: eticheta să nu fie atribuită de acţiuni dintr-o campanie
1. verificăm şi formularele: eticheta să nu fie atribuită de acţiunile vreunui formular
1. verificăm segmentele dinamice: eticheta să nu fie folosită în vreun filtru
1. apoi înlăturăm eticheta de la toate contactele
1. şi de-abia în acest moment putem şterge eticheta

> Nu subestima verificarea din primele etape. Pentru a nu duce la erori nedorite ulterior.
{: .prompt-tip }

## De ce aşa de complicat să şterg o etichetă?
Eu zic că verificările de la început fac sens, deoarece:
1. se poate că ai o acţiune într-o campanie care adaugă (sau înlătură) la contact exact eticheta ce doreşti să o ştergi.
  * După ce ştergi eticheta, acţiunea nu va mai face nimic.
  * Şi asta duce la erori în Mautic.
  * Nu se întâmplă nimic grav, deoarece campania va funcţiona mai departe.
  * Când te vei uita la erori, vei vedea şi despre ce campanie este vorba (vei vedea numărul ID a campaniei) şi te vei putea duce ţintit în ea şi să ştergi acţiunea.
  * **Nu şterge însă nici o acţiune dintr-o campanie în care sunt contacte!** [Vezi aici de ce]({% post_url 2024-03-18-campanii-capcana-sterg-pasi %})
1. se poate că ai o acţiune dintr-un formular care atribuie exact eticheta respectivă.
  * După ce ştergi eticheta, acţiunea nu va mai face nimic.
  * Dacă asta duce la erori în Mautic sau nu, nu pot spune din ce am experimentat.
  * Însă acţiunea din formular o poţi şterge, deoarece nu mai face nimic.
1. se poate că ai un filtru într-un segment dinamic, care verifică dacă eticheta există sau nu
  * După ce ştergi eticheta, acţiunea nu va mai face nimic.
  * Şi asta duce la erori în Mautic.
  * Nu se întâmplă nimic grav, deoarece segmentul va face filtrarea în continuare, conform celorlalte filtre, dacă există.
  * Când te vei uita la erori, vei vedea şi despre ce segment este vorba (vei vedea numărul ID al segmentului) şi te vei putea duce ţintit la el şi să ştergi filtrul respectiv.
1. etichetele folosite în contacte nu pot fi şterse
  * Sigur asta este bine, să nu se întâmple din greşeală. Deoarece nu există "undo" adică restaurarea după ştergere nu este simplă.

## Pot verifica mai repede unde este folosită eticheta?
Mautic nu are o funcţie care să ne arate în care acţiuni este folosită o etichetă.

Din acest motiv este recomandat să dai nume scurte dar semnificative etichetelor. Ba mai mult, la o etichetă poţi adăuga şi o descriere. În speranţa că ştii unde este bine să cauţi.

O metodă ar fi de căutat direct în baza de date. Asta este destul de tehnic şi în afara audienţei ţintă a acestei documentaţii.

[//]: # (Comming soon video)

{% include embed/youtube.html id='LMlCN6_vUvs' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=LMlCN6_vUvs)
