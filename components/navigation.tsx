"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { getProfileAction } from "@/serverActions/userActions"
import DesktopNavigation from "./navigation/DesktopNavigation"
// import { UserAccount } from "./navigation/UserAccount"
// import Wishlist from "./navigation/WishList"


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
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [userData, setUserData] = useState<NavigationProps["userData"] | null>(null)
  console.log('userData :', userData);
  const router = useRouter()

  useEffect(() => {
    const fetchUserData = async () => {
      getProfileAction("e0f79244-e1b9-48db-ad23-c1e9e926b9c5")
        .then((data) => {
          setUserData(data)
        })
        .catch((error) => {
          console.error("Error fetching user data:", error)
        })
    }
    fetchUserData();
  }, [])

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
    // Aquí implementarías la lógica de logout
    console.log("Cerrando sesión...")
    // Ejemplo: signOut(), clearTokens(), etc.
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
              <Link href="/sizeGuide" className="hover:text-gray-900">
                Guía de Tallas
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
          <DesktopNavigation />

          {/* Search Bar - Desktop */}
          {/* <DesktopSearchBar /> */}

          {/* Right Icons */}
          {/* <div className="flex items-center space-x-2"> */}
          {/* Search Icon - Mobile/Tablet */}
          {/* <MovileSearchBar setIsSearchOpen={setIsSearchOpen} isSearchOpen={isSearchOpen} /> */}

          {/* User Account */}
          {/* <UserAccount
              handleLogout={handleLogout}
              handleProfileNavigation={handleProfileNavigation}
              isLoggedIn={isLoggedIn}
              userData={userData}
            /> */}


          {/* Wishlist */}
          {/* <Wishlist handleProfileNavigation={handleProfileNavigation} /> */}



          {/* Contact */}
          {/* <Button variant="ghost" size="icon" className="relative" title="Contacto rápido">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div> */}
        </div>


        {/* Mobile Search Bar Open */}
        {/* <MovileSearchBarOpen isSearchOpen={isSearchOpen} /> */}


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
                    {/* <button
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
                    </button> */}
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
