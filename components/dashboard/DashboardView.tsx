"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { User, Order } from "@/types/index"
import { getStatusColor, formatDate } from "@/utils/helpers"

interface DashboardViewProps {
  userData: User
  orders: Order[]
  onViewAllOrders: () => void
  onViewOrderDetails: (order: Order) => void
}

export const DashboardView = ({ userData, orders, onViewAllOrders, onViewOrderDetails }: DashboardViewProps) => {
  // Calcular estadísticas
  const totalOrders = orders.length
  const totalSpent = orders.reduce((sum, order) => sum + order.total, 0)
  const favoriteProducts = 8 // Este valor podría venir de la wishlist

  // Obtener los 3 pedidos más recientes
  const recentOrders = orders.slice(0, 3)

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <Card>
        <CardHeader>
          <CardTitle>¡Bienvenida de vuelta, {userData.name.split(" ")[0]}!</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">{totalOrders}</div>
              <div className="text-sm text-gray-600">Pedidos Totales</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">${totalSpent.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Gastado</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">{favoriteProducts}</div>
              <div className="text-sm text-gray-600">Productos Favoritos</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Pedidos Recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => onViewOrderDetails(order)}
              >
                <div className="flex items-center space-x-4">
                  <div>
                    <div className="font-medium">{order.id}</div>
                    <div className="text-sm text-gray-600">{formatDate(order.date)}</div>
                  </div>
                  <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                </div>
                <div className="text-right">
                  <div className="font-medium">${order.total}</div>
                  <div className="text-sm text-gray-600">
                    {order.items.length} {order.items.length === 1 ? "artículo" : "artículos"}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4 bg-transparent" onClick={onViewAllOrders}>
            Ver Todos los Pedidos
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
