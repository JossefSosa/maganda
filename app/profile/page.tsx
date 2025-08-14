// export const dynamic = 'force-dynamic'

// import { getProfileAction } from "@/serverActions/userActions"
// import ProfilePage from "./ProfilePage"

// export default async function Profile() {
//   const userData = await getProfileAction("e0f79244-e1b9-48db-ad23-c1e9e926b9c5")

//   return <ProfilePage userData={userData} />
// }
// // 

"use client"
export const dynamic = "force-dynamic";

import { Wrench, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo/Brand */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-800">Maganda</h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
              <Wrench className="w-12 h-12 text-blue-600" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <Clock className="w-4 h-4 text-orange-600" />
            </div>
          </div>
        </div>

        {/* Main Message */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800">Sección en Mantenimiento</h2>
          <p className="text-slate-600 leading-relaxed">
            Esta sección está temporalmente fuera de servicio mientras trabajamos en mejoras para ofrecerte una mejor
            experiencia.
          </p>
        </div>

        {/* Status Info */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Estado:</span>
              <span className="text-orange-600 font-medium">En Trabajo</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Tiempo estimado:</span>
              <span className="text-slate-700">Próximamente</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button variant="outline" className="w-full bg-transparent" onClick={() => window.history.back()}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver Atrás
        </Button>

        {/* Footer Message */}
        <p className="text-sm text-slate-500">Gracias por tu paciencia mientras mejoramos nuestros servicios.</p>
      </div>
    </div>
  )
}
