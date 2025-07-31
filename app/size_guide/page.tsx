"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Ruler, Info } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Navigation from "@/components/navigation"

export default function SizeGuide() {
  const topSizes = [
    { size: "XS", chest: "81-86", waist: "66-71", length: "64" },
    { size: "S", chest: "86-91", waist: "71-76", length: "66" },
    { size: "M", chest: "91-96", waist: "76-81", length: "68" },
    { size: "L", chest: "96-101", waist: "81-86", length: "70" },
    { size: "XL", chest: "101-106", waist: "86-91", length: "72" },
    { size: "XXL", chest: "106-111", waist: "91-96", length: "74" },
    { size: "3XL", chest: "111-116", waist: "96-101", length: "76" },
  ]

  const bottomSizes = [
    { size: "XS/26", waist: "66-69", hip: "86-89", inseam: "76" },
    { size: "S/28", waist: "71-74", hip: "91-94", inseam: "78" },
    { size: "M/30", waist: "76-79", hip: "96-99", inseam: "80" },
    { size: "L/32", waist: "81-84", hip: "101-104", inseam: "82" },
    { size: "XL/34", waist: "86-89", hip: "106-109", inseam: "84" },
    { size: "XXL/36", waist: "91-94", hip: "111-114", inseam: "86" },
    { size: "3XL/38", waist: "96-99", hip: "116-119", inseam: "88" },
  ]

  const dressSizes = [
    { size: "XS", bust: "81-84", waist: "64-67", hip: "89-92", length: "95" },
    { size: "S", bust: "86-89", waist: "69-72", hip: "94-97", length: "97" },
    { size: "M", bust: "91-94", waist: "74-77", hip: "99-102", length: "99" },
    { size: "L", bust: "96-99", waist: "79-82", hip: "104-107", length: "101" },
    { size: "XL", bust: "101-104", waist: "84-87", hip: "109-112", length: "103" },
    { size: "XXL", bust: "106-109", waist: "89-92", hip: "114-117", length: "105" },
  ]

  return (
<>

      <Navigation />
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Ruler className="h-8 w-8" />
          Guía de Tallas Universal
        </h1>
        <p className="text-muted-foreground">Encuentra tu talla perfecta con nuestras medidas detalladas para todos</p>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          Todas las medidas están en centímetros. Si estás entre dos tallas, te recomendamos elegir la talla mayor para
          mayor comodidad. Las tallas pueden variar ligeramente según el tipo de prenda y material.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="tops" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tops">Camisetas</TabsTrigger>
          <TabsTrigger value="bottoms">Pantalones</TabsTrigger>
          <TabsTrigger value="dresses">Vestidos</TabsTrigger>
        </TabsList>

        <TabsContent value="tops" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tallas de Camisetas y Tops</CardTitle>
              <CardDescription>Medidas para camisetas, blusas, sudaderas y tops en general</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Talla</th>
                      <th className="text-left p-3 font-semibold">Pecho/Busto (cm)</th>
                      <th className="text-left p-3 font-semibold">Cintura (cm)</th>
                      <th className="text-left p-3 font-semibold">Largo (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topSizes.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-3">
                          <Badge variant="outline">{item.size}</Badge>
                        </td>
                        <td className="p-3">{item.chest}</td>
                        <td className="p-3">{item.waist}</td>
                        <td className="p-3">{item.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bottoms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tallas de Pantalones y Bottoms</CardTitle>
              <CardDescription>Medidas para pantalones, jeans, shorts y faldas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Talla</th>
                      <th className="text-left p-3 font-semibold">Cintura (cm)</th>
                      <th className="text-left p-3 font-semibold">Cadera (cm)</th>
                      <th className="text-left p-3 font-semibold">Entrepierna (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bottomSizes.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-3">
                          <Badge variant="outline">{item.size}</Badge>
                        </td>
                        <td className="p-3">{item.waist}</td>
                        <td className="p-3">{item.hip}</td>
                        <td className="p-3">{item.inseam}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dresses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tallas de Vestidos</CardTitle>
              <CardDescription>Medidas para vestidos, monos y prendas de una pieza</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Talla</th>
                      <th className="text-left p-3 font-semibold">Busto (cm)</th>
                      <th className="text-left p-3 font-semibold">Cintura (cm)</th>
                      <th className="text-left p-3 font-semibold">Cadera (cm)</th>
                      <th className="text-left p-3 font-semibold">Largo (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dressSizes.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-3">
                          <Badge variant="outline">{item.size}</Badge>
                        </td>
                        <td className="p-3">{item.bust}</td>
                        <td className="p-3">{item.waist}</td>
                        <td className="p-3">{item.hip}</td>
                        <td className="p-3">{item.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ruler className="h-5 w-5" />
              Cómo Medir tu Cuerpo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Pecho/Busto:</h4>
              <p className="text-sm text-muted-foreground">
                Mide alrededor de la parte más ancha del pecho/busto, manteniendo la cinta métrica horizontal y sin
                apretar demasiado.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Cintura:</h4>
              <p className="text-sm text-muted-foreground">
                Mide alrededor de la parte más estrecha de tu cintura, generalmente por encima del ombligo.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Cadera:</h4>
              <p className="text-sm text-muted-foreground">
                Mide alrededor de la parte más ancha de las caderas, aproximadamente 20cm por debajo de la cintura.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Entrepierna:</h4>
              <p className="text-sm text-muted-foreground">
                Mide desde la entrepierna hasta el tobillo por la parte interior de la pierna.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <h3 className="font-semibold">¿Necesitas ayuda personalizada?</h3>
            <p className="text-sm text-muted-foreground">
              Si tienes dudas sobre tu talla o necesitas asesoramiento específico, no dudes en contactarnos. Estamos
              aquí para ayudarte a encontrar el ajuste perfecto para cualquier tipo de cuerpo.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
</>

  )
}
