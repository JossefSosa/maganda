import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

export default function QuickContactCards() {
    return (
        <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                    <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                    <p className="text-gray-600 mb-4">Contacto directo y personal</p>
                    <Link href={"https://wa.me/523330596737"}>
                        <Button className="bg-green-600 hover:bg-green-700">
                            <Phone className="h-4 w-4 mr-2" />
                            WhatsApp
                        </Button>
                    </Link>
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