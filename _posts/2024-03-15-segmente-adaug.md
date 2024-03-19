---
icon: fas fa-pie-chart
title: Adaug un nou segment
categories: [segmente]
tags: [segmente,adaug,nou,inwork,novideo]
---

În Mautic avem 2 tipuri de segmente: **statice** şi **dinamice** (sau cu filtre):
1. Contactele intră în segmentele **statice** doar din acţiuni externe segmentului:
  * un formular adaugă contactele la segment
  * o campanie adaugă contacte la segment
  * tu imporţi contacte şi selectezi ca toate contactele să fie adăugate în segment
  * [tu adaugi manual contactele la segment]({% post_url 2024-03-06-contacte-adaug-in-segment %})
1. Segmentele **dinamice** (cu Filtre) îşi adună singure contactele din toată baza de contacte, conform filtrelor selectate.

## <i class='fas fa-pie-chart'></i> Cum adaug un nou segment static?
1. Din meniul din stânga alegem <i class='fas fa-pie-chart'></i>` Segmente`
1. Apoi butonul din dreapta: <i class='fas fa-plus'></i>` Nou`

    ![Adaug un nou segment](/assets/img/segmente/2024-03-15-segmente-adaug-1nou.png){: w='1189' h='285' .shadow .rounded-10 }

1. Introducem numele segmentului (spre ex: `LISTA MARE`)
1. Putem adăuga o descriere pentru a şti ulterior mai concret ce contacte sunt în segment şi la ce este folosită lista
  * putem formata conţinutul descrierii (culori, bold, italic, poţi adăuga linkuri ...)
1. Şi apăsăm pe butonul <i class='fas fa-save'></i>` Salvează & Închide`

    ![Introdu numele şi descrierea şi salvează](/assets/img/segmente/2024-03-15-segmente-adaug-2completat.png){: w='1442' h='628' .shadow .rounded-10 }

{% include embed/youtube.html id='wELm7cKB15A' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=wELm7cKB15A)

## <i class='fas fa-pie-chart'></i> Cum adaug un nou segment dinamic?
Segmentele **dinamice** (cu Filtre) sunt speciale şi este **foarte recomandat** să adăugăm "(D)" ca sufix la numele segmentului (D de la dinamic).

### <i class='fas fa-pie-chart'></i> Segment dinamic cu toate contactele dezabonate
Ca un exemplu: adaug un segment care adună toate contactele dezabonate:

1. Din meniul din stânga alegi <i class='fas fa-pie-chart'></i>` Segmente`
1. Apoi butonul din dreapta: <i class='fas fa-plus'></i>` Nou`

    ![Adaug un nou segment](/assets/img/segmente/2024-03-15-segmente-adaug-1nou.png){: w='1189' h='285' .shadow .rounded-10 }

1. Introducem numele segmentului (spre ex: `Dezabonati+Bounced (D)` )
1. Putem adăuga o descriere pentru a şti ulterior mai concret ce contacte sunt în segment şi la ce este folosită lista
  * putem formata conţinutul descrierii (culori, bold, italic, poţi adăuga linkuri ...)
1. Şi apăsăm pe tab-ul `Filtre`

    ![Introdu numele şi descrierea şi apasă pe Filtre](/assets/img/segmente/2024-03-15-segmente-adaug-d-3completat.png){: w='1442' h='628' .shadow .rounded-10 }

1. De la Combobox `Alege un...` alege pe rând:
  * `Unsubscribed - Email` (aceştia sunt cei care se dezabonează din link-ul dintr-un email trimis lor)
  * `Unsubscribed Manual - Email` (aceştia sunt cei pe care noi îi stabilim ca dezabonaţi)
  * `Bounced - Email` (aceştia sunt cei la care nu s-a putut trimite email)

    ![Alege filtrele pe rând](/assets/img/segmente/2024-03-15-segmente-adaug-d-4filtru-aleg.png){: w='1241' h='465' .shadow .rounded-10 }

1. În acest moment cam aşa ar trebui să arate şi la tine

    ![Filtrele sunt adăugate](/assets/img/segmente/2024-03-15-segmente-adaug-d-5filtre-si.png){: w='1241' h='753' .shadow .rounded-10 }

1. Este nevoie să schimbăm logica combinaţiei filtrelor din `şi` în `sau`, pentru a ne asigura că oricare contact care s-a dezabonat el, ori noi l-am dezabonat ori trimiterea emailului a eşuat, toate aceste contacte să fie adăugate în segment.
  * Cu `şi` nu ar fi funcţionat bine, deoarece `şi` ar implica că în segment vor fi adăugate contactele pentru care se aplică toate cele 3 filtre **în acelaşi timp**. Ceea ce este şi practic imposibil.

    ![Schimbăm din şi în sau](/assets/img/segmente/2024-03-15-segmente-adaug-d-6filtre-sau.png){: w='1242' h='752' .shadow .rounded-10 }

1. Apoi este nevoie să alegem `da` în loc de `nu` (adică: `Unsubscribed - Email` egal `da`)
1. Şi acum apăsăm pe butonul <i class='fas fa-save'></i>` Salvează & Închide`

    ![Schimbăm din nu în da](/assets/img/segmente/2024-03-15-segmente-adaug-d-7filtre-sau-da.png){: w='1241' h='753' .shadow .rounded-10 }

1. După ce aşteptăm maxim 1 minut, comanda de actualizare a segmentelor dinamice (care se rulează în fundal) va actualiza şi acest segment şi va aduna contactele care corespund cu filtrul stabilit.

    ![Numărul de contacte din segmentul dinamic](/assets/img/segmente/2024-03-15-segmente-adaug-d-8contacte.png){: w='1401' h='498' .shadow .rounded-10 }

### <i class='fas fa-pie-chart'></i> Segment dinamic cu toate contactele inactive de 2 luni
Crearea segmentului este la fel ca cel pentru dezabonaţi, doar filtrul folosit este acesta:

![Filtrul pentru segmentul dinamic cu toate contactele inactive de 2 luni](/assets/img/segmente/2024-03-15-segmente-adaug-d-9inactive.png){: w='1330' h='703' .shadow .rounded-10 }

### <i class='fas fa-pie-chart'></i> Segment dinamic cu toţi abonaţii
Crearea segmentului este la fel ca cel pentru dezabonaţi, doar filtrul folosit este acesta:

![Filtrul pentru segmentul dinamic cu toţi abonaţii](/assets/img/segmente/2024-03-15-segmente-adaug-d-abonati.png){: w='1330' h='817' .shadow .rounded-10 }

### <i class='fas fa-pie-chart'></i> Segment dinamic cu toate contactele anonime
Crearea segmentului este la fel ca cel pentru dezabonaţi, doar filtrul folosit este acesta:

![Filtrul pentru segmentul dinamic cu toate contactele anonime](/assets/img/segmente/2024-03-15-segmente-adaug-d-anonimi.png){: w='1330' h='630' .shadow .rounded-10 }

[//]: # (Comming soon video)

{% include embed/youtube.html id='LMlCN6_vUvs' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=LMlCN6_vUvs)
