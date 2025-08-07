import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

export default function QuickContactCards() {
    return (
        <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chat en Vivo</h3>
              <p className="text-gray-600 mb-4">Respuesta inmediata de lunes a viernes</p>
              <Button className="bg-black hover:bg-gray-800">Iniciar Chat</Button>
            </CardContent>
          </Card> */}

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                    <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                    <p className="text-gray-600 mb-4">Contacto directo y personal</p>
                    <Button className="bg-green-600 hover:bg-green-700">
                        <Phone className="h-4 w-4 mr-2" />
                        WhatsApp
                    </Button>
                </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                    <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-600 mb-4">Respuesta en menos de 24h</p>
                    <Button variant="outline">info@stylish.com</Button>
                </CardContent>
            </Card>
        </div>
    );
}