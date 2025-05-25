import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white py-10 px-4 flex flex-col items-center">
                <section className="w-full max-w-2xl text-center">
                    <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6">
                        Sobre este proyecto
                    </h1>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3">
                        Aquí irán detalles, equipo, contacto, etc.<br />
                        Puedes personalizar esta página para explicar tu misión, tu equipo y cómo nació tu proyecto.
                    </p>
                    {/* Puedes agregar aquí más contenido, fotos, links, etc. */}
                </section>
            </main>
            <Footer />
        </>
    )
}
