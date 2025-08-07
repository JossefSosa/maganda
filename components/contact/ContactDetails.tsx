import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function ContactDetails() {
    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="text-xl">Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                        <Mail className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-medium text-gray-900">Email</h3>
                        <p className="text-gray-600 text-sm mt-1">info@stylish.com</p>
                        <p className="text-gray-600 text-sm">soporte@stylish.com</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                        <Phone className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-medium text-gray-900">Teléfono</h3>
                        <p className="text-gray-600 text-sm mt-1">+34 900 123 456</p>
                        <p className="text-gray-600 text-sm">WhatsApp: +34 600 123 456</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                        <MapPin className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-medium text-gray-900">Showroom Madrid</h3>
                        <p className="text-gray-600 text-sm mt-1">
                            Calle Serrano, 45
                            <br />
                            28001 Madrid, España
                        </p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                        <Clock className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-medium text-gray-900">Horario de Atención</h3>
                        <div className="text-gray-600 text-sm mt-1 space-y-1">
                            <p>Lunes - Viernes: 9:00 - 19:00</p>
                            <p>Sábados: 10:00 - 15:00</p>
                            <p>Domingos: Cerrado</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}