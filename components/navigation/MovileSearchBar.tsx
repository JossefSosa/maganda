import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function MovileSearchBar({ setIsSearchOpen, isSearchOpen }: { setIsSearchOpen: (isOpen: boolean) => void, isSearchOpen: boolean }) {
    return (
        <>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <Search className="h-5 w-5" />
            </Button>

        </>
    );
}

export function MovileSearchBarOpen({ isSearchOpen }: { isSearchOpen: boolean }) {
    return (
        <>
            {isSearchOpen && (
                <div className="lg:hidden border-t bg-white py-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                            type="search"
                            placeholder="Buscar productos y colecciones..."
                            className="pl-10 pr-4 py-2 w-full"
                            autoFocus
                        />
                    </div>
                </div>
            )}
        </>
    )
}