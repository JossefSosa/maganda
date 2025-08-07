export interface User {
  name: string
  email: string
  phone: string
  avatar: string
  memberSince: string
}

export interface OrderItem {
  name: string
  size: string
  color: string
  price: number
  image: string
}

export interface Order {
  id: string
  date: string
  status: string
  total: number
  items: OrderItem[]
}

export interface WishlistItem {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  inStock: boolean
}

export interface Address {
  id: number
  type: string
  name: string
  street: string
  city: string
  postalCode: string
  country: string
  phone: string
  isDefault: boolean
}

export interface NewAddress {
  type: string
  name: string
  street: string
  city: string
  postalCode: string
  country: string
  phone: string
  isDefault: boolean
}

export type WishlistView = "grid" | "list"
export type TabValue = "dashboard" | "profile" | "orders" | "wishlist" | "addresses" | "settings"
