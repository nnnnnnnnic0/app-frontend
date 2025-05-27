import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";

export default function Header() {
    const [showDemoMenu, setShowDemoMenu] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showMobileDemoSub, setShowMobileDemoSub] = useState(false);
    const submenuTimeout = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(submenuTimeout.current);
        setShowDemoMenu(true);
    };
    const handleMouseLeave = () => {
        submenuTimeout.current = setTimeout(() => setShowDemoMenu(false), 130);
    };

    const navLinks = [
        { label: "Inicio", href: "/" },
        { label: "Servicios", href: "/#servicios" },
        { label: "Sobre mí", href: "/sobre" },
        { label: "Planes", href: "/#planes" },
        { label: "Contacto", href: "/#contacto" },
    ];

    const demos = [
        { label: "Generador de Webs", href: "/demos/crea-tu-web" },
        { label: "ERP AltiCloud", href: "/demos/erp-alticloud" },
        // Más demos aquí si quieres
    ];

    return (
        <header className="bg-altiblue text-altiwhite p-4 flex justify-between items-center relative z-20">
            {/* Logo + Nombre */}
            <Link href="/" className="flex items-center gap-2 group">
                <Image
                    src="/alticloud.png"
                    alt="AltiCloud logo"
                    width={38}
                    height={38}
                    className="rounded-xl shadow-lg bg-altiwhite"
                    priority
                />
                <span className="text-2xl font-black tracking-tight group-hover:text-altiblueLight transition-colors duration-150 select-none">
                    AltiCloud
                </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
                <ul className="flex gap-6 items-center">
                    {navLinks.map(link => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="hover:underline hover:text-altiblueLight transition-colors"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button
                            className="hover:underline flex items-center gap-1 focus:outline-none"
                            aria-haspopup="true"
                            aria-expanded={showDemoMenu}
                        >
                            Demo
                            <svg width={16} height={16} fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth={2} /></svg>
                        </button>
                        {showDemoMenu && (
                            <ul
                                className="absolute right-0 left-auto top-full mt-1 bg-altiwhite text-altiblue rounded shadow-lg min-w-[210px] z-50 max-h-80 overflow-y-auto"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                {demos.map(demo => (
                                    <li key={demo.label}>
                                        <Link
                                            href={demo.href}
                                            className="block px-4 py-2 hover:bg-altiblueLight hover:text-altiblue transition-colors"
                                        >
                                            {demo.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
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
                        className="absolute right-0 top-0 bg-altiblue text-altiwhite w-64 h-full shadow-xl p-6 pt-20 flex flex-col gap-5"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex items-center gap-2 mb-4 md:hidden">
                            <Image
                                src="/alticloud.png"
                                alt="AltiCloud logo"
                                width={32}
                                height={32}
                                className="rounded-xl bg-altiwhite"
                            />
                            <span className="text-xl font-black tracking-tight">AltiCloud</span>
                        </div>
                        {navLinks.map(link => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="py-2 border-b border-altigray"
                                onClick={() => setShowMobileMenu(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        {/* Submenú mobile */}
                        <div>
                            <button
                                className="w-full flex justify-between items-center py-2 border-b border-altigray"
                                onClick={() => setShowMobileDemoSub(v => !v)}
                            >
                                <span>Demo</span>
                                <svg width={16} height={16} fill="none">
                                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth={2} />
                                </svg>
                            </button>
                            {showMobileDemoSub && (
                                <ul className="bg-altiwhite text-altiblue rounded shadow-lg mt-1">
                                    {demos.map(demo => (
                                        <li key={demo.label}>
                                            <Link
                                                href={demo.href}
                                                className="block px-4 py-2 hover:bg-altiblueLight hover:text-altiblue transition-colors"
                                                onClick={() => setShowMobileMenu(false)}
                                            >
                                                {demo.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
