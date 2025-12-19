# 🎤 Generátor Českých Rapů

Webová aplikace pro generování originálních rapových textů v češtině!

## ✨ Features

- 🎯 8 různých témat (Město, Peníze, Láska, Párty, Chvála, Vztek, Úspěch, Hip-hop)
- 🎵 Nastavitelné tempo (60-160 BPM)
- 📊 Rýmové schéma a metadata
- 📋 Kopírování do schránky
- ⬇️ Export jako TXT soubor
- 🚀 Snadný deployment v Dockeru

## 📋 Požadavky

- Docker
- Docker Compose

## 🚀 Spuštění

### Pomocí Docker Compose

```bash
cd rap-generator
docker-compose up --build
```

Aplikace bude dostupná na `http://localhost:8080`

### Nebo ručně

**Backend:**
```bash
cd backend
npm install
npm run build
npm start
```

**Frontend:**
```bash
cd frontend
# Prostě otevřít index.html v prohlížeči
```

## 🔗 API Endpointy

### Generate Rap
```bash
POST /api/generate
Content-Type: application/json

{
  "theme": "city",      // city, money, love, party, bragging, anger, success, hiphop
  "lines": 8,           // 4-32
  "tempo": 95           // 60-160 BPM
}
```

### Get Themes
```bash
GET /api/themes
```

### Health Check
```bash
GET /api/health
```

### API Info
```bash
GET /api/info
```

## 📁 Struktura Projektu

```
rap-generator/
├── backend/
│   ├── src/
│   │   ├── server.ts          - Express server
│   │   ├── generators/
│   │   │   └── rapGenerator.ts - Generátor rapu
│   │   └── utils/
│   ├── data/
│   │   └── rhymes.ts          - Databáze rým a slov
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── index.html             - Hlavní stránka
│   ├── style.css              - Styly
│   ├── app.js                 - JavaScript logika
│   ├── nginx.conf             - Nginx konfigurace
│   └── Dockerfile
├── docker-compose.yml         - Docker Compose orchestrace
└── README.md                  - Tato dokumentace
```

## 🛠️ Vývoj

### Backend Development
```bash
cd backend
npm install
npm run dev        # Spuštění s hot-reload
npm run build      # Build TypeScriptu
```

### Frontend Development
```bash
# Otevřít frontend/index.html v editoru a spustit live server
```

## 🐳 Docker Obrazy

- **Backend**: Node.js 18 Alpine
- **Frontend**: Nginx Alpine

## 🌐 Porty

- Frontend: `8080` (http://localhost:8080)
- Backend API: `3001` (http://localhost:3001)

## 📝 Témata

- 🏙️ **Město** - Rap o městě, ulicích a městském životě
- 💰 **Peníze** - Rap o penězích, bohatství a financích
- ❤️ **Láska** - Rap o lásce, vztazích a emocích
- 🎉 **Párty** - Rap o zábavě, tanci a partě
- 🌟 **Chvála** - Rap o sebě a vlastních schopnostech
- 😤 **Vztek** - Agresivní rap o hnevu a zuřivosti
- 🏆 **Úspěch** - Rap o vítězství, sláve a titulek
- 🎧 **Hip-hop** - Rap o hip-hopové kultuře a hudbě

## 🔧 Konfigurace

### Proměnné prostředí

Backend:
- `NODE_ENV` - Prostředí (production/development)
- `PORT` - Port serveru (default: 3001)

## 📊 Příklady Výstupu

```
[Verse]
  Praha ulice byt dům řeka most park město
  koruna balík kešta hastra pasta chci mám
  ulice byt dům řeka most park město centrum
  
[Hook]
[Hook] Yeah, město
[Hook] Yeah, město
[Hook] Yeah, město

[Verse]
  nemám kolik stojí dej vezmi prodej ulice
  byt dům řeka most park město centrum Vinohrady
  
[Outro] To je vše...
```

## 🎯 Budoucí Rozšíření

- [ ] Více témat
- [ ] Exporty v dalších formátech (PDF, MP3)
- [ ] Herní režim (quiz)
- [ ] Skladovací síť rapů
- [ ] Sdílení přes sociální sítě
- [ ] Multilinguální podpora

## 📄 Licence

MIT

## 👨‍💻 Autor

Vytvořeno s 💜 pro českou rap komunitu

---

**Verze:** 1.0.0  
**Status:** Active Development 🚀
