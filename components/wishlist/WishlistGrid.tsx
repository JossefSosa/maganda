"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trash2 } from "lucide-react"
import Image from "next/image"
import type { WishlistItem } from "@/types"

interface WishlistGridProps {
  items: WishlistItem[]
  onRemoveItem: (itemId: number) => void
}

export const WishlistGrid = ({ items, onRemoveItem }: WishlistGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="aspect-square relative">
            <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => onRemoveItem(item.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            {!item.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Badge variant="secondary">Agotado</Badge>
              </div>
            )}
          </div>
          <div className="p-4 space-y-2">
            <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
            <div className="flex items-center gap-2">
              <span className="font-bold">${item.price}</span>
              {item.originalPrice && <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>}
            </div>
            <Button className="w-full" size="sm" disabled={!item.inStock}>
              {item.inStock ? "Añadir al carrito" : "No disponible"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}