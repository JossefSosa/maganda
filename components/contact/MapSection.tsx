import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export default function MapSection() {
    return (
        <Card className="mt-16 shadow-lg">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">Visítanos en Madrid</CardTitle>
                <p className="text-gray-600">
                    Ven a conocer nuestro showroom en el corazón de Madrid. Cita previa recomendada.
                </p>
            </CardHeader>
            <CardContent>
                <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="text-center space-y-4">
                        <MapPin className="h-12 w-12 text-gray-600 mx-auto" />
                        <div>
                            <p className="text-gray-600 font-medium">Calle Serrano, 45</p>
                            <p className="text-gray-600">28001 Madrid, España</p>
                        </div>
                        <Button className="bg-black hover:bg-gray-800">
                            <MapPin className="h-4 w-4 mr-2" />
                            Ver en Google Maps
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}