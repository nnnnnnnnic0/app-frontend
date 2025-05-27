import Link from "next/link";
import { useRouter } from "next/router";
import { LayoutDashboard, ShoppingCart, Boxes, Users } from "lucide-react";

// Estructura del menú para fácil escalado
const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/demos/erp-alticloud" },
    { label: "Ventas", icon: ShoppingCart, href: "/demos/erp-alticloud/sales" },
    { label: "Inventario", icon: Boxes, href: "/demos/erp-alticloud/inventory" },
    { label: "Clientes", icon: Users, href: "/demos/erp-alticloud/customers" },
];

export default function ErpSidebar() {
    const router = useRouter();

    return (
        <aside className="bg-altiblue min-h-screen w-20 sm:w-56 flex flex-col py-6 px-2 shadow-lg sticky top-0 left-0 z-20">
            <nav className="flex flex-col gap-2">
                {menuItems.map(({ label, icon: Icon, href }) => {
                    const isActive =
                        router.asPath === href ||
                        (href === "/demos/erp-alticloud" && router.asPath === "/demos/erp-alticloud/");
                    return (
                        <Link
                            key={label}
                            href={href}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg font-bold text-base transition 
                ${isActive
                                    ? "bg-altiblueLight text-altiblue"
                                    : "text-altiwhite hover:bg-altiblueLight/30"
                                }`}
                        >
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            <span className="hidden sm:inline">{label}</span>
                        </Link>
                    );
                })}
            </nav>
            <div className="mt-auto text-center text-xs text-altiwhite opacity-50 pt-10 select-none">
                © {new Date().getFullYear()} AltiCloud
            </div>
        </aside>
    );
}
