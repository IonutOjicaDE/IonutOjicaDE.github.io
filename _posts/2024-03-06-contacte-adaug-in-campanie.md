---
icon: fas fa-user
title: Adaug contacte într-o campanie
categories: [contacte]
tags: [contacte,contacts,adaug,campanii,inwork,novideo]
---

Sunt mai multe metode prin care putem adăuga contacte într-o campanie. În funcţie de numărul de contacte de adăugat.

Împărţeala este din experienţă şi nu-i bătută în cuie. Adică **putem folosi oricare metodă** pentru a adăuga contacte la o campanie!

Dar eficient este:
* Dacă este vorba doar de un contact, atunci metoda 1 este cea potrivită.
* Dacă sunt mai mult de 100 de contacte, atunci metoda 3 este cea potrivită.
* Altfel, atunci când sunt câteva contacte (sub 100), atunci metoda 2 este cea mai rapidă.

## <i class='fas fa-user'></i> 1. Cum adaug un contact la o campanie?
Pentru a adăuga un contact la o campanie, poţi urma paşii de mai jos. De asemenea şi metoda 2 este potrivită.

```mermaid
flowchart
	subgraph Adaug un contact la o campanie
        direction LR
        subgraph Contacte
            direction TB
            A[fas:fa-user Contacte] --> B(clic pe contact)
        end

        subgraph Contact
            direction TB
		    C[["`fas:fa-caret-down _Mai multe_`"]] --> D[fas:fa-clock Campanii]
        end

        subgraph Preferences [Contactul face parte din]
            direction TB
            F(activează campania dorită<br>are efect imediat)
            F --> G[× Închide]
        end

        Contacte --> Contact
        Contact --> Preferences
	end

    style A fill:black,color:white,stroke-width:0
    style B fill:white,color:black,stroke:grey
    style F fill:white,color:black,stroke:grey
```

[//]: # (Comming soon video)

{% include embed/youtube.html id='LMlCN6_vUvs' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=LMlCN6_vUvs)

## <i class='fas fa-user'></i> 2. Cum adaug mai multe contacte la o campanie?
Pentru a adăuga câteva contacte (sub 100) la un segment static, poţi urma paşii de mai jos.

```mermaid
flowchart
	subgraph Adaug sub 100 de contacte la o campanie
        direction LR
        subgraph Contacte
            direction TB
            A1[fas:fa-user Contacte] -- dreapta jos --> A2("`30 fas:fa-chevron-down
            _alege 100_`")
            A2 --> A3("`fas:fa-square-check _Selectează contactele_`")
            A3 -- stânga sus --> A4[["`fas:fa-chevron-down _Mai multe_`"]]
            A4 --> A5[fas:fa-clock Change Campaigns]
        end

        subgraph Window [Change Campaigns]
            direction TB
            subgraph W [Add to the following:]
                B1(aleg campania)
            end
            B1 --> B2[fas:fa-save Salvare]
        end

        Contacte --> Window
	end
    
    style A1 fill:black,color:white,stroke-width:0
    style A2 fill:white,color:black,stroke:grey
    style B1 fill:white,color:black,stroke:grey
```

[//]: # (Comming soon video)

{% include embed/youtube.html id='LMlCN6_vUvs' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=LMlCN6_vUvs)

## <i class='fas fa-user'></i> 3. Cum adaug foarte multe contacte la o campanie?
Pentru a adăuga foarte multe contacte (peste 100) la o campanie, poţi urma paşii de mai jos.

```mermaid
flowchart TD
    subgraph Adaug peste 100 de contacte la o campanie
        A("`Identific contactele:
        este nevoie să aibă ceva unic faţă de celelalte
        **Creez un segment dinamic** (cu filtre)`") --> B("`**Creez o campanie**
        pornind de la acest segment
        cu o acţiune:
        **Modifică campaniile**`")
        B -- aştept 1 minut --> C("`Pot verifica:
        contactele sunt în campania dorită`")
        C --> D("`**Şterg campania şi segmentul dinamic**`")
    end
```

[//]: # (Comming soon video)

{% include embed/youtube.html id='LMlCN6_vUvs' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=LMlCN6_vUvs)
