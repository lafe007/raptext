# 🎤 RapText - Generátor Českých Rapů

Aplikace která generuje **autentické, logicky strukturované rapové texty v češtině** s reálnými českými slovy, slangem a dobrou lyrikou.

[![GitHub](https://img.shields.io/badge/GitHub-lafe007/raptext-blue?logo=github)](https://github.com/lafe007/raptext.git)
[![License](https://img.shields.io/badge/License-MIT-green)]()
[![Docker](https://img.shields.io/badge/Docker-Compose-blue?logo=docker)]()

## ✨ Vlastnosti

- 🎵 **Generování smysluplných rapů** - nikoliv jen náhodná slova
- 🇨🇿 **Čeština na prvním místě** - autentické české texty
- 📝 **8 tématických směrů** - Město, Peníze, Láska, Párty, Chvála, Vztek, Úspěch, Hip-hop
- 🔊 **Nastavitelné tempo** - 60-160 BPM
- 🎨 **Web UI** - jednoduché a stylové rozhraní
- 🐳 **Docker** - jednoduché nasazení
- 📊 **Metadata** - analýza rýmů, délka, tempo

## 🚀 Spuštění

### Rychlestart s Docker

```bash
git clone https://github.com/lafe007/raptext.git
cd raptext
docker-compose up -d
```

Aplikace bude dostupná na:
- **Web UI**: http://localhost:8080
- **API**: http://localhost:5000/api

### Lokální spuštění

#### Backend (Node.js + Express)

```bash
cd backend
npm install
npm run build
npm start
# Server běží na http://localhost:5000
```

#### Frontend (Nginx)

```bash
# Lze servírovat jakýmkoliv HTTP serverem, např.:
python3 -m http.server 8000 --directory frontend
# Pak jít na http://localhost:8000
```

## 📡 API Dokumentace

### Health Check

```bash
GET /api/health
```

**Odpověď:**
```json
{
  "status": "OK",
  "message": "Rap Generator Server is running!",
  "timestamp": "2025-12-19T10:00:00.000Z"
}
```

### Dostupná Témata

```bash
GET /api/themes
```

### Generování Rapu

```bash
POST /api/generate
Content-Type: application/json

{
  "theme": "city",
  "lines": 8,
  "tempo": 95
}
```

**Parametry:**
- `theme` (string): `city`, `money`, `love`, `party`, `bragging`, `anger`, `success`, `hiphop`
- `lines` (number): 4-32 (počet řádků)
- `tempo` (number): 60-160 BPM

**Odpověď:**
```json
{
  "success": true,
  "data": {
    "text": "  Chci víc než byt, víc než Libeň\n  Ty centrum máš rád, já to znám\n  ...",
    "theme": "city",
    "lines": 8,
    "rhymeScheme": "abcbdbef",
    "bpm": 95,
    "duration": "3:00"
  },
  "timestamp": "2025-12-19T10:00:00.000Z"
}
```

## 📊 Příklady Vygenerovaného Rapu

### Téma: Město

```
  Chci víc než byt, víc než Libeň
  Ty centrum máš rád, já to znám
  Chci víc než Praha, víc než Praha
  Ty Vinohrady máš rád, já to znám
  Chci víc než Vinohradinice, víc než centrum
  Ty Vinohradinice máš rád, já to znám
  Jsem jako byt, silný jak Vinohradinice
  město tady dělám svůj styl

[Hook] Yo, Libeň, to je to
[Hook] Yo, Libeň, to je to
[Hook] Yo, Libeň, to je to

[Outro] Na svidanou...
```

- **Rýmovací schéma**: AABB
- **Tempo**: 95 BPM
- **Délka**: 3:00

## 🏗️ Architektura

```
raptext/
├── backend/                 # Express API server
│   ├── src/
│   │   ├── server.ts       # Main Express app
│   │   ├── generators/
│   │   │   └── rapGenerator.ts  # Core generation
│   │   └── rhymes.ts       # Czech vocabulary
│   ├── Dockerfile
│   └── package.json
│
├── frontend/               # Nginx + HTML/CSS/JS
│   ├── index.html
│   ├── app.js
│   ├── style.css
│   ├── nginx.conf
│   └── Dockerfile
│
├── docker-compose.yml      # Multi-container setup
└── README.md
```

### Backend

- **Technologie**: Node.js 18 Alpine + Express
- **Port**: 5000
- **TypeScript**: Kompiluje do dist/
- **Algoritmus**: Šablonové věty + české slovo databáze

### Frontend

- **Technologie**: Nginx Alpine + HTML5/CSS3/Vanilla JS
- **Port**: 8080
- **Proxy**: Směruje API na backend:5000
- **UI**: Responsivní design, copy/download

## 🧠 Jak to Funguje

### Generování Algoritmu

1. **Šablona** - Náhodná volba z 5+ větnýchšablon
2. **Slova** - Tématická slova pro dané téma
3. **Verše** - Couplet (2 řádky s rýmem) - strukturace
4. **Hook** - Opakující se refrén (3x)
5. **Outro** - Závěrečná linka

### Příkladšablon

```
"V {1} žiju, vidím {2}, {3}"
"{1} na ulici, {2} v noci, já"
"Chci víc než {1}, víc než {2}"
"Jsem jako {1}, silný jak {2}"
"{1} nebo {2}? Vůbec ne"
```

### Česká Slovní Zásoba

- **Město**: Praha, ulice, byt, dům, řeka, most, park, Vinohradinice, Žižkov
- **Peníze**: koruna, balík, kešta, hastra, pasta, prodej, vezmi
- **Láska**: láska, srdce, polibek, objetí, oči, milá, vášeň
- **Party**: diskotéka, hudba, tanec, zábava, alkohol, shot
- **Hip-hop**: beat, rým, mikrofon, DJ, vinyl, refřén, verš

Plus 100+ českých slangových výrazů.

## 🐳 Docker

### Build & Run

```bash
# Všechno
docker-compose up -d

# Jednotlivě
docker-compose up -d backend
docker-compose up -d frontend

# Logs
docker-compose logs -f backend

# Stop
docker-compose down
```

### Rebuilding (bez cache)

```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## 🔧 Konfigurace

### Backend Environment

```bash
PORT=5000              # Default 5000
NODE_ENV=production
```

### Porty (docker-compose.yml)

```yaml
backend:
  ports:
    - "5000:5000"      # External:Internal
frontend:
  ports:
    - "8080:80"
```

## 📦 Instalace

### Předpoklady

- Docker & Docker Compose
- Nebo: Node.js 18+, npm, Nginx

### Lokální vývoj

```bash
# Backend
cd backend
npm install
npm run build
npm start

# Frontend (v novém terminále)
cd frontend
python3 -m http.server 8000
```

## 🚀 Nasazení

### VPS/VM

```bash
# SSH
ssh user@vm

# Clone & Start
git clone https://github.com/lafe007/raptext.git
cd raptext
docker-compose up -d

# Verify
docker-compose ps
curl http://localhost:5000/api/health
```

### Nginx Reverse Proxy

```nginx
server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://localhost:8080;
    }

    location /api/ {
        proxy_pass http://localhost:5000/api/;
    }
}
```

## 🐛 Troubleshooting

### Build error: "Cannot find module"

```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Port Already In Use

```bash
lsof -i :5000
kill -9 PID
```

### Frontend nemůže kontaktovat API

Zkontroluj nginx.conf:
```nginx
proxy_pass http://backend:5000/api/;
```

## 📝 Licence

MIT License

## 👨‍💻 Autor

**RapText Development** - Czech Rap Generator

## 🔗 Odkazy

- **GitHub**: https://github.com/lafe007/raptext.git
- **API**: http://localhost:5000
- **Web**: http://localhost:8080

---

**"V kódě žiju, vidím budoucnost, to je můj cíl!"** 🎤
