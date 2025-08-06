export const getStatusColor = (status: string): string => {
  switch (status) {
    case "Entregado":
      return "bg-green-100 text-green-800"
    case "En tránsito":
      return "bg-blue-100 text-blue-800"
    case "Procesando":
      return "bg-yellow-100 text-yellow-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("es-ES")
}

export const formatDateLong = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export const calculateDiscount = (originalPrice: number, currentPrice: number): number => {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
}
