import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function NewsletterSection() {
    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-4">Mantente al día</h2>
                <p className="text-gray-300 mb-8">Suscríbete para recibir las últimas novedades y ofertas exclusivas</p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input type="email" placeholder="Tu email" className="flex-1 px-4 py-3 rounded-lg text-black" />
                    <Button className="bg-white text-black hover:bg-gray-100">Suscribirse</Button>
                </div>
            </div>
        </section>
    )
}