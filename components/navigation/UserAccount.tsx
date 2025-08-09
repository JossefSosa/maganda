import { LogOut, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

export function UserAccount({
    isLoggedIn,
    userData,
    handleLogout,
    handleProfileNavigation,
}: {
    isLoggedIn: boolean;
    userData: any;
    handleLogout: () => void;
    handleProfileNavigation: (section?: string) => void;
}) {
    return (
        <>
            {isLoggedIn && userData ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                            <Avatar className="h-8 w-8">
                                {userData && (
                                    <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.firstName} />
                                )}
                                <AvatarFallback>
                                    {userData?.firstName
                                        ?.split(" ")
                                        .map((n: any) => n[0])
                                        .join("")}
                                </AvatarFallback>

                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <div className="flex items-center justify-start gap-2 p-2">
                            <div className="flex flex-col space-y-1 leading-none">
                                <p className="font-medium">{userData.firstName}</p>
                                <p className="w-[200px] truncate text-sm text-muted-foreground">{userData.email}</p>
                            </div>
                        </div>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleProfileNavigation()}>
                            <User className="mr-2 h-4 w-4" />
                            <span>Mi Perfil</span>
                        </DropdownMenuItem>
                        {/* <DropdownMenuItem onClick={() => handleProfileNavigation("orders")}>
                            <Package className="mr-2 h-4 w-4" />
                            <span>Mis Pedidos</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleProfileNavigation("wishlist")}>
                            <Heart className="mr-2 h-4 w-4" />
                            <span>Lista de Deseos</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleProfileNavigation("addresses")}>
                            <MapPin className="mr-2 h-4 w-4" />
                            <span>Direcciones</span>
                        </DropdownMenuItem> */}
                        <DropdownMenuItem onClick={() => handleProfileNavigation("settings")}>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Configuración</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Cerrar Sesión</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                </Button>
            )}
        </>
    )
}