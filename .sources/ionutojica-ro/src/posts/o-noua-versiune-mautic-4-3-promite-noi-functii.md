---
source_url: "https://ionutojica.ro/o-noua-versiune-mautic-4-3-promite-noi-functii/"
saved_at: "20260612-193958"
slug: "o-noua-versiune-mautic-4-3-promite-noi-functii"
content_type: "post"
title: "O nouă versiune Mautic: 4.3 promite noi funcţionalităţi - Ionuţ Ojică"
---

- interfaţa **contactelor**mai simplă
- folosirea **conţinutului dinamic**în evenimente
- suport pentru **obiecte personalizate**.

Nu am probat deocamdată noua versiune Mautic: 4.3, totuşi menţionez punctele din [anunţ](https://forum.mautic.org/t/mautic-4-3-beyond-contacts-and-companies/24200). Dacă doreşti să porneşti cu Mautic ca platforma completă de marketing online, cu siguranţă versiunea nouă este cea potrivită!

Pe lângă punctele din titlu, mai sunt şi câteva puncte din trecut rezolvate (buguri):

- numărul de câmpuri de afişat odată în formularele progresive funcţionează acum,
- poate fi filtrat şi după idul companiei, pe lângă numele companiei,
- există o temă implicită care va fi folosită atunci când tema aleasă pentru un email este ştearsă
- optimizarea vitezei pentru crearea segmentelor (listelor) folosind filtre: de la 8s la 300ms pentru >100k contacte
- la importarea contactelor se va face o validare a câmpurilor necesare

Câteva aspecte legate de securitate:

- deja în următoarea versiune 4.3.1 se rezolvă un bug din pachetul de instalare
- versiunile de dinainte de 4.3 au un punct slab legat de **pixelul de urmărire**

## Acum mai pe larg ce se spune în notificarea de eliberare pentru noua versiune Mautic

Versiunea nouă include 34 de funcţii noi şi îmbunătăţiri + 29 de corecţii de erori + 2 corecţii de securitate. Toate pot fi citite [aici](https://github.com/mautic/mautic/releases/tag/4.3.0).

### Interfaţa contactelor este mai simplă

Câmpurile care nu conţin informaţii rămân implicit ascunse. Până acum toate câmpurile erau vizibile, chiar dacă erau goale.

### Folosirea conţinutului dinamic în evenimente

Începând cu versiunea 4, conţinutul dinamic în emailuri nu funcţionează cu editorul GrapesJS. Poate fi însă folosit ca un eveniment – pentru ca extensiile să beneficieze de el.

### Suport pentru obiecte personalizate

Aceasta este o extensie terţă (Custom Objects) care permite utilizatorilor Mautic să creeze logică nouă pentru segmente şi campanii. Pe lângă contacte şi companii, cu Obiecte Personalizate putem crea noi elemente, cum ar fi grupuri de informaţii: Facturi sau Înscrieri.

Aceste informaţii pot avea cheile şi valorile lor proprii care relaţionează între ele. Ca spre exemplu o factură sau un produs cumpărat cu numele produsului, data şi totalul. Mai multe sunt explicate pe engleză [aici](https://www.mautic.org/blog/community/acquia-open-sources-custom-objects-plugin-extend-mautics-capabilities).

Dacă nu ştii ce este Mautic, [clic aici](https://ionutojica.com/ce-este-mautic/) pentru o scurtă enumerare a funcţiilor.
