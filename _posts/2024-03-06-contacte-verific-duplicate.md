---
icon: fas fa-user
title: Cum descopăr care contacte au aceeaşi adresă de email?
categories: [contacte]
tags: [contacte,contacts,capcane,inwork,novideo]
---

Metoda este ceva mai tehnică, deoarece căutarea o facem direct în baza de date folosind această comandă:

```sql
SELECT email, COUNT(email) 
FROM leads 
WHERE email IS NOT NULL AND email != '' 
GROUP BY email 
HAVING COUNT(email) > 1;
```

Rezultatul va fi o listă de adrese de email pentru care sunt mai multe contacte create. Apoi în Mautic te poţi decide care contact să-l păstrezi şi care să-l ştergi.

[Mautic 5 vine cu o comandă rapidă pentru deduplicare](https://forum.mautic.org/t/how-did-happened-duplicate-contact/24575/30)
