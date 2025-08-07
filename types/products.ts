export type Product = {
    id: string;
    name: string;
    slug: string;
    description?: string | null;
    shortDescription?: string | null;
    sku?: string | null;
    categoryId?: string | null;
    category?: {
        id: string;
        name: string;
        slug: string;
    } | null;
    price: number;
    originalPrice?: number | null;
    costPrice?: number | null;
    isNew: boolean;
    isSale: boolean;
    isFeatured: boolean;
    isActive: boolean;
    weight?: number | null;
    dimensions?: Record<string, any> | null;
    material?: string | null;
    careInstructions?: string | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
    createdAt: string;
    updatedAt: string;
    images: {
        id: string;
        imageUrl: string;
        altText?: string | null;
        sortOrder: number;
        isPrimary: boolean;
        createdAt: string;
    }[];
    variants: {
        id: string;
        sku?: string | null;
        size?: string | null;
        color?: string | null;
        priceAdjustment: number;
        stockQuantity: number;
        isActive: boolean;
        createdAt: string;
    }[];
    reviews: {
        id: string;
        userId: string;
        rating: number;
        title?: string | null;
        comment?: string | null;
        isVerifiedPurchase: boolean;
        isApproved: boolean;
        createdAt: string;
    }[];
}
