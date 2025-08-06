"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    alert("¡Gracias por tu mensaje! Te responderemos en menos de 24 horas.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const handleChange = (field: any, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Hablemos</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte. Ya sea una pregunta sobre productos, una consulta de estilo o simplemente
            quieres saludar, nos encanta escuchar de ti.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chat en Vivo</h3>
              <p className="text-gray-600 mb-4">Respuesta inmediata de lunes a viernes</p>
              <Button className="bg-black hover:bg-gray-800">Iniciar Chat</Button>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Contacto directo y personal</p>
              <Button className="bg-green-600 hover:bg-green-700">
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Respuesta en menos de 24h</p>
              <Button variant="outline">info@stylish.com</Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-gray-900">Envíanos un Mensaje</CardTitle>
                <p className="text-gray-600 mt-2">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible
                </p>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Nombre Completo *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        placeholder="Tu nombre completo"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        placeholder="tu@email.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+34 600 000 000"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Asunto *
                      </Label>
                      <Select value={formData.subject} onValueChange={(value) => handleChange("subject", value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Selecciona un asunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">Consulta General</SelectItem>
                          <SelectItem value="order">Sobre mi Pedido</SelectItem>
                          <SelectItem value="return">Devoluciones y Cambios</SelectItem>
                          <SelectItem value="product">Información de Producto</SelectItem>
                          <SelectItem value="styling">Asesoramiento de Estilo</SelectItem>
                          <SelectItem value="collaboration">Colaboraciones</SelectItem>
                          <SelectItem value="press">Prensa y Medios</SelectItem>
                          <SelectItem value="complaint">Queja o Sugerencia</SelectItem>
                          <SelectItem value="other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Mensaje *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input type="checkbox" id="privacy" required className="mt-1 rounded border-gray-300" />
                    <Label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed">
                      Acepto la{" "}
                      <a href="/privacy" className="text-black underline hover:no-underline">
                        política de privacidad
                      </a>{" "}
                      y el tratamiento de mis datos personales. También acepto recibir comunicaciones comerciales de
                      STYLISH. *
                    </Label>
                  </div>

                  <Button type="submit" className="w-full bg-black hover:bg-gray-800 h-12 text-lg">
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600 text-sm mt-1">info@stylish.com</p>
                    <p className="text-gray-600 text-sm">soporte@stylish.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">Teléfono</h3>
                    <p className="text-gray-600 text-sm mt-1">+34 900 123 456</p>
                    <p className="text-gray-600 text-sm">WhatsApp: +34 600 123 456</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">Showroom Madrid</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Calle Serrano, 45
                      <br />
                      28001 Madrid, España
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Clock className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">Horario de Atención</h3>
                    <div className="text-gray-600 text-sm mt-1 space-y-1">
                      <p>Lunes - Viernes: 9:00 - 19:00</p>
                      <p>Sábados: 10:00 - 15:00</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Síguenos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <Button variant="outline" className="h-12 flex-col space-y-1">
                    <Instagram className="h-5 w-5" />
                    <span className="text-xs">Instagram</span>
                  </Button>
                  <Button variant="outline" className="h-12 flex-col space-y-1">
                    <Facebook className="h-5 w-5" />
                    <span className="text-xs">Facebook</span>
                  </Button>
                  <Button variant="outline" className="h-12 flex-col space-y-1">
                    <Twitter className="h-5 w-5" />
                    <span className="text-xs">Twitter</span>
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  @stylish_official - Comparte tu estilo con #MyStylishLook
                </p>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Preguntas Frecuentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="border-l-4 border-black pl-4">
                    <h4 className="font-medium text-sm">¿Cuánto tarda el envío?</h4>
                    <p className="text-xs text-gray-600 mt-1">2-3 días laborables en península</p>
                  </div>
                  <div className="border-l-4 border-gray-200 pl-4">
                    <h4 className="font-medium text-sm">¿Puedo devolver un producto?</h4>
                    <p className="text-xs text-gray-600 mt-1">30 días para devoluciones gratuitas</p>
                  </div>
                  <div className="border-l-4 border-gray-200 pl-4">
                    <h4 className="font-medium text-sm">¿Ofrecen asesoramiento de estilo?</h4>
                    <p className="text-xs text-gray-600 mt-1">Sí, servicio gratuito con cita previa</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full text-sm">
                  Ver todas las FAQ
                </Button>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="flex justify-center space-x-4">
                    <Badge variant="secondary" className="px-3 py-1">
                      ✓ Envío Seguro
                    </Badge>
                    <Badge variant="secondary" className="px-3 py-1">
                      ✓ Pago Seguro
                    </Badge>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <Badge variant="secondary" className="px-3 py-1">
                      ✓ 30 Días Devolución
                    </Badge>
                    <Badge variant="secondary" className="px-3 py-1">
                      ✓ Garantía Calidad
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="mt-16 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Visítanos en Madrid</CardTitle>
            <p className="text-gray-600">
              Ven a conocer nuestro showroom en el corazón de Madrid. Cita previa recomendada.
            </p>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="text-center space-y-4">
                <MapPin className="h-12 w-12 text-gray-600 mx-auto" />
                <div>
                  <p className="text-gray-600 font-medium">Calle Serrano, 45</p>
                  <p className="text-gray-600">28001 Madrid, España</p>
                </div>
                <Button className="bg-black hover:bg-gray-800">
                  <MapPin className="h-4 w-4 mr-2" />
                  Ver en Google Maps
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
