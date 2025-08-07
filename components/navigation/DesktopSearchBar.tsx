import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function DesktopSearchBar() {
    return (
        <div className="hidden lg:flex items-center flex-1 max-w-sm mx-8">
            <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                    type="search"
                    placeholder="Buscar productos y colecciones..."
                    className="pl-10 pr-4 py-2 w-full border-gray-200 focus:border-gray-400"
                />
            </div>
        </div>
    )
}