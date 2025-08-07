"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "../ui/button"
import { Grid, List } from "lucide-react"

type ToolbarProps = {
    viewMode: string
    setViewMode: (mode: string) => void
    sortBy: string
    setSortBy: (value: string) => void
    total: number
}

export default function Toolbar({ viewMode, setViewMode, sortBy, setSortBy, total }: ToolbarProps) {
    return (
        <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">{total} productos encontrados</span>
            </div>

            <div className="flex items-center space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="featured">Destacados</SelectItem>
                        <SelectItem value="newest">Más Nuevos</SelectItem>
                        <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                        <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                        <SelectItem value="rating">Mejor Valorados</SelectItem>
                    </SelectContent>
                </Select>

                <div className="flex border rounded-lg">
                    <Button
                        variant={viewMode === "grid" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setViewMode("grid")}
                    >
                        <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                        variant={viewMode === "list" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setViewMode("list")}
                    >
                        <List className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
