"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import type { NewAddress } from "@/types/index"

interface AddAddressDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  newAddress: NewAddress
  onSetNewAddress: (address: NewAddress) => void
  onAddAddress: () => void
}

export const AddAddressDialog = ({
  isOpen,
  onOpenChange,
  newAddress,
  onSetNewAddress,
  onAddAddress,
}: AddAddressDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Añadir Nueva Dirección</DialogTitle>
          <DialogDescription>Completa los datos para añadir una nueva dirección de envío.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="address-type">Tipo de dirección</Label>
              <Select
                value={newAddress.type}
                onValueChange={(value) => onSetNewAddress({ ...newAddress, type: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Casa">Casa</SelectItem>
                  <SelectItem value="Trabajo">Trabajo</SelectItem>
                  <SelectItem value="Otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address-name">Nombre completo</Label>
              <Input
                id="address-name"
                value={newAddress.name}
                onChange={(e) => onSetNewAddress({ ...newAddress, name: e.target.value })}
                placeholder="Nombre del destinatario"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address-street">Dirección</Label>
            <Input
              id="address-street"
              value={newAddress.street}
              onChange={(e) => onSetNewAddress({ ...newAddress, street: e.target.value })}
              placeholder="Calle, número, piso, puerta..."
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="address-city">Ciudad</Label>
              <Input
                id="address-city"
                value={newAddress.city}
                onChange={(e) => onSetNewAddress({ ...newAddress, city: e.target.value })}
                placeholder="Ciudad"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address-postal">Código postal</Label>
              <Input
                id="address-postal"
                value={newAddress.postalCode}
                onChange={(e) => onSetNewAddress({ ...newAddress, postalCode: e.target.value })}
                placeholder="28001"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="address-country">País</Label>
              <Select
                value={newAddress.country}
                onValueChange={(value) => onSetNewAddress({ ...newAddress, country: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="España">España</SelectItem>
                  <SelectItem value="Francia">Francia</SelectItem>
                  <SelectItem value="Portugal">Portugal</SelectItem>
                  <SelectItem value="Italia">Italia</SelectItem>
                  <SelectItem value="Alemania">Alemania</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address-phone">Teléfono</Label>
              <Input
                id="address-phone"
                value={newAddress.phone}
                onChange={(e) => onSetNewAddress({ ...newAddress, phone: e.target.value })}
                placeholder="+34 612 345 678"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="address-default"
              checked={newAddress.isDefault}
              onCheckedChange={(checked) => onSetNewAddress({ ...newAddress, isDefault: !!checked })}
            />
            <Label htmlFor="address-default" className="text-sm">
              Establecer como dirección predeterminada
            </Label>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={onAddAddress}>Guardar dirección</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
