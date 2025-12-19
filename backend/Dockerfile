FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src

# Build TypeScript
RUN npm run build

# Zkontroluj dist
RUN ls -la dist/

# Smaž devDependencies
RUN npm prune --omit=dev

EXPOSE 3001

CMD ["npm", "start"]
