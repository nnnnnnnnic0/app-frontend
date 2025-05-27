import Image from "next/image";
import { LogOut } from "lucide-react";

// Utilidad para mayúscula inicial (puedes poner en un archivo utils si lo quieres usar más)
function capitalizeName(name = "") {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

export default function ErpHeader({ username, onLogout }) {
    return (
        <header className="bg-gradient-to-r from-altiblue via-altiblueLight to-altigray text-altiwhite flex flex-col sm:flex-row items-center justify-between px-4 py-3 shadow-md gap-2 sm:gap-0">
            {/* Logo + nombre ERP */}
            <div className="flex items-center gap-3 min-w-0">
                <Image
                    src="/alticloud.png"
                    alt="AltiCloud logo"
                    width={40}
                    height={40}
                    className="rounded-xl bg-altiwhite shadow"
                    priority
                />
                <span className="font-black text-lg sm:text-2xl tracking-tight whitespace-nowrap bg-gradient-to-r from-altiwhite to-altiverde text-transparent bg-clip-text">
                    ERP AltiCloud
                </span>
            </div>
            {/* Usuario + logout */}
            <div className="flex items-center gap-3 mt-2 sm:mt-0">
                <span className="font-semibold text-sm sm:text-base bg-altiblueLight/30 px-2 py-1 rounded-lg text-altiwhite flex items-center gap-1">
                    <span className="text-altiverde font-bold">●</span>
                    {capitalizeName(username)}
                </span>
                <button
                    onClick={onLogout}
                    className="flex items-center gap-1 bg-altiblueLight hover:bg-altiverde text-altiblue font-bold px-3 py-2 rounded-lg transition"
                >
                    <LogOut size={18} className="inline-block" />
                    <span className="hidden sm:inline">Cerrar sesión</span>
                </button>
            </div>
        </header>
    );
}
