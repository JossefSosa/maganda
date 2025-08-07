import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

export default function TrustBadges() {
    return (
        <Card className="shadow-lg">
            <CardContent className="p-6">
                <div className="text-center space-y-4">
                    <div className="flex justify-center space-x-4">
                        <Badge variant="secondary" className="px-3 py-1">
                            ✓ Envío Seguro
                        </Badge>
                        <Badge variant="secondary" className="px-3 py-1">
                            ✓ Pago Seguro
                        </Badge>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <Badge variant="secondary" className="px-3 py-1">
                            ✓ 30 Días Devolución
                        </Badge>
                        <Badge variant="secondary" className="px-3 py-1">
                            ✓ Garantía Calidad
                        </Badge>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}