# Inventar conținut și pregătire Jekyll

Data inventar: 2026-06-20  
Repo analizat: `IonutOjicaDE.github.io`  
Zona aleasă pentru conținutul existent: **Materiale**  
Stadiu: inventar complet pentru migrare, fără mutare de fișiere publice.

## 1. Rezumat executiv

Repo-ul actual este un site Jekyll/Chirpy folosit ca bază de cunoștințe pentru Mautic, email, KeePass și materiale tehnice. Copia `ionutojica.ro` din `.sources/ionutojica-ro/src` conține pagini comerciale WordPress, articole, imagini, assets Divi și screenshots. Documentele master definesc o direcție diferită: site comercial structurat pe segmente CURS, WOO, SITE, EMAIL și pe livrare DIY/DFY.

Direcția recomandată:

- nu ștergem conținutul actual din GitHub Pages;
- îl păstrăm logic sub zona **Materiale**, ca resurse operaționale și tutoriale;
- construim nucleul V1 după cele 14 pagini definite în `structura.md`;
- refolosim conținutul WordPress doar unde susține noua arhitectură;
- folosim documentele master ca surse de adevăr pentru audiență, structură și identitate.

## 2. Status tooling Jekyll

Ruby 3.2 este disponibil direct în PATH. Calea funcțională verificată este:

- `C:\ProgramFiles\Ruby32-x64\bin\ruby.exe`
- `C:\ProgramFiles\Ruby32-x64\bin\gem.cmd`
- `C:\ProgramFiles\Ruby32-x64\bin\bundle.bat`

Verificări efectuate:

| Comandă | Rezultat | Observație |
| --- | --- | --- |
| `ruby -v` | Ruby 3.2.11 | funcțional, disponibil în PATH |
| `gem -v` | RubyGems 3.4.19 | funcțional |
| `bundle -v` | Bundler 2.4.19 | funcțional |
| `jekyll -v` | eșec | Jekyll nu este instalat global; trebuie folosit prin Bundler |
| `bundle install` cu `BUNDLE_PATH=vendor/bundle` și `BUNDLE_USER_HOME=.bundle` | succes | dependențele sunt instalate local în `vendor/bundle` |
| `bundle exec ruby .bundle\jekyll-runner.rb -v` | Jekyll 4.3.4 | funcțional prin runner local |
| `bundle exec ruby .bundle\jekyll-runner.rb build` | succes | site-ul se generează în `_site` |

Concluzie tooling:

- Ruby 3.2.11 este versiunea potrivită pentru `html-proofer ~> 4.4` și pentru workflow-ul GitHub Actions existent;
- `wdm 0.1.1` a fost scos din instalarea implicită, deoarece este opțional pentru watch/livereload și bloca build-ul local pe Windows;
- `jekyll` este blocat explicit la `~> 4.3.0`, compatibil cu Chirpy 6.5 și mai stabil local decât Jekyll 4.4.x în acest runtime;
- `Gemfile.lock` a fost generat cu Jekyll 4.3.4 și Bundler 2.4.19;
- `vendor/`, `.bundle/`, `_site/` și `.jekyll-cache/` rămân artefacte locale ignorate de Git;
- build-ul local funcționează prin runner-ul `.bundle\jekyll-runner.rb`, care corectează în sesiunea locală o problemă de `Dir[...]` / `require_all` întâlnită de Jekyll pe acest setup Windows.

## 3. Surse de adevăr

### Documente master

| Fișier | Rol | Acțiune | Țintă |
| --- | --- | --- | --- |
| `.sources/audienta.md` | audiență, segmentare, DIY/DFY, calificare | folosește ca sursă de adevăr | toate paginile comerciale |
| `.sources/manual-identitate-vizuala.md` | identitate vizuală, UI, zone, culori, tipografie | folosește ca sursă de adevăr pentru design ulterior | toate layout-urile și componentele |
| `.sources/structura.md` | arhitectura celor 14 pagini V1 și ordinea secțiunilor | folosește ca sursă de adevăr pentru structură | sitemap V1 |

### Documente suport

