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
                name: "Pantalones y jeans",
                slug: "pantalones",
                description: "Categoría para pantalones y jeans",
                sortOrder: 1,
            },
        }),
        prisma.category.create({
            data: {
                name: "Chamarras y gabardinas",
                slug: "chamarras",
                description: "Categoría para chamarras y abrigos",
                sortOrder: 2,
            },
        }),
        prisma.category.create({
            data: {
                name: "Conjuntos y sets",
                slug: "conjuntos",
                description: "Categoría para conjuntos y sets",
                sortOrder: 3,
            },
        }),
        prisma.category.create({
            data: {
                name: "Accesorios",
                slug: "accesorios",
                description: "Categoría para accesorios",
                sortOrder: 4,
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
        // Chamarra de mezclilla con parches
        prisma.product.create({
            data: {
                name: "Chamarra parches",
                slug: "chamarra-parches",
                description: "Chamarra de mezclilla con parches bordados, perfecta para un look casual y moderno.",
                sku: "CHAM001",
                categoryId: categories[1].id,
                price: 350.00,
                originalPrice: 400.00,
                isNew: true,
                isFeatured: true,
                dimensions: { length: 70, width: 50 },
                material: "Mezclilla",
                careInstructions: "Lavar a mano con agua fría, no usar blanqueador.",
                metaTitle: "Chamarra de mezclilla con parches",
                metaDescription: "Chamarra de mezclilla con parches bordados, ideal para un look casual y moderno.",
                images: {
                    create: [
                        {
                            imageUrl: "/imagenes/chamarra-parches.jpg",
                            altText: "Chamarra de mezclilla con parches",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                    ],
                },
                variants: {
                    create: [
                        {
                            sku: "CHAM001-S",
                            size: "S",
                            color: "Azul",
                            priceAdjustment: 0,
                            stockQuantity: 1,
                        },
                    ],
                },
            },
        }),
        // Pantalón de mezclilla con parches
        prisma.product.create({
            data: {
                name: "Pantalón Parches",
                slug: "pantalon-parches",
                description: "Pantalón de mezclilla con parches bordados, ideal para un look casual y moderno.",
                sku: "PANT001",
                categoryId: categories[0].id,
                price: 1200.00,
                originalPrice: 0.00,
                isNew: true,
                isFeatured: false,
                dimensions: { length: 70, width: 50 },
                material: "Mezclilla",
                careInstructions: "Lavar a mano con agua fría, no usar blanqueador.",
                metaTitle: "Pantalón de mezclilla con parches",
                metaDescription: "Pantalón de mezclilla con parches bordados, ideal para un look casual y moderno.",
                images: {
                    create: [
                        {
                            imageUrl: "/imagenes/pantalon-parches_1.jpg",
                            altText: "Pantalón de mezclilla con parches",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/imagenes/pantalon-parches_2.jpg",
                            altText: "Pantalón de mezclilla con parches",
                            isPrimary: false,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/imagenes/pantalon-parches_3.jpg",
                            altText: "Pantalón de mezclilla con parches",
                            isPrimary: false,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/imagenes/pantalon-parches_4.jpg",
                            altText: "Pantalón de mezclilla con parches",
                            isPrimary: false,
                            sortOrder: 1,
                        },
                    ],
                },
                variants: {
                    create: [
                        {
                            sku: "PANT001-S",
                            size: "S",
                            color: "Azul",
                            priceAdjustment: 0,
                            stockQuantity: 50,
                        },
                    ],
                },
            },
        }),
        // Chamarra de mezclilla con textura asimétrica
        prisma.product.create({
            data: {
                name: "Chamarra textura asimétrica",
                slug: "chamarra-textura-asimetrica",
                description: "Chamarra de mezclilla con textura asimétrica, ideal para un look moderno y único.",
                sku: "CHAM002",
                categoryId: categories[1].id,
                price: 1600.00,
                originalPrice: 0.00,
                isNew: true,
                isFeatured: false,
                dimensions: { length: 70, width: 50 },
                material: "Mezclilla",
                careInstructions: "Lavar a mano con agua fría, no usar blanqueador.",
                metaTitle: "Chamarra de mezclilla con textura asimétrica",
                metaDescription: "Chamarra de mezclilla con textura asimétrica, ideal para un look moderno y único.",
                images: {
                    create: [
                        {
                            imageUrl: "/imagenes/chamarra-textura-asimetrica_1.jpg",
                            altText: "Chamarra de mezclilla con textura asimétrica",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/imagenes/chamarra-textura-asimetrica_2.jpg",
                            altText: "Chamarra de mezclilla con textura asimétrica",
                            isPrimary: false,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/imagenes/chamarra-textura-asimetrica_3.jpg",
                            altText: "Chamarra de mezclilla con textura asimétrica",
                            isPrimary: false,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/imagenes/chamarra-textura-asimetrica_4.jpg",
                            altText: "Chamarra de mezclilla con textura asimétrica",
                            isPrimary: false,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/imagenes/chamarra-textura-asimetrica_5.jpg",
                            altText: "Chamarra de mezclilla con textura asimétrica",
                            isPrimary: false,
                            sortOrder: 1,
                        },
                    ],
                },
                variants: {
                    create: [
                        {
                            sku: "CHAM002-S",
                            size: "S",
                            color: "Azul y Blanco",
                            priceAdjustment: 0,
                            stockQuantity: 50,
                        },
                    ],
                },
            },
        }),
        // Chamarra de mezclilla en escala de grises
        prisma.product.create({
            data: {
                name: "Chamarra a escala de grises",
                slug: "chamarra-escala-grises",
                description: "Chamarra de mezclilla con un diseño moderno en escala de grises.",
                sku: "CHAM004",
                categoryId: categories[1].id,
                price: 1600.00,
                originalPrice: 0.00,
                isNew: true,
                isFeatured: false,
                dimensions: { length: 70, width: 50 },
                material: "Mezclilla",
                careInstructions: "Lavar a mano con agua fría, no usar blanqueador.",
                metaTitle: "Chamarra de mezclilla moderna",
                metaDescription: "Chamarra de mezclilla con un diseño moderno en escala de grises.",
                images: {
                    create: [
                        {
                            imageUrl: "/img/chamarra-escala-grises_1.jpg",
                            altText: "",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/img/chamarra-escala-grises_2.jpg",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/img/chamarra-escala-grises_3.jpg",
                            altText: "",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/img/chamarra-escala-grises_4.jpg",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/img/chamarra-escala-grises_5.jpg",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 1,
                        },
                    ],
                },
                variants: {
                    create: [
                        {
                            sku: "CHAM004-S",
                            size: "S",
                            color: "Gris",
                            priceAdjustment: 0,
                            stockQuantity: 50,
                        },
                    ],
                },
            },
        }),
        // Chamarra de denim
        prisma.product.create({
            data: {
                name: "Chamarra de denim",
                slug: "chamarra-denim",
                description: "Chamarra de mezclilla clásica, perfecta para cualquier ocasión.",
                sku: "CHAM003",
                categoryId: categories[1].id,
                price: 2100.00,
                originalPrice: 0,
                isNew: true,
                isFeatured: false,
                dimensions: { length: 70, width: 50 },
                material: "Mezclilla",
                careInstructions: "Lavar a mano con agua fría, no usar blanqueador.",
                metaTitle: "Chamarra de mezclilla clásica",
                metaDescription: "Chamarra de mezclilla clásica, perfecta para cualquier ocasión.",
                images: {
                    create: [
                        {
                            imageUrl: "/img/chamarra-denim_1.jpg",
                            altText: "Chamarra de mezclilla clásica con parches",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/img/chamarra-denim_2.jpg",
                            altText: "Chamarra de mezclilla clásica con parches",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/img/chamarra-denim_3.jpg",
                            altText: "Chamarra de mezclilla clásica con parches",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/img/chamarra-denim_4.jpg",
                            altText: "Chamarra de mezclilla clásica con parches",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/img/chamarra-denim_5.jpg",
                            altText: "Chamarra de mezclilla clásica con parches",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/img/chamarra-denim_6.jpg",
                            altText: "Chamarra de mezclilla clásica con parches",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/img/chamarra-denim_7.jpg",
                            altText: "Chamarra de mezclilla clásica con parches",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                    ],
                },
                variants: {
                    create: [
                        {
                            sku: "CHAM003-S",
                            size: "S",
                            color: "Mezclilla",
                            priceAdjustment: 0,
                            stockQuantity: 50,
                        },
                    ],
                },
            },
        }),
        // Chamarra diseñada con denim rescatado
        prisma.product.create({
            data: {
                name: "Chamarra diseñada con denim rescatado",
                slug: "chamarra-denim-rescatado",
                description: "Chamarra de mezclilla con un diseño único, hecha con denim rescatado.",
                sku: "CHAM005",
                categoryId: categories[1].id,
                price: 1800.00,
                originalPrice: 0.00,
                isNew: true,
                isFeatured: false,
                dimensions: { length: 70, width: 50 },
                material: "Mezclilla",
                careInstructions: "Lavar a mano con agua fría, no usar blanqueador.",
                metaTitle: "Chamarra de mezclilla única",
                metaDescription: "Chamarra de mezclilla con un diseño único, hecha con denim rescatado.",
                images: {
                    create: [
                        {
                            imageUrl: "",
                            altText: "",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                    ],
                },
                variants: {
                    create: [
                        {
                            sku: "CHAM005-S",
                            size: "S",
                            color: "Denim Rescatado",
                            priceAdjustment: 0,
                            stockQuantity: 50,
                        },
                    ],
                },
            },
        }),
        // Gabardina diseñada con denim rescatado
        prisma.product.create({
            data: {
                name: "Gabardina diseñada con denim rescatado",
                slug: "gabardina-denim-rescatado",
                description: "Gabardina de mezclilla con un diseño único, hecha con denim rescatado.",
                sku: "GAB005",
                categoryId: categories[1].id,
                price: 1500.00,
                originalPrice: 0.00,
                isNew: true,
                isFeatured: false,
                dimensions: { length: 70, width: 50 },
                material: "Mezclilla",
                careInstructions: "Lavar a mano con agua fría, no usar blanqueador.",
                metaTitle: "Gabardina de mezclilla única",
                metaDescription: "Gabardina de mezclilla con un diseño único, hecha con denim rescatado.",
                images: {
                    create: [
                        {
                            imageUrl: "/img/gabardina-denim-rescatado_1.jpg",
                            altText: "",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/img/gabardina-denim-rescatado_2.jpg",
                            altText: "",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/img/gabardina-denim-rescatado_3.jpg",
                            altText: "",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/img/gabardina-denim-rescatado_4.jpg",
                            altText: "",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                    ],
                },
                variants: {
                    create: [
                        {
                            sku: "GAB005-S",
                            size: "S",
                            color: "Beige y mezclilla",
                            priceAdjustment: 0,
                            stockQuantity: 50,
                        },
                    ],
                },
            },
        }),
        // Chamarra diseñada con gabardina y denim
        prisma.product.create({
            data: {
                name: "Chamarra diseñada con gabardina y denim",
                slug: "chamarra-gabardina-denim",
                description: "Chamarra de gabardina con un diseño único, hecha con gabardina y denim.",
                sku: "CHAM006",
                categoryId: categories[1].id,
                price: 1400.00,
                originalPrice: 0.00,
                isNew: true,
                isFeatured: true,
                dimensions: { length: 70, width: 50 },
                material: "Gabardina y mezclilla",
                careInstructions: "Lavar a mano con agua fría, no usar blanqueador.",
                metaTitle: "Chamarra de gabardina y mezclilla única",
                metaDescription: "Chamarra de gabardina con un diseño único, hecha con gabardina y denim.",
                images: {
                    create: [
                        {
                            imageUrl: "/img/chamarra-gabardina-denim_1.jpg",
                            altText: "",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/img/chamarra-gabardina-denim_2.jpg",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/img/chamarra-gabardina-denim_3.jpg",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "/img/chamarra-gabardina-denim_4.jpg",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 1,
                        },
                    ],
                },
                variants: {
                    create: [
                        {
                            sku: "CHAM006-S",
                            size: "S",
                            color: "Azul y negro",
                            priceAdjustment: 0,
                            stockQuantity: 50,
                        },
                    ],
                },
            },
        }),
    ])


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
                name: "Novedades",
                slug: "novedades",
                description: "Productos recién llegados",
                isActive: true,
                sortOrder: 2,
                isFeatured: true,
                products: {
                    create: [
                        { productId: products[0].id, sortOrder: 1 },
                        { productId: products[1].id, sortOrder: 2 },
                        { productId: products[2].id, sortOrder: 3 },
                        { productId: products[3].id, sortOrder: 4 },
                    ],
                },
                imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDkxNDUyNzg0XzE3OTE3NTE5MTM0MDg1MzE2Xzc0ODMxMTc4NTU5ODYxODc0MDVfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNDkxNDUyNzg0XzE3OTE3NTE5MTM0MDg1MzE2Xzc0ODMxMTc4NTU5ODYxODc0MDVfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUVFWDFvR2JFcENtamk3LVE5LWxWYVBaUEt5Vl9WbkJfaWwtdklnTTFiWWdYWmY1dUpLUFUzeTBJdFR2blpwUG5tZjRRbngzeG5MMHVEYkxkNEVsYkllJl9uY19vaGM9QzB5V0FBLVV0M2tRN2tOdndIRlpzdXMmX25jX2dpZD16V1ZpMWtHX2hiSDZPSk9RV1NNRmh3JmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlhXRE9xZHEybG02Tk9ILWxHN29rVjBjMWxjYVprWGh1Y2hmMTZhLWhVaXZnJm9lPTY4QTA1RkZGJl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTYzNjcxLCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDA3MX0.6MCsDVbKx0k7jK8R_bt5b01xLCK8JlK1Cjtoq1hOCfo"
            },
        }),
        prisma.collection.create({
            data: {
                name: "Denim Collection",
                slug: "denim-collection",
                description: "Colección de productos de denim",
                isActive: true,
                isFeatured: true,
                sortOrder: 2,
                products: {
                    create: [
                        { productId: products[4].id, sortOrder: 1 },
                        { productId: products[5].id, sortOrder: 2 },
                        { productId: products[6].id, sortOrder: 2 },
                        { productId: products[7].id, sortOrder: 2 },
                    ],
                },
                imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNTMxNTI3Nzk2XzE3OTMwMTgyMzQxMDg1MzE2XzQ4NjM3MzczMzU4MDExMjQzNzVfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNTMxNTI3Nzk2XzE3OTMwMTgyMzQxMDg1MzE2XzQ4NjM3MzczMzU4MDExMjQzNzVfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUdFZ3Jad2thLU5iUVRyWE5NZGdnVzFrYlkyT0lXLXpCZm9KaGp3eUZlYld5S05LWnRISHRKS1JSWmt5dWdid25SazRHdF9jM0pQYnZETjlEZzJreWR3Jl9uY19vaGM9Q1N0NG5VcnVYUUVRN2tOdndHbGNkWHQmX25jX2dpZD1RczhleG1aSWZnVUpSQnJCcWUzTmt3JmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlhjU3E3Vmp4OXNEeVU1UTA2WUZHMDNBcVo3RHk5T1lTZ0d3cGt6R0p4WGN3Jm9lPTY4QTA2Nzc4Jl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0NjQyLCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MTA0Mn0.1lEaEncKl4sxoCxp4j680L5v9lsbPeoHAvHmZCDCqqM"
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
