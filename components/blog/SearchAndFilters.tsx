import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SearchAndFilters({
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
}: {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}) {
    const categories = ["Todos", "Marca", "Colaboraciones", "Pasarelas", "Eventos"];
    return (
        <div className="mb-8 space-y-4">
            <div className="relative">
                <Input
                    type="search"
                    placeholder="Buscar artículos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-4 pr-4 py-3"
                />
            </div>
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? "bg-black hover:bg-gray-800" : ""}
                    >
                        {category}
                    </Button>
                ))}
            </div>
        </div>
    )
}