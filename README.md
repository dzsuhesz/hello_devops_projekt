# DEVOPS projekt
# Perge György
# ZBJARQ

Ez egy egyszerű React alapú „Hello World” szintű webalkalmazás!
Célja, hogy demontrálja a következő lépéseket:

• kódkészítés
• verziókövetés (trunk-based wia Git)
• buildelés
• konténerizálás Docker segítségével
• CI pipeline + free registry

# Követelemények

- Node.js
- npm csomagkezelő
- Git
- Docker (Docker Desktop Windows)

Az alkalmazás HTTP-n keresztül érhető el, és tartalmaz egy gombot, amelyre kattintva egy kép jelenik meg.

## A projekt letöltése

Klonozd le a repót:

### `git clone https://github.com/dzsuhesz/hello_devops_projekt.git`

majd navigálj a projekt könyvtárába cmd.exe-ben!

# Build Parancsok

## Dev mode futattás

### `npm start`

Build nélküli futtatás böngészőben (http://localhost:3000), a change-ek egy oldal refresh után megjelennek.

## Production mode futtatás

### `npm run build `

A buildelt statikus állományok a build könyvtárban jelennek meg.
Ezek alkalmasak szerveres kiszolgálásra vagy Docker konténerbe csomagolásra.

## Production mode futtatás már létező build-ből

### `npm install -g serve `
### `serve -s build`

Telepített statikusz szerveren futtatjuk build-et egy itt megadott URL-en (a `serve` kimenete)

# Docker Parancsok

## Docker image építés

### `docker build -t devops_projekt:v1 .`

Futtasd a command-ot a projekt könyvtárban. Ez a Dockerfile alapján lebuildeli a React alkalmazás production verzióját, egy minimalista Node Alpine image-be helyezi és a serve csomaggal statikus tartalomként kiszolgálja.

## Docker konténer futtatása

### `docker run -p 8080:8080 devops_projekt:v1`

A böngészőben így elérheted a http://localhost:8080 alatt míg fut a konténer.
Futtatásra kerül: (`serve -s build -l 8080`)

# CI pipeline

Github Actions alapú CI pipeline, ami:
-letölti a kódot
-beállítja a Node futtatási környezetet
-futtatja az npm install és npm run build parancsokat
-bejelentkezik a GitHub Container Registry-be
-elkészíti a Docker image-et
-feltölti azt a GHCR-be
(workflow file: `.github/workflows/ci.yml`)

## Image formátuma és használata

### `ghcr.io/dzsuhesz/hello_devops_projekt:v1`

### `docker pull ghcr.io/dzsuhesz/hello_devops_projekt:v1`
### `docker run -p 8080:8080 ghcr.io/dzsuhesz/hello_devops_projekt:v1`
