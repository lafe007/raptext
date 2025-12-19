FROM node:18-alpine

WORKDIR /app/server

# Kopíruj package files
COPY package*.json ./
COPY tsconfig.json ./

# Instaluj dependencies
RUN npm ci

# Kopíruj zdrojový kód
COPY src ./src

# Build TypeScript
RUN npm run build

# Exposure port
EXPOSE 3001

# Start server
CMD ["npm", "start"]
