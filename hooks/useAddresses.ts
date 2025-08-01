"use client"

import { useState } from "react"
import type { Address, NewAddress } from "@/types/index"

export const useAddresses = (initialAddresses: Address[]) => {
  const [addressList, setAddressList] = useState<Address[]>(initialAddresses)
  const [showAddressDialog, setShowAddressDialog] = useState(false)
  const [newAddress, setNewAddress] = useState<NewAddress>({
    type: "",
    name: "",
    street: "",
    city: "",
    postalCode: "",
    country: "España",
    phone: "",
    isDefault: false,
  })

  const handleAddAddress = () => {
    if (
      !newAddress.type ||
      !newAddress.name ||
      !newAddress.street ||
      !newAddress.city ||
      !newAddress.postalCode ||
      !newAddress.phone
    ) {
      return
    }

    const address: Address = {
      id: addressList.length + 1,
      ...newAddress,
    }

    if (addressList.length === 0 || newAddress.isDefault) {
      if (newAddress.isDefault) {
        setAddressList((prev) => prev.map((addr) => ({ ...addr, isDefault: false })))
      }
      address.isDefault = true
    }

    setAddressList((prev) => [...prev, address])
    setNewAddress({
      type: "",
      name: "",
      street: "",
      city: "",
      postalCode: "",
      country: "España",
      phone: "",
      isDefault: false,
    })
    setShowAddressDialog(false)
  }

  const setAsDefault = (addressId: number) => {
    setAddressList((prev) =>
      prev.map((addr) => ({
        ...addr,
        isDefault: addr.id === addressId,
      })),
    )
  }

  const removeAddress = (addressId: number) => {
    setAddressList((prev) => prev.filter((addr) => addr.id !== addressId))
  }

  return {
    addressList,
    showAddressDialog,
    setShowAddressDialog,
    newAddress,
    setNewAddress,
    handleAddAddress,
    setAsDefault,
    removeAddress,
  }
}
