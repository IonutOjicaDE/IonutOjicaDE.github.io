---
icon: fas fa-user
title: Capcana când adaug contacte cu aceeaşi adresă de email
categories: [contacte]
tags: [contacte,contacts,capcane]
mermaid: true
author: ionut
---

Se aplică atunci când: **adăugăm manual un contact**.

Contactele adăugate prin formulare nu se vor duplica.

## Manual putem sa cream mai multe contacte cu aceeasi adresa de email

Mautic ne va atenţiona de acest lucru, dar ne va lăsa totuşi să creăm contactul.

> Pentru a vedea dacă mai ai un contact cu aceeaşi adresă de email, este nevoie să activezi alt element după ce introduci adresa de email completă.
{: .prompt-tip }

![Mautic ne arată că un contact cu aceeaşi adresă de email există când adăugăm contactul rapid](/assets/img/contacte/2024-03-12-contacte-capcana-adaug-rapid.png){: .shadow .rounded-10 w='582' h='636' }
_Mautic ne arată că un contact cu aceeaşi adresă de email există când adăugăm contactul rapid_

![Mautic ne arată că un contact cu aceeaşi adresă de email există când adăugăm contactul normal](/assets/img/contacte/2024-03-12-contacte-capcana-adaug-nou.png){: .shadow .rounded-10 w='1008' h='1259' }
_Mautic ne arată că un contact cu aceeaşi adresă de email există când adăugăm contactul normal_

> Este recomandat să evităm să adaugăm încă un contact cu o adresă de email care există deja în baza de date! Pot apare probleme la actualizarea Segmentelor cu anumite filtre.
{: .prompt-warning }

Ce s-a întâmplat în cazul meu concret, în care erau 2 contacte cu aceeaşi adresă de email:
* funcţia de actualizare a segmentelor pentru segmentul cu un anumit filtru a intrat într-o execuţie infinită
* asta a însemnat că alte acţiuni nu se mai executau (procesarea campaniilor, trimiterea emailurilor...)
Rezolvare: am şters unul din contacte şi funcţia s-a executat cu succes. Nu a fost nevoie să fac altceva.

{% include embed/youtube.html id='H9wdHhKe8UA' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=H9wdHhKe8UA)

## Prin API putem sa cream mai multe contacte cu aceeasi adresa de email
De API se folosesc Zappier, n8n sau alte platforme de interconectare a diferite servicii.

Eu mă folosesc de n8n pentru a lega magazinul online WooCommerce de Mautic. Şi anume: numele produsului cumpărat în magazin, îl adaug la contactul din Mautic ca o etichetă. Automatizarea arată ceva de genul:

```mermaid
flowchart TD
  subgraph Automatizare n8n
    A[Cineva a finalizat<br>comanda în magazin] ==> B[/Există un contact cu<br>aceeaşi adresă de email?\]
    B -.->|Există| C(Doar<br>adaug eticheta)
    B ==>|Nu există| D(Creez contactul<br>şi adaug eticheta)
  end
  classDef magenta fill:#f9f,color:black,stroke:red,stroke-width:4px
  class B,D magenta
```

* când cineva a finalizat comanda în magazin
* caut întâi dacă există un contact cu adresa de email de pe care s-a făcut comanda
* dacă există, atunci doar actualizez contactul existent, adăugându-i eticheta
* dacă nu există, atunci **creez** contactul şi adaug eticheta

În acest fel sunt sigur că nu se pot crea contacte cu aceeaşi adresă de email.

Legat de acest subiect, pe forumul Mautic este un caz în care este vorba de o bază de date de milioane de contacte şi 12 sunt duplicate. [Poţi citi toată istoria aici.](https://forum.mautic.org/t/how-did-happened-duplicate-contact/24575)

## Relevante
[Cum descopăr care contacte au aceeaşi adresă de email]({% post_url 2024-03-06-contacte-verific-duplicate %})

[Cum caut contacte]({% post_url 2024-03-06-contacte-caut %})
