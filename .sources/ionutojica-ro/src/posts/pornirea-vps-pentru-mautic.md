---
source_url: "https://ionutojica.ro/pornirea-vps-pentru-mautic/"
saved_at: "20260612-193958"
slug: "pornirea-vps-pentru-mautic"
content_type: "post"
title: "Alegerea şi pornirea VPS pentru Mautic în 3 paşi - Ionuţ Ojică"
---

Pornirea VPS pentru Mautic trebuie să se înceapă prin securizarea lui chiar înainte de a-l crea, pentru a avea o instalare sigură. Vom începe prin crearea unei chei SSH, apoi vom lăsa doar uşile (porturile) folosite cu ajutorul firewall. Voi lua exemplul concret de la providerul de servere Hetzner, dar funcţionează şi pentru DigitalOcean şi ar trebui să funcţioneze pentru oricare alt provider de servere. Eu m-am ghidat foarte mult după recomandarea lui Joey din [articolul acesta](https://mauteam.org/mautic/mautic-admins/securing-your-mautic-installation/).

Chiar dacă Mautic poate fi instalat gratuit şi în hostingul tău (acolo unde sunt fişierele webisteului tău), pentru producţie soluţia finală este un **VPS** din mai multe puncte de vedere. Până la 15k contacte plătesc 5,83€ lunar. Dacă vrei şi tu VPS aşa de ieftin, prin acest link poţi primi **20 euro** pe care-i poţi folosi pentru **testarea VPS**-urilor Hetzner – practic îţi vor ajunge pentru primele 3 luni: [ionutojica.com/hetzner](https://ionutojica.com/hetzner) .

## Crearea unei chei SSH

De ce creăm o cheie SSH şi nu folosim serverul pur si simplu cu o parolă? O cheie SSH oferă o protecţie mărită. Mai multe poate cu siguranţă detalia google.

Chiar dacă procesul creării unei chei SSH precum şi înregistrarea ulterioară folosind această cheie necesită un efort mai mare, pentru siguranţă dar şi evitarea unui eventual atac, consider că se merită efortul.

Pentru început avem nevoie de **PuTTY Key Generator** din programul **PuTTY**. Este un program gratuit şi poate fi [descărcat de aici](https://www.puttygen.com/download-putty). De asemenea folosesc şi **KeePass** pentru a salva parolele şi cheile – [în articolul acesta](https://ionutojica.com/folosesc-keepass-nu-a-spart-nimeni-contul-de-email/) am menţionat câteva motive pentru care folosesc **KeePass**.

### Crearea cheii

1. Tipul de cheie de generat este cel implicit: RSA.
2. Apăsăm Generate şi mutăm mousul în fereastra **PuTTY** pentru a genera cheia.
3. Eu adaug la numele cheii şi subdomeniul pentru care este cheia
4. Creez cu **KeePass** o parolă complexă (modul implicit la mine este: lungimea de 20 de caractere care include: litere mari şi mici, numere, şi simboluri)
5. Copii parola din **KeePass** în **PuTTY Key Generator**
6. Apoi salvez cheile: privată şi publică

![](https://ionutojica.com/wp-content/uploads/2022/06/20220610-01-creare-cheie-SSH-1024x487.png)

### Salvez în KeePass

În intrarea din **KeePass** adaug şi celelalte câmpuri (3.) ale cheii SSH în tabul **Advanced** (1.), apăsând pe butonul **Add** (2.).

![](https://ionutojica.com/wp-content/uploads/2022/06/20220610-02-salvare-cheie-SSH-in-KeePass-1024x486.png)

### Introducerea în Hetzner

În Hetzner dau CopyPaste la cheia publică, aşa cum este ea creată în (4.) **PuTTY Key Generator**:

![](https://ionutojica.com/wp-content/uploads/2022/06/20220610-03-creare-cheie-SSH-in-Hetzner.png)

Şi apăsăm butonul **ADD SSH KEY**.

Acum am terminat crearea cheii SSH. Putem închide programul **PuTTY Key Generator** şi continuăm cu următorul aspect al securizării înainte de pornirea VPS pentru Mautic: deschiderea doar a porturilor folosite folosind firewall.

## Activarea Firewall

Avem două posibilităţi la dispoziţie: extern şi intern. Firewall-ul extern este oferit de providerul de VPS, iar firewall-ul intern îl putem activa în interiorul VPSului nostru.

### Firewall extern

De regulă acest serviciu este oferit gratuit de providerul de VPS. Avantajul firewall-ului extern este că putem configura porturile încă **înainte de pornirea VPS pentru Mautic**. Astfel putem proteja VPS-ul chiar din momentul creării lui.

Pentru moment configurăm VPS-ul astfel:

- toate porturile de ieşire să fie deschise – aici nu are rost să limităm în vreun fel
- doar portul de intrare SSH (22) îl lăsăm deschis – vom activa doar acest serviciu pentru moment, pentru a putea instala Mautic prin SSH. Ulterior, după ce Mautic este instalat, vom deschide şi porturile **http** şi **https**.

![](https://ionutojica.com/wp-content/uploads/2022/06/20220610-04-creare-Firewall-1024x203.png)

### Firewall intern

Configurarea firewall-ului intern este recomandat, chiar dacă avem activat şi firewall-ul extern. Firewall-ul intern il putem configura doar după ce VPS-ul este pornit. Acest punct îl voi detalia în momentul în care şi putem să-l configurăm. În acest moment putem începe cu adevărat pornirea VPS pentru Mautic.

## Alegerea serverului

### Locaţia

eu am ales Nüremberg, fiind locaţia cea mai apropiată de mine. Comunicarea cea mai intensă va fi cu serviciul de email, în cazul meu va fi Amazon SES, cu locaţia în Frankfurt.

![](https://ionutojica.com/wp-content/uploads/2022/06/20220610-05-VPS-locatie.png)

### Sistemul de operare

Ubuntu 20.04 este ok. Versiunea 22.04 de Ubuntu ar fi de asemenea ok, însă nu afectează cu nimic Mautic, neavând opţiuni în plus sau alte avantaje.

![](https://ionutojica.com/wp-content/uploads/2022/06/20220610-06-VPS-OS.png)

### Tipul serverului

pentru perioada instalării putem alege CX21, adică 2 CPU + 4GB RAM + 40GB SSD la 5.83€/lună.

![](https://ionutojica.com/wp-content/uploads/2022/06/20220610-07-VPS-tip-1024x176.png)

### Volum

fără – cei 40 GB spaţiu pe SSD sunt super suficienţi pentru moment. Iar ulterior, când vom avea mai mulţi abonaţi (peste 25k) şi vom alege un VPS mai puternic pentru Mautic, atunci şi capacitatea spaţiului SSD va fi mai mare. Eu nu am ales nici un volum extra, tu poţi însă alege – asta va fi plătit separat.

### Network

fără.

### Firewall

alegem cel creat mai înainte – în sfârşit ne folosim de ceea ce am creat mai înainte. Aici trebuie doar să alegem Firewall-ul.

![](https://ionutojica.com/wp-content/uploads/2022/06/20220610-08-VPS-Firewall.png)

### Servicii adiţionale

deocamdată fără.

### Cheie SSH

alegem cea creată mai înainte.

![](https://ionutojica.com/wp-content/uploads/2022/06/20220610-09-VPS-SSH.png)

### Numele serverului

eu adaug şi numele subdomeniului pe lângă numele propus de Hetzner.

![](../images/posts/pornirea-vps-pentru-mautic/image-palceholder.png)

şi apăsăm butonul Create & Buy now. În dreptul butonului ai şi costul lunar pentru acest server, cost care începe din momentul în care apeşi butonul. Dacă vei opri serverul între timp, vei plăti doar pentru zilele cât a fost activ, nu tot costul lunar.

Până aici am terminat de descris pornirea VPS pentru Mautic. În câteva secunde va fi gata de folosire VPS-ul nou creat şi putem continua cu următoarele acţiuni: să ne conectăm la server prin SSH, să activăm firewall-ul intern şi să instalăm Mautic.
