"use client"

import { Card, CardContent } from "@/components/ui/card"

interface StatsCardsProps {
  totalOrders: number
  totalSpent: number
  favoriteProducts: number
}

export const StatsCards = ({ totalOrders, totalSpent, favoriteProducts }: StatsCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card>
        <CardContent className="p-6 text-center">
          <div className="text-3xl font-bold text-gray-900 mb-2">{totalOrders}</div>
          <div className="text-sm text-gray-600">Pedidos Totales</div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 text-center">
          <div className="text-3xl font-bold text-gray-900 mb-2">${totalSpent.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Total Gastado</div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 text-center">
          <div className="text-3xl font-bold text-gray-900 mb-2">{favoriteProducts}</div>
          <div className="text-sm text-gray-600">Productos Favoritos</div>
        </CardContent>
      </Card>
    </div>
  )
}
