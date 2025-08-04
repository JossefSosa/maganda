FROM node:20-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios (asumiendo package.json está en la raíz)
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código (incluye app/, tsconfig.json, etc.)
COPY . .

# Construir la app
RUN npm run build

# Exponer puerto de Next.js
EXPOSE 3000

# Ejecutar la aplicación
CMD ["npm", "start"]
