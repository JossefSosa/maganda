import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit } from "lucide-react"

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

export const ProfileSection = ({ userData }: ProfileSectionProps) => {
  const birthDate = new Date(userData.dateOfBirth)
    .toISOString()
    .split("T")[0]
  const memberSince = new Date(userData.createdAt).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Información Personal</CardTitle>
        <CardDescription>Gestiona tu información personal y preferencias</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src={"/placeholder.svg"} alt={userData.firstName} />
            <AvatarFallback className="text-lg">{userData.firstName[0]}{userData.lastName[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">{userData.firstName} {userData.lastName}</h3>
            <p className="text-gray-600">Miembro desde {memberSince}</p>
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Cambiar foto
            </Button>
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo</Label>
            <Input id="name" defaultValue={`${userData.firstName} ${userData.lastName}`} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" type="email" defaultValue={userData.email} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" defaultValue={userData.phone} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="birthdate">Fecha de nacimiento</Label>
            <Input id="birthdate" type="date" defaultValue={birthDate} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">Sexo</Label>
            <Select defaultValue={userData.gender}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona una opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Masculino</SelectItem>
                <SelectItem value="female">Femenino</SelectItem>
                <SelectItem value="other">Otro</SelectItem>
                <SelectItem value="no-especificar">Prefiero no decir</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button>Guardar cambios</Button>
      </CardContent>
    </Card>
  )
}
