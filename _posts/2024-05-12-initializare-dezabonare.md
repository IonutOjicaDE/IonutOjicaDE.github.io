---
icon: fas fa-question-circle
title: Initializare - personalizam textul de dezabonare din emailuri
categories: [cum]
tags: [indicii,cum,intializare,email,emailuri,text dezabonare]
author: ionut
---

## Cum personalizam textul de dezabonare din emailuri?
E super deoarece o facem într-un singur loc şi, dacă vei dori cândva să-l schimbi, nu va fi nevoie să actualizezi toate emailurile, ci tot într-un singur loc modifici şi, pam-pam, toate emailurile care vor fi trimise din acel moment vor include textul nou de dezabonare.

Înainte de a intra şi în alte avantaje ale folosirii acestui sistem, uite într-un video cum anume personalizăm textul de dezabonare:

{% include embed/youtube.html id='hECr6kDcJEs' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=hECr6kDcJEs)

## Ce este bine sa stii?
Funcţionalitatea aceasta (de a adăuga un conţinut dinamic) nu este implicit instalată în Mautic:
* ci plugin-ul [MauticAdvancedTemplatesBundle](https://github.com/IonutOjicaDE/MauticAdvancedTemplatesBundle) vine cu această funcţionalitate: de a citi şi prelucra cod TWIG
* plugin-ul nu l-am creat eu, ci doar am implementat câteva îmbunătăţiri (cum ar fi posibilitatea de a folosi emoji în conţinutul emailurilor şi în subiectul lor)
* plugin-ul mai oferă să alte funcţionalităţi, cum ar fi calcule complexe şi poate face emailurile foarte flexibile şi adaptabile la fiecare contact
* dacă sunt erori în comanda TWIG din interiorul emailurilor, atunci Mautic nu va afişa emailurile, ci va adăuga o intrare în jurnal (vezi Setări => Informaţii de Sistem => Juranl de Erori)
* ChatGPT sigur te poate ajuta pentru a depana orice eroare TWIG şi chiar pentru a crea noi conţinuturi dinamice

## Avantaje
Eu observ următorul avantaj folosind această strategie, de a avea în toate emailurile acelaşi conţinut dinamic:
* dacă la un moment dat vei avea un mesaj ce doreşti să fie comunicat la toată lumea, prin toate emailurile
* şi locul din email pentru a prezenta mesajul este foarte jos, sub semnătură, cu un text gri
* atunci poţi folosi "în mod greşit" acest conţinut dinamic (z9-dezabonare) pentru a adăuga acolo mesajul tău
* şi toate emailurile care vor fi trimise din acel moment în continuare, vor conţine şi acel mesaj
Să nu uiţi să scoţi mesajul din acest conţinut dinamic (z9-dezabonare) atunci când nu mai este relevant.

## Dezavantaje
A folosi "în mod greşit" acest conţinut dinamic (z9-dezabonare) poate că nu este tocmai inteligent, deoarece:
* şi emailurile care se trimit pentru funnel sau automatizarea de webinar, toate vor conţine mesajul respectiv
* tu decizi, în funcţie de situaţie, dacă metoda e cea potrivită, ca şi aceştia să primească mesajul tău

## Alternativa
Alternativa ar fi să trimiţi newslettere cu mesajele tale doar la contactele din ListaMARE.
