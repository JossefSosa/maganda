"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

// Layout Components
import Navigation from "@/components/navigation"
import { Sidebar } from "@/components/Sidebar"

// Page Components
import { DashboardView } from "@/components/dashboard/DashboardView"
import { ProfileSection } from "@/components/profile/ProfileSection"
import { OrdersSection } from "@/components/orders/OrdersSection"
import { WishlistSection } from "@/components/wishlist/WishlistSection"
import { AddressesSection } from "@/components/addresses/AddressesSection"
import { SettingsSection } from "@/components/settings/SettingsSection"

// Hooks
import { useWishlist } from "@/hooks/useWishlist"
import { useAddresses } from "@/hooks/useAddresses"
import { useOrders } from "@/hooks/useOrders"

// Data and Types
import { userData, orders, wishlistData, addressesData } from "@/constants/mockData"
import type { TabValue } from "@/types"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<TabValue>("dashboard")
  const searchParams = useSearchParams()

  // Custom hooks
  const wishlistHook = useWishlist(wishlistData)
  const addressesHook = useAddresses(addressesData)
  const ordersHook = useOrders()

  // Manejar navegación desde URL params
  useEffect(() => {
    const section = searchParams.get("section")
    if (section && ["dashboard", "profile", "orders", "wishlist", "addresses", "settings"].includes(section)) {
      setActiveTab(section as TabValue)
    }
  }, [searchParams])

  const handleViewAllOrders = () => {
    setActiveTab("orders")
  }

  const handleNavigateToProfile = (section?: string) => {
    if (section) {
      setActiveTab(section as TabValue)
    } else {
      setActiveTab("dashboard")
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <DashboardView
            userData={userData}
            orders={orders}
            onViewAllOrders={handleViewAllOrders}
            onViewOrderDetails={ordersHook.openOrderDetails}
          />
        )
      case "profile":
        return <ProfileSection userData={userData} />
      case "orders":
        return (
          <OrdersSection
            orders={orders}
            selectedOrder={ordersHook.selectedOrder}
            showOrderDetails={ordersHook.showOrderDetails}
            onOpenOrderDetails={ordersHook.openOrderDetails}
            onCloseOrderDetails={ordersHook.closeOrderDetails}
          />
        )
      case "wishlist":
        return (
          <WishlistSection
            wishlistItems={wishlistHook.wishlistItems}
            wishlistView={wishlistHook.wishlistView}
            showClearDialog={wishlistHook.showClearDialog}
            onSetWishlistView={wishlistHook.setWishlistView}
            onSetShowClearDialog={wishlistHook.setShowClearDialog}
            onClearWishlist={wishlistHook.clearWishlist}
            onRemoveFromWishlist={wishlistHook.removeFromWishlist}
          />
        )
      case "addresses":
        return (
          <AddressesSection
            addressList={addressesHook.addressList}
            showAddressDialog={addressesHook.showAddressDialog}
            newAddress={addressesHook.newAddress}
            onSetShowAddressDialog={addressesHook.setShowAddressDialog}
            onSetNewAddress={addressesHook.setNewAddress}
            onHandleAddAddress={addressesHook.handleAddAddress}
            onSetAsDefault={addressesHook.setAsDefault}
            onRemoveAddress={addressesHook.removeAddress}
          />
        )
      case "settings":
        return <SettingsSection />
      default:
        return (
          <DashboardView
            userData={userData}
            orders={orders}
            onViewAllOrders={handleViewAllOrders}
            onViewOrderDetails={ordersHook.openOrderDetails}
          />
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onNavigateToProfile={handleNavigateToProfile} isLoggedIn={true} userData={userData} />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar userData={userData} activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">{renderContent()}</div>
        </div>
      </div>
    </div>
  )
}
