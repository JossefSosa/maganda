import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.usuario.createMany({
        data: [
            {
                nombre: 'Admin User',
                email: 'admin@example.com',
                contraseña: 'admin123',
                tipo_usuario: 'admin', // string literal en lugar de TipoUsuario enum
            },
            {
                nombre: 'Cliente User',
                email: 'cliente@example.com',
                contraseña: 'cliente123',
                tipo_usuario: 'cliente',
            },
        ],
        skipDuplicates: true,
    })

    const cliente = await prisma.usuario.findUnique({ where: { email: 'cliente@example.com' } })

    await prisma.producto.createMany({
        data: [
            {
                nombre: 'Playera Blanca',
                descripcion: 'Playera básica de algodón',
                material: 'Algodón',
                precio: 199.99,
                imagen: 'playera-blanca.jpg',
                es_unico: false,
                es_personalizable: true,
            },
            {
                nombre: 'Taza Negra',
                descripcion: 'Taza de cerámica negra',
                material: 'Cerámica',
                precio: 129.5,
                imagen: 'taza-negra.jpg',
                es_unico: false,
                es_personalizable: false,
            },
            {
                nombre: 'Poster Arte',
                descripcion: 'Poster decorativo artístico',
                material: 'Papel',
                precio: 89.9,
                imagen: 'poster-arte.jpg',
                es_unico: true,
                es_personalizable: false,
            },
        ],
        skipDuplicates: true,
    })

    const productos = await prisma.producto.findMany()

    await prisma.pedido.create({
        data: {
            id_usuario: cliente!.id_usuario,
            fecha: new Date(),
            detalles: {
                create: [
                    { id_producto: productos[0].id_producto, cantidad: 2 },
                    { id_producto: productos[1].id_producto, cantidad: 1 },
                ],
            },
        },
    })

    await prisma.favorito.create({
        data: {
            id_usuario: cliente!.id_usuario,
            id_producto: productos[2].id_producto,
        },
    })

    await prisma.opinion.create({
        data: {
            id_usuario: cliente!.id_usuario,
            id_producto: productos[1].id_producto,
            calificacion: 4,
            comentario: 'Muy buen producto, me gustó bastante.',
        },
    })

    console.log('✅ Seed completado.')
}

main().catch(console.error).finally(() => prisma.$disconnect())
