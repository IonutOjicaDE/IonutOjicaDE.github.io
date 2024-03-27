---
icon: fas fa-tags
title: Redenumesc o etichetă
categories: [etichete]
tags: [etichete,redenumesc,inwork,novideo]
author: ionut
---

Chiar dacă în Mautic etichetele nu pot fi redenumite, totuşi există cel puţin o posibilitate prin care se poate realiza acest lucru:
1. Creez o nouă etichetă cu numele nou
1. Modific toate campaniile care atribuie eticheta actuală, să o atribuie pe cea nouă
1. Creez un segment dinamic şi aleg ca filtru să aibă eticheta actuală
1. Creez o campanie şi adaug acţiunea `Modifică etichetele` şi adaugi eticheta nouă şi înlături eticheta actuală
1. Aştept să fie executată campania (pot observa la numărul de contacte care au eticheta)
1. Când nu mai sunt contacte care au eticheta originală, o putem şterge.

[//]: # (Comming soon video)

{% include embed/youtube.html id='LMlCN6_vUvs' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=LMlCN6_vUvs)
