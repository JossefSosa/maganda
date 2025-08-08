import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { useEffect, useState, useTransition } from "react";
import { sendEmail } from "@/lib/mailer";

type ContactFormProps = {
    isModal?: boolean
    productName?: string
}


export default function ContactForm({ isModal = false, productName = "" }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })
    const [isPending, startTransition] = useTransition()
    const [status, setStatus] = useState<null | string>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus(null)

        startTransition(async () => {
            const res = await sendEmail(formData)
            if (res.success) {
                setStatus("¡Gracias por tu mensaje! Te responderemos en menos de 24 horas.")
                setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
            } else {
                setStatus("Hubo un error al enviar el mensaje. Intenta más tarde.")
            }
        })
    }

    const handleChange = (field: keyof typeof formData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    if (isModal) {
        useEffect(() => {
            if (productName) {
                handleChange("subject", `Interesado en producto: ${productName}`)
            }
        }, [productName])
        return (
            <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                    <Input
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                    />
                    <Input
                        type="email"
                        placeholder="Tu email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                    />
                </div>
                <Input
                    type="tel"
                    placeholder="Tu teléfono (opcional)"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                />
                <Textarea
                    placeholder="Mensaje (talla deseada, consultas, etc.)"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                />
                <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    readOnly
                    placeholder="Asunto"
                    className="hidden"
                />

                <Button
                    className="w-full bg-black hover:bg-gray-800 text-white py-3"
                    onClick={(e) => handleSubmit(e)}
                    disabled={isPending}
                >
                    <Send className="h-4 w-4 mr-2" />
                    {isPending ? "Enviando..." : "Enviar Consulta"}
                </Button>

                {status && <p className="text-center text-sm text-gray-700 mt-2">{status}</p>}
            </div>
        )
    }

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
                                <Label htmlFor="name">Nombre Completo *</Label>
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
                                <Label htmlFor="email">Email *</Label>
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
                                <Label htmlFor="phone">Teléfono</Label>
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
                                <Label htmlFor="subject">Asunto *</Label>
                                <Select
                                    value={formData.subject}
                                    onValueChange={(value) => handleChange("subject", value)}
                                >
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
                            <Label htmlFor="message">Mensaje *</Label>
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
                                Acepto la política de privacidad y el tratamiento de mis datos personales. También acepto
                                recibir comunicaciones comerciales de STYLISH. *
                            </Label>
                        </div>

                        <Button type="submit" className="w-full bg-black hover:bg-gray-800 h-12 text-lg" disabled={isPending}>
                            <Send className="h-5 w-5 mr-2" />
                            {isPending ? "Enviando..." : "Enviar Mensaje"}
                        </Button>

                        {status && <p className="text-center text-sm text-gray-700 mt-2">{status}</p>}
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}