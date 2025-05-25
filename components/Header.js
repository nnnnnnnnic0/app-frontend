import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [showDemoMenu, setShowDemoMenu] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showMobileDemoSub, setShowMobileDemoSub] = useState(false);

    // Cierra submenú con delay (mejor experiencia)
    let submenuTimeout;
    const handleMouseEnter = () => {
        clearTimeout(submenuTimeout);
        setShowDemoMenu(true);
    };
    const handleMouseLeave = () => {
        submenuTimeout = setTimeout(() => setShowDemoMenu(false), 120); // Pequeño delay
    };

    return (
        <header className="bg-blue-800 text-white p-4 flex justify-between items-center relative z-20">
            <Link href="/" className="text-2xl font-bold tracking-tight">ReyesVallejos</Link>
            {/* Desktop Nav */}
            <nav className="hidden md:block">
                <ul className="flex gap-6 items-center">
                    <li>
                        <Link href="/#servicios" className="hover:underline">Servicios</Link>
                    </li>
                    <li
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="hover:underline flex items-center gap-1">
                            Demo
                            <svg width={16} height={16} fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth={2} /></svg>
                        </button>
                        {showDemoMenu && (
                            <ul
                                className="absolute left-0 top-full mt-1 bg-white text-blue-800 rounded shadow-lg min-w-[200px] z-50"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <li>
                                    <Link
                                        href="/demos/crea-tu-web"
                                        className="block px-4 py-2 hover:bg-blue-100"
                                    >
                                        Generador de Webs
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link href="/#contacto" className="hover:underline">Contacto</Link>
                    </li>
                </ul>
            </nav>
            {/* Mobile Hamburger */}
            <button
                className="md:hidden p-2"
                aria-label="Abrir menú"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                <svg width={32} height={32} fill="none">
                    <rect y={8} width={32} height={3} rx={1.5} fill="#fff" />
                    <rect y={15} width={32} height={3} rx={1.5} fill="#fff" />
                    <rect y={22} width={32} height={3} rx={1.5} fill="#fff" />
                </svg>
            </button>
            {/* Mobile Nav Drawer */}
            {showMobileMenu && (
                <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setShowMobileMenu(false)}>
                    <nav
                        className="absolute right-0 top-0 bg-blue-800 text-white w-64 h-full shadow-xl p-6 pt-20 flex flex-col gap-5"
                        onClick={e => e.stopPropagation()}
                    >
                        <Link href="/#servicios" className="py-2 border-b border-blue-700" onClick={() => setShowMobileMenu(false)}>
                            Servicios
                        </Link>
                        {/* Submenú mobile */}
                        <div>
                            <button
                                className="w-full flex justify-between items-center py-2 border-b border-blue-700"
                                onClick={() => setShowMobileDemoSub(v => !v)}
                            >
                                <span>Demo</span>
                                <svg width={16} height={16} fill="none">
                                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth={2} />
                                </svg>
                            </button>
                            {showMobileDemoSub && (
                                <ul className="bg-white text-blue-800 rounded shadow-lg mt-1">
                                    <li>
                                        <Link
                                            href="/demos/crea-tu-web"
                                            className="block px-4 py-2 hover:bg-blue-100"
                                            onClick={() => setShowMobileMenu(false)}
                                        >
                                            Generador de Webs
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <Link href="/#contacto" className="py-2 border-b border-blue-700" onClick={() => setShowMobileMenu(false)}>
                            Contacto
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
