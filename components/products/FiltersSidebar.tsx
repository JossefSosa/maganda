"use client"

import { useState } from "react"
import { Filter } from "lucide-react"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"
import { Slider } from "../ui/slider"

type FiltersSidebarProps = {
    categories: string[]
    selectedCategory: string
    setSelectedCategory: (category: string) => void
    priceRange: number[]
    setPriceRange: (range: number[]) => void
}

export default function FiltersSidebar({
    categories,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
}: FiltersSidebarProps) {
    const [showFilters, setShowFilters] = useState(false)

    return (
        <div className="lg:w-64 space-y-6">
            <div className="lg:hidden">
                <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="w-full">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros
                </Button>
            </div>

            <div className={`space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
                {/* Categories */}
                <Card>
                    <div className="p-4">
                        <h3 className="font-semibold mb-4">Categorías</h3>
                        <div className="space-y-2">
                            {categories.map((category) => (
                                <div key={category} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={category}
                                        checked={selectedCategory === category}
                                        onCheckedChange={() => setSelectedCategory(category)}
                                    />
                                    <Label htmlFor={category} className="text-sm cursor-pointer">
                                        {category}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>

                {/* Price Range */}
                <Card>
                    <div className="p-4">
                        <h3 className="font-semibold mb-4">Rango de Precio</h3>
                        <div className="space-y-4">
                            <Slider value={priceRange} onValueChange={setPriceRange} max={4000} step={5} className="w-full" />
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>${priceRange[0]}</span>
                                <span>${priceRange[1]}</span>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Quick Filters */}
                {/* <Card>
                    <div className="p-4">
                        <h3 className="font-semibold mb-4">Filtros Rápidos</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="new" />
                                <Label htmlFor="new" className="text-sm cursor-pointer">
                                    Nuevos
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="sale" />
                                <Label htmlFor="sale" className="text-sm cursor-pointer">
                                    En Oferta
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="high-rated" />
                                <Label htmlFor="high-rated" className="text-sm cursor-pointer">
                                    Mejor Valorados
                                </Label>
                            </div>
                        </div>
                    </div>
                </Card> */}
            </div>
        </div>
    )
}
