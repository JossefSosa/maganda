import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Formulario enviado:", formData);
        alert("¡Gracias por tu mensaje! Te responderemos en menos de 24 horas.");
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });
    };
    const handleChange = (field: any, value: any) => {
        setFormData((prev: any) => ({
            ...prev,
            [field]: value,
        }));
    };
    return (
        <div className="lg:col-span-2">
            <Card className="shadow-lg">
                <CardHeader className="text-center pb-8">
                    <CardTitle className="text-3xl font-bold text-gray-900">Envíanos un Mensaje</CardTitle>
                    <p className="text-gray-600 mt-2">
                        Completa el formulario y nos pondremos en contacto contigo lo antes posible
                    </p>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                                    Nombre Completo *
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                    required
                                    placeholder="Tu nombre completo"
                                    className="h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Email *
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                    required
                                    placeholder="tu@email.com"
                                    className="h-12"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                                    Teléfono
                                </Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => handleChange("phone", e.target.value)}
                                    placeholder="+34 600 000 000"
                                    className="h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                                    Asunto *
                                </Label>
                                <Select value={formData.subject} onValueChange={(value) => handleChange("subject", value)}>
                                    <SelectTrigger className="h-12">
                                        <SelectValue placeholder="Selecciona un asunto" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="general">Consulta General</SelectItem>
                                        <SelectItem value="order">Sobre mi Pedido</SelectItem>
                                        <SelectItem value="return">Devoluciones y Cambios</SelectItem>
                                        <SelectItem value="product">Información de Producto</SelectItem>
                                        <SelectItem value="styling">Asesoramiento de Estilo</SelectItem>
                                        <SelectItem value="collaboration">Colaboraciones</SelectItem>
                                        <SelectItem value="press">Prensa y Medios</SelectItem>
                                        <SelectItem value="complaint">Queja o Sugerencia</SelectItem>
                                        <SelectItem value="other">Otro</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                                Mensaje *
                            </Label>
                            <Textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => handleChange("message", e.target.value)}
                                required
                                placeholder="Cuéntanos en qué podemos ayudarte..."
                                rows={6}
                                className="resize-none"
                            />
                        </div>

                        <div className="flex items-start space-x-3">
                            <input type="checkbox" id="privacy" required className="mt-1 rounded border-gray-300" />
                            <Label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed">
                                Acepto la política de privacidad
                                {/* <a href="/privacy" className="text-black underline hover:no-underline"> */}
                                {/* </a>{" "} */}
                                y el tratamiento de mis datos personales. También acepto recibir comunicaciones comerciales de
                                STYLISH. *
                            </Label>
                        </div>

                        <Button type="submit" className="w-full bg-black hover:bg-gray-800 h-12 text-lg">
                            <Send className="h-5 w-5 mr-2" />
                            Enviar Mensaje
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}