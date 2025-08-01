"use client"

import type { User } from "@/types/index"

interface WelcomeSectionProps {
  userData: User
}

export const WelcomeSection = ({ userData }: WelcomeSectionProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">¡Bienvenida de vuelta, {userData.name.split(" ")[0]}!</h1>
    </div>
  )
}
