This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



---------------------------------------------------------
# 1. Instalar Node.js (LTS)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs

# 2. Instalar pnpm
npm install -g pnpm

# 3. Instalar pm2
npm install -g pm2

# 4. Entrar a la carpeta del proyecto
cd /ruta/de/tu/proyecto/maganda

# 5. Instalar dependencias
pnpm install

# 6. Hacer build del proyecto
pnpm run build

# 7. Ejecutar el proyecto en segundo plano con pm2
pm2 start "pnpm run start" --name maganda

# 8. Configurar arranque automático tras reinicio
pm2 startup
pm2 save

# 9. Comandos útiles de pm2
pm2 list           # Ver procesos activos
pm2 logs maganda   # Ver logs en tiempo real
pm2 stop maganda   # Detener servicio
pm2 restart maganda # Reiniciar servicio

