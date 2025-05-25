// /components/Header.js
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showDemoMenu, setShowDemoMenu] = useState(false);

    return (
        <header className="bg-blue-800 text-white px-4 py-3 flex items-center justify-between shadow">
            <Link href="/" className="text-2xl font-bold tracking-tight">ReyesVallejos</Link>

            {/* Hamburger for mobile */}
            <button
                className="md:hidden p-2"
                onClick={() => setMobileMenu(m => !m)}
                aria-label="Abrir menú"
            >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Menu */}
            <nav>
                <ul className={`
          fixed top-0 left-0 w-full h-full bg-blue-900 bg-opacity-95 flex flex-col gap-3 items-center justify-center
          transition-all z-50 md:static md:bg-transparent md:flex md:flex-row md:gap-6 md:w-auto md:h-auto md:items-center
          ${mobileMenu ? "block" : "hidden"} md:block
        `}>
                    <li>
                        <Link
                            href="/#servicios"
                            className="text-lg font-medium block py-2 px-4 rounded hover:bg-blue-700 md:bg-transparent md:hover:bg-blue-700 transition"
                            onClick={() => setMobileMenu(false)}
                        >Servicios</Link>
                    </li>
                    {/* DEMO submenu */}
                    <li className="relative">
                        {/* Desktop: hover. Mobile: tap abre/cierra */}
                        <button
                            className="text-lg font-medium flex items-center gap-1 py-2 px-4 rounded hover:bg-blue-700 transition md:bg-transparent"
                            onClick={() => setShowDemoMenu(s => !s)}
                            onMouseEnter={() => window.innerWidth >= 768 && setShowDemoMenu(true)}
                            onMouseLeave={() => window.innerWidth >= 768 && setShowDemoMenu(false)}
                        >
                            Demo
                            <svg width={16} height={16} fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth={2} /></svg>
                        </button>
                        {/* Submenu */}
                        {(showDemoMenu || mobileMenu) && (
                            <ul className={`
                absolute md:left-0 md:top-full md:mt-1 bg-white text-blue-800 rounded shadow-lg min-w-[200px] z-50
                md:block ${mobileMenu ? "static mt-2 w-full bg-blue-800 text-white shadow-none rounded-none" : ""}
              `}>
                                <li>
                                    <Link
                                        href="/demos/crea-tu-web"
                                        className="block px-4 py-2 hover:bg-blue-100 md:hover:bg-blue-100 md:text-blue-800 hover:text-blue-900"
                                        onClick={() => { setShowDemoMenu(false); setMobileMenu(false); }}
                                    >
                                        Generador de Webs
                                    </Link>
                                </li>
                                {/* Puedes agregar más demos aquí */}
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link
                            href="/#contacto"
                            className="text-lg font-medium block py-2 px-4 rounded hover:bg-blue-700 md:bg-transparent md:hover:bg-blue-700 transition"
                            onClick={() => setMobileMenu(false)}
                        >Contacto</Link>
                    </li>
                    {/* Solo mobile: botón para cerrar menú */}
                    <li className="md:hidden mt-4">
                        <button
                            onClick={() => setMobileMenu(false)}
                            className="bg-blue-700 px-6 py-2 rounded text-white font-bold text-lg"
                        >Cerrar ✕</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
