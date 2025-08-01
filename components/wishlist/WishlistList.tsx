"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trash2 } from "lucide-react"
import Image from "next/image"
import type { WishlistItem } from "@/types"
import { calculateDiscount } from "@/utils/helpers"

interface WishlistListProps {
  items: WishlistItem[]
  onRemoveItem: (itemId: number) => void
}

export const WishlistList = ({ items, onRemoveItem }: WishlistListProps) => {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="group flex items-center gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
        >
          <div className="relative w-20 h-20 flex-shrink-0">
            <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover rounded-md" />
            {!item.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-md">
                <Badge variant="secondary" className="text-xs">
                  Agotado
                </Badge>
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-base mb-1 truncate">{item.name}</h3>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-bold text-lg">€{item.price}</span>
              {item.originalPrice && <span className="text-sm text-gray-500 line-through">€{item.originalPrice}</span>}
              {item.originalPrice && (
                <Badge variant="destructive" className="text-xs">
                  -{calculateDiscount(item.originalPrice, item.price)}%
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={item.inStock ? "default" : "secondary"} className="text-xs">
                {item.inStock ? "En stock" : "Agotado"}
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <Button variant="outline" size="sm" disabled={!item.inStock} className="hidden sm:flex bg-transparent">
              {item.inStock ? "Añadir al carrito" : "No disponible"}
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-700 hover:bg-red-50"
              onClick={() => onRemoveItem(item.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="sm:hidden w-full mt-2">
            <Button className="w-full" size="sm" disabled={!item.inStock}>
              {item.inStock ? "Añadir al carrito" : "No disponible"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}