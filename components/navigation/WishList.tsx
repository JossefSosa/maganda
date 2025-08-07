import { Heart } from "lucide-react";
import { Button } from "../ui/button";

export default function Wishlist({ handleProfileNavigation }: { handleProfileNavigation: (path: string) => void }) {
    return (
        <>
            <Button
                variant="ghost"
                size="icon"
                className="relative hidden sm:flex"
                onClick={() => handleProfileNavigation("wishlist")}
            >
                <Heart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                    2
                </span>
            </Button>
        </>
    )
}