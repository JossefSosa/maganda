"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Shield, Eye, EyeOff } from "lucide-react"

interface ProfileSectionProps {
  userData: {
    id: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    phone: string
    dateOfBirth: string
    gender: string
    isVip: boolean
    emailVerified: boolean
    newsletterSubscribed: boolean
    createdAt: string
    updatedAt: string
    addresses: any[]
    favorites: any[]
  }
}

export const SettingsSection = ({ userData }: ProfileSectionProps) => {
  console.log('userData -->:', userData);
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Configuración de Cuenta</CardTitle>
            <CardDescription>Gestiona tu cuenta y preferencias de seguridad</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Contraseña actual</Label>
                <div className="relative">
                  <Input
                    id="current-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Ingresa tu contraseña actual"
                    disabled
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">Nueva contraseña</Label>
                <Input id="new-password" type="password" placeholder="Ingresa tu nueva contraseña" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar contraseña</Label>
                <Input id="confirm-password" type="password" placeholder="Confirma tu nueva contraseña" />
              </div>
              <Button>Cambiar contraseña</Button>
            </div>

            <Separator />

            <div className="space-y-4">
              <h4 className="font-medium flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Seguridad
              </h4>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Autenticación de dos factores</p>
                  <p className="text-xs text-gray-600">Añade una capa extra de seguridad</p>
                </div>
                <Switch />
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                Ver dispositivos conectados
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        {/* <Card>
          <CardHeader>
            <CardTitle>Notificaciones</CardTitle>
            <CardDescription>Controla cómo y cuándo recibes notificaciones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-medium flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Preferencias de Email
              </h4>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Confirmaciones de pedido</p>
                    <p className="text-xs text-gray-600">Recibe confirmaciones cuando hagas un pedido</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Actualizaciones de envío</p>
                    <p className="text-xs text-gray-600">Notificaciones sobre el estado de tus envíos</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Ofertas y promociones</p>
                    <p className="text-xs text-gray-600">Recibe ofertas especiales y descuentos</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Nuevos productos</p>
                    <p className="text-xs text-gray-600">Notificaciones sobre nuevas llegadas</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Recordatorios de carrito</p>
                    <p className="text-xs text-gray-600">Te recordamos productos en tu carrito</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h4 className="font-medium">Privacidad</h4>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Perfil público</p>
                  <p className="text-xs text-gray-600">Permite que otros vean tu perfil</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Análisis de datos</p>
                  <p className="text-xs text-gray-600">Ayúdanos a mejorar con datos anónimos</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <Button>Guardar preferencias</Button>
          </CardContent>
        </Card> */}
      </div>

      {/* Danger Zone */}
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="text-red-600">Zona de Peligro</CardTitle>
          <CardDescription>Acciones irreversibles para tu cuenta</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-red-200 rounded-lg">
            <div>
              <h4 className="font-medium text-red-600">Eliminar cuenta</h4>
              <p className="text-sm text-gray-600">Esta acción no se puede deshacer</p>
            </div>
            <Button variant="destructive">Eliminar cuenta</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}