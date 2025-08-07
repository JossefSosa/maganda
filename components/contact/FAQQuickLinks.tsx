import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function FAQQuickLinks() {
    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="text-xl">Preguntas Frecuentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-3">
                    <div className="border-l-4 border-black pl-4">
                        <h4 className="font-medium text-sm">¿Cuánto tarda el envío?</h4>
                        <p className="text-xs text-gray-600 mt-1">2-3 días laborables en península</p>
                    </div>
                    <div className="border-l-4 border-gray-200 pl-4">
                        <h4 className="font-medium text-sm">¿Puedo devolver un producto?</h4>
                        <p className="text-xs text-gray-600 mt-1">30 días para devoluciones gratuitas</p>
                    </div>
                    <div className="border-l-4 border-gray-200 pl-4">
                        <h4 className="font-medium text-sm">¿Ofrecen asesoramiento de estilo?</h4>
                        <p className="text-xs text-gray-600 mt-1">Sí, servicio gratuito con cita previa</p>
                    </div>
                </div>
                <Button variant="outline" className="w-full text-sm">
                    Ver todas las FAQ
                </Button>
            </CardContent>
        </Card>
    )
}