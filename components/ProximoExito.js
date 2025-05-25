// components/ProximoExito.js
export default function ProximoExito() {
    return (
        <section className="py-12 bg-blue-50">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-6 text-altiblue">¿Te sumas al cambio?</h2>
                <div className="bg-white rounded-xl shadow px-8 py-7 mx-auto max-w-xl">
                    <p className="text-blue-900 text-lg font-medium">
                        Nos encantaría ayudarte a transformar tu negocio con tecnología de alto nivel.<br />
                        <span className="text-altiblue font-bold">¡Tu experiencia podría ser nuestro próximo caso de éxito!</span>
                    </p>
                    <a
                        href="#contacto"
                        className="inline-block mt-5 px-8 py-3 bg-altiblue text-white font-bold rounded-2xl shadow hover:bg-altiblueLight transition"
                    >
                        Hablemos
                    </a>
                </div>
            </div>
        </section>
    );
}
