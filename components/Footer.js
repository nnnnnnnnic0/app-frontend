export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-6 mt-0">
            <div className="container mx-auto px-4 text-center text-xs sm:text-sm">
                © {new Date().getFullYear()} ReyesVallejos · Todos los derechos reservados.
            </div>
        </footer>
    );
}
