// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    // 1. USERS
    const users = await Promise.all([
        prisma.user.create({
            data: {
                email: "alice@example.com",
                passwordHash: "hashedpassword1",
                firstName: "Alice",
                lastName: "Smith",
                phone: "+34123456789",
                dateOfBirth: new Date("1985-06-15"),
                gender: "female",
                isVip: true,
                emailVerified: true,
                newsletterSubscribed: true,
                addresses: {
                    create: [
                        {
                            type: "billing",
                            firstName: "Alice",
                            lastName: "Smith",
                            addressLine1: "Calle Falsa 123",
                            city: "Madrid",
                            postalCode: "28001",
                            country: "España",
                            isDefault: true,
                        },
                        {
                            type: "shipping",
                            firstName: "Alice",
                            lastName: "Smith",
                            addressLine1: "Calle Verde 45",
                            city: "Madrid",
                            postalCode: "28002",
                            country: "España",
                        },
                    ],
                },
                preferences: {
                    create: {
                        preferredSizes: ["M", "L"],
                        preferredColors: ["#000000", "#FFFFFF"],
                        preferredCategories: [],
                        stylePreferences: { casual: true, formal: false },
                        budgetRange: { min: 50, max: 200 },
                    },
                },
                sessions: {
                    create: [
                        {
                            token: "token-alice-1",
                            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
                        },
                    ],
                },
            },
        }),
        prisma.user.create({
            data: {
                email: "bob@example.com",
                passwordHash: "hashedpassword2",
                firstName: "Bob",
                lastName: "Jones",
                phone: "+34678901234",
                gender: "male",
                emailVerified: false,
                newsletterSubscribed: false,
                addresses: {
                    create: [
                        {
                            type: "both",
                            firstName: "Bob",
                            lastName: "Jones",
                            addressLine1: "Avenida Siempre Viva 742",
                            city: "Barcelona",
                            postalCode: "08001",
                            country: "España",
                            isDefault: true,
                        },
                    ],
                },
                sessions: {
                    create: [
                        {
                            token: "token-bob-1",
                            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
                        },
                    ],
                },
            },
        }),
        prisma.user.create({
            data: {
                email: "carol@example.com",
                passwordHash: "hashedpassword3",
                firstName: "Carol",
                lastName: "Williams",
                gender: "female",
                emailVerified: true,
                newsletterSubscribed: true,
                addresses: {
                    create: [
                        {
                            type: "billing",
                            firstName: "Carol",
                            lastName: "Williams",
                            addressLine1: "Plaza Mayor 10",
                            city: "Valencia",
                            postalCode: "46001",
                            country: "España",
                            isDefault: true,
                        },
                    ],
                },
                sessions: {
                    create: [
                        {
                            token: "token-carol-1",
                            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
                        },
                    ],
                },
            },
        }),
    ]);

    // 2. CATEGORIES
    const categories = await Promise.all([
        prisma.category.create({
            data: {
                name: "Ropa",
                slug: "ropa",
                description: "Categoría para ropa",
                sortOrder: 1,
            },
        }),
        prisma.category.create({
            data: {
                name: "Zapatos",
                slug: "zapatos",
                description: "Categoría para zapatos",
                sortOrder: 2,
            },
        }),
        prisma.category.create({
            data: {
                name: "Accesorios",
                slug: "accesorios",
                description: "Categoría para accesorios",
                sortOrder: 3,
            },
        }),
    ]);

    // 3. SIZES
    const sizes = await Promise.all([
        prisma.size.create({
            data: {
                name: "S",
                categoryId: categories[0].id,
                sortOrder: 1,
                measurements: { chest: 90, waist: 70 },
            },
        }),
        prisma.size.create({
            data: {
                name: "M",
                categoryId: categories[0].id,
                sortOrder: 2,
                measurements: { chest: 100, waist: 80 },
            },
        }),
        prisma.size.create({
            data: {
                name: "L",
                categoryId: categories[0].id,
                sortOrder: 3,
                measurements: { chest: 110, waist: 90 },
            },
        }),
    ]);

    // 4. COLORS
    const colors = await Promise.all([
        prisma.color.create({
            data: { name: "Negro", hexCode: "#000000", sortOrder: 1 },
        }),
        prisma.color.create({
            data: { name: "Blanco", hexCode: "#FFFFFF", sortOrder: 2 },
        }),
        prisma.color.create({
            data: { name: "Rojo", hexCode: "#FF0000", sortOrder: 3 },
        }),
    ]);

    // 5. PRODUCTS
    const products = await Promise.all([
        prisma.product.create({
            data: {
                name: "Camiseta básica",
                slug: "camiseta-basica",
                description: "Camiseta cómoda y básica para uso diario.",
                sku: "CAMI001",
                categoryId: categories[0].id,
                price: 19.99,
                originalPrice: 24.99,
                isNew: true,
                isFeatured: true,
                dimensions: { length: 70, width: 50 },
                material: "Algodón 100%",
                careInstructions: "Lavar a máquina frío",
                metaTitle: "Camiseta básica para hombre",
                metaDescription: "Compra la mejor camiseta básica para hombre.",
                images: {
                    create: [
                        {
                            imageUrl:
                                "https://example.com/images/camiseta-basica-1.jpg",
                            altText: "Camiseta básica frontal",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl:
                                "https://example.com/images/camiseta-basica-2.jpg",
                            altText: "Camiseta básica trasera",
                            sortOrder: 2,
                        },
                    ],
                },
                variants: {
                    create: [
                        {
                            sku: "CAMI001-S",
                            size: "S",
                            color: "Negro",
                            priceAdjustment: 0,
                            stockQuantity: 50,
                        },
                        {
                            sku: "CAMI001-M",
                            size: "M",
                            color: "Negro",
                            priceAdjustment: 0,
                            stockQuantity: 40,
                        },
                    ],
                },
            },
        }),
        prisma.product.create({
            data: {
                name: "Zapatillas deportivas",
                slug: "zapatillas-deportivas",
                sku: "ZAPA001",
                categoryId: categories[1].id,
                price: 59.99,
                isSale: true,
                isActive: true,
                weight: 0.8,
                material: "Sintético y goma",
                careInstructions: "Limpiar con un paño húmedo",
                images: {
                    create: [
                        {
                            imageUrl:
                                "https://example.com/images/zapatillas-1.jpg",
                            altText: "Zapatillas deportivas",
                            isPrimary: true,
                        },
                    ],
                },
                variants: {
                    create: [
                        {
                            sku: "ZAPA001-42",
                            size: "42",
                            color: "Blanco",
                            priceAdjustment: 0,
                            stockQuantity: 20,
                        },
                        {
                            sku: "ZAPA001-43",
                            size: "43",
                            color: "Blanco",
                            priceAdjustment: 0,
                            stockQuantity: 15,
                        },
                    ],
                },
            },
        }),
        prisma.product.create({
            data: {
                name: "Bolso de cuero",
                slug: "bolso-de-cuero",
                sku: "BOLSO001",
                categoryId: categories[2].id,
                price: 79.99,
                isFeatured: true,
                material: "Cuero genuino",
                careInstructions: "No mojar, limpiar con crema especial",
                images: {
                    create: [
                        {
                            imageUrl:
                                "https://example.com/images/bolso-1.jpg",
                            altText: "Bolso de cuero marrón",
                            isPrimary: true,
                        },
                    ],
                },
                variants: {
                    create: [
                        {
                            sku: "BOLSO001-BN",
                            color: "Marrón",
                            priceAdjustment: 0,
                            stockQuantity: 10,
                        },
                    ],
                },
            },
        }),
    ]);

    // 6. PRODUCT REVIEWS (3 reviews por producto)
    for (const product of products) {
        await Promise.all(
            users.map((user, i) =>
                prisma.productReview.create({
                    data: {
                        productId: product.id,
                        userId: user.id,
                        rating: 4 + (i % 2),
                        title: `Review ${i + 1} para ${product.name}`,
                        comment: `Me gusta mucho este producto. ${i + 1}`,
                        isVerifiedPurchase: true,
                        isApproved: true,
                    },
                })
            )
        );
    }

    // 7. PRODUCT VIEWS (3 views por producto)
    for (const product of products) {
        await prisma.productView.createMany({
            data: [
                {
                    productId: product.id,
                    userId: users[0].id,
                    ipAddress: "192.168.1.1",
                    userAgent: "Mozilla/5.0",
                },
                {
                    productId: product.id,
                    userId: users[1].id,
                    ipAddress: "192.168.1.2",
                    userAgent: "Mozilla/5.0",
                },
                {
                    productId: product.id,
                    userId: null,
                    ipAddress: "192.168.1.3",
                    userAgent: "Mozilla/5.0",
                },
            ],
        });
    }

    // 8. COLLECTIONS and COLLECTIONPRODUCTS
    const collections = await Promise.all([
        prisma.collection.create({
            data: {
                name: "Ofertas de verano",
                slug: "ofertas-verano",
                description: "Grandes descuentos en verano",
                isFeatured: true,
                startDate: new Date(),
                sortOrder: 1,
                products: {
                    create: [
                        { productId: products[0].id, sortOrder: 1 },
                        { productId: products[1].id, sortOrder: 2 },
                    ],
                },
            },
        }),
        prisma.collection.create({
            data: {
                name: "Novedades",
                slug: "novedades",
                description: "Productos recién llegados",
                isActive: true,
                sortOrder: 2,
                products: {
                    create: [
                        { productId: products[2].id, sortOrder: 1 },
                    ],
                },
            },
        }),
        prisma.collection.create({
            data: {
                name: "Accesorios destacados",
                slug: "accesorios-destacados",
                isFeatured: true,
                sortOrder: 3,
                products: {
                    create: [
                        { productId: products[2].id, sortOrder: 1 },
                    ],
                },
            },
        }),
    ]);

    // 9. PRODUCT INQUIRIES
    await Promise.all(
        products.map((product, i) =>
            prisma.productInquiry.create({
                data: {
                    productId: product.id,
                    userId: users[i % users.length].id,
                    name: users[i % users.length].firstName + " " + users[i % users.length].lastName,
                    email: users[i % users.length].email,
                    message: `¿Tienen este producto en color rojo?`,
                    preferredColor: "Rojo",
                    quantity: 2,
                    status: "pending",
                    priority: "high",
                },
            })
        )
    );

    // 10. BLOG CATEGORIES
    const blogCategories = await Promise.all([
        prisma.blogCategory.create({
            data: {
                name: "Moda",
                slug: "moda",
                color: "#FF5733",
            },
        }),
        prisma.blogCategory.create({
            data: {
                name: "Consejos",
                slug: "consejos",
                color: "#33FF57",
            },
        }),
        prisma.blogCategory.create({
            data: {
                name: "Tendencias",
                slug: "tendencias",
                color: "#3357FF",
            },
        }),
    ]);

    // 11. BLOG TAGS
    const blogTags = await Promise.all([
        prisma.blogTag.create({ data: { name: "Verano", slug: "verano" } }),
        prisma.blogTag.create({ data: { name: "Descuentos", slug: "descuentos" } }),
        prisma.blogTag.create({ data: { name: "Estilo", slug: "estilo" } }),
    ]);

    // 12. BLOG POSTS with TAGS, LIKES, COMMENTS
    const blogPosts = await Promise.all([
        prisma.blogPost.create({
            data: {
                title: "Tendencias de moda verano 2025",
                slug: "tendencias-moda-verano-2025",
                content: "Contenido detallado sobre moda de verano.",
                authorName: "Admin",
                categoryId: blogCategories[0].id,
                isFeatured: true,
                isPublished: true,
                tags: {
                    create: [
                        { tagId: blogTags[0].id },
                        { tagId: blogTags[2].id },
                    ],
                },
            },
        }),
        prisma.blogPost.create({
            data: {
                title: "Cómo aprovechar los descuentos",
                slug: "como-aprovechar-descuentos",
                content: "Guía para ahorrar dinero.",
                authorName: "Admin",
                categoryId: blogCategories[1].id,
                isPublished: true,
                tags: {
                    create: [
                        { tagId: blogTags[1].id },
                    ],
                },
            },
        }),
        prisma.blogPost.create({
            data: {
                title: "Estilos que marcan tendencia",
                slug: "estilos-tendencia",
                content: "Descripción de estilos populares.",
                authorName: "Editor",
                categoryId: blogCategories[2].id,
                isPublished: true,
                tags: {
                    create: [
                        { tagId: blogTags[2].id },
                    ],
                },
            },
        }),
    ]);

    // 13. BLOG POST LIKES
    for (const post of blogPosts) {
        await Promise.all(
            users.map((user) =>
                prisma.blogPostLike.create({
                    data: {
                        postId: post.id,
                        userId: user.id,
                    },
                })
            )
        );
    }

    // 14. BLOG COMMENTS (with nested replies)
    for (const post of blogPosts) {
        const comment1 = await prisma.blogComment.create({
            data: {
                postId: post.id,
                userId: users[0].id,
                content: "¡Gran artículo!",
                isApproved: true,
            },
        });
        const comment2 = await prisma.blogComment.create({
            data: {
                postId: post.id,
                userId: users[1].id,
                content: "Gracias por la info.",
                isApproved: true,
                parentId: comment1.id,
            },
        });
        await prisma.blogComment.create({
            data: {
                postId: post.id,
                userId: users[2].id,
                content: "Muy útil, seguiré leyendo.",
                isApproved: true,
                parentId: comment2.id,
            },
        });
    }

    // 15. CONTACT INQUIRIES
    await Promise.all(
        users.map((user, i) =>
            prisma.contactInquiry.create({
                data: {
                    userId: user.id,
                    name: user.firstName + " " + user.lastName,
                    email: user.email,
                    subject: "Consulta general " + (i + 1),
                    message: "Tengo una pregunta sobre sus productos.",
                    status: "pending",
                    priority: "medium",
                },
            })
        )
    );

    // 16. NEWSLETTER SUBSCRIPTIONS
    await Promise.all([
        prisma.newsletterSubscription.create({
            data: {
                email: "newsletter1@example.com",
                name: "Suscriptor Uno",
                isActive: true,
            },
        }),
        prisma.newsletterSubscription.create({
            data: {
                email: "newsletter2@example.com",
                name: "Suscriptor Dos",
                isActive: true,
            },
        }),
        prisma.newsletterSubscription.create({
            data: {
                email: "newsletter3@example.com",
                name: "Suscriptor Tres",
                isActive: false,
                unsubscribedAt: new Date(),
            },
        }),
    ]);

    // 17. USER FAVORITES
    for (const user of users) {
        await prisma.userFavorite.createMany({
            data: products.slice(0, 2).map((p) => ({
                userId: user.id,
                productId: p.id,
            })),
        });
    }

    // 18. SEARCH QUERIES
    await prisma.searchQuery.createMany({
        data: [
            {
                query: "camiseta negra",
                userId: users[0].id,
                resultsCount: 3,
                ipAddress: "192.168.0.1",
            },
            {
                query: "zapatillas blancas",
                userId: users[1].id,
                resultsCount: 2,
                ipAddress: "192.168.0.2",
            },
            {
                query: "bolso cuero",
                userId: null,
                resultsCount: 1,
                ipAddress: "192.168.0.3",
            },
        ],
    });

    // 19. USER EVENTS
    await prisma.userEvent.createMany({
        data: [
            {
                userId: users[0].id,
                eventType: "login",
                eventData: JSON.stringify({ ip: "192.168.0.1" }),
            },
            {
                userId: users[1].id,
                eventType: "purchase",
                eventData: JSON.stringify({ orderId: "ORD1234" }),
            },
            {
                userId: users[2].id,
                eventType: "logout",
                eventData: undefined,
            },
        ],
    });

    // 20. SITE SETTINGS
    await Promise.all([
        prisma.siteSetting.create({
            data: {
                key: "site_title",
                value: "Mi Tienda Online",
                description: "Título del sitio web",
            },
        }),
        prisma.siteSetting.create({
            data: {
                key: "default_currency",
                value: "EUR",
                description: "Moneda por defecto",
            },
        }),
        prisma.siteSetting.create({
            data: {
                key: "items_per_page",
                value: "20",
                type: "number",
                description: "Número de ítems por página",
            },
        }),
    ]);

    // 21. PAGES
    await Promise.all([
        prisma.page.create({
            data: {
                title: "Inicio",
                slug: "inicio",
                content: "<h1>Bienvenido a nuestra tienda</h1>",
            },
        }),
        prisma.page.create({
            data: {
                title: "Sobre Nosotros",
                slug: "sobre-nosotros",
                content: "<p>Información sobre la empresa.</p>",
            },
        }),
        prisma.page.create({
            data: {
                title: "Contacto",
                slug: "contacto",
                content: "<p>Formulario de contacto aquí.</p>",
            },
        }),
    ]);

    // 22. NAVIGATION MENUS
    await prisma.navigationMenu.createMany({
        data: [
            {
                name: "Menú Principal",
                location: "header",
                items: JSON.stringify([
                    { label: "Inicio", url: "/" },
                    { label: "Tienda", url: "/tienda" },
                    { label: "Contacto", url: "/contacto" },
                ]),
                isActive: true,
            },
            {
                name: "Menú Footer",
                location: "footer",
                items: JSON.stringify([
                    { label: "Política de privacidad", url: "/privacidad" },
                    { label: "Términos y condiciones", url: "/terminos" },
                ]),
                isActive: true,
            },
            {
                name: "Menú Redes Sociales",
                location: "footer-social",
                items: JSON.stringify([
                    { label: "Facebook", url: "https://facebook.com" },
                    { label: "Instagram", url: "https://instagram.com" },
                ]),
                isActive: true,
            },
        ],
    });

    console.log("Seed ejecutado con éxito.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
