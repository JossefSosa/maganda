"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Shirt, Eye, EyeOff, Sparkles } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import Link from "next/link"
import { useState } from "react"
import Navigation from "@/components/navigation"

export default function RegisterPage() {
  const [date, setDate] = useState<Date>()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <>
    <Navigation/>
      <div className="h-screen bg-neutral-50 py-4 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto h-full flex flex-col">
        {/* Compact Header */}
        <div className="text-center mb-4">
          <div className="relative inline-block mb-2">
            <Shirt className="w-8 h-8 text-neutral-700 mx-auto relative z-10" />
            <Sparkles className="w-3 h-3 text-neutral-400 absolute -top-1 -right-1" />
          </div>
          <h1 className="text-2xl font-extralight text-neutral-900 tracking-wider">MAGANDA</h1>
          <p className="text-neutral-600 font-light text-sm">Únete a la comunidad de moda más exclusiva</p>
        </div>

        <Card className="border-0 shadow-xl bg-white flex-1 overflow-hidden">
          <CardContent className="p-6 h-full overflow-y-auto">
            <div className="mb-4">
              <h2 className="text-2xl font-extralight text-neutral-900 mb-1">Crear tu cuenta</h2>
              <p className="text-neutral-600 font-light text-sm">Comienza tu viaje en el mundo de la moda</p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="firstName" className="text-neutral-700 font-light text-xs uppercase tracking-wide">
                    Primer Nombre
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Ana"
                    className="border-0 border-b border-neutral-300 rounded-none bg-transparent px-0 py-2 focus:border-neutral-900 focus:ring-0 placeholder:text-neutral-400"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="lastName" className="text-neutral-700 font-light text-xs uppercase tracking-wide">
                    Apellido
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="García"
                    className="border-0 border-b border-neutral-300 rounded-none bg-transparent px-0 py-2 focus:border-neutral-900 focus:ring-0 placeholder:text-neutral-400"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-neutral-700 font-light text-xs uppercase tracking-wide">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ana@email.com"
                    className="border-0 border-b border-neutral-300 rounded-none bg-transparent px-0 py-2 focus:border-neutral-900 focus:ring-0 placeholder:text-neutral-400"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-neutral-700 font-light text-xs uppercase tracking-wide">
                    Teléfono
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+57 300 123 4567"
                    className="border-0 border-b border-neutral-300 rounded-none bg-transparent px-0 py-2 focus:border-neutral-900 focus:ring-0 placeholder:text-neutral-400"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label className="text-neutral-700 font-light text-xs uppercase tracking-wide">
                    Fecha de Nacimiento
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left font-light border-0 border-b border-neutral-300 rounded-none bg-transparent px-0 py-2 hover:bg-transparent h-auto"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 text-neutral-400" />
                        <span className="text-sm">
                          {date ? format(date, "PPP", { locale: es }) : "Selecciona tu fecha"}
                        </span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="gender" className="text-neutral-700 font-light text-xs uppercase tracking-wide">
                    Género
                  </Label>
                  <Select name="gender">
                    <SelectTrigger className="border-0 border-b border-neutral-300 rounded-none bg-transparent px-0 py-2 focus:border-neutral-900 focus:ring-0 h-auto">
                      <SelectValue placeholder="Selecciona tu género" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mujer">Mujer</SelectItem>
                      <SelectItem value="hombre">Hombre</SelectItem>
                      <SelectItem value="no-binario">No binario</SelectItem>
                      <SelectItem value="prefiero-no-decir">Prefiero no decir</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="password" className="text-neutral-700 font-light text-xs uppercase tracking-wide">
                    Contraseña
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Mínimo 8 caracteres"
                      className="border-0 border-b border-neutral-300 rounded-none bg-transparent px-0 py-2 pr-8 focus:border-neutral-900 focus:ring-0 placeholder:text-neutral-400"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 top-2 text-neutral-400 hover:text-neutral-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <Label
                    htmlFor="confirmPassword"
                    className="text-neutral-700 font-light text-xs uppercase tracking-wide"
                  >
                    Confirmar Contraseña
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Repite tu contraseña"
                      className="border-0 border-b border-neutral-300 rounded-none bg-transparent px-0 py-2 pr-8 focus:border-neutral-900 focus:ring-0 placeholder:text-neutral-400"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-0 top-2 text-neutral-400 hover:text-neutral-600 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 h-3 w-3 text-neutral-900 border-neutral-300 rounded focus:ring-neutral-900"
                    required
                  />
                  <Label htmlFor="terms" className="text-xs font-light text-neutral-600 leading-relaxed cursor-pointer">
                    Acepto los{" "}
                    <Link href="/terms" className="text-neutral-900 hover:underline underline-offset-4">
                      términos y condiciones
                    </Link>{" "}
                    y la{" "}
                    <Link href="/privacy" className="text-neutral-900 hover:underline underline-offset-4">
                      política de privacidad
                    </Link>
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-light py-4 rounded-none transition-all duration-300 text-xs uppercase tracking-widest mt-4"
              >
                Crear Mi Cuenta
              </Button>

              <div className="text-center pt-3">
                <span className="text-neutral-600 font-light text-xs">¿Ya tienes cuenta? </span>
                <Link
                  href="/login"
                  className="text-neutral-900 hover:underline font-light transition-colors underline-offset-4 text-xs"
                >
                  Iniciar sesión
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      </div>
    </>
  )
}
