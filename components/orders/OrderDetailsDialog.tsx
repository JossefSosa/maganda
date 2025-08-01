"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import type { Order } from "@/types/index"
import { getStatusColor, formatDateLong } from "@/utils/helpers"

interface OrderDetailsDialogProps {
  order: Order | null
  isOpen: boolean
  onClose: () => void
}

export const OrderDetailsDialog = ({ order, isOpen, onClose }: OrderDetailsDialogProps) => {
  if (!order) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            Detalles del Pedido {order.id}
            <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
          </DialogTitle>
          <DialogDescription>Información completa sobre tu pedido y estado de envío</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Order Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-600">Fecha del pedido</p>
              <p className="font-semibold">{formatDateLong(order.date)}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-600">Total</p>
              <p className="font-semibold text-lg">${order.total}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-600">Método de pago</p>
              <p className="font-semibold">Tarjeta •••• 4242</p>
            </div>
          </div>

          {/* Order Timeline */}
          <div className="space-y-4">
            <h4 className="font-semibold">Estado del pedido</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium">Pedido confirmado</p>
                  <p className="text-sm text-gray-600">{new Date(order.date).toLocaleDateString("es-ES")}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full ${order.status === "Entregado" || order.status === "En tránsito" ? "bg-green-500" : "bg-gray-300"}`}
                ></div>
                <div className="flex-1">
                  <p className="font-medium">En preparación</p>
                  <p className="text-sm text-gray-600">
                    {order.status === "Entregado" || order.status === "En tránsito"
                      ? new Date(Date.parse(order.date) + 86400000).toLocaleDateString("es-ES")
                      : "Pendiente"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full ${order.status === "Entregado" || order.status === "En tránsito" ? "bg-green-500" : "bg-gray-300"}`}
                ></div>
                <div className="flex-1">
                  <p className="font-medium">Enviado</p>
                  <p className="text-sm text-gray-600">
                    {order.status === "Entregado" || order.status === "En tránsito"
                      ? new Date(Date.parse(order.date) + 172800000).toLocaleDateString("es-ES")
                      : "Pendiente"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full ${order.status === "Entregado" ? "bg-green-500" : "bg-gray-300"}`}
                ></div>
                <div className="flex-1">
                  <p className="font-medium">Entregado</p>
                  <p className="text-sm text-gray-600">
                    {order.status === "Entregado"
                      ? new Date(Date.parse(order.date) + 259200000).toLocaleDateString("es-ES")
                      : "Pendiente"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold">Productos ({order.items.length})</h4>
            <div className="space-y-3">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                  <div className="flex-1 space-y-1">
                    <h5 className="font-medium">{item.name}</h5>
                    <p className="text-sm text-gray-600">
                      Talla: {item.size} | Color: {item.color}
                    </p>
                    <p className="text-sm text-gray-600">Cantidad: 1</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">€{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Information */}
          <div className="space-y-4">
            <h4 className="font-semibold">Información de envío</h4>
            <div className="p-4 border rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Dirección de envío:</span>
                <span className="font-medium">Calle Mayor 123, 2º A</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Ciudad:</span>
                <span className="font-medium">Madrid, 28001</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Método de envío:</span>
                <span className="font-medium">Envío estándar (3-5 días)</span>
              </div>
              {(order.status === "En tránsito" || order.status === "Entregado") && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Número de seguimiento:</span>
                  <span className="font-medium text-blue-600">ES1234567890</span>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resumen del pedido</h4>
            <div className="p-4 border rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span>€{(order.total * 0.9).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Envío:</span>
                <span>€{(order.total * 0.1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">IVA (21%):</span>
                <span>€{(order.total * 0.21).toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span>€{order.total}</span>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="flex gap-2">
          {order.status === "En tránsito" && <Button variant="outline">Rastrear pedido</Button>}
          {order.status === "Entregado" && <Button variant="outline">Descargar factura</Button>}
          <Button variant="outline" onClick={onClose}>
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
