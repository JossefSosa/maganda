"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Order } from "@/types/index"
import { getStatusColor, formatDate } from "@/utils/helpers"

interface RecentOrdersProps {
  orders: Order[]
  onViewAllOrders: () => void
  onViewOrderDetails: (order: Order) => void
}

export const RecentOrders = ({ orders, onViewAllOrders, onViewOrderDetails }: RecentOrdersProps) => {
  const recentOrders = orders.slice(0, 3)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pedidos Recientes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentOrders.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            onClick={() => onViewOrderDetails(order)}
          >
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="font-semibold">{order.id}</span>
                <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
              </div>
              <div className="text-sm text-gray-600">{formatDate(order.date)}</div>
            </div>

            <div className="text-right">
              <div className="font-semibold">€{order.total}</div>
              <div className="text-sm text-gray-600">
                {order.items.length} {order.items.length === 1 ? "artículo" : "artículos"}
              </div>
            </div>
          </div>
        ))}

        <div className="pt-4 text-center">
          <Button variant="outline" onClick={onViewAllOrders} className="w-full bg-transparent">
            Ver Todos los Pedidos
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
