"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, CreditCard } from "lucide-react"
import Image from "next/image"
import type { Order } from "@/types/index"
import { getStatusColor, formatDate } from "@/utils/helpers"
import { OrderDetailsDialog } from "../orders/OrderDetailsDialog";

interface OrdersSectionProps {
  orders: Order[]
  selectedOrder: Order | null
  showOrderDetails: boolean
  onOpenOrderDetails: (order: Order) => void
  onCloseOrderDetails: () => void
}

export const OrdersSection = ({
  orders,
  selectedOrder,
  showOrderDetails,
  onOpenOrderDetails,
  onCloseOrderDetails,
}: OrdersSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Historial de Pedidos</CardTitle>
        <CardDescription>Revisa todos tus pedidos y su estado actual</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="border rounded-lg p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold">Pedido {order.id}</h3>
                    <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(order.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <CreditCard className="h-4 w-4" />€{order.total}
                    </span>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => onOpenOrderDetails(order)}>
                  Ver detalles
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-md object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{item.name}</p>
                      <p className="text-xs text-gray-600">
                        Talla: {item.size} | Color: {item.color}
                      </p>
                      <p className="text-sm font-semibold">€{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      <OrderDetailsDialog order={selectedOrder} isOpen={showOrderDetails} onClose={onCloseOrderDetails} />
    </Card>
  )
}
