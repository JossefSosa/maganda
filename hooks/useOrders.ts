"use client"

import { useState } from "react"
import type { Order } from "@/types/index"

export const useOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [showOrderDetails, setShowOrderDetails] = useState(false)

  const openOrderDetails = (order: Order) => {
    setSelectedOrder(order)
    setShowOrderDetails(true)
  }

  const closeOrderDetails = () => {
    setShowOrderDetails(false)
    setSelectedOrder(null)
  }

  return {
    selectedOrder,
    showOrderDetails,
    openOrderDetails,
    closeOrderDetails,
  }
}
