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
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDkxNDUyNzg0XzE3OTE3NTE5MTM0MDg1MzE2Xzc0ODMxMTc4NTU5ODYxODc0MDVfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNDkxNDUyNzg0XzE3OTE3NTE5MTM0MDg1MzE2Xzc0ODMxMTc4NTU5ODYxODc0MDVfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUVFWDFvR2JFcENtamk3LVE5LWxWYVBaUEt5Vl9WbkJfaWwtdklnTTFiWWdYWmY1dUpLUFUzeTBJdFR2blpwUG5tZjRRbngzeG5MMHVEYkxkNEVsYkllJl9uY19vaGM9QzB5V0FBLVV0M2tRN2tOdndIRlpzdXMmX25jX2dpZD16V1ZpMWtHX2hiSDZPSk9RV1NNRmh3JmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlhXRE9xZHEybG02Tk9ILWxHN29rVjBjMWxjYVprWGh1Y2hmMTZhLWhVaXZnJm9lPTY4QTA1RkZGJl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTYzNjcxLCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDA3MX0.6MCsDVbKx0k7jK8R_bt5b01xLCK8JlK1Cjtoq1hOCfo",
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
                            stockQuantity: 50,
                        },
                        {
                            sku: "CHAM001-M",
                            size: "M",
                            color: "Azul",
                            priceAdjustment: 0,
                            stockQuantity: 40,
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
                price: 0.00,
                originalPrice: 0.00,
                isNew: true,
                isFeatured: true,
                dimensions: { length: 70, width: 50 },
                material: "Mezclilla",
                careInstructions: "Lavar a mano con agua fría, no usar blanqueador.",
                metaTitle: "Pantalón de mezclilla con parches",
                metaDescription: "Pantalón de mezclilla con parches bordados, ideal para un look casual y moderno.",
                images: {
                    create: [
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDkwODExNjEwXzE3OTE3NTI2NzU0MDg1MzE2XzU0OTMyNDMwODk0ODUxNDkyNTFfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNDkwODExNjEwXzE3OTE3NTI2NzU0MDg1MzE2XzU0OTMyNDMwODk0ODUxNDkyNTFfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUhrVWhadW40Q0JBclpoX281NVVIeFRoVV9mN1JlN0M0REItYmlidlRMZ2w3MVozTUkzcE1jVV9TbzM1OHNWUUJ2UnNzeFRmQ1ZGRXBhS2pveThfcXhtJl9uY19vaGM9YTE2MTl4N2plSkVRN2tOdndHVnpULTEmX25jX2dpZD1XdG1EdHBTM25aQnFCdkVaVkFVamV3JmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlhwLTRlSExMbndCLXBpNkFLZU5uSnhXNW1MSkJ3NjlxcjVwTVhub0ZSOXJBJm9lPTY4QTA0RUZCJl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0MDQ3LCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDQ0N30.yqBx-GMciEB7DIuEJ4UEb_Jk5xHTEuQGI8Ro2Z55yU4",
                            altText: "Pantalón de mezclilla con parches",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDkxNDQ2NTA1XzE3OTE3NTI2NzY2MDg1MzE2XzgyMjQzNjI2NTQxOTQ0OTYwODBfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNDkxNDQ2NTA1XzE3OTE3NTI2NzY2MDg1MzE2XzgyMjQzNjI2NTQxOTQ0OTYwODBfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUhrVWhadW40Q0JBclpoX281NVVIeFRoVV9mN1JlN0M0REItYmlidlRMZ2w3MVozTUkzcE1jVV9TbzM1OHNWUUJ2UnNzeFRmQ1ZGRXBhS2pveThfcXhtJl9uY19vaGM9NkN4N3M3ZGJKQUFRN2tOdndHNVd6UWgmX25jX2dpZD1XdG1EdHBTM25aQnFCdkVaVkFVamV3JmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlY1LUlfV0E1ZE9Ja05xeF83Q0dJOU9nQ1hOLUVGVFhOSXg0VkVSZkd2X3BRJm9lPTY4QTA4MDVDJl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0MDQ3LCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDQ0N30.Ni8LjDxybtuIYX7bV6XoJ2wReqp4eaCBMYU8ByD9AR4",
                            altText: "Pantalón de mezclilla con parches",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDkxNDQ1NzY4XzE3OTE3NTI2NzU3MDg1MzE2XzM4MjA2NTg2NTU4OTA3NTkzODlfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNDkxNDQ1NzY4XzE3OTE3NTI2NzU3MDg1MzE2XzM4MjA2NTg2NTU4OTA3NTkzODlfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUhrVWhadW40Q0JBclpoX281NVVIeFRoVV9mN1JlN0M0REItYmlidlRMZ2w3MVozTUkzcE1jVV9TbzM1OHNWUUJ2UnNzeFRmQ1ZGRXBhS2pveThfcXhtJl9uY19vaGM9WU9aTnJjVzdGWmtRN2tOdndFV21VWU0mX25jX2dpZD1XdG1EdHBTM25aQnFCdkVaVkFVamV3JmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlVxVXlqcUZuNlFYX3JqWldQbV9ibUVZMkZ0SmJYYkJCcWliandoZ2YzMkJRJm9lPTY4QTA1RTI2Jl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0MDQ3LCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDQ0N30.MjeoNwq9WNy_UEIKzfBI-uPe6QjYGhxKHJvmrJq-CJY",
                            altText: "Pantalón de mezclilla con parches",
                            isPrimary: true,
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
                        {
                            sku: "PANT001-M",
                            size: "M",
                            color: "Azul",
                            priceAdjustment: 0,
                            stockQuantity: 40,
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
                price: 0.00,
                originalPrice: 0.00,
                isNew: true,
                isFeatured: true,
                dimensions: { length: 70, width: 50 },
                material: "Mezclilla",
                careInstructions: "Lavar a mano con agua fría, no usar blanqueador.",
                metaTitle: "Chamarra de mezclilla con textura asimétrica",
                metaDescription: "Chamarra de mezclilla con textura asimétrica, ideal para un look moderno y único.",
                images: {
                    create: [
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDkxNDQ0NzM1XzE3OTE3NTIyNjQ3MDg1MzE2XzkwMjY3ODQzMDEyNjgxNjc3MjFfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNDkxNDQ0NzM1XzE3OTE3NTIyNjQ3MDg1MzE2XzkwMjY3ODQzMDEyNjgxNjc3MjFfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUZRaFhDcm05d3dlQXd2VTl4OS0xSm56VWlDdGpxX1FpQTJDNjA3S0tYNlpCNEJzR1R4Wm5yTGk4U1M5SUJLN0pHdDlVTk45bW9sQ2JUODdZLUhsTDhOJl9uY19vaGM9UUJfZDNiMnlROG9RN2tOdndGaHFHXzcmX25jX2dpZD0zQWx3REd3LUdZM3pDQlk0Z3lhWWJBJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlh3RFZOVDhGbV82ZjNuMlJDUkNnaFEzMnRxN2JEWkZZb0FEd3Q1SUJzUEpRJm9lPTY4QTA2NUM3Jl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0MTI5LCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDUyOX0.UnNNKHiE46Z3gzXOTGF_y1CStjDEa9sA6zPPshylKr8",
                            altText: "Chamarra de mezclilla con textura asimétrica",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDkxNDQ5MDQwXzE3OTE3NTIyNjI2MDg1MzE2XzM1MTQ4Mjc0MDYyMTkxOTE1MjJfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNDkxNDQ5MDQwXzE3OTE3NTIyNjI2MDg1MzE2XzM1MTQ4Mjc0MDYyMTkxOTE1MjJfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUZRaFhDcm05d3dlQXd2VTl4OS0xSm56VWlDdGpxX1FpQTJDNjA3S0tYNlpCNEJzR1R4Wm5yTGk4U1M5SUJLN0pHdDlVTk45bW9sQ2JUODdZLUhsTDhOJl9uY19vaGM9SXo3bWo0cFc0eVVRN2tOdndFX0FFdlMmX25jX2dpZD0zQWx3REd3LUdZM3pDQlk0Z3lhWWJBJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlhfQkN2VnJuWnhkUTg0SEZnYTJsdF9WMWNjQ0pKUFFIZjZwTGdYbHBReXRnJm9lPTY4QTA2OUFBJl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0MTI5LCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDUyOX0.ZJmdkfKPGtDNYytm3fpjT6zk5lrFh36ZfZX7q7TjwAI",
                            altText: "Chamarra de mezclilla con textura asimétrica",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDkxNDQ5Njc1XzE3OTE3NTIyNjUzMDg1MzE2XzUxMDQxMTc3NTc5OTQ4NTYwMzFfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNDkxNDQ5Njc1XzE3OTE3NTIyNjUzMDg1MzE2XzUxMDQxMTc3NTc5OTQ4NTYwMzFfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUZRaFhDcm05d3dlQXd2VTl4OS0xSm56VWlDdGpxX1FpQTJDNjA3S0tYNlpCNEJzR1R4Wm5yTGk4U1M5SUJLN0pHdDlVTk45bW9sQ2JUODdZLUhsTDhOJl9uY19vaGM9MGI5LXV3SEJLdGNRN2tOdndGdnc4X0cmX25jX2dpZD0zQWx3REd3LUdZM3pDQlk0Z3lhWWJBJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlZnZm5xMkZQSUZNcWVmR0RfLTVGN3YxRE5fakFHMlNMYWI2Y2R1dzJlUjFBJm9lPTY4QTA1MUU1Jl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0MTI5LCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDUyOX0.SE1_EBDZ3_oIfgmmo2GPPB7NgL_MICZk97c-CHDcw8U",
                            altText: "Chamarra de mezclilla con textura asimétrica",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDkxNDQwMjYxXzE3OTE3NTIyNjE3MDg1MzE2XzcwNzQxNDUxMzg0MDEzNjgxMzZfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNDkxNDQwMjYxXzE3OTE3NTIyNjE3MDg1MzE2XzcwNzQxNDUxMzg0MDEzNjgxMzZfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUZRaFhDcm05d3dlQXd2VTl4OS0xSm56VWlDdGpxX1FpQTJDNjA3S0tYNlpCNEJzR1R4Wm5yTGk4U1M5SUJLN0pHdDlVTk45bW9sQ2JUODdZLUhsTDhOJl9uY19vaGM9TW12bHpDWlBrOXNRN2tOdndFNG9BZTMmX25jX2dpZD0zQWx3REd3LUdZM3pDQlk0Z3lhWWJBJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZldCeFQwZkU3WGpFcEJ3NUwtUWMwUS1HQ3FzOUZJRHF1Q2w4cFhGVUtiODRBJm9lPTY4QTA1RjVDJl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0MTI5LCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDUyOX0.2BBfBhnjHmd7UQV-R0DN8ZVMb6u3AnPYaXd-sSHkVqc",
                            altText: "Chamarra de mezclilla con textura asimétrica",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDkxNDQ2NDQ2XzE3OTE3NTIyNjQxMDg1MzE2XzEwMjMxMjA5OTY1MDIyNjY3NzNfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNDkxNDQ2NDQ2XzE3OTE3NTIyNjQxMDg1MzE2XzEwMjMxMjA5OTY1MDIyNjY3NzNfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUZRaFhDcm05d3dlQXd2VTl4OS0xSm56VWlDdGpxX1FpQTJDNjA3S0tYNlpCNEJzR1R4Wm5yTGk4U1M5SUJLN0pHdDlVTk45bW9sQ2JUODdZLUhsTDhOJl9uY19vaGM9ZUdCMG81c0xxYWdRN2tOdndFNUVXczMmX25jX2dpZD0zQWx3REd3LUdZM3pDQlk0Z3lhWWJBJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlVGUl9ZQ1BheXFSQ0xVcE9Pel84NGVSb0d4eE93cmxoYjlUN1F2Z3l5ajZBJm9lPTY4QTA1NjE2Jl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0MTI5LCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDUyOX0.HMDMpLxb1mPeKeyme2XUsc9Fig2kRNKRuzbftGkfQ9M",
                            altText: "Chamarra de mezclilla con textura asimétrica",
                            isPrimary: true,
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
                        {
                            sku: "CHAM002-M",
                            size: "M",
                            color: "Azul y Blanco",
                            priceAdjustment: 0,
                            stockQuantity: 40,
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
                price: 0.00,
                originalPrice: 0.00,
                isNew: true,
                isFeatured: true,
                dimensions: { length: 70, width: 50 },
                material: "Mezclilla",
                careInstructions: "Lavar a mano con agua fría, no usar blanqueador.",
                metaTitle: "Chamarra de mezclilla moderna",
                metaDescription: "Chamarra de mezclilla con un diseño moderno en escala de grises.",
                images: {
                    create: [
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDkwNjEzNTk3XzE3OTE3NTI1NTE1MDg1MzE2XzI1OTY5OTk0MjIwMzg0ODQxNTZfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNDkwNjEzNTk3XzE3OTE3NTI1NTE1MDg1MzE2XzI1OTY5OTk0MjIwMzg0ODQxNTZfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUVoMEhiUXBLNEk4YmFlb2RqNlQ3ZkV1aUJvRlhnOXhkVlZFd0ZOeXdrUS1CU2NKT3FKbExjcHRhZ2RrSTgtc2EzdGVENGZSc2FmcGZTMmZCS2J5MEJ5Jl9uY19vaGM9ZUZsOGpiX2JTbkVRN2tOdndFY0kxQlYmX25jX2dpZD11eDEzU3BFNEloU0R3UjlYQjhYTllRJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlV3UjhNcm9yN1NReEI5bmE4R1JnTVRLcXpDQUFOdHdvaVo4Nmo4VDJ5SDZnJm9lPTY4QTA3RTAzJl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0MjY5LCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDY2OX0.X1jgtAt_bWwhbAIAp2C-6VdQHUxBOHxemMxpZ90MpvY",
                            altText: "",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDkxNDQzMDU4XzE3OTE3NTI1NTI0MDg1MzE2XzgzNDk2ODY4Mzk2NDU4NDI1NDFfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNDkxNDQzMDU4XzE3OTE3NTI1NTI0MDg1MzE2XzgzNDk2ODY4Mzk2NDU4NDI1NDFfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUVoMEhiUXBLNEk4YmFlb2RqNlQ3ZkV1aUJvRlhnOXhkVlZFd0ZOeXdrUS1CU2NKT3FKbExjcHRhZ2RrSTgtc2EzdGVENGZSc2FmcGZTMmZCS2J5MEJ5Jl9uY19vaGM9NFVKRTdibjlxcmNRN2tOdndFZXhldTkmX25jX2dpZD11eDEzU3BFNEloU0R3UjlYQjhYTllRJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlhnSE5VeklwWEZ3RE40WXFaaEhvMjh2QkRwRV9ZbkxPZzg2ZFVqd2xQbzlRJm9lPTY4QTA2MjdBJl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0MjY5LCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDY2OX0.nYIi4gi-lIlek7gk4OX-3HdWJR7fvrs5NJ4P-X1ezp0",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 2,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDkwOTkwODI1XzE3OTE3NTI1NTMzMDg1MzE2XzMxMTU2MDU0NjQ3NjMzMzk4OTNfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNDkwOTkwODI1XzE3OTE3NTI1NTMzMDg1MzE2XzMxMTU2MDU0NjQ3NjMzMzk4OTNfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUVoMEhiUXBLNEk4YmFlb2RqNlQ3ZkV1aUJvRlhnOXhkVlZFd0ZOeXdrUS1CU2NKT3FKbExjcHRhZ2RrSTgtc2EzdGVENGZSc2FmcGZTMmZCS2J5MEJ5Jl9uY19vaGM9REMwcWJMb0ZhLWtRN2tOdndFcXdFMlYmX25jX2dpZD11eDEzU3BFNEloU0R3UjlYQjhYTllRJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZldkMGpIdFNjS2RnUUdTNnItNFFWMFppWlZXdEh6dmhMZWZrLUFDS010UlFRJm9lPTY4QTA2NTc1Jl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0MjY5LCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDY2OX0.9FxVYrXiket02_l2Nqng0qdAGHhEFp03VKDw04TgDIs",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 2,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDkxNDQwMjUzXzE3OTE3NTI1NTQyMDg1MzE2XzI2MTc5MTIxNzAwMTg2ODE3ODNfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNDkxNDQwMjUzXzE3OTE3NTI1NTQyMDg1MzE2XzI2MTc5MTIxNzAwMTg2ODE3ODNfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUVoMEhiUXBLNEk4YmFlb2RqNlQ3ZkV1aUJvRlhnOXhkVlZFd0ZOeXdrUS1CU2NKT3FKbExjcHRhZ2RrSTgtc2EzdGVENGZSc2FmcGZTMmZCS2J5MEJ5Jl9uY19vaGM9cXJXdmk1cGU3RklRN2tOdndIc1E0OXkmX25jX2dpZD11eDEzU3BFNEloU0R3UjlYQjhYTllRJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlZiUUZIVmtpdjdjOXFPYVUyTjRSMFctLTIzYjVCSm5hZmdvTm5vNlpiWml3Jm9lPTY4QTA0RjcyJl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0MjY5LCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDY2OX0.be2gb8LU4E3X7VH6kFSZv2uamPlIPpysOi7DfOSZqQg",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 2,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDkxNDQwNTU4XzE3OTE3NTI1NTUxMDg1MzE2XzY5ODE0NDkyMTk1NzAyMjg3MzZfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNDkxNDQwNTU4XzE3OTE3NTI1NTUxMDg1MzE2XzY5ODE0NDkyMTk1NzAyMjg3MzZfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUVoMEhiUXBLNEk4YmFlb2RqNlQ3ZkV1aUJvRlhnOXhkVlZFd0ZOeXdrUS1CU2NKT3FKbExjcHRhZ2RrSTgtc2EzdGVENGZSc2FmcGZTMmZCS2J5MEJ5Jl9uY19vaGM9YnY5R0hUaE44VzhRN2tOdndHS1NtODAmX25jX2dpZD11eDEzU3BFNEloU0R3UjlYQjhYTllRJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlVrWHc2VTgtbEo1QjlaX2hQeHVDSTdIckMwa0Zjem1kdFBNbWpoV3NEVzlBJm9lPTY4QTA4MDFGJl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0MjY5LCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDY2OX0.Ty2iFUACubOTeaGJm0eF3xBCN_00YglerHbO65qarqU",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 2,
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
                        {
                            sku: "CHAM004-M",
                            size: "M",
                            color: "Gris",
                            priceAdjustment: 0,
                            stockQuantity: 40,
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
                price: 0.00,
                originalPrice: 0.00,
                isNew: true,
                isFeatured: true,
                dimensions: { length: 70, width: 50 },
                material: "Mezclilla",
                careInstructions: "Lavar a mano con agua fría, no usar blanqueador.",
                metaTitle: "Chamarra de mezclilla clásica",
                metaDescription: "Chamarra de mezclilla clásica, perfecta para cualquier ocasión.",
                images: {
                    create: [
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDY5OTcxNTUwXzI1NjcxNTUwNjAxNjIzMzRfMzQ3NDU5MjYyNjkwMTgxMTYwNl9uLmpwZyIsInVybCI6Imh0dHBzOi8vc2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjkzNTAtMTUvNDY5OTcxNTUwXzI1NjcxNTUwNjAxNjIzMzRfMzQ3NDU5MjYyNjkwMTgxMTYwNl9uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfcDEwODB4MTA4MF90dDYmX25jX2h0PXNjb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTAyJl9uY19vYz1RNmNaMlFFZ0t5azQ1NWVBbk1KcE5CSEZOcDVpNXRMS3VVLXlHODlBVlpoUnFYdWxGVXpSa3NGNV9hYWpPM2JPbUZydFg0UzZlcE9pZTVuZVBQaUFEQUJWQlVvZSZfbmNfb2hjPUR5dlItckh6bGRzUTdrTnZ3SGVaNlFzJl9uY19naWQ9RlNTY2xrVWRPNjdLUkYwQ25WaUM4QSZlZG09QU5US0lJb0JBQUFBJmNjYj03LTUmb2g9MDBfQWZYOHo5cFBYZGtYY3RhQnNDSUMyeFl1eC00TkhrM3hDT01GR0ZkSll2MV85dyZvZT02OEEwNjMwRiZfbmNfc2lkPWQ4ODVhMiIsImV4cCI6MTc1NDk2NDQyMiwiZm9yY2UiOmZhbHNlLCJpYXQiOjE3NTQ5NjA4MjJ9.XIN9f1B0r-7RFa6bmUOsA4Xyz5Bp3LWOhzGzi60Ehzo",
                            altText: "Chamarra de mezclilla clásica con parches",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDY5OTQ5MDUwXzI3NzUwNDE0Mjk0NjA2NTM1XzgyNDM1NzMyMDkxMDQ4NTUzNDRfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI5MzUwLTE1LzQ2OTk0OTA1MF8yNzc1MDQxNDI5NDYwNjUzNV84MjQzNTczMjA5MTA0ODU1MzQ0X24uanBnP3N0cD1kc3QtanBnX2UzNV9wMTA4MHgxMDgwX3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDcmX25jX29jPVE2Y1oyUUVnS3lrNDU1ZUFuTUpwTkJIRk5wNWk1dExLdVUteUc4OUFWWmhScVh1bEZVelJrc0Y1X2Fhak8zYk9tRnJ0WDRTNmVwT2llNW5lUFBpQURBQlZCVW9lJl9uY19vaGM9S0ozZWROOTRHbkVRN2tOdndHT014VUomX25jX2dpZD1GU1NjbGtVZE82N0tSRjBDblZpQzhBJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZldPcGlDNTUwMGd5SEliNGtxVS1vOTBvVWhCanBEb25DYjZfS3puYy1DVmtRJm9lPTY4QTA4MjUxJl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0NDIyLCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDgyMn0.20RFQiQJoFdWJQGLhT1mELAaIDXXVxcN4FM4V6FvIwk",
                            altText: "Chamarra de mezclilla clásica con parches",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDY5OTcyMzA5XzE0NDcwNTU2ODk1OTI2OTZfNDA1OTc3MDA2ODk0MDM5NjIzMF9uLmpwZyIsInVybCI6Imh0dHBzOi8vc2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjkzNTAtMTUvNDY5OTcyMzA5XzE0NDcwNTU2ODk1OTI2OTZfNDA1OTc3MDA2ODk0MDM5NjIzMF9uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfcDEwODB4MTA4MF90dDYmX25jX2h0PXNjb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTA4Jl9uY19vYz1RNmNaMlFFZ0t5azQ1NWVBbk1KcE5CSEZOcDVpNXRMS3VVLXlHODlBVlpoUnFYdWxGVXpSa3NGNV9hYWpPM2JPbUZydFg0UzZlcE9pZTVuZVBQaUFEQUJWQlVvZSZfbmNfb2hjPVBHWVoyY2ZEVE5zUTdrTnZ3RkhkSllaJl9uY19naWQ9RlNTY2xrVWRPNjdLUkYwQ25WaUM4QSZlZG09QU5US0lJb0JBQUFBJmNjYj03LTUmb2g9MDBfQWZXelFxRkRnQTRZNDVQQkhrUkRXd2l1Q3Rha05mQ09GV3hYWDBKdmppUWw5QSZvZT02OEEwNjFGOSZfbmNfc2lkPWQ4ODVhMiIsImV4cCI6MTc1NDk2NDQyMiwiZm9yY2UiOmZhbHNlLCJpYXQiOjE3NTQ5NjA4MjJ9.cO5Fhtmq7YL7XkdwhFgv2oF13ZVcT7BCMKKiHLxDR8E",
                            altText: "Chamarra de mezclilla clásica con parches",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDcwMDQzMTU5XzUwNzMwMzg3MjM0MDgwMl8yNjUyNzAwNTE0OTI4NTg0OTc4X24uanBnIiwidXJsIjoiaHR0cHM6Ly9zY29udGVudC1pYWQzLTEuY2RuaW5zdGFncmFtLmNvbS92L3Q1MS4yOTM1MC0xNS80NzAwNDMxNTlfNTA3MzAzODcyMzQwODAyXzI2NTI3MDA1MTQ5Mjg1ODQ5Nzhfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfdHQ2Jl9uY19odD1zY29udGVudC1pYWQzLTEuY2RuaW5zdGFncmFtLmNvbSZfbmNfY2F0PTExMCZfbmNfb2M9UTZjWjJRRWdLeWs0NTVlQW5NSnBOQkhGTnA1aTV0TEt1VS15Rzg5QVZaaFJxWHVsRlV6UmtzRjVfYWFqTzNiT21GcnRYNFM2ZXBPaWU1bmVQUGlBREFCVkJVb2UmX25jX29oYz1jcGxZYm1EZGxWb1E3a052d0Y3cmRBayZfbmNfZ2lkPUZTU2Nsa1VkTzY3S1JGMENuVmlDOEEmZWRtPUFOVEtJSW9CQUFBQSZjY2I9Ny01Jm9oPTAwX0FmWHFOOUFfcVBVWGM2RHg2OUlzQnBGcFBEU29HOGtyVXpQanJFU1hPTVhHTmcmb2U9NjhBMDVBOUQmX25jX3NpZD1kODg1YTIiLCJleHAiOjE3NTQ5NjQ0MjIsImZvcmNlIjpmYWxzZSwiaWF0IjoxNzU0OTYwODIyfQ.vAmMr97Hj8LGnAgvVY0_pbP4wkdGNw45we6nko5fqH4",
                            altText: "Chamarra de mezclilla clásica con parches",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDY5OTQ0ODA2Xzg4MDgxMDE4OTU5NDQwNzZfNTMzNzM0Mzc1NTk3MzM4ODQwNV9uLmpwZyIsInVybCI6Imh0dHBzOi8vc2NvbnRlbnQtaWFkMy0yLmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjkzNTAtMTUvNDY5OTQ0ODA2Xzg4MDgxMDE4OTU5NDQwNzZfNTMzNzM0Mzc1NTk3MzM4ODQwNV9uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfcDEwODB4MTA4MF90dDYmX25jX2h0PXNjb250ZW50LWlhZDMtMi5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTAwJl9uY19vYz1RNmNaMlFFZ0t5azQ1NWVBbk1KcE5CSEZOcDVpNXRMS3VVLXlHODlBVlpoUnFYdWxGVXpSa3NGNV9hYWpPM2JPbUZydFg0UzZlcE9pZTVuZVBQaUFEQUJWQlVvZSZfbmNfb2hjPVRKMTBINDJGeUtnUTdrTnZ3SFBFRGFtJl9uY19naWQ9RlNTY2xrVWRPNjdLUkYwQ25WaUM4QSZlZG09QU5US0lJb0JBQUFBJmNjYj03LTUmb2g9MDBfQWZXeS1uMGJ0U0duejBfMHB4TEdFSThwOF9PNzFuQkFwUS1wUkVCaWtOUlJxdyZvZT02OEEwNzFCNCZfbmNfc2lkPWQ4ODVhMiIsImV4cCI6MTc1NDk2NDQyMiwiZm9yY2UiOmZhbHNlLCJpYXQiOjE3NTQ5NjA4MjJ9.OebxTs2tHvTXnIAo3gA1SHToHkCVWLyvfmhaNCFSCkw",
                            altText: "Chamarra de mezclilla clásica con parches",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDcwMDQxMzUxXzE2NzAzOTQ0MjM4MjQyODlfMzQ3MDUyNjc3NTQzNTUzMzIyOF9uLmpwZyIsInVybCI6Imh0dHBzOi8vc2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjkzNTAtMTUvNDcwMDQxMzUxXzE2NzAzOTQ0MjM4MjQyODlfMzQ3MDUyNjc3NTQzNTUzMzIyOF9uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfcDEwODB4MTA4MF90dDYmX25jX2h0PXNjb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTA5Jl9uY19vYz1RNmNaMlFFZ0t5azQ1NWVBbk1KcE5CSEZOcDVpNXRMS3VVLXlHODlBVlpoUnFYdWxGVXpSa3NGNV9hYWpPM2JPbUZydFg0UzZlcE9pZTVuZVBQaUFEQUJWQlVvZSZfbmNfb2hjPVVJSy1BVmItV1UwUTdrTnZ3R1BOQjliJl9uY19naWQ9RlNTY2xrVWRPNjdLUkYwQ25WaUM4QSZlZG09QU5US0lJb0JBQUFBJmNjYj03LTUmb2g9MDBfQWZVQlJjc2NEeldkdG1JMkU2Q281UGJjOEJ0dzhKTWVBMkNES1VKek9CaGQtQSZvZT02OEEwNTFFMiZfbmNfc2lkPWQ4ODVhMiIsImV4cCI6MTc1NDk2NDQyMiwiZm9yY2UiOmZhbHNlLCJpYXQiOjE3NTQ5NjA4MjJ9.Fg8auT0_aj1ah34wKPu5--5NqsOouFSbrQ_4aINU_bY",
                            altText: "Chamarra de mezclilla clásica con parches",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNDY5OTQ5MDU1XzYwMjE4MTMxOTA1ODEwMV8zNDA1NjM2MTQ0NTgxMDE3MzVfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI5MzUwLTE1LzQ2OTk0OTA1NV82MDIxODEzMTkwNTgxMDFfMzQwNTYzNjE0NDU4MTAxNzM1X24uanBnP3N0cD1kc3QtanBnX2UzNV9wMTA4MHgxMDgwX3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDEmX25jX29jPVE2Y1oyUUVnS3lrNDU1ZUFuTUpwTkJIRk5wNWk1dExLdVUteUc4OUFWWmhScVh1bEZVelJrc0Y1X2Fhak8zYk9tRnJ0WDRTNmVwT2llNW5lUFBpQURBQlZCVW9lJl9uY19vaGM9OGRFNDFScW8xaXNRN2tOdndHZE10YnUmX25jX2dpZD1GU1NjbGtVZE82N0tSRjBDblZpQzhBJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlUtOHVPVmlYaGlpQ05lZktvRmQ5QWFNYVFQWWVSM3hZMU93bVpvOUJDN3N3Jm9lPTY4QTA2RTIwJl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0NDIyLCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDgyMn0._pjws63DXFwJfl6Mzt7-q_SPnYpGxFglhCC_iArQf_4",
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
                        {
                            sku: "CHAM003-M",
                            size: "M",
                            color: "Mezclilla",
                            priceAdjustment: 0,
                            stockQuantity: 40,
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
                price: 0.00,
                originalPrice: 0.00,
                isNew: true,
                isFeatured: true,
                dimensions: { length: 70, width: 50 },
                material: "Mezclilla",
                careInstructions: "Lavar a mano con agua fría, no usar blanqueador.",
                metaTitle: "Chamarra de mezclilla única",
                metaDescription: "Chamarra de mezclilla con un diseño único, hecha con denim rescatado.",
                images: {
                    create: [
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNTI4NTUwNzkyXzE3OTMwMTg2NzQ1MDg1MzE2XzIwNTExNDYxNTkyMDQ5MDU4MTJfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNTI4NTUwNzkyXzE3OTMwMTg2NzQ1MDg1MzE2XzIwNTExNDYxNTkyMDQ5MDU4MTJfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUU0M2hPcXY0S3drQzhtYll0ZlpnZjl0LXloTlc2NVJjMGlEUXJZT3VSZXMyenhENFZBSUhxSFd3WWRhSkt5TDFYWFR2eTZfNGVDS1lHQzNpeExhRmJXJl9uY19vaGM9WTQxWkxaRlBvTjhRN2tOdndIRFlhTTYmX25jX2dpZD1rM0s4aWJvNE0xekFGUnlNY3NnLVpRJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZldUVnZoMkQ3dXBQZmRvN19GWEY5NFdnZnVyQ0NEcFlxUmZIYlpQd0Z2WE1RJm9lPTY4QTA2NjJCJl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0NTQyLCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDk0Mn0.G920tLZuIs075yxYXHQGU_iC9nN9LGywwBzg-YYhCA8",
                            altText: "",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNTI5NDc4OTk2XzE3OTMwMTg2NzcyMDg1MzE2Xzg3NjY1NTU0MTc2MTY1MDA0NjVfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNTI5NDc4OTk2XzE3OTMwMTg2NzcyMDg1MzE2Xzg3NjY1NTU0MTc2MTY1MDA0NjVfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUU0M2hPcXY0S3drQzhtYll0ZlpnZjl0LXloTlc2NVJjMGlEUXJZT3VSZXMyenhENFZBSUhxSFd3WWRhSkt5TDFYWFR2eTZfNGVDS1lHQzNpeExhRmJXJl9uY19vaGM9TnhvTDdESExNMkVRN2tOdndHeUdORC0mX25jX2dpZD1rM0s4aWJvNE0xekFGUnlNY3NnLVpRJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZldibng0UTFfVkR5cXdzVjF5OG5ONU50NVN5dGhiOVV3RzI1eUdnYmhaYnB3Jm9lPTY4QTA2N0E1Jl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0NTQyLCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDk0Mn0.Ze0isMzJNWZBpVpyhM0U28CG-OzBxzcXpnNYKVmimlk",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 2,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNTI5MTEzMzM4XzE3OTMwMTg2Nzg0MDg1MzE2XzkxMzcwNDMwMTMyNjQzODM3N19uLmpwZyIsInVybCI6Imh0dHBzOi8vc2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjg4NS0xNS81MjkxMTMzMzhfMTc5MzAxODY3ODQwODUzMTZfOTEzNzA0MzAxMzI2NDM4Mzc3X24uanBnP3N0cD1kc3QtanBnX2UzNV9wMTA4MHgxMDgwX3NoMC4wOF90dDYmX25jX2h0PXNjb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTA4Jl9uY19vYz1RNmNaMlFFNDNoT3F2NEt3a0M4bWJZdGZaZ2Y5dC15aE5XNjVSYzBpRFFyWU91UmVzMnp4RDRWQUlIcUhXd1lkYUpLeUwxWFhUdnk2XzRlQ0tZR0MzaXhMYUZiVyZfbmNfb2hjPUllTXFGeTlNSzhrUTdrTnZ3RkZHUEZIJl9uY19naWQ9azNLOGlibzRNMXpBRlJ5TWNzZy1aUSZlZG09QU5US0lJb0JBQUFBJmNjYj03LTUmb2g9MDBfQWZVMGxib2FaQWlaOHdNSUc1Z3NkMWl4RkszRC1CaDI2SmpQWVVKblFjYUhPQSZvZT02OEEwNzNCMSZfbmNfc2lkPWQ4ODVhMiIsImV4cCI6MTc1NDk2NDU0MiwiZm9yY2UiOmZhbHNlLCJpYXQiOjE3NTQ5NjA5NDJ9.glZO5VIoUNueLPVlhjbKzy1lgDauNMuV7YK-rPsPwpI",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 2,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNTI5Nzk2MTI1XzE3OTMwMTg2ODU2MDg1MzE2XzQyNjQ4MDE1ODM2Mzg4ODMxMjNfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNTI5Nzk2MTI1XzE3OTMwMTg2ODU2MDg1MzE2XzQyNjQ4MDE1ODM2Mzg4ODMxMjNfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUU0M2hPcXY0S3drQzhtYll0ZlpnZjl0LXloTlc2NVJjMGlEUXJZT3VSZXMyenhENFZBSUhxSFd3WWRhSkt5TDFYWFR2eTZfNGVDS1lHQzNpeExhRmJXJl9uY19vaGM9NWdhXzdyWXB4MHNRN2tOdndFSnJsQlcmX25jX2dpZD1rM0s4aWJvNE0xekFGUnlNY3NnLVpRJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlhNODc4cFFDSXBITFUwZFFuTVZJTWNCdEdSMzl2OWRZejEtd2ZQT2x3TXRRJm9lPTY4QTA3MDdEJl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0NTQyLCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDk0Mn0.oIKMjJjbsjVP3ujZBO1PTvlacrrBwKTYoEBWJq_QZg8",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 2,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNTI5NzI1MTM2XzE3OTMwMTg2ODY4MDg1MzE2XzU4OTY2NDI4Njg3MDI4ODE0MTJfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNTI5NzI1MTM2XzE3OTMwMTg2ODY4MDg1MzE2XzU4OTY2NDI4Njg3MDI4ODE0MTJfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUU0M2hPcXY0S3drQzhtYll0ZlpnZjl0LXloTlc2NVJjMGlEUXJZT3VSZXMyenhENFZBSUhxSFd3WWRhSkt5TDFYWFR2eTZfNGVDS1lHQzNpeExhRmJXJl9uY19vaGM9YkRBZnhPWER4VjBRN2tOdndHZVBid28mX25jX2dpZD1rM0s4aWJvNE0xekFGUnlNY3NnLVpRJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlctWmh6aENRX0ZMTFNWX3RranAycEtzdlpvYThKZmZiWGhXeWUwaTFqLS1nJm9lPTY4QTA3RDFCJl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0NTQyLCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MDk0Mn0.MKWQdz5Pnvo_pHzoXMuAjESTSY8UUfusb99Hgxgifug",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 2,
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
                        {
                            sku: "CHAM005-M",
                            size: "M",
                            color: "Beige y mezclilla",
                            priceAdjustment: 0,
                            stockQuantity: 40,
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
                price: 0.00,
                originalPrice: 0.00,
                isNew: true,
                isFeatured: true,
                dimensions: { length: 70, width: 50 },
                material: "Mezclilla",
                careInstructions: "Lavar a mano con agua fría, no usar blanqueador.",
                metaTitle: "Gabardina de mezclilla única",
                metaDescription: "Gabardina de mezclilla con un diseño único, hecha con denim rescatado.",
                images: {
                    create: [
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNTMxNTI3Nzk2XzE3OTMwMTgyMzQxMDg1MzE2XzQ4NjM3MzczMzU4MDExMjQzNzVfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNTMxNTI3Nzk2XzE3OTMwMTgyMzQxMDg1MzE2XzQ4NjM3MzczMzU4MDExMjQzNzVfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUdFZ3Jad2thLU5iUVRyWE5NZGdnVzFrYlkyT0lXLXpCZm9KaGp3eUZlYld5S05LWnRISHRKS1JSWmt5dWdid25SazRHdF9jM0pQYnZETjlEZzJreWR3Jl9uY19vaGM9Q1N0NG5VcnVYUUVRN2tOdndHbGNkWHQmX25jX2dpZD1RczhleG1aSWZnVUpSQnJCcWUzTmt3JmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlhjU3E3Vmp4OXNEeVU1UTA2WUZHMDNBcVo3RHk5T1lTZ0d3cGt6R0p4WGN3Jm9lPTY4QTA2Nzc4Jl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0NjQyLCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MTA0Mn0.1lEaEncKl4sxoCxp4j680L5v9lsbPeoHAvHmZCDCqqM",
                            altText: "",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNTI5MjE3MjkxXzE3OTMwMTgyMzUwMDg1MzE2XzQyNzk4MjE0NTI0MzQyODExMDVfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNTI5MjE3MjkxXzE3OTMwMTgyMzUwMDg1MzE2XzQyNzk4MjE0NTI0MzQyODExMDVfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUdFZ3Jad2thLU5iUVRyWE5NZGdnVzFrYlkyT0lXLXpCZm9KaGp3eUZlYld5S05LWnRISHRKS1JSWmt5dWdid25SazRHdF9jM0pQYnZETjlEZzJreWR3Jl9uY19vaGM9TUd4a0ZXM1lFdEFRN2tOdndGaG1uNGsmX25jX2dpZD1RczhleG1aSWZnVUpSQnJCcWUzTmt3JmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlgtWVZhUGJDUWIwS0VrM3NWQ0FvcE1XZXpIZkZqMlRUSWh0TWNUdFBmOUZBJm9lPTY4QTA2OEQyJl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0NjQyLCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MTA0Mn0.4KgV6JgZwJdBUjePpWZLjxHjwXu_I7jGPL5tG9qNaRg",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 2,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNTMxMDgyNDE3XzE3OTMwMTgyMzY4MDg1MzE2XzUzNjI5MTA2Nzk2MTI2MDA4NzBfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNTMxMDgyNDE3XzE3OTMwMTgyMzY4MDg1MzE2XzUzNjI5MTA2Nzk2MTI2MDA4NzBfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUdFZ3Jad2thLU5iUVRyWE5NZGdnVzFrYlkyT0lXLXpCZm9KaGp3eUZlYld5S05LWnRISHRKS1JSWmt5dWdid25SazRHdF9jM0pQYnZETjlEZzJreWR3Jl9uY19vaGM9OXBaQ0NWTjZlS1lRN2tOdndHRUhTZGomX25jX2dpZD1RczhleG1aSWZnVUpSQnJCcWUzTmt3JmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlZfcWxFYnpQamJWQTVrS1ozcUlKZVNzMG5oc2JyOVppd1FXMHZzb3JSZEJBJm9lPTY4QTA3NkU4Jl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0NjQyLCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MTA0Mn0.f6bapASyMOmHLKUz4-xo6SKLLzCxLkgNJYuKDZZYQEE",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 2,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNTMwMzY1OTc1XzE3OTMwMTgyMzc3MDg1MzE2XzE3OTAzMjY3MDM4MjIyNTEyOTlfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNTMwMzY1OTc1XzE3OTMwMTgyMzc3MDg1MzE2XzE3OTAzMjY3MDM4MjIyNTEyOTlfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUdFZ3Jad2thLU5iUVRyWE5NZGdnVzFrYlkyT0lXLXpCZm9KaGp3eUZlYld5S05LWnRISHRKS1JSWmt5dWdid25SazRHdF9jM0pQYnZETjlEZzJreWR3Jl9uY19vaGM9N2lWSndEQVpBbndRN2tOdndHRU5QaVgmX25jX2dpZD1RczhleG1aSWZnVUpSQnJCcWUzTmt3JmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlVmQ3JnR1hpYU9mb0M5c3c1OXpFMldMMnAtcVd1YlVtbWdRNF9pdVNETi1nJm9lPTY4QTA1NUIxJl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0NjQyLCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MTA0Mn0.9_C3_7hTLVSJbhgpQDwoUwmgIClvqkoH28jrOpzUgjg",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 2,
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
                        {
                            sku: "GAB005-M",
                            size: "M",
                            color: "Beige y mezclilla",
                            priceAdjustment: 0,
                            stockQuantity: 40,
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
                price: 0.00,
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
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNTIyNTk4MzQ1XzE3OTI3NjkyODg0MDg1MzE2XzIyMjgyMDExMjg3MTc4MjM4NDZfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNTIyNTk4MzQ1XzE3OTI3NjkyODg0MDg1MzE2XzIyMjgyMDExMjg3MTc4MjM4NDZfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUVDSmI2ckdhbEo1RkdSRnJ1dXc1T2lCVG03UWxxY1N4ZTZKRFJ3QXRmQVAwVGtoLWNKYnh1a2hRMHZsTlVLa1pKZURZZFMwWjhtVDc2bU0tX3JJS3ZLJl9uY19vaGM9QmtPMnVYc1dLOThRN2tOdndINVpoSTkmX25jX2dpZD0wSm0yQzJrTGJ5Xy1sUnFyamtGeEtBJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlVRc29kd3FEWU5iX1hHSVF1TTNBWm5FRWJsQXJsSlhYdlFMX0Y4MThZOVhBJm9lPTY4QTA2NkVBJl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0NzEzLCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MTExM30.Psp_LCnSFD5FPb1fnKh6gkHqHoRCgFj1GWJAln20dPo",
                            altText: "",
                            isPrimary: true,
                            sortOrder: 1,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNTIwOTQ4NTc4XzE3OTI3NjkyODkzMDg1MzE2XzIwNDY0ODIxNzMzNDUzNzg2NDRfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNTIwOTQ4NTc4XzE3OTI3NjkyODkzMDg1MzE2XzIwNDY0ODIxNzMzNDUzNzg2NDRfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUVDSmI2ckdhbEo1RkdSRnJ1dXc1T2lCVG03UWxxY1N4ZTZKRFJ3QXRmQVAwVGtoLWNKYnh1a2hRMHZsTlVLa1pKZURZZFMwWjhtVDc2bU0tX3JJS3ZLJl9uY19vaGM9eW9pandHQjBBczhRN2tOdndGZ1JqdU0mX25jX2dpZD0wSm0yQzJrTGJ5Xy1sUnFyamtGeEtBJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlVrWEZCVDlwSXJhSzg4S3E4d0U4bEhqX19ZeFY3ZldnQ3ktZkx4cThzV1JBJm9lPTY4QTA2RDg1Jl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0NzEzLCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MTExM30.8tla5M9PsP8qxLEWF867DC9RJpqOa5NLuORXSn5wN2A",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 2,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNTIyMzExOTg2XzE3OTI3NjkyOTAyMDg1MzE2XzUyMTQxOTE4NjEyNDEwMDczMF9uLmpwZyIsInVybCI6Imh0dHBzOi8vc2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjg4NS0xNS81MjIzMTE5ODZfMTc5Mjc2OTI5MDIwODUzMTZfNTIxNDE5MTg2MTI0MTAwNzMwX24uanBnP3N0cD1kc3QtanBnX2UzNV9wMTA4MHgxMDgwX3NoMC4wOF90dDYmX25jX2h0PXNjb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tJl9uY19jYXQ9MTA4Jl9uY19vYz1RNmNaMlFFQ0piNnJHYWxKNUZHUkZydXV3NU9pQlRtN1FscWNTeGU2SkRSd0F0ZkFQMFRraC1jSmJ4dWtoUTB2bE5VS2taSmVEWWRTMFo4bVQ3Nm1NLV9ySUt2SyZfbmNfb2hjPVZkLXA3czczbWhZUTdrTnZ3SHRzbnJmJl9uY19naWQ9MEptMkMya0xieV8tbFJxcmprRnhLQSZlZG09QU5US0lJb0JBQUFBJmNjYj03LTUmb2g9MDBfQWZYMkhnaXEtMEVhWS01a2hoc1hIRGhfZGdBVUFYcGdWSDJjdWx3SFYyenVsQSZvZT02OEEwNTJCNiZfbmNfc2lkPWQ4ODVhMiIsImV4cCI6MTc1NDk2NDcxMywiZm9yY2UiOmZhbHNlLCJpYXQiOjE3NTQ5NjExMTN9.E3pDCnrAKbrzTe5cJrOOpb_GQ36ei7NZg20anPxR4eI",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 2,
                        },
                        {
                            imageUrl: "https://cdn.downloadgram.org/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlbmFtZSI6ImRvd25sb2FkZ3JhbS5vcmdfNTIyMjkyNjgzXzE3OTI3NjkyOTExMDg1MzE2XzM3NTk0OTIxNTgyOTg4ODA4NTdfbi5qcGciLCJ1cmwiOiJodHRwczovL3Njb250ZW50LWlhZDMtMS5jZG5pbnN0YWdyYW0uY29tL3YvdDUxLjI4ODUtMTUvNTIyMjkyNjgzXzE3OTI3NjkyOTExMDg1MzE2XzM3NTk0OTIxNTgyOTg4ODA4NTdfbi5qcGc_c3RwPWRzdC1qcGdfZTM1X3AxMDgweDEwODBfc2gwLjA4X3R0NiZfbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDgmX25jX29jPVE2Y1oyUUVDSmI2ckdhbEo1RkdSRnJ1dXc1T2lCVG03UWxxY1N4ZTZKRFJ3QXRmQVAwVGtoLWNKYnh1a2hRMHZsTlVLa1pKZURZZFMwWjhtVDc2bU0tX3JJS3ZLJl9uY19vaGM9T2dxaTRwaGI2N01RN2tOdndFY3N0S0YmX25jX2dpZD0wSm0yQzJrTGJ5Xy1sUnFyamtGeEtBJmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZlZwY1RTM251YkZ5Q19oVDhRMDJwMDdiSjcyS2hvZjdDX3pmU3d0cWQxalRnJm9lPTY4QTA3Mzc2Jl9uY19zaWQ9ZDg4NWEyIiwiZXhwIjoxNzU0OTY0NzEzLCJmb3JjZSI6ZmFsc2UsImlhdCI6MTc1NDk2MTExM30.QBIuvyBUWDLruFLRA60LN1CiqBIKk67nYQ-hadJMGuk",
                            altText: "",
                            isPrimary: false,
                            sortOrder: 2,
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
                        {
                            sku: "CHAM006-M",
                            size: "M",
                            color: "Azul y negro",
                            priceAdjustment: 0,
                            stockQuantity: 40,
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
