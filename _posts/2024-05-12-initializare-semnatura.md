---
icon: fas fa-question-circle
title: Initializare - adaugam semnatura din emailuri
categories: [cum]
tags: [indicii,cum,intializare,email,emailuri,semnatura]
author: ionut
---

## Cum personalizam semnatura din emailuri?
E super deoarece o facem într-un singur loc şi, dacă vei dori cândva să o schimbi, nu va fi nevoie să actualizezi toate emailurile, ci tot într-un singur loc modifici şi, pam-pam, toate emailurile care vor fi trimise din acel moment vor include semnătura nouă.

Înainte de a intra şi în alte avantaje ale folosirii acestui sistem, uite într-un video cum anume personalizăm semnătura:

{% include embed/youtube.html id='-MyA1Hnp9Dw' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=-MyA1Hnp9Dw)

## Ce este bine sa stii?
Pentru a crea imaginea semnăturii, mă folosesc de [fontmeme.com](https://fontmeme.com/signature-fonts/) şi am observat că aceste fonturi suportă diactrice:
* Promocyja096
* My Boyfriends Handwriting
* Notera

Un editor video foarte simplu şi rapid pe Windows este [IrfanView](https://www.irfanview.com/main_download_engl.htm). Îţi recomand să instalezi versiunea pe 32 de biţi - suportă toate Plugin-urile.

Funcţionalitatea aceasta (de a adăuga un conţinut dinamic) nu este implicit instalată în Mautic:
* ci plugin-ul [MauticAdvancedTemplatesBundle](https://github.com/IonutOjicaDE/MauticAdvancedTemplatesBundle) vine cu această funcţionalitate: de a citi şi prelucra cod TWIG
* plugin-ul nu l-am creat eu, ci doar am implementat câteva îmbunătăţiri (cum ar fi posibilitatea de a folosi emoji în conţinutul emailurilor şi în subiectul lor)
* plugin-ul mai oferă să alte funcţionalităţi, cum ar fi calcule complexe şi poate face emailurile foarte flexibile şi adaptabile la fiecare contact
* dacă sunt erori în comanda TWIG din interiorul emailurilor, atunci Mautic nu va afişa emailurile, ci va adăuga o intrare în jurnal (vezi Setări => Informaţii de Sistem => Juranl de Erori)
* ChatGPT sigur te poate ajuta pentru a depana orice eroare TWIG şi chiar pentru a crea noi conţinuturi dinamice

## Avantaje
Eu observ următorul avantaj folosind această strategie, de a avea în toate emailurile acelaşi conţinut dinamic:
* dacă la un moment dat vei avea o ofertă ce doreşti să fie comunicată la toată lumea, prin toate emailurile
* şi locul din email pentru a prezenta oferta este jos, înainte sau după semnătură
* atunci poţi folosi "în mod greşit" acest conţinut dinamic (z8-semnatura) pentru a adăuga acolo oferta ta
* şi toate emailurile care vor fi trimise din acel moment în continuare, vor conţine şi oferta din conţinutul dinamic
Să nu uiţi să scoţi oferta din acest conţinut dinamic (z8-semnatura) atunci când oferta a expirat.

De asemenea astfel poţi transmite mesaje temporare la toată lista ta, prin emailurile trimise de tine.

## Dezavantaje
A folosi "în mod greşit" acest conţinut dinamic (z8-semnatura) poate că nu este tocmai inteligent, deoarece:
* şi emailurile care se trimit pentru funnel sau automatizarea de webinar, toate vor conţine oferta ta
* tu decizi, în funcţie de situaţie, dacă metoda e cea potrivită, ca şi aceştia să primească oferta sau mesajul tău

## Alternativa
Alternativa ar fi să trimiţi newslettere cu mesajele tale doar la contactele din ListaMARE.
