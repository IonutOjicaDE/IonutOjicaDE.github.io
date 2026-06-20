---
source_url: "https://ionutojica.ro/marcarea-email-urilor-ca-spam/"
saved_at: "20260612-193958"
slug: "marcarea-email-urilor-ca-spam"
content_type: "post"
title: "Mautic şi marcarea email-urilor ca SPAM - Ionuţ Ojică"
---

Eu personal simt că primesc prea multe email-uri pe zi. Dacă le-aş număra presupun că sunt 10, în afara celor legate de Excel sau de acest site.

Majoritatea email-urilor (încă mai) ştiu de ce le primesc.

Sunt însă puţine email-uri … nu-mi aduc aminte să le fi cerut! Nu-mi aduc aminte să mă fi abonat pe site-ul lor, sau să fi introdus adresa de email acolo.

Dar, ştiind că a marca un email ca SPAM are consecinţe negative pentru expeditor, nu le marchez (încă) ci doar le şterg.

Şi aştept: ori îmi aduc aminte despre ce este vorba, ori expeditorul renunţă să-mi mai trimită email-uri, ori îmi iau puţin timp şi fac o mică cercetare.

Dacă email-ul trece de criteriile menţionate în [articolul despre phishing](https://ionutojica.com/phishing/), atunci pot cu încredere să apăs pe link-ul de Dezabonare.

Deci: aşa cum am menţionat în articolul despre phishing: dacă email-ul este dubios, nu apăsa nici un link din interior. Nici cel de Dezabonare. În acest caz este bine să marchezi email-ul ca SPAM.

## Care este diferenţa dintre Dezabonare şi marcarea email-urilor ca SPAM

Voi prezenta situaţia mea, voi expune din experienţa mea.

Pentru a răspunde la subiect, trebuie o scurtă introducere.

### Introducere în sistemul de trimitere al email-urilor

Eu, pentru a trimite un newsletter la 3000 de adrese de email, mă folosesc de **Mautic**. Acesta este un program ce rulează pe Linux. Aşa cum Excel este un program ce rulează pe Windows, aşa Mautic este alt program dar care rulează pe Linux şi ajută la organizarea trimiterii de Newslettere.

Mautic însă nu trimite el însuşi email-uri, ci el doar le creează şi le trimite la **AWS** (Amazon Web Services).

La AWS mi-am făcut cont şi am activat serviciul **SES** (Simple Email Service).

Pe scurt: AWS trimite email-urile efectiv către fiecare adresă de email, conform cu ce a pregătit Mautic.

### Dar care e problema?

Firmele ce oferă servicii de găzduire de email (cum ar fi yahoo sau gmail) au activ şi serviciul de protecţie împotriva SPAM-ului.

Această protecţie împotriva SPAM-ului se face şi pe baza adresei IP a expeditorului. De fapt acest criteriu este unul foarte important.

Sunt alte firme specializate, care au bază de date cu multe IP-uri şi reputaţia fiecăruia.

Astfel că, atunci când cineva din contul lui de yahoo marchează un email drept SPAM, se întâmplă următorul lucru.

### Ce se întâmplă de fapt la marcarea email-urilor ca SPAM

Ceea ce vezi tu: email-ul ajunge în dosarul SPAM. Şi speri ca email-urile viitoare asemănătoare să ajungă tot acolo. Sau expeditorul să se oprească din trimis email-uri.

Se întâmplă şi anumite acţiuni care nu se văd:

1. yahoo trimite informaţia la firmele specializate, că expeditorul a fost marcat ca spam
2. firma specializată află IP-ul şi-i adaugă puncte
3. firma specializată informează expeditorul de acest lucru, cu scopul ca trimiterea email-urilor să se oprească

Şi aici este încă o acţiune:

4. eu primesc email de la AWS. Mai jos poţi vedea un exemplu concret de astfel de email:

![marcarea email-urilor ca SPAM](https://ionutojica.com/wp-content/uploads/2023/04/20230401_Email_complaints_amazonses.webp)

Email-ul ce-l primesc eu este de la amazonses.com . Şi are ataşat email-ul ce eu l-am trimis (adică Mautic, la iniţiativa mea), Şi mai are încă un fişier ataşat cu extensia “.dat” . Acest fişier deschis cu Notepad++ are următorul conţinut:

![marcarea email-urilor ca SPAM](https://ionutojica.com/wp-content/uploads/2023/04/20230401_Email_complaints_amazonses_atasament.png)

Cum mă afectează pe mine marcarea email-urilor ca SPAM

AWS urmăreşte cu stricteţe reputaţia IP-urilor folosite pentru a trimite email-uri.

Cu cât reputaţia este mai bună, cu atât email-urile ajung în Inbox şi nu în dosarul SPAM.

AVS asta doreşte, din acest motiv a stabilit limite.

Eu urmăresc două limite, de fapt sunt cam singurele importante.

## Complaints – Plângerile

Adică procentul de email-uri care au fost trimise şi au fost marcate ca SPAM.

**Limita maximă la AWS este de 0.5%** . Atunci AWS nu mai trimite email-urile mele.

Mai este o **limită de atenţionare, la 0.1%** . Aici încă mai pot trimite email-uri, dar este bine să iau atitudine.

Când rata mea de plângeri este peste limita de atenţionare, AWS deschide un caz pentru mine şi eu trebuie să menţionez ce acţiuni am luat pentru a ajunge din nou sub 0.1% rată de plângere.

Pentru a nu înrăutăţi artificial situaţia, am activat în **AWS** serviciul **SNS** (Simple Notification Service) care anunţă automat **Mautic** şi aceste adrese de email sunt automat dezabonate.

Cam aşa arată la mine starea în prezent, văzută din mai multe puncte de vedere:

![](https://ionutojica.com/wp-content/uploads/2023/04/20230401_Complaint_rate.webp)

![](https://ionutojica.com/wp-content/uploads/2023/04/20230401_AWS_CloudWatch-ComplaintRate.webp)

0.00045 înseamnă 0.045% . Este aproape jumătate din 0.1% la cât este este doar atenţionarea (Warning).

![](../images/posts/marcarea-email-urilor-ca-spam/image-palceholder.png)

Cu cât trimit mai multe email-uri şi sunt fără plângeri, cu atât revine acest procentaj mai repede la 0.

Mă voi orienta după sfaturile AWS şi voi implementa câteva aspecte menţionate de ei, pentru a nu intra în probleme (imposibilitatea de a mai trimite email-uri). Aceste sfaturi le poţi citi şi tu [dând clic aici](https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html#cm-q4) (este în engleză).

## Bounces – email-uri ratate

Aceste email-uri sunt trimise de AWS SES, dar ele se întorc înapoi din anumite motive:

### Domeniul nu există

Presupun că eroarea este de fapt o greşeală de tastare. Persoana va avea dezamăgirea că s-a înscris să primească materialul gratuit de la mine şi nu primeşte nimic. Iar eu nu am ce face.

**Mautic** prelucrează automat aceste mesaje şi dezabonează automat adresa de email, pentru ca să nu mai trimit email-uri la această adresă de email. Pentru aceasta am activat în **AWS** serviciul **SNS** (Simple Notification Service).

Eu primesc un astfel de email în această situaţie:

şi fişierul “details.txt” ataşat conţine:

### Adresa de email nu mai există

Acest fel de eroare o primesc din cauza mea. Persoana respectivă s-a abonat acum 2 ani la mine. Între timp eu am făcut pauză şi nu i-am mai trimis Newslettere.

Iar acum îi trimit un email… am avut cam 2500 astfel de adrese de email. Este normal că unele, puţine, să nu mai existe între timp.

Uite ce email primesc în acest caz:

![](https://ionutojica.com/wp-content/uploads/2023/04/20230402_AWS_Bounce_AdresaEmail.png)

şi fişierul “details.txt” ataşat conţine:

![](https://ionutojica.com/wp-content/uploads/2023/04/20230402_AWS_Bounce_AdresaEmail_txt.png)

### Căsuţa poştală este plină

şi nu mai acceptă alt email. Asta observ că se întâmplă regulat cu adrese de email de la gmail. Şi nu sunt puţine cazurile.

Deci, dacă ai email la gmail, este bine să te uiţi cât spaţiu mai este disponibil în contul tău şi dacă mai poţi primi email-uri.

Mautic nu marchează automat adresele de email ca dezabonate. Probabil nici AWS nu trimite notificare prin SNS la Mautic că este vreo problemă.

Pentru siguranţă, dezabonez eu manual aceste adrese de email. Deocamdată nu mi-am bătut capul pentru o soluţie automatizată, volumul fiind relativ redus.

Uite cum arată email-ul pe care-l primesc de la AWS:

![](https://ionutojica.com/wp-content/uploads/2023/04/20230402_AWS_Bounce_Plin.png)

şi fişierul “details.txt”:

![](https://ionutojica.com/wp-content/uploads/2023/04/20230402_AWS_Bounce_Plin_txt.png)

## Dezabonare sau marcarea email-urilor ca SPAM?

Sper tare mult email-urile de la mine să nu le marchezi ca SPAM. Ci, dacă la un moment dat vei dori să nu-ţi mai trimit email-uri, pur şi simplu dezabonează-te dând clic pe linkul din subsolul oricărui email de la mine şi voi respecta decizia ta.

Ţi-ai fi dorit să primeşti şi alte informaţii? Lasă-mi un comentariu sau trimite-mi un email.
