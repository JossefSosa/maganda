import type { User, Order, WishlistItem, Address } from "@/types"

export const userData: User = {
  name: "María García",
  email: "maria.garcia@email.com",
  phone: "+34 612 345 678",
  avatar: "/placeholder.svg?height=100&width=100&text=MG",
  memberSince: "Enero 2023",
}

export const orders: Order[] = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    status: "Entregado",
    total: 89.99,
    items: [
      {
        name: "Vestido Floral",
        size: "M",
        color: "Azul",
        price: 45.99,
        image: "/placeholder.svg?height=80&width=80&text=Vestido",
      },
      {
        name: "Zapatos de Tacón",
        size: "38",
        color: "Negro",
        price: 44.0,
        image: "/placeholder.svg?height=80&width=80&text=Zapatos",
      },
    ],
  },
  {
    id: "ORD-002",
    date: "2024-01-10",
    status: "En tránsito",
    total: 125,
    items: [
      {
        name: "Chaqueta de Cuero",
        size: "S",
        color: "Marrón",
        price: 125,
        image: "/placeholder.svg?height=80&width=80&text=Chaqueta",
      },
    ],
  },
  {
    id: "ORD-003",
    date: "2024-01-05",
    status: "Procesando",
    total: 75,
    items: [
      {
        name: "Blusa Elegante",
        size: "M",
        color: "Blanco",
        price: 35,
        image: "/placeholder.svg?height=80&width=80&text=Blusa",
      },
      {
        name: "Pantalón Casual",
        size: "M",
        color: "Negro",
        price: 40,
        image: "/placeholder.svg?height=80&width=80&text=Pantalon",
      },
    ],
  },
]

export const wishlistData: WishlistItem[] = [
  {
    id: 1,
    name: "Bolso de Mano Premium",
    price: 159.99,
    originalPrice: 199.99,
    image: "/placeholder.svg?height=200&width=200&text=Bolso",
    inStock: true,
  },
  {
    id: 2,
    name: "Abrigo de Lana",
    price: 89.99,
    originalPrice: NaN,
    image: "/placeholder.svg?height=200&width=200&text=Abrigo",
    inStock: false,
  },
  {
    id: 3,
    name: "Botas de Cuero",
    price: 129.99,
    originalPrice: 149.99,
    image: "/placeholder.svg?height=200&width=200&text=Botas",
    inStock: true,
  },
  {
    id: 4,
    name: "Collar de Perlas",
    price: 79.99,
    originalPrice: NaN,
    image: "/placeholder.svg?height=200&width=200&text=Collar",
    inStock: true,
  },
]

export const addressesData: Address[] = [
  {
    id: 1,
    type: "Casa",
    name: "María García",
    street: "Calle Mayor 123, 2º A",
    city: "Madrid",
    postalCode: "28001",
    country: "España",
    phone: "+34 612 345 678",
    isDefault: true,
  },
  {
    id: 2,
    type: "Trabajo",
    name: "María García",
    street: "Avenida de la Castellana 456",
    city: "Madrid",
    postalCode: "28046",
    country: "España",
    phone: "+34 612 345 678",
    isDefault: false,
  },
]
