import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            email: 'john.doe@example.com',
            passwordHash: 'hashed-password',
            firstName: 'John',
            lastName: 'Doe',
            phone: '1234567890',
            isVip: true,
            emailVerified: true,
            newsletterSubscribed: true,
            addresses: {
                create: {
                    type: 'shipping',
                    firstName: 'John',
                    lastName: 'Doe',
                    addressLine1: '123 Main St',
                    city: 'Madrid',
                    postalCode: '28001',
                    country: 'España',
                    isDefault: true,
                },
            },
        },
    });

    const category = await prisma.category.create({
        data: {
            name: 'Ropa',
            slug: 'ropa',
        },
    });

    const product = await prisma.product.create({
        data: {
            name: 'Camiseta Blanca',
            slug: 'camiseta-blanca',
            description: 'Una camiseta básica de algodón blanco.',
            price: 299.99,
            categoryId: category.id,
            isNew: true,
            isFeatured: true,
            images: {
                create: {
                    imageUrl: 'https://example.com/image.jpg',
                    isPrimary: true,
                },
            },
            variants: {
                create: {
                    size: 'M',
                    color: 'Blanco',
                    stockQuantity: 50,
                },
            },
        },
    });

    await prisma.userFavorite.create({
        data: {
            userId: user.id,
            productId: product.id,
        },
    });

    const collection = await prisma.collection.create({
        data: {
            name: 'Nuevas Llegadas',
            slug: 'nuevas-llegadas',
            isFeatured: true,
            products: {
                create: {
                    productId: product.id,
                },
            },
        },
    });

    const blogCategory = await prisma.blogCategory.create({
        data: {
            name: 'Moda',
            slug: 'moda',
        },
    });

    const blogTag = await prisma.blogTag.create({
        data: {
            name: 'Estilo',
            slug: 'estilo',
        },
    });

    const blogPost = await prisma.blogPost.create({
        data: {
            title: 'Tendencias de moda 2025',
            slug: 'tendencias-moda-2025',
            content: 'Contenido del blog...',
            authorName: 'John Doe',
            isPublished: true,
            categoryId: blogCategory.id,
            tags: {
                create: {
                    tagId: blogTag.id,
                },
            },
        },
    });

    await prisma.blogPostLike.create({
        data: {
            userId: user.id,
            postId: blogPost.id,
        },
    });

    await prisma.blogComment.create({
        data: {
            postId: blogPost.id,
            userId: user.id,
            content: '¡Gran artículo!',
            isApproved: true,
        },
    });

    console.log('✅ Seed completed');
}

main()
    .catch((e) => {
        console.error('❌ Seed error', e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    });
