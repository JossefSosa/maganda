-- CreateEnum
CREATE TYPE "public"."TipoUsuario" AS ENUM ('admin', 'cliente');

-- CreateTable
CREATE TABLE "public"."Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contraseña" TEXT NOT NULL,
    "tipo_usuario" "public"."TipoUsuario" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "public"."Producto" (
    "id_producto" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "precio" DECIMAL(65,30) NOT NULL,
    "imagen" TEXT NOT NULL,
    "es_unico" BOOLEAN NOT NULL,
    "es_personalizable" BOOLEAN NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id_producto")
);

-- CreateTable
CREATE TABLE "public"."Pedido" (
    "id_pedido" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id_pedido")
);

-- CreateTable
CREATE TABLE "public"."DetallePedido" (
    "id_detalle" SERIAL NOT NULL,
    "id_pedido" INTEGER NOT NULL,
    "id_producto" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "DetallePedido_pkey" PRIMARY KEY ("id_detalle")
);

-- CreateTable
CREATE TABLE "public"."Favorito" (
    "id_favorito" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_producto" INTEGER NOT NULL,

    CONSTRAINT "Favorito_pkey" PRIMARY KEY ("id_favorito")
);

-- CreateTable
CREATE TABLE "public"."Opinion" (
    "id_opinion" SERIAL NOT NULL,
    "id_producto" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "calificacion" INTEGER NOT NULL,
    "comentario" TEXT NOT NULL,

    CONSTRAINT "Opinion_pkey" PRIMARY KEY ("id_opinion")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "public"."Usuario"("email");

-- AddForeignKey
ALTER TABLE "public"."Pedido" ADD CONSTRAINT "Pedido_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "public"."Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DetallePedido" ADD CONSTRAINT "DetallePedido_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "public"."Pedido"("id_pedido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DetallePedido" ADD CONSTRAINT "DetallePedido_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "public"."Producto"("id_producto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Favorito" ADD CONSTRAINT "Favorito_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "public"."Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Favorito" ADD CONSTRAINT "Favorito_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "public"."Producto"("id_producto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Opinion" ADD CONSTRAINT "Opinion_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "public"."Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Opinion" ADD CONSTRAINT "Opinion_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "public"."Producto"("id_producto") ON DELETE RESTRICT ON UPDATE CASCADE;
