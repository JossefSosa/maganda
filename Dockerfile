# Etapa de build
FROM node:20-alpine AS builder

WORKDIR /app

# Copiamos package.json y el schema de Prisma para poder generar antes del build
COPY package*.json ./
COPY prisma ./prisma

# Instalamos dependencias
RUN npm install --frozen-lockfile

# Generamos Prisma Client
RUN npx prisma generate

# Copiamos el resto del código
COPY . .

# Construimos la app
RUN npm run build

# Etapa de producción
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copiamos node_modules y el build de la etapa anterior
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]
