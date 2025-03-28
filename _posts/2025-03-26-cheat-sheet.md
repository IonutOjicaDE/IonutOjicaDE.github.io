---
icon: fas fa-question-circle
title: Cheat sheet
categories: [util-pentru-site]
tags: [util-pentru-site]
author: ionut
---

## COMENZI DOCKER (administrare proiecte)

``` bash
# porneste containerele definite in docker-compose.yml, -d = in fundal
docker compose up -d

# opreste containerele, dar NU sterge volumele sau imaginile
docker compose down

# trage ultimele versiuni ale imaginilor definite in docker-compose.yml
docker compose pull

# sterge tot ce e nefolosit (imagini, containere, volume)
docker system prune -a

# verifica ce containere ruleaza (nume, ID, porturi)
docker ps

# vezi toate containerele și starea lor
docker ps -a

# inspecteaza un container pentru a vedea detalii, inclusiv volume si bind mounts
docker inspect nume_container

# arata spatiul ocupat de imagini, volume, containere
docker system df

# afiseaza volumele existente, nu necesita parametri
docker volume ls`

# sterge volumele nefolosite (atentie: pentru toate proiectele)
docker volume prune

# sterge un volum specific (inlocuieste "nume_volum")
docker volume rm nume_volum

# afiseaza imaginile Docker locale
docker images

# sterge imaginile nefolosite
docker image prune -a
```

## COMENZI DOCKER (interactiune cu containere)

``` bash
# acceseaza un container in modul interactiv (inlocuieste "nume_container")
docker exec -it nume_container bash

# acceseaza MySQL in containerul "db" (presupune ca ai definit serviciul "db" in docker-compose)
docker exec -it $(docker ps -qf "name=db") mysql -u root -p

# creeaza o imagine dupa Dockerfile din dosarul curent
docker build -t ionutojicade/mautic:5.2.4-apache .

# porneste containerul nume_container
docker start nume_container

# sterge containerul cu id-ul respectiv (inlocuieste d7fb7d43a1ee)
docker rm d7fb7d43a1ee

```

## COMENZI GIT (lucru cu propriul repo)

``` bash
# initializeaza git intr-un folder
git init

# adauga toate fisierele in staging area
git add .

# commit cu mesaj
git commit -m "Mesaj"

# creeaza branch "main" daca nu exista deja
git branch -M main

# adauga un remote nou numit "origin" (schimba URL cu al tau de pe GitHub)
git remote add origin https://github.com/username/proiect.git

# trimite fisierele locale in remote, pe branch-ul main
git push -u origin main
```

## COMENZI GIT (sincronizare cu repo-ul original)

``` bash
# adauga repo-ul original ca "upstream" (personalizeaza URL daca vrei cu SSH)
git remote add upstream https://github.com/mautic/docker-mautic.git

# vezi lista de remote-uri configurate
git remote -v

# ia ultimele modificari din upstream, dar nu le imbina automat
git fetch upstream

# treci pe branch-ul principal (daca nu esti deja)
git checkout main

# imbina codul de la upstream in codul tau
git merge upstream/main

# afiseaza diferentele dintre ce ai tu si ce e nou in upstream
git diff main..upstream/main

# afiseaza logul de commituri din upstream
git log upstream/main --oneline
```
