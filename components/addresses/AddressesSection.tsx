"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Plus } from "lucide-react"
import type { Address, NewAddress } from "@/types/index"
import { AddAddressDialog } from "./AddAddressDialog"

interface AddressesSectionProps {
  addressList: Address[]
  showAddressDialog: boolean
  newAddress: NewAddress
  onSetShowAddressDialog: (show: boolean) => void
  onSetNewAddress: (address: NewAddress) => void
  onHandleAddAddress: () => void
  onSetAsDefault: (addressId: number) => void
  onRemoveAddress: (addressId: number) => void
}

export const AddressesSection = ({
  addressList,
  showAddressDialog,
  newAddress,
  onSetShowAddressDialog,
  onSetNewAddress,
  onHandleAddAddress,
  onSetAsDefault,
  onRemoveAddress,
}: AddressesSectionProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Direcciones Guardadas</CardTitle>
          <CardDescription>Gestiona tus direcciones de envío y facturación</CardDescription>
        </div>
        <Button onClick={() => onSetShowAddressDialog(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Nueva dirección
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {addressList.map((address) => (
            <div key={address.id} className="border rounded-lg p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant={address.isDefault ? "default" : "secondary"}>{address.type}</Badge>
                    {address.isDefault && <Badge variant="outline">Por defecto</Badge>}
                  </div>
                  <h3 className="font-semibold">{address.name}</h3>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onRemoveAddress(address.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-1 text-sm text-gray-600">
                <p>{address.street}</p>
                <p>
                  {address.city}, {address.postalCode}
                </p>
                <p>{address.country}</p>
                <p>{address.phone}</p>
              </div>

              {!address.isDefault && (
                <Button variant="outline" size="sm" onClick={() => onSetAsDefault(address.id)}>
                  Establecer como predeterminada
                </Button>
              )}
            </div>
          ))}
        </div>
      </CardContent>

      <AddAddressDialog
        isOpen={showAddressDialog}
        onOpenChange={onSetShowAddressDialog}
        newAddress={newAddress}
        onSetNewAddress={onSetNewAddress}
        onAddAddress={onHandleAddAddress}
      />
    </Card>
  )
}