| Fișier | Rol | Acțiune | Țintă |
| --- | --- | --- | --- |
| `.sources/audienta-curs.md` | detalii A1 DIY CURS și A2 DFY CURS | folosește pentru copy și criterii | paginile `/cursuri/...` |
| `.sources/audienta-woo.md` | detalii B1 DIY WOO și B2 DFY WOO | folosește pentru copy și criterii | paginile `/magazin/...` |
| `.sources/audienta-site.md` | detalii C1 DIY SITE și C2 DFY SITE | folosește pentru copy și criterii | paginile `/website/...` |
| `.sources/audienta-email.md` | detalii D2 DFY EMAIL | folosește pentru copy și criterii | `/email/mautic-ses` |
| `.sources/ghid-editorial.md` | voce, ton, presiune permisă, pagini Home/Despre/Contact | folosește la rescriere | toate textele publice |
| `.sources/biblioteca-mesaje.md` | microcopy, CTA, mesaje pe segmente | folosește la CTA, formulare, mesaje | toate paginile de ofertă și suport |
| `.sources/audit-importanta-documente.md` | ierarhia documentelor și observații de guvernanță | folosește ca checklist | proces editorial |

## 4. Sitemap V1 și surse recomandate

| Pagină V1 | Segment | Surse utile | Acțiune |
| --- | --- | --- | --- |
| `/` Acasă | toate | `structura.md`, `audienta.md`, `home.md`, `biblioteca-mesaje.md` | adaptează fragmente, rescrie după noua hartă de oferte |
| `/cursuri/administrare-learndash` | A1_DIY_CURS | `audienta-curs.md`, `biblioteca-mesaje.md` | scrie de la zero; nu există pagină actuală directă |
| `/cursuri/implementare-learndash` | A2_DFY_CURS | `platforma-ta-de-cursuri-online.md`, `audienta-curs.md` | adaptează conținut WordPress și curăță tonul |
| `/magazin/administrare-woocommerce` | B1_DIY_WOO | `audienta-woo.md`, `biblioteca-mesaje.md` | scrie de la zero |
| `/magazin/implementare-woocommerce` | B2_DFY_WOO | `audienta-woo.md`, `home.md` | scrie de la zero; refolosește doar principii generale |
| `/website/administrare-wordpress` | C1_DIY_SITE | `audienta-site.md`, `twentytwentyfive-child.md` | scrie de la zero; materialul tehnic devine suport |
| `/website/implementare-wordpress` | C2_DFY_SITE | `audienta-site.md`, `website-artbodenleger-artbodenleger-de.md`, `home.md` | scrie de la zero, cu proof/caz dacă e relevant |
| `/email/mautic-ses` | D2_DFY_EMAIL | `email-marketing-mautic-migrare.md`, `audienta-email.md`, articole Mautic | adaptează puternic; elimină placeholder-ele și hype-ul |
| `/despre` | suport conversie | `home.md`, `_tabs/despre.md`, `ghid-editorial.md` | rescrie în registru de credibilitate și mod de lucru |
| `/contact` | suport conversie | `home-contact.md`, `biblioteca-mesaje.md` | adaptează formularul și așteptările minime |
| `/lista-de-asteptare` | suport conversie | `structura.md`, `biblioteca-mesaje.md` | scrie de la zero |
| `/confirmare` | suport conversie | `structura.md`, `biblioteca-mesaje.md` | scrie de la zero |
| `/termeni-si-conditii` | legal | `termeni-si-conditii.md` | adaptează legal, păstrează claritatea |
| `/politica-de-confidentialitate` | legal | `politica-de-confidentialitate.md` | adaptează legal, păstrează claritatea |

Pagini extra recomandate în afara V1:

| Pagină | Motiv | Acțiune |
| --- | --- | --- |
| `/materiale` | intrare pentru tutoriale, FAQ, arhive și conținut existent | creează în etapa de migrare |
| `/impressum` | util legal pentru context Germania / contact firmă | păstrează footer-only dacă este necesar |

## 5. Inventar `ionutojica-ro/src/pages`

