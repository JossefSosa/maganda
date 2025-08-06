"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, Package, Heart, MapPin, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import type { User as UserType, TabValue } from "@/types"

interface SidebarProps {
  userData: UserType
  activeTab: TabValue
  onTabChange: (tab: TabValue) => void
}

const menuItems = [
  { id: "profile" as TabValue, label: "Mi Perfil", icon: User },
  { id: "orders" as TabValue, label: "Mis Pedidos", icon: Package },
  { id: "wishlist" as TabValue, label: "Lista de Deseos", icon: Heart },
  { id: "addresses" as TabValue, label: "Direcciones", icon: MapPin },
  { id: "settings" as TabValue, label: "Configuración", icon: Settings },
]

export const Sidebar = ({ userData, activeTab, onTabChange }: SidebarProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src={userData.avatar || "/placeholder.svg?height=80&width=80"} alt={userData.name} />
            <AvatarFallback>MG</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold">{userData.name}</h2>
            <p className="text-gray-600">{userData.email}</p>
          </div>
          <Badge variant="secondary">Cliente VIP</Badge>
        </div>

        <nav className="mt-8 space-y-2">
          {/* Dashboard Button - Always visible */}
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start",
              activeTab === "dashboard" ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50",
            )}
            onClick={() => onTabChange("dashboard")}
          >
            <Package className="h-4 w-4 mr-3" />
            Dashboard
          </Button>

          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  activeTab === item.id ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50",
                )}
                onClick={() => onTabChange(item.id)}
              >
                <Icon className="h-4 w-4 mr-3" />
                {item.label}
              </Button>
            )
          })}
        </nav>
      </CardContent>
    </Card>
  )
}
