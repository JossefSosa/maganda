"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Menu,
  Search,
  User,
  X,
  ChevronDown,
  Heart,
  MessageCircle,
  LogOut,
  Settings,
  Package,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


interface NavigationProps {
  onNavigateToProfile?: (section?: string) => void
  isLoggedIn?: boolean
  userData?: {
    firstName: string
    email: string
    avatar?: string
  }
}

export default function Navigation({
  onNavigateToProfile,
  isLoggedIn = true,
  userData = { firstName: "María", email: "maria.garcia@email.com" },
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const router = useRouter()
  // const pathname = usePathname()

  const handleProfileNavigation = (section?: string) => {
    if (onNavigateToProfile) {
      // Si estamos en la página de perfil, usar la función callback
      onNavigateToProfile(section)
    } else {
      // Si estamos en otra página, navegar a la página de perfil
      if (section) {
        router.push(`/profile?section=${section}`)
      } else {
        router.push("/profile")
      }
    }
  }

  const handleLogout = () => {
    // Aquí implementarías la lógica de logout
    console.log("Cerrando sesión...")
    // Ejemplo: signOut(), clearTokens(), etc.
    router.push("/login")
  }

  // const isProfilePage = pathname === "/profile"

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top Bar - Solo desktop */}
      <div className="hidden md:block bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6 text-gray-600"></div>
            <div className="flex items-center space-x-4 text-gray-600">
              <Link href="/help" className="hover:text-gray-900">
                Ayuda
              </Link>
              <Link href="/size_guide" className="hover:text-gray-900">
                Guía de Tallas
              </Link>
              <Link href="/stores" className="hover:text-gray-900">
                Tiendas
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Logo - Centrado en móvil, izquierda en desktop */}
          <Link href="/" className="text-2xl font-bold text-gray-900 md:mr-12">
            MAGANDA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Inicio
            </Link>
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Productos
                <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/products">Todos los Productos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=Vestidos">Vestidos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=Blazers">Blazers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=Pantalones">Pantalones</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=Blusas">Blusas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=Abrigos">Abrigos</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/collections" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Colecciones
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Contacto
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-sm mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Buscar productos y colecciones..."
                className="pl-10 pr-4 py-2 w-full border-gray-200 focus:border-gray-400"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-2">
            {/* Search Icon - Mobile/Tablet */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-5 w-5" />
            </Button>

            {/* User Account */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={userData.avatar || "/placeholder.svg?height=32&width=32"} alt={userData.firstName} />
                      <AvatarFallback>
                        {userData.firstName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{userData.firstName}</p>
                      <p className="w-[200px] truncate text-sm text-muted-foreground">{userData.email}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleProfileNavigation()}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Mi Perfil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleProfileNavigation("orders")}>
                    <Package className="mr-2 h-4 w-4" />
                    <span>Mis Pedidos</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleProfileNavigation("wishlist")}>
                    <Heart className="mr-2 h-4 w-4" />
                    <span>Lista de Deseos</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleProfileNavigation("addresses")}>
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>Direcciones</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleProfileNavigation("settings")}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configuración</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Cerrar Sesión</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            )}

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              className="relative hidden sm:flex"
              onClick={() => handleProfileNavigation("wishlist")}
            >
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                2
              </span>
            </Button>

            {/* Contact */}
            <Button variant="ghost" size="icon" className="relative" title="Contacto rápido">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden border-t bg-white py-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Buscar productos y colecciones..."
                className="pl-10 pr-4 py-2 w-full"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>

              {/* Mobile Products Menu */}
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2">Productos</div>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/products"
                    className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Todos los Productos
                  </Link>
                  <Link
                    href="/products?category=Vestidos"
                    className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Vestidos
                  </Link>
                  <Link
                    href="/products?category=Blazers"
                    className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blazers
                  </Link>
                  <Link
                    href="/products?category=Pantalones"
                    className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pantalones
                  </Link>
                </div>
              </div>

              <Link
                href="/collections"
                className="block px-3 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Colecciones
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>

              {/* Mobile User Menu */}
              {isLoggedIn && (
                <div className="border-t pt-3 mt-3">
                  <div className="px-3 py-2 text-gray-700 font-medium">Mi Cuenta</div>
                  <div className="pl-6 space-y-1">
                    <button
                      onClick={() => {
                        handleProfileNavigation()
                        setIsMenuOpen(false)
                      }}
                      className="block py-2 text-gray-600 hover:text-gray-900 transition-colors w-full text-left"
                    >
                      Mi Perfil
                    </button>
                    <button
                      onClick={() => {
                        handleProfileNavigation("orders")
                        setIsMenuOpen(false)
                      }}
                      className="block py-2 text-gray-600 hover:text-gray-900 transition-colors w-full text-left"
                    >
                      Mis Pedidos
                    </button>
                    <button
                      onClick={() => {
                        handleProfileNavigation("wishlist")
                        setIsMenuOpen(false)
                      }}
                      className="block py-2 text-gray-600 hover:text-gray-900 transition-colors w-full text-left"
                    >
                      Lista de Deseos
                    </button>
                    <button
                      onClick={() => {
                        handleProfileNavigation("addresses")
                        setIsMenuOpen(false)
                      }}
                      className="block py-2 text-gray-600 hover:text-gray-900 transition-colors w-full text-left"
                    >
                      Direcciones
                    </button>
                    <button
                      onClick={() => {
                        handleProfileNavigation("settings")
                        setIsMenuOpen(false)
                      }}
                      className="block py-2 text-gray-600 hover:text-gray-900 transition-colors w-full text-left"
                    >
                      Configuración
                    </button>
                    <button
                      onClick={() => {
                        handleLogout()
                        setIsMenuOpen(false)
                      }}
                      className="block py-2 text-red-600 hover:text-red-700 transition-colors w-full text-left"
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