| Fișier | Titlu / rol | Temă | Segment | Acțiune | Țintă |
| --- | --- | --- | --- | --- | --- |
| `blog.md` | Blog | Materiale | n/a | adaptează ca sursă pentru index Materiale sau înlocuiește cu listare Chirpy | `/materiale` |
| `email-marketing-mautic-migrare.md` | Email Marketing fără stres | EMAIL | D2_DFY_EMAIL | adaptează puternic; elimină secțiuni Divi, claim-uri nevalidate și promisiuni largi | `/email/mautic-ses` |
| `home.md` | Funnel de vânzări automatizat | toate / credibilitate | mixt | refolosește fragmente: servicii, testimoniale, despre, realizări; nu copia ca Home nou | `/`, `/despre`, proof |
| `home-contact.md` | Contact | suport conversie | n/a | adaptează | `/contact` |
| `impressum.md` | Impressum | legal | n/a | păstrează opțional, footer-only | `/impressum` |
| `platforma-ta-de-cursuri-online.md` | Platformă cursuri online | CURS | A2_DFY_CURS | adaptează; transformă în pagină DFY clară cu scope și risc | `/cursuri/implementare-learndash` |
| `politica-de-confidentialitate.md` | Politică de confidențialitate | legal | n/a | adaptează | `/politica-de-confidentialitate` |
| `termeni-si-conditii.md` | Termeni și condiții | legal | n/a | adaptează | `/termeni-si-conditii` |
| `twentytwentyfive-child.md` | Tema copil Twenty Twenty-Five | SITE / WordPress | C1 suport | mută în Materiale, posibil suport pentru DIY SITE | `/materiale/website` |

## 6. Inventar `ionutojica-ro/src/posts`

| Fișier | Titlu | Temă | Segment | Acțiune | Țintă |
| --- | --- | --- | --- | --- | --- |
| `2-formule-de-arie-in-excel.md` | 2 formule de arie în Excel | Excel / operațional | n/a | arhivează ca material secundar | `/materiale` |
| `afla-pentru-ce-platesti-pe-activecampaign.md` | Află pentru ce plătești pe ActiveCampaign | EMAIL | D2 suport | adaptează ca argument de cost, fără atac comercial | `/email/mautic-ses`, `/materiale/email` |
| `ce-au-excel-si-catia-v5-in-comun.md` | Ce au Excel și Catia V5 în comun? | Excel / Catia | n/a | arhivează ca material secundar | `/materiale` |
| `ce-este-mautic.md` | Ce este Mautic? | EMAIL / Mautic | D2 suport | păstrează ca material explicativ; link posibil din pagina EMAIL | `/materiale/email` |
| `cum-reactionezi-cand-a-venit-stresul-dar-inca-nu-stii.md` | Cum reacționezi când a venit stresul | editorial / proces | n/a | arhivează; posibil refolosire de ton în Despre | `/materiale` |
| `cum-sa-instalez-mautic-gata-pentru-productie.md` | Cum să instalez Mautic gata pentru producție | EMAIL / Mautic | D2 suport | păstrează ca dovadă tehnică / material | `/materiale/email` |
| `daca-atunci-in-excel-este-if.md` | Dacă atunci în Excel este IF() | Excel | n/a | arhivează ca material secundar | `/materiale` |
| `de-ce-formule-si-nu-functii-in-excel.md` | Formule în Excel | Excel | n/a | arhivează ca material secundar | `/materiale` |
| `de-ce-mautic-dintre-425-altele.md` | De ce Mautic dintre 425+ autorespondere | EMAIL / Mautic | D2 suport | adaptează ca material de evaluare, actualizează dacă rămâne public | `/materiale/email` |
| `documente-excel-deschise-la-fiecare-pornire-a-excel-ului.md` | Documente Excel deschise la pornire | Excel | n/a | arhivează ca material secundar | `/materiale` |
| `documente-imense-si-complexe-in-excel-fara-functii-volatile.md` | Documente Excel fără funcții volatile | Excel | n/a | arhivează ca material secundar | `/materiale` |
| `excel-a-dezactivat-toate-butoanele.md` | Excel a dezactivat toate butoanele | Excel | n/a | arhivează ca material secundar | `/materiale` |
| `folosesc-keepass-nu-a-spart-nimeni-contul-de-email.md` | Folosesc KeePass | securitate | suport transversal | păstrează ca material de securitate/acces | `/materiale/securitate` |
| `invata-catia-v5-de-la-zero.md` | Învață Catia V5 de la zero | Catia | n/a | arhivează ca material secundar | `/materiale` |
| `marcarea-email-urilor-ca-spam.md` | Mautic și marcarea emailurilor ca SPAM | EMAIL / deliverability | D2 suport | păstrează ca material de risc controlat | `/materiale/email` |
| `mautic-este-gratuit-pur-si-simplu-care-sunt-minusurile.md` | Mautic este gratuit? Minusuri | EMAIL / Mautic | D2 suport | păstrează ca material de evaluare, actualizează dacă e necesar | `/materiale/email` |
| `newslettere-emailuri-dezabonare.md` | Newslettere, emailuri, dezabonare | EMAIL | D2 suport | păstrează ca material operațional | `/materiale/email` |
| `o-idee-si-presupunerea-ca-excel-ma-poate-ajuta.md` | O idee și presupunerea că Excel mă poate ajuta | Excel / proces | n/a | arhivează ca material secundar | `/materiale` |
| `o-noua-versiune-mautic-4-3-promite-noi-functii.md` | O nouă versiune Mautic 4.3 | EMAIL / Mautic | D2 suport | arhivează; marchează ca posibil depășit | `/materiale/email` |
| `open-source-folosit-de-milioane-de-oameni.md` | Open-source folosit de milioane | open-source / WordPress | suport transversal | păstrează ca material editorial, nu ca promisiune comercială | `/materiale` |
| `phishing.md` | Emailuri de phishing | securitate / email | suport transversal | păstrează ca material de securitate | `/materiale/securitate` |
| `pornirea-vps-pentru-mautic.md` | Alegerea și pornirea VPS pentru Mautic | EMAIL / infrastructură | D2 suport | păstrează ca material tehnic | `/materiale/email` |
| `primul-articol-entuziasm-maxim.md` | Primul articol | editorial vechi | n/a | arhivează; nu folosi în navigația principală | `/materiale/arhiva` |
| `programe-open-source-gratuite-de-automatizare.md` | Programe open-source de automatizare | open-source | suport transversal | păstrează ca material secundar | `/materiale` |
| `strategia-in-catia-v5.md` | Strategia în Catia V5 | Catia | n/a | arhivează ca material secundar | `/materiale` |
| `toate-functiile-mautic-partea-1.md` | Toate funcțiile Mautic | EMAIL / Mautic | D2 suport | păstrează ca material explicativ | `/materiale/email` |
| `website-artbodenleger-artbodenleger-de.md` | Website ArtBodenleger | SITE / proof | C2_DFY_SITE suport | adaptează ca dovadă/caz scurt, dacă este încă reprezentativ | `/website/implementare-wordpress`, `/materiale/website` |

## 7. Inventar postări actuale Chirpy (`_posts`)

Toate postările actuale trebuie păstrate. Recomandarea este să fie scoase din poziția de „site principal” și să devină **Materiale**. URL-urile curente pot fi păstrate în prima migrare pentru a evita linkuri rupte; mutarea fizică/permalink-urile se decid într-o etapă separată.

| Fișier | Titlu | Temă | Acțiune | Țintă |
| --- | --- | --- | --- | --- |
| `2024-03-05-cum-sa.md` | Cum să fac x în Mautic? | EMAIL / Mautic FAQ | păstrează | Materiale / Mautic |
| `2024-03-05-cum-sa-nu-folosesti.md` | Cum să nu folosești Mautic | EMAIL / risc | păstrează | Materiale / Mautic |
| `2024-03-05-termeni.md` | Termeni folosiți în Mautic | EMAIL / termeni | păstrează | Materiale / Mautic |
| `2024-03-05-util-pentru-site.md` | Util pentru crearea site-ului | SITE | păstrează | Materiale / Website |
| `2024-03-06-contacte-adaug.md` | Cum adaug manual un nou contact? | EMAIL / Mautic contacte | păstrează | Materiale / Mautic |
| `2024-03-06-contacte-adaug-in-campanie.md` | Cum adaug contacte într-o campanie? | EMAIL / Mautic contacte | păstrează | Materiale / Mautic |
| `2024-03-06-contacte-adaug-in-segment.md` | Cum adaug contacte într-un segment static? | EMAIL / Mautic contacte | păstrează | Materiale / Mautic |
| `2024-03-06-contacte-caut.md` | Cum caut contacte? | EMAIL / Mautic contacte | păstrează | Materiale / Mautic |
| `2024-03-06-contacte-import.md` | Cum import și export contacte? | EMAIL / Mautic contacte | păstrează | Materiale / Mautic |
| `2024-03-06-contacte-verific.md` | Cum verific istoricul unui contact? | EMAIL / Mautic contacte | păstrează | Materiale / Mautic |
| `2024-03-06-contacte-verific-duplicate.md` | Cum descopăr contacte duplicate? | EMAIL / Mautic contacte | păstrează | Materiale / Mautic |
| `2024-03-07-formulare-actiuni.md` | După completarea formularului, să ... | EMAIL / formulare | păstrează | Materiale / Mautic |
| `2024-03-07-formulare-adaug.md` | Adaug un formular în Mautic | EMAIL / formulare | păstrează | Materiale / Mautic |
| `2024-03-07-formulare-email-valid.md` | Filtrez adrese email invalide | EMAIL / formulare | păstrează | Materiale / Mautic |
| `2024-03-07-formulare-modific.md` | Modific un formular din Mautic | EMAIL / formulare | păstrează | Materiale / Mautic |
| `2024-03-07-formulare-pe-pagina.md` | Adaug formularul pe o pagină | EMAIL / formulare + SITE | păstrează | Materiale / Mautic |
| `2024-03-07-formulare-roboti.md` | Filtrez roboți înscriși prin formulare | EMAIL / formulare + securitate | păstrează | Materiale / Mautic |
| `2024-03-11-campanii-capcana-inlatura-din-campanie.md` | Capcana acțiunii Înlătur din campanie | EMAIL / campanii | păstrează | Materiale / Mautic |
| `2024-03-12-contacte-capcana-adaug-acelasi-email.md` | Capcana contactelor cu aceeași adresă | EMAIL / contacte | păstrează | Materiale / Mautic |
| `2024-03-14-campanii-capcana-inlatura-din-segment.md` | Capcana acțiunii Înlătur din segment | EMAIL / campanii | păstrează | Materiale / Mautic |
| `2024-03-15-etichete-adaug.md` | Adaug o nouă etichetă | EMAIL / etichete | păstrează | Materiale / Mautic |
| `2024-03-15-etichete-redenumesc.md` | Redenumesc o etichetă | EMAIL / etichete | păstrează | Materiale / Mautic |
| `2024-03-15-segmente-adaug.md` | Adaug un nou segment | EMAIL / segmente | păstrează | Materiale / Mautic |
| `2024-03-18-campanii-capcana-actiuni-libere.md` | Capcana acțiunilor nelegate | EMAIL / campanii | păstrează | Materiale / Mautic |
| `2024-03-18-campanii-capcana-sterg-pasi.md` | Capcana modificării unei campanii cu contacte | EMAIL / campanii | păstrează | Materiale / Mautic |
| `2024-03-18-etichete-sterg.md` | Șterg o etichetă | EMAIL / etichete | păstrează | Materiale / Mautic |
| `2024-03-29-etichete-creez-segment.md` | Creez segment cu cei care au etichete | EMAIL / etichete + segmente | păstrează | Materiale / Mautic |
| `2024-03-31-keepass-0-beneficii.md` | Beneficiile KeePass | securitate | păstrează | Materiale / Securitate |
| `2024-03-31-keepass-1-windows.md` | Instalarea KeePass pe Windows | securitate | păstrează | Materiale / Securitate |
| `2024-03-31-keepass-2-ftp.md` | Copierea fișierului de chei pe FTP | securitate | păstrează | Materiale / Securitate |
| `2024-03-31-keepass-3-android.md` | KeePass pe Android | securitate | păstrează | Materiale / Securitate |
| `2024-04-12-email-cronometru.md` | Adaug un cronometru în email | EMAIL | păstrează | Materiale / Mautic |
| `2024-04-16-webinar-reprogramare-data.md` | Reprogramarea webinarului | EMAIL / webinar | păstrează | Materiale / Mautic |
| `2024-05-12-cum-reputatia-emailurilor.md` | Reputația emailurilor trimise prin Mautic | EMAIL / deliverability | păstrează, link posibil din pagina EMAIL | Materiale / Mautic |
| `2024-05-12-cum-se-plateste.md` | Când facem transferul la Mautic și cât costă? | EMAIL / comercial vechi | păstrează, verifică actualitatea înainte de link public | Materiale / Mautic |
| `2024-05-12-email-adaug.md` | Adaug un nou email | EMAIL | păstrează | Materiale / Mautic |
| `2024-05-12-email-funnel.md` | Emailurile pentru Funnel | EMAIL / funnel | păstrează | Materiale / Mautic |
| `2024-05-12-email-newsletter.md` | Cum programez un Newsletter | EMAIL | păstrează | Materiale / Mautic |
| `2024-05-12-initializare-dezabonare.md` | Inițializare text dezabonare | EMAIL / compliance | păstrează | Materiale / Mautic |
| `2024-05-12-initializare-semnatura.md` | Inițializare semnătură emailuri | EMAIL | păstrează | Materiale / Mautic |
| `2024-05-12-segmente-lista-mare.md` | Lista mare pentru newslettere | EMAIL / segmente | păstrează | Materiale / Mautic |
| `2024-05-12-webinar-emailuri.md` | Emailurile pentru automatizarea webinarului | EMAIL / webinar | păstrează | Materiale / Mautic |
| `2024-05-12-webinar-linkul-sedintei.md` | Linkul spre ședința de Zoom | EMAIL / webinar | păstrează | Materiale / Mautic |
| `2024-05-12-webinar-prezentare-generala.md` | Prezentarea automatizării de webinar | EMAIL / webinar | păstrează | Materiale / Mautic |
| `2025-03-26-cheat-sheet.md` | Cheat sheet | SITE / utilitar | păstrează | Materiale / Website |
| `2025-05-30-browser.md` | Ce este un browser | termeni / începători | păstrează | Materiale / Termeni |
| `2025-05-30-browser-vs-client-de-email.md` | Browser versus client de email | termeni / începători | păstrează | Materiale / Termeni |
| `2025-05-30-client-de-email.md` | Ce este un client de email | termeni / începători | păstrează | Materiale / Termeni |

## 8. Inventar tab-uri actuale Chirpy (`_tabs`)

| Fișier | Rol actual | Acțiune | Țintă recomandată |
| --- | --- | --- | --- |
| `faq.md` | intrare Mautic FAQ | înlocuiește ca poziție principală; păstrează ca Materiale | `/materiale` sau `/materiale/mautic` |
| `contacte.md` | listă articole Mautic contacte | păstrează, scoate din nav principal | Materiale / Mautic |
| `formulare.md` | listă articole Mautic formulare | păstrează, scoate din nav principal | Materiale / Mautic |
| `segmente.md` | listă articole Mautic segmente | păstrează, scoate din nav principal | Materiale / Mautic |
| `campanii.md` | listă articole Mautic campanii | păstrează, scoate din nav principal | Materiale / Mautic |
| `emailuri.md` | listă articole Mautic emailuri | păstrează, scoate din nav principal | Materiale / Mautic |
| `etichete.md` | listă articole Mautic etichete | păstrează, scoate din nav principal | Materiale / Mautic |
| `webinar.md` | listă articole webinar | păstrează, scoate din nav principal | Materiale / Mautic |
| `keepass.md` | listă articole KeePass | păstrează, scoate din nav principal | Materiale / Securitate |
| `despre.md` | despre vechi | rescrie complet | `/despre` |
| `archives.md` | arhivă Chirpy | păstrează utilitar | `/archives` sau sub Materiale |
| `categories.md` | categorii Chirpy | păstrează utilitar | `/categories` sau sub Materiale |
| `tags.md` | tag-uri Chirpy | păstrează utilitar | `/tags` sau sub Materiale |

## 9. Assets, imagini și screenshots

### Copia WordPress (`.sources/ionutojica-ro/src`)

| Tip | Cantitate observată | Acțiune |
| --- | ---: | --- |
| pagini Markdown | 9 | inventariate individual mai sus |
| articole Markdown | 27 | inventariate individual mai sus |
| HTML exportat | 35 | folosește doar pentru recuperare structurală dacă Markdown-ul este insuficient |
| screenshots desktop/mobile | 78 | folosește pentru referință vizuală, nu migra automat |
| imagini extrase | 162 | selectează manual doar imagini utile pentru proof, profil, capturi tehnice |
| assets CSS/JS Divi/WordPress | 160 | ignoră pentru noul Chirpy; nu migra în public |
| CSV-uri index/assets/images/screenshots/sitemap | 5 | păstrează ca inventar brut al exportului |

Imagini candidate pentru reutilizare manuală:

- fotografii/profil din `images/pages/home` și `assets/images`;
- testimoniale din `images/pages/home` și `images/pages/email-marketing-mautic-migrare`;
- capturi Mautic/email relevante pentru pagina `/email/mautic-ses`;
- capturi sau imagini pentru `website-artbodenleger` dacă se transformă în dovadă pentru C2_DFY_SITE.

### Repo actual (`assets/img`)

| Zonă | Conținut | Acțiune |
| --- | --- | --- |
| `assets/img/contacte` | capturi Mautic contacte | păstrează pentru Materiale / Mautic |
| `assets/img/formulare` | capturi Mautic formulare | păstrează pentru Materiale / Mautic |
| `assets/img/segmente` | capturi Mautic segmente | păstrează pentru Materiale / Mautic |
| `assets/img/keepass` | capturi și intro KeePass | păstrează pentru Materiale / Securitate |
| `assets/img/20190825_140952-Ionut-500x579.jpg` | avatar actual | candidat pentru `/despre`, de verificat cu manualul vizual |

## 10. Decizii de migrare recomandate

### Navigație principală V1

Recomandare pentru meniul principal după migrarea conținutului:

- Acasă
- Cursuri
- Magazin
- Website
- Email
- Materiale
- Contact

`Despre` poate fi link în footer sau în meniu secundar, dacă navigația devine prea încărcată.

### Materiale

`Materiale` trebuie să fie zonă secundară, nu promisiune comercială principală. Subgrupuri recomandate:

- Materiale / Mautic
- Materiale / Email
- Materiale / Website
- Materiale / Securitate
- Materiale / Termeni pentru începători
- Materiale / Arhivă

În prima migrare, păstrează URL-urile postărilor existente ca să nu rupi linkurile. Creează doar o intrare clară spre ele. Mutarea permalink-urilor poate veni după ce există redirecturi.

### Conținut de scris de la zero

Paginile fără sursă directă suficientă:

- `/cursuri/administrare-learndash`
- `/magazin/administrare-woocommerce`
- `/magazin/implementare-woocommerce`
- `/website/administrare-wordpress`
- `/website/implementare-wordpress`
- `/lista-de-asteptare`
- `/confirmare`

Paginile cu sursă parțială, dar care cer rescriere:

- `/`
- `/email/mautic-ses`
- `/cursuri/implementare-learndash`
- `/despre`
- `/contact`

Paginile cu sursă directă reutilizabilă:

- `/termeni-si-conditii`
- `/politica-de-confidentialitate`
- posibil `/impressum`, dacă rămâne necesar.

## 11. Riscuri și observații

- Ruby 3.2.11 rezolvă compatibilitatea cu `html-proofer ~> 4.4`.
- `wdm` este opțional pentru watch/livereload și a fost scos din instalarea implicită, ca să nu blocheze build-ul local pe Windows.
- Build-ul local folosește runner-ul `.bundle\jekyll-runner.rb`; comanda standard `bundle exec jekyll` poate rămâne problematică în acest setup din cauza încărcării automate Jekyll pe Windows.
- `.sources` este ignorat în `.gitignore`; inventarul este fișier de lucru local, nu va fi urmărit de Git fără `git add -f`.
- `Gemfile.lock` este ignorat în `.gitignore`; dacă se dorește build reproductibil local, trebuie decis separat dacă rămâne ignorat sau devine urmărit.
- Unele articole WordPress sunt potențial depășite tehnic, mai ales cele despre versiuni Mautic vechi; nu trebuie linkuite din pagini comerciale fără revizie.
- Paginile comerciale WordPress au secțiuni cu limbaj mai promoțional decât permit documentele master; trebuie rescrise procedural.
- Assets Divi/WordPress nu trebuie migrate în Chirpy decât dacă există un motiv concret; conținutul și imaginile sunt valoroase, nu tema Divi.

## 12. Următorul pas recomandat

Următorul pas ar trebui să fie crearea scheletului de conținut pentru cele 14 pagini V1, fără design final:

1. definire fișiere/pagini Jekyll pentru V1;
2. mapare front matter, permalink și titlu;
3. creare conținut placeholder procedural pe secțiunile din `structura.md`;
4. creare intrare `Materiale` care listează conținutul existent fără să îl mute;
5. abia apoi adaptare vizuală Chirpy după `manual-identitate-vizuala.md`.
