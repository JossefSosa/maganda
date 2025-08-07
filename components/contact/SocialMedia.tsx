import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function SocialMedia() {
    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="text-xl">Síguenos</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 gap-4">
                    <Button variant="outline" className="h-12 flex-col space-y-1">
                        <Instagram className="h-5 w-5" />
                        <span className="text-xs">Instagram</span>
                    </Button>
                    <Button variant="outline" className="h-12 flex-col space-y-1">
                        <Facebook className="h-5 w-5" />
                        <span className="text-xs">Facebook</span>
                    </Button>
                    <Button variant="outline" className="h-12 flex-col space-y-1">
                        <Twitter className="h-5 w-5" />
                        <span className="text-xs">Twitter</span>
                    </Button>
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                    @stylish_official - Comparte tu estilo con #MyStylishLook
                </p>
            </CardContent>
        </Card>
    );
}