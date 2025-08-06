import CollectionsPage from "./CollectionsPage";

type Collection = {
    id: number
    name: string
    description: string
    image: string
    productCount: number
    featured?: boolean
}

type Product = {
    id: number
    name: string
    price: number
    originalPrice?: number
    category: string
    rating: number
    reviews: number
    images: string[]
    description: string
    sizes: string[]
    colors: string[]
    isNew?: boolean
    isSale?: boolean
}

const collections: Collection[] = [
    {
        id: 1,
        name: "Elegancia Urbana",
        description: "Sofisticación para el día a día en la ciudad",
        image: "/placeholder.svg?height=400&width=600",
        productCount: 24,
        featured: true,
    },
    {
        id: 2,
        name: "Oficina Chic",
        description: "Looks profesionales con un toque moderno",
        image: "/placeholder.svg?height=400&width=600",
        productCount: 18,
    },
    {
        id: 3,
        name: "Noche Glamour",
        description: "Prendas especiales para ocasiones únicas",
        image: "/placeholder.svg?height=400&width=600",
        productCount: 15,
    },
    {
        id: 4,
        name: "Casual Weekend",
        description: "Comodidad y estilo para tus días libres",
        image: "/placeholder.svg?height=400&width=600",
        productCount: 32,
    },
]

const collectionProducts: Record<number, Product[]> = {
    1: [
        {
            id: 1,
            name: "Vestido Elegante Negro",
            price: 89.99,
            originalPrice: 120.0,
            category: "Vestidos",
            rating: 4.8,
            reviews: 124,
            images: [
                "/placeholder.svg?height=400&width=300",
                "/placeholder.svg?height=400&width=300",
                "/placeholder.svg?height=400&width=300",
                "/placeholder.svg?height=400&width=300",
            ],
            description:
                "Vestido elegante perfecto para ocasiones especiales. Confeccionado en tela de alta calidad con un corte favorecedor que realza la silueta.",
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: ["Negro", "Azul Marino", "Burdeos"],
            isNew: true,
            isSale: true,
        },
        {
            id: 2,
            name: "Blazer Moderno Beige",
            price: 125.0,
            category: "Blazers",
            rating: 4.9,
            reviews: 89,
            images: [
                "/placeholder.svg?height=400&width=300",
                "/placeholder.svg?height=400&width=300",
                "/placeholder.svg?height=400&width=300",
            ],
            description:
                "Blazer contemporáneo que combina elegancia y comodidad. Ideal para looks profesionales y casuales sofisticados.",
            sizes: ["S", "M", "L", "XL"],
            colors: ["Beige", "Negro", "Blanco"],
            isNew: true,
        },
        {
            id: 3,
            name: "Pantalón Wide Leg",
            price: 75.0,
            category: "Pantalones",
            rating: 4.7,
            reviews: 156,
            images: [
                "/placeholder.svg?height=400&width=300",
                "/placeholder.svg?height=400&width=300",
                "/placeholder.svg?height=400&width=300",
                "/placeholder.svg?height=400&width=300",
            ],
            description:
                "Pantalón de pierna ancha que sigue las últimas tendencias. Cómodo y versátil para cualquier ocasión.",
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            colors: ["Negro", "Camel", "Blanco"],
            isSale: true,
            originalPrice: 95.0,
        },
        {
            id: 4,
            name: "Blusa Seda Premium",
            price: 95.0,
            category: "Blusas",
            rating: 5.0,
            reviews: 67,
            images: [
                "/placeholder.svg?height=400&width=300",
                "/placeholder.svg?height=400&width=300",
                "/placeholder.svg?height=400&width=300",
            ],
            description: "Blusa de seda natural con acabados de lujo. Perfecta para combinar con cualquier outfit elegante.",
            sizes: ["S", "M", "L"],
            colors: ["Blanco", "Rosa Palo", "Azul Cielo"],
            isNew: true,
        },
    ],
    2: [
        {
            id: 2,
            name: "Blazer Moderno Beige",
            price: 125.0,
            category: "Blazers",
            rating: 4.9,
            reviews: 89,
            images: [
                "/placeholder.svg?height=400&width=300",
                "/placeholder.svg?height=400&width=300",
                "/placeholder.svg?height=400&width=300",
            ],
            description:
                "Blazer contemporáneo que combina elegancia y comodidad. Ideal para looks profesionales y casuales sofisticados.",
            sizes: ["S", "M", "L", "XL"],
            colors: ["Beige", "Negro", "Blanco"],
            isNew: true,
        },
        {
            id: 7,
            name: "Camisa Oversize Blanca",
            price: 55.0,
            category: "Camisas",
            rating: 4.5,
            reviews: 98,
            images: [
                "/placeholder.svg?height=400&width=300",
                "/placeholder.svg?height=400&width=300",
                "/placeholder.svg?height=400&width=300",
            ],
            description: "Camisa oversize de algodón premium. Un básico versátil que no puede faltar en tu armario.",
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: ["Blanco", "Azul Claro", "Rosa"],
            isNew: true,
        },
        {
            id: 3,
            name: "Pantalón Wide Leg",
            price: 75.0,
            category: "Pantalones",
            rating: 4.7,
            reviews: 156,
            images: [
                "/placeholder.svg?height=400&width=300",
                "/placeholder.svg?height=400&width=300",
                "/placeholder.svg?height=400&width=300",
                "/placeholder.svg?height=400&width=300",
            ],
            description:
                "Pantalón de pierna ancha que sigue las últimas tendencias. Cómodo y versátil para cualquier ocasión.",
            sizes: ["XS", "S", "M", "L", "XL", "XXL"],
            colors: ["Negro", "Camel", "Blanco"],
            isSale: true,
            originalPrice: 95.0,
        },
    ],
}

export default async function Collections() {
    return <CollectionsPage collections={collections} collectionProducts={collectionProducts} />
}
