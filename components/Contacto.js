export default function Contacto() {
    return (
        <section id="contacto" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-blue-800">Contacto</h2>
                <p className="mb-8 text-lg text-gray-700">¿Te interesa una demo o solución a medida? <br /> ¡Escríbeme y conversemos!</p>
                <a href="mailto:tuemail@tudominio.com" className="inline-block px-8 py-3 bg-blue-800 text-white rounded-lg font-semibold shadow hover:bg-blue-900 transition">Enviar Email</a>
            </div>
        </section>
    );
}
