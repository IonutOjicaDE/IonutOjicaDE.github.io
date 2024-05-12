---
icon: fas fa-question-circle
title: Care este reputatia emailurilor trimise prin Mautic?
categories: [cum]
tags: [indicii,reputatia emailurilor]
author: ionut
---

* reputaţia din ActiveCampaign sau MailChimp nu poate fi preluată în Mautic (de regulă)
* când trimiţi emailuri din ActiveCampaign, te foloseşti de reputaţia IP-ului lor şi trimiţi emailuri de la o adresă de-a lor de email
* cu Mautic trimitem emailurile folosind AmazonSES, care au o reputaţie foarte bună (mai bună decât a ActiveCampaign)
* clienţii de emailuri (gmail, yahoo ...) calculează reputaţia folosindu-se de:
  * IP - care este foarte bună! IP-urile de la AmazonSES sunt chiar pe "Whitelist"
  * adresa de email - care este nouă, la început şi, din acest motiv, primele emailuri vor fi adăugate poate 50% în Inbox, 50% în spam/promotions. Dacă emailurile sunt citite de cei înscrişi, în scurt timp, toate următoarele emailuri vor fi adăugate în Inbox.

Este recomandat ca la început:
* să trimiţi emailuri la un număr de contacte relativ redus, să creşti gradat (500 contacte, 1000, 3000 ...)
* să trimiţi conţinut valoros (bineînţeles că şi ulterior este bine să trimiţi conţinut valoros, dar la început este mai important :) )

{% include embed/youtube.html id='O4kc87N1nns' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=O4kc87N1nns)
