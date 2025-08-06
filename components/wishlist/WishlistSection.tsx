"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Grid3X3, List, Trash2, Heart } from "lucide-react"
import type { WishlistItem, WishlistView } from "@/types"
import { WishlistGrid } from "./WishlistGrid"
import { WishlistList } from "./WishlistList"
import { ClearWishlistDialog } from "./ClearWishlistDialog"

interface WishlistSectionProps {
  wishlistItems: WishlistItem[]
  wishlistView: WishlistView
  showClearDialog: boolean
  onSetWishlistView: (view: WishlistView) => void
  onSetShowClearDialog: (show: boolean) => void
  onClearWishlist: () => void
  onRemoveFromWishlist: (itemId: number) => void
}

export const WishlistSection = ({
  wishlistItems,
  wishlistView,
  showClearDialog,
  onSetWishlistView,
  onSetShowClearDialog,
  onClearWishlist,
  onRemoveFromWishlist,
}: WishlistSectionProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            Lista de Deseos
            <Badge variant="secondary" className="text-xs">
              {wishlistItems.length} {wishlistItems.length === 1 ? "producto" : "productos"}
            </Badge>
          </CardTitle>
          <CardDescription>Guarda tus productos favoritos para comprar más tarde</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          {wishlistItems.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              className="text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
              onClick={() => onSetShowClearDialog(true)}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Limpiar lista
            </Button>
          )}
          <div className="flex items-center border rounded-lg p-1">
            <Button
              variant={wishlistView === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => onSetWishlistView("grid")}
              className="h-8 w-8 p-0"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={wishlistView === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => onSetWishlistView("list")}
              className="h-8 w-8 p-0"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {wishlistItems.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Tu lista de deseos está vacía</h3>
            <p className="text-gray-600 mb-6">Explora nuestros productos y añade tus favoritos aquí</p>
            <Button>Explorar productos</Button>
          </div>
        ) : wishlistView === "grid" ? (
          <WishlistGrid items={wishlistItems} onRemoveItem={onRemoveFromWishlist} />
        ) : (
          <WishlistList items={wishlistItems} onRemoveItem={onRemoveFromWishlist} />
        )}
      </CardContent>

      <ClearWishlistDialog isOpen={showClearDialog} onOpenChange={onSetShowClearDialog} onConfirm={onClearWishlist} />
    </Card>
  )
}