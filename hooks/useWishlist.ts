"use client"

import { useState } from "react"
import type { WishlistItem, WishlistView } from "@/types/index"

export const useWishlist = (initialItems: WishlistItem[]) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(initialItems)
  const [wishlistView, setWishlistView] = useState<WishlistView>("grid")
  const [showClearDialog, setShowClearDialog] = useState(false)

  const clearWishlist = () => {
    setWishlistItems([])
    setShowClearDialog(false)
  }

  const removeFromWishlist = (itemId: number) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== itemId))
  }

  return {
    wishlistItems,
    wishlistView,
    setWishlistView,
    showClearDialog,
    setShowClearDialog,
    clearWishlist,
    removeFromWishlist,
  }
}
