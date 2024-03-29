---
icon: fas fa-question-circle
title: Cum să nu foloseşti Mautic
categories: [cum]
tags: [indicii,cum]
author: ionut
---

Dacă ar fi să dau un număr pentru importanţa aspectelor pe care să NU le facem în Mautic, le-aş ordona în acest fel.

Începând de la:

* cele pe care **nici să nu te gândeşti să probezi !**
* la cele pe care ... ar fi bine să le eviţi.

## 1. Campanii cu bucle infinite

### Exemplul 1: Segment static: campanie cu acţiunea "înlătur din campanie"
1. Segmentul static adaugă contactul în campanie
2. Campania scoate contactul din campanie
3. Apoi segmentul adaugă contactul în campanie (la fel ca pasul 1)

şi tot aşa, la fiecare minut. Şi dacă nu e vorba doar de 1 contact ci de sute, urmarea poate fi: Mautic nu mai reacţionează.

[Vezi detaliat aici]({% post_url 2024-03-11-campanii-capcana-inlatura-din-campanie %})

### Exemplul 2: Segment dinamic: campanie cu acţiunea "înlătur din segment"
1. Segmentul dinamic adaugă contactul în campanie
2. Campania scoate contactul din segment
3. Segmentul dinamic adaugă contactul din nou în segment, conform filtrului
4. Şi segmentul adaugă contactul în campanie (la fel ca pasul 1)

şi tot aşa, la fiecare minut. Şi dacă nu e vorba doar de 1 contact ci de sute, urmarea poate fi: Mautic nu mai reacţionează.

[Vezi detaliat aici]({% post_url 2024-03-14-campanii-capcana-inlatura-din-segment %})

## 2. Contacte cu aceeaşi adresă de email
Pe scurt: această situaţie poate fi gravă (nu neapărat, dar poate fi), deoarece poate duce la blocarea executării altor sarcini (executare campanii şi trimiterea emailurilor).

[Vezi detaliat aici]({% post_url 2024-03-12-contacte-capcana-adaug-acelasi-email %})

## 3. Modific o campanie care are contacte
**Nu modifica paşii unei campanii în care sunt contacte.** Nu adăuga, nu şterge, nu modifica ordinea paşilor campaniei.

Rezultatul poate fi: contactele se blochează în campanie, nu se execută paşii următori, nu ies din campanie. Nu doreşti aşa ceva.

[Vezi detaliat aici şi cum poţi face o actualizare]({% post_url 2024-03-18-campanii-capcana-sterg-pasi %})

## 9. Acţiuni fără sens în campanii
Se poate întâmpla că avem ideea să atribuim o etichetă contactului care intră în campanie, totuşi ne răzgândim şi nu alegem nici o etichetă de atribuit.

Dacă salvez campania cu această acţiune inutilă, Mautic va înregistra câte o eroare de fiecare dată când va fi executat pasul pentru un contact.

[Vezi detaliat aici]({% post_url 2024-03-18-campanii-capcana-actiuni-libere %})


