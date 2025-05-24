export default function Header() {
    return (
        <header className="bg-blue-800 text-white shadow-md">
            <nav className="container mx-auto flex justify-between items-center p-4">
                <span className="text-2xl font-bold tracking-tight">Mi Proyecto SaaS</span>
                <ul className="flex gap-6 text-lg font-semibold">
                    <li><a href="#inicio" className="hover:text-blue-300 transition">Inicio</a></li>
                    <li><a href="#servicios" className="hover:text-blue-300 transition">Servicios</a></li>
                    <li><a href="#sobre" className="hover:text-blue-300 transition">Sobre mí</a></li>
                    <li><a href="#contacto" className="hover:text-blue-300 transition">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}
