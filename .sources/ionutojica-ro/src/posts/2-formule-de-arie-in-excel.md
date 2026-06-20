---
source_url: "https://ionutojica.ro/2-formule-de-arie-in-excel/"
saved_at: "20260612-193958"
slug: "2-formule-de-arie-in-excel"
content_type: "post"
title: "2 formule de arie în Excel - Ionuţ Ojică"
---

Vrei să afli cum poţi face **calcule invizibile**în Excel? Citeşte în continuare despre formule de arie în Excel, un aspect pentru experţi în ale programării. Formulele de arie în Excel nu sunt un concept uşor de înţeles. Dar nu deznădăjdui: cu cât vezi mai multe exemple cu atât îţi va fi mai uşor să-ţi însuşeşti conceptul.

Până acum am avut nevoie de formule de arie în Excel doar în mod excepţional. De regulă am preferat să efectuez calculele complexe folosind VBA. VBA oferă avantajul că poate fi uşor depanat sau adaptat ulterior.

## Primul exemplu pentru formule de arie în Excel

Să considerăm următorul tabel, în care am contorizat mai multe convorbiri:

| . | A | B | C |
| --- | --- | --- | --- |
| 1 |  | Timp începere | Timp terminare |
| 2 | Convorbire1 | 12:00 | 12:28 |
| 3 | Convorbire2 | 13:00 | 13:27 |
| 4 | Convorbire3 | 14:00 | 14:06 |
| 5 | Convorbire4 | 11:00 | 11:16 |
| 6 | Convorbire5 | 19:00 | 19:12 |
| 7 | Convorbire6 | 14:00 | 14:06 |
| 8 | Convorbire7 | 12:30 | 12:49 |
| 9 | Convorbire8 | 14:30 | 14:47 |
| 10 | Convorbire9 | 13:30 | 13:45 |
| 11 | Convorbire10 | 18:15 | 18:41 |

şi doresc să aflu cât timp am vorbit în total.

### Varianta fără formule de arie în Excel

pot introduce în celula D2 o formulă simplă, ca să aflu durata primei convorbiri

şi apoi să umplu până jos. Iar în D12 pot face suma timpilor de sus – metoda clasică.

| . | A | B | C | D |
| --- | --- | --- | --- | --- |
| 1 |  | Timp începere | Timp terminare | Durata |
| 2 | Convorbire1 | 12:00 | 12:28 | =C2-B2 |
| 3 | Convorbire2 | 13:00 | 13:27 | =C3-B3 |
| 4 | Convorbire3 | 14:00 | 14:06 | =C4-B4 |
| 5 | Convorbire4 | 11:00 | 11:16 | =C5-B5 |
| 6 | Convorbire5 | 19:00 | 19:12 | =C6-B6 |
| 7 | Convorbire6 | 14:00 | 14:06 | =C7-B7 |
| 8 | Convorbire7 | 12:30 | 12:49 | =C8-B8 |
| 9 | Convorbire8 | 14:30 | 14:47 | =C9-B9 |
| 10 | Convorbire9 | 13:30 | 13:45 | =C10-B10 |
| 11 | Convorbire10 | 18:15 | 18:41 | =C11-B11 |
| 12 |  |  |  | =SUM(D2:D11) |

### Varianta cu formule de arie în Excel

dacă doresc **coloana D goală** şi de fapt mă interesează doar durata totală a convorbirilor, atunci voi folosi următoarea formulă de arie în A1:

| . | A | B | C |
| --- | --- | --- | --- |
| 1 | {=SUM(C2:C11-B2:B11)} | Timp începere | Timp terminare |
| 2 | Convorbire1 | 12:00 | 12:28 |
| 3 | Convorbire2 | 13:00 | 13:27 |
| 4 | Convorbire3 | 14:00 | 14:06 |
| 5 | Convorbire4 | 11:00 | 11:16 |
| 6 | Convorbire5 | 19:00 | 19:12 |
| 7 | Convorbire6 | 14:00 | 14:06 |
| 8 | Convorbire7 | 12:30 | 12:49 |
| 9 | Convorbire8 | 14:30 | 14:47 |
| 10 | Convorbire9 | 13:30 | 13:45 |
| 11 | Convorbire10 | 18:15 | 18:41 |

Ce înseamnă de fapt **C2:C11-B2-B11** în interiorul formulei **SUM** ca formulă de arie ? Este ca şi cum i-am spune Excel-ului să calculeze rezultatele singulare **C2-B2, C3-B3** până la **C11-B11** în memorie, un fel de tabel paralel cu acesta. Face sens?

Atenţie puţin:

1. **Acoladele** le adaugă Excel automat, nu trebuie să le scrii tu.
2. După ce ai introdus formula, nu apeşi Enter, ci **Ctrl+Shift+Enter** (din acest motiv acest fel de formule se numesc formule **CSE**= **C**ontrol **S**hift **E**nter)

## Al doilea exemplu pentru formule de arie în Excel

Folosim un tabel Excel pentru centralizarea de concedii, în care fiecare angajat îşi bifează când vrea să aibă concediu:

| . | A | B | C | D | E | F | G | H | I | J | K | L | M |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 |  | 01/03 | 02/03 | 03/03 | 04/03 | 05/03 | 06/03 | 07/03 | 08/03 | 9/03 | 10/03 | 11/03 | 12/03 |
| 2 | Marian |  |  |  | u |  | u |  |  |  | u |  |  |
| 3 | Laurenţiu |  |  | u |  |  |  |  |  | u | u |  |  |

Rezultatul aş vrea să arate cam aşa:

Dacă foloseşti Excel 2019 sau mai nou, sau chiar Excel 365, atunci te poţi folosi de formula **TEXTJOIN**pentru a primi rezultatul pentru Marian astfel:

Formula se confirmă tot cu **Ctrl+Shift+Enter** şi acoladele apar automat.

Pentru versiunile anterioare de Excel 2019 nu este nici o altă comandă alternativă asemănătoare cu **TEXTJOIN**. Nici formula **CONCATENATE**() nu funcţionează, deoarece ea nu suportă o mulţime de celule ca argument, ci doar celule singulare. Cu **VBA**s-ar putea face însă foarte simplu.

Formula **TEXTJOIN**are următoarea sintaxă:

şi în cazul nostru:

Ceea ce înseamnă că formula **TEXTJOIN**() va prim prin argumentul **text1**doar acele date, în dreptul cărora este “u”, formatate cu formula **TEXT**() ca “zi/lună” prin “DD/MM”, iar în restul cazurilor (când nu avem acel “u”) va fi un text gol “”.

În cazul meu, având setările regionale ale Windows-ului setate pe Germania, a trebuit să introduc “TT/MM”. Pentru setări regionale de România, va trebui să introduci “ZZ/LL”. Dar dacă nu vrei să depinzi de aceste lucruri, poţi specifica mai clar, că tu vei scrie în formatul englezesc prin: “[$-409]DD/MM”.

Care ar fi paşii pentru ca să ajungi la rezultat fără formula de arie? Când găseşti rezultatul, atunci îţi va fi mult mai uşor să înţelegi şi cum funcţionează formula de arie, deoarece ar fi aceiaşi paşi de făcut.
