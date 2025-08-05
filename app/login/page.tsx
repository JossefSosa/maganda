"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Shirt, Eye, EyeOff, Sparkles } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Navigation from "@/components/navigation"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  
    return (
      <>
      <Navigation/>
<CardContent className="p-0">
      <div className="h-screen bg-neutral-50 flex overflow-hidden">
        {/* Left side - Fashion Hero */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Fashion pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-16 left-16">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="absolute top-32 right-24">
              <Shirt className="w-5 h-5 text-white" />
            </div>
            <div className="absolute bottom-32 left-24">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="absolute bottom-16 right-16">
              <Shirt className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="relative z-10 flex flex-col justify-center items-center text-white p-8">
            <div className="mb-6 relative">
              <div className="absolute -inset-3 bg-white/10 rounded-full blur-lg"></div>
              <Shirt className="w-12 h-12 text-neutral-100 relative z-10" />
            </div>
            <h1 className="text-3xl font-extralight mb-3 text-center tracking-wider">MAGANDA</h1>
            <p className="text-neutral-200 text-center text-base font-light leading-relaxed max-w-sm">
              Descubre las últimas tendencias y crea tu estilo único
            </p>
            <div className="mt-6 flex space-x-2">
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-sm">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-8">
              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-neutral-100 rounded-full blur-sm"></div>
                <Shirt className="w-10 h-10 text-neutral-700 mx-auto mb-3 relative z-10" />
              </div>
              <h1 className="text-xl font-extralight text-neutral-900 tracking-wider">MAGANDA</h1>
            </div>

            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="mb-6">
                  <h2 className="text-2xl font-extralight text-neutral-900 mb-1">Bienvenido de vuelta</h2>
                  <p className="text-neutral-600 font-light text-sm">Accede a tu mundo de moda</p>
                </div>

                <form className="space-y-4">
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-neutral-700 font-light text-xs uppercase tracking-wide">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="border-0 border-b border-neutral-300 rounded-none bg-transparent px-0 py-3 focus:border-neutral-900 focus:ring-0 placeholder:text-neutral-400"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="password" className="text-neutral-700 font-light text-xs uppercase tracking-wide">
                      Contraseña
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Tu contraseña"
                        className="border-0 border-b border-neutral-300 rounded-none bg-transparent px-0 py-3 pr-8 focus:border-neutral-900 focus:ring-0 placeholder:text-neutral-400"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-0 top-3 text-neutral-400 hover:text-neutral-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3">
                    <Link
                      href="/forgot-password"
                      className="text-xs font-light text-neutral-700 hover:text-neutral-900 transition-colors underline-offset-4 hover:underline"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-light py-4 rounded-none transition-all duration-300 text-xs uppercase tracking-widest mt-6"
                  >
                    Iniciar Sesión
                  </Button>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-neutral-200"></div>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <span className="text-neutral-600 font-light text-xs">¿Nuevo en MAGANDA? </span>
                    <Link
                      href="/register"
                      className="text-neutral-900 hover:underline font-light transition-colors underline-offset-4 text-xs"
                    >
                      Crear cuenta
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
                    </CardContent>
              <Card/>
      </>

  )
}
