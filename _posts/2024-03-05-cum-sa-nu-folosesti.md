---
icon: fas fa-question-circle
title: Cum să nu foloseşti Mautic
categories: [cum]
tags: [indicii,cum,inwork,novideo]
---

Dacă ar fi să dau un număr pentru importanţa aspectelor pe care să NU le facem în Mautic, le-aş ordona în acest fel.

Începând de la:

* cele pe care **nici să nu te gândeşti să probezi !**
* la cele pe care ... ar fi bine să le eviţi.

# 1. Campanii cu bucle infinite
Pe scurt: segmentul adaugă contactul în campanie, campania scoate contactul din campanie, apoi segmentul adaugă contactul în campanie şi tot aşa, la fiecare minut. Şi nu e vorba doar de 1 contact ci de sute. Urmarea poate fi: Mautic nu mai reacţionează.

[Vezi detaliat aici]({% post_url 2024-03-11-campanii-capcana-inlatura-din-campanie %})

# 2. Contacte cu aceeaşi adresă de email
Pe scurt: această situaţie poate fi gravă (nu neapărat, dar poate fi), deoarece poate duce la blocarea executării altor sarcini (executare campanii şi trimitere emailuri).

[Vezi detaliat aici]({% post_url 2024-03-12-contacte-capcana-adaug-acelasi-email %})


