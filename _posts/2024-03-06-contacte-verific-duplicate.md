---
icon: fas fa-user
title: Cum descopăr care contacte au aceeaşi adresă de email?
categories: [contacte]
tags: [contacte,contacts,capcane,inwork,novideo]
author: ionut
---

> Este recomandat să evităm să adaugăm încă un contact cu o adresă de email care există deja în baza de date! Pot apare probleme la actualizarea Segmentelor cu anumite filtre. [Capcana: contacte cu acelaşi email]({% post_url 2024-03-12-contacte-capcana-adaug-acelasi-email %})
{: .prompt-warning }

## Descopăr care contacte au aceeaşi adresă de email

Folosind utilitarul comenzi.php, găsim un buton care face rapid această căutare[^interogare] şi ne oferă răspunsul astfel:

```
Următoarele contacte sunt duplicate:
```

Având această informaţie:
* putem merge în Mautic
* căutăm ambele contacte (după adresa de email)
* verificăm istoricul contactelor
* şi ne hotărâm care contact să îl păstrăm şi pe care să-l ştergem

În Mautic 4 asta este metoda cea mai bună. Mai este şi o altă metodă, prin care se îmbină istoricul celor două contacte:

## Îmbinarea automată a contactelor cu aceeaşi adresă de email

Mautic are o comandă prin care caută contactele cu aceeaşi adresă de email şi le îmbină.

În Mautic comanda este `bin/console mautic:contacts:deduplicate`.

> În Mautic 4 executarea comenzii `deduplicate` este, din păcate, ineficientă şi durează. Atunci când avem 5000 de contacte, poate dura 30 de minute. La milioane de contacte, executarea comenzii poate dura zile sau săptămâni.
{: .prompt-warning }

> [Mautic 5 vine cu o comandă super rapidă pentru deduplicare](https://forum.mautic.org/t/how-did-happened-duplicate-contact/24575/30)
{: .prompt-tip }

## Note de subsol
[^interogare]: Căutarea se face în baza de date folosind această interogare SQL (Structured Query Language):
```sql
SELECT email, COUNT(email) 
FROM leads 
WHERE email IS NOT NULL AND email != '' 
GROUP BY email 
HAVING COUNT(email) > 1;
```
