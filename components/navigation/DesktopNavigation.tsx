import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function DesktopNavigation() {
    return (
        <div className="hidden md:flex items-center space-x-8 flex-1">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Inicio
            </Link>
            {/* Products Dropdown */}
            {/* <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors">
                    Productos
                    <ChevronDown className="h-4 w-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                    <DropdownMenuItem asChild>
                        <Link href="/products">Todos los Productos</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/products?category=Vestidos">Vestidos</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/products?category=Blazers">Blazers</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/products?category=Pantalones">Pantalones</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/products?category=Blusas">Blusas</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/products?category=Abrigos">Abrigos</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu> */}
            <Link href="/products" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Productos
            </Link>
            <Link href="/collections" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Colecciones
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Contacto
            </Link>
        </div>
    )
}