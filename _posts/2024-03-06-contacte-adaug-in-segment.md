---
icon: fas fa-user
title: Adaug contacte într-un segment static
categories: [contacte]
tags: [contacte,contacts,adaug,segmente]
mermaid: true
---

Sunt mai multe metode prin care putem adăuga contacte în segmente statice. În funcţie de numărul de contacte de adăugat.

Împărţeala este din experienţă şi nu-i bătută în cuie. Adică **putem folosi oricare metodă** pentru a adăuga contacte la un segment static!

Dar eficient este:
* Dacă este vorba doar de un contact, atunci metoda 1 este cea potrivită.
* Dacă sunt mai mult de 100 de contacte, atunci metoda 3 este cea potrivită.
* Altfel, atunci când sunt câteva contacte (sub 100), atunci metoda 2 este cea mai rapidă.

## <i class='fas fa-user'></i> 1. Cum adaug un contact la o lista?
Pentru a adăuga un contact la un segment static, poţi urma paşii de mai jos. De asemenea şi metoda 2 este potrivită.

```mermaid
flowchart
	subgraph Adaug un contact la o listă
        direction LR
        subgraph Contacte
            direction TB
            A[fas:fa-user Contacte] --> B(clic pe contact)
        end

        subgraph Contact
            direction TB
		    C[["`fas:fa-caret-down _Mai multe_`"]] --> D[fas:fa-signal Preferences]
        end

        subgraph Preferences [Contact Preference Center]
            direction TB
            E{{"`tab-ul **Segmente**`"}} --> F(aleg segmentul)
            F --> G[fas:fa-save Salvare]
        end

        Contacte --> Contact
        Contact --> Preferences
	end
    
    style A fill:black,color:white,stroke-width:0
    style B fill:white,color:black,stroke:grey
    style F fill:white,color:black,stroke:grey
```

{% include embed/youtube.html id='IFbLIr2Lr0U' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=IFbLIr2Lr0U)

## <i class='fas fa-user'></i> 2. Cum adaug mai multe contacte la o lista?
Pentru a adăuga câteva contacte (sub 100) la un segment static, poţi urma paşii de mai jos.

```mermaid
flowchart
	subgraph Adaug sub 100 de contacte la o listă
        direction LR
        subgraph Contacte
            direction TB
            A1[fas:fa-user Contacte] -- dreapta jos --> A2("`30 fas:fa-chevron-down
            _alege 100_`")
            A2 --> A3("`fas:fa-square-check _Selectează contactele_`")
            A3 -- stânga sus --> A4[["`fas:fa-chevron-down _Mai multe_`"]]
            A4 --> A5[fas:fa-pie-chart Change Segments]
        end

        subgraph Window [Change Segments]
            direction TB
            subgraph W [Add to the following:]
                B1(aleg segmentul)
            end
            B1 --> B2[fas:fa-save Salvare]
        end

        Contacte --> Window
	end
    
    style A1 fill:black,color:white,stroke-width:0
    style A2 fill:white,color:black,stroke:grey
    style B1 fill:white,color:black,stroke:grey
```

{% include embed/youtube.html id='ryxvsjlocI8' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=ryxvsjlocI8)

## <i class='fas fa-user'></i> 3. Cum adaug foarte multe contacte la o lista?
Pentru a adăuga foarte multe contacte (peste 100) la un segment static, poţi urma paşii de mai jos.

```mermaid
flowchart TD
    subgraph Adaug peste 100 de contacte la o listă
        A("`Identific contactele:
        este nevoie să aibă ceva unic faţă de celelalte
        **Creez un segment dinamic** (cu filtre)`") --> B("`**Creez o campanie**
        pornind de la acest segment
        cu o acţiune:
        **Modifică segmentele**`")
        B -- aştept 1 minut --> C("`Pot verifica:
        contactele sunt în segmentul dorit`")
        C --> D("`**Şterg campania şi segmentul dinamic**`")
    end
```

{% include embed/youtube.html id='y6401UKl2F4' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=y6401UKl2F4)

