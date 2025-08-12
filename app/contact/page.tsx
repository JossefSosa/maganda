"use client"

import Navigation from "@/components/navigation"
import QuickContactCards from "@/components/contact/QuickContactCards"
import ContactForm from "@/components/contact/ContactForm"
import ContactDetails from "@/components/contact/ContactDetails"
import SocialMedia from "@/components/contact/SocialMedia"
import TrustBadges from "@/components/contact/TrustBadges"

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Hablemos</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte. Ya sea una pregunta sobre productos, una consulta de estilo o simplemente
            quieres saludar, nos encanta escuchar de ti.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        {/* Quick Contact Cards */}
        <QuickContactCards />

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information Sidebar */}
          <div className="space-y-8">
            {/* Contact Details */}
            {/* <ContactDetails /> */}

            {/* Social Media */}
            {/* <SocialMedia /> */}

            {/* FAQ Quick Links */}
            {/* <FAQQuickLinks /> */}
          </div>
        </div>
        {/* Trust Badges */}
        <div className="mb-16 mt-16">
          <TrustBadges />
        </div>

        {/* Map Section */}
        {/* <MapSection /> */}
      </div>
    </div>
  )
}
