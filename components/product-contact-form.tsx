"use client"

import type React from "react"

import { useState } from "react"
import { Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ProductContactFormProps {
  isOpen: boolean
  onClose: () => void
  productName: string
  productPrice: number
}

export default function ProductContactForm({ isOpen, onClose, productName, productPrice }: ProductContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Consulta de producto enviada:", {
      ...formData,
      product: productName,
      price: productPrice,
    })
    alert(`¡Gracias por tu interés en ${productName}! Te contactaremos pronto.`)
    setFormData({ name: "", email: "", phone: "", message: "" })
    onClose()
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Consultar Producto</DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900">{productName}</h3>
            <p className="text-lg font-bold text-gray-900">€{productPrice}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+34 600 000 000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Talla deseada, consultas sobre el producto, disponibilidad..."
                rows={4}
              />
            </div>

            <div className="text-xs text-gray-600">
              * Al enviar este formulario, aceptas que nos pongamos en contacto contigo para resolver tu consulta.
            </div>

            <Button type="submit" className="w-full bg-black hover:bg-gray-800">
              <Send className="h-4 w-4 mr-2" />
              Enviar Consulta
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
