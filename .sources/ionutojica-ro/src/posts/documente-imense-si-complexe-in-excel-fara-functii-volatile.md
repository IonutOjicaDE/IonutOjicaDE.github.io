---
source_url: "https://ionutojica.ro/documente-imense-si-complexe-in-excel-fara-functii-volatile/"
saved_at: "20260612-193958"
slug: "documente-imense-si-complexe-in-excel-fara-functii-volatile"
content_type: "post"
title: "Documente imense şi complexe în Excel, dar utile ! Fără funcţii volatile! - Ionuţ Ojică"
---

### Azi am reuşit din nou să întorc Excel-ul cu capul în jos 🤯

A fost o provocare de mai bine de 5 ani, timp în care am lăsat ideea să fermenteze… ca să zic aşa.

Şi în ultimele 2 zile am finalizat-o cu succes.

Nu o să puteţi ghiciţi despre ce este vorba, nici după 1000 de încercări, dar nici nu vă spun încă.

Tema este una inginerească, legată de legile mişcării şi automatizări.

![Distance-time and speed-time diagram of a stopped vehicle at the signalized intersection.](https://www.researchgate.net/profile/Darshana_Othayoth2/publication/327963527/figure/fig1/AS:694623076904960@1542622455243/Distance-time-and-speed-time-diagram-of-a-stopped-vehicle-at-the-signalized-intersection.png)

Documentul final foloseşte:

- **meniu DropDown**este nimica toată pe lângă următoarele
- formatarea celulelor pentru o mai uşoară **diferenţiere între celulele unde se introduc valori**şi cele care sunt **calculate automat**
- formule care mai de care: condiţii, căutări (**MATCH**), cele două variante ale funcţiei **INDEX**şi multe altele
- **extinderea funcţionalităţii**doar cu câteva modificări, folosind nume de regiuni în loc de regiunile concrete în funcţii
- diagrame xy (**chart**), cu notaţii actualizate automat, cu 2 axe verticale, cu linii verticale pentru delimitarea domeniilor de valori şi denumiri ale acestor domenii pe diagramă – totul actualizat automat
- nu folosesc **nici o funcţie volatilă**– face lucrul cu documentul mai fluent
- şi poate aspectul cel mai important: **nu folosesc VBA**şi nici altă funcţie ce necesită macro. Astfel că documentul este un .xlsx

Şi descrierea puţin tehnică:

- prima foaie foloseşte 23 coloane şi 99 linii
- a doua foaie 30 coloane şi peste 2000 de linii
- următoarele 4 foi folosesc fiecare 29 coloane şi peste 1000 de linii (pentru a extinde funcţionalitatea, o astfel de foaie este de duplicat şi doar într-o celulă trebuie adaptat pentru a funcţiona)
- iar restul foilor sunt de neglijat

Voi regândi pas cu pas documentul **pentru a-l putea explica unui începător de Excel**, care doreşte să ajungă să stăpânească Excel-ul ca un profesionist !

Deci, despre această temă voi mai scrie…

### PS: volatilă este benzina.

![volatil](../images/posts/documente-imense-si-complexe-in-excel-fara-functii-volatile/volatile-1024x684.webp)

Luăm ca exemplu benzina, deoarece se transformă repede din starea lichidă în starea gazoasă. Dar şi **UNELE funcţii Excel pot fi volatile**.
**Aceste funcţii sunt de evitat**, deoarece pot încetini considerabil funcţionarea documentului şi lucrul cu el va deveni la un moment dat ineficient.

O funcţie volatilă în Excel este acea funcţie care îşi schimbă valoarea de fiecare dată când modifici **oricare**celulă din document, de pe **oricare**foaie. Deci, nu doar celula la care face referinţă funcţia, ci oricare altă celulă.

**Valorile funcţiilor normale sunt recalculate, doar atunci când celulele la care fac referinţă îşi modifică valorile.**
SUM spre exemplu NU este o funcţie volatilă: valoarea sumei va fi recalculată doar dacă celulele ce trebuiesc adunate au fost modificate. Altfel rămâne valoarea veche.
Altfel formulat: dacă tu modifici celule care n-au nici o legătură cu cele din funcţia SUM, rezultatul funcţiei rămâne neschimbat.

**Altfel este cu funcţiile volatile.**

O astfel de funcţie este **NOW**. Aceasta nu poate fi decât volatilă, deoarece **acum**(NOW) deja nu mai este **acel acum**… dar şi TODAY, chiar dacă doar o dată pe zi (la ora 23:59 sau 0:00) se întâmplă ca **un TODAY**să nu mai fie egal cu **acel TODAY**de puţin mai’nainte.

Şi funcţia **RANDBETWEEN**, cu care primim de fiecare dată un alt număr aleatoriu.

Şi mai este şi funcţia **OFFSET**– şi aici doream să ajung !

**OFFSET poate fi înlocuită foarte uşor cu INDEX**. Nu este nevoie de folosirea acestei funcţii OFFSET.

Deocamdată arunc această informaţie – când vei avea de ales între cele două, să ştii că **INDEX va calcula cel puţin de două ori mai repede**! faţă de OFFSET.

Şi situaţia poate fi înrăutăţită şi mai mult când folosim funcţii volatile astfel: orice formulă care face referire la celule cu funcţii volatile, devine la rândul ei volatilă.

Deci putem ajunge în situaţia în care toate formulele din tabel să se recalculeze de fiecare dată când modificăm o valoare nesemnificativă.

Ok. Mai este şi funcţia **INDIRECT**care e volatilă şi mai este uneori folosită.

Microsoft menţionează nesemnificativ de puţin despre funcţiile volatile. Poţi citi în engleză aici: [https://learn.microsoft.com/ro-ro/office/client-developer/excel/excel-recalculation#volatile-and-non-volatile-functions](https://learn.microsoft.com/ro-ro/office/client-developer/excel/excel-recalculation#volatile-and-non-volatile-functions)

PS2: ar fi bine să mai menţionez despre OFFSET: dacă este de evitat în EXCEL, **în VBA poate fi folosită funcţia Offset cu încredere !** Este o alternativă de două ori mai rapidă decât Cells sau Range. Dar este mult mai înceată decât folosirea unei arii. Vezi mai exact în experimentul deja rulat aici: [https://stackoverflow.com/questions/12183493/speed-difference-between-activecell-offset-and-range](https://stackoverflow.com/questions/12183493/speed-difference-between-activecell-offset-and-range)
