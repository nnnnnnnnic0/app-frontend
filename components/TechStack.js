// components/TechStack.js
export default function TechStack() {
    return (
        <section className="py-10 bg-blue-50">
            <div className="container mx-auto px-3">
                <h2 className="text-xl xs:text-2xl font-bold text-altiblue mb-2 text-center">Tecnología de clase mundial</h2>
                <p className="text-altigray text-center mb-7 max-w-2xl mx-auto text-base xs:text-lg">
                    Tu negocio funciona sobre las mejores plataformas del mundo.<br />
                    Modernización, automatización y análisis gracias a socios líderes.
                </p>
                <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 items-center justify-items-center mx-auto max-w-3xl">
                    <img src="/aws.svg" alt="Amazon Web Services" className="h-10 w-auto bg-white rounded-xl shadow border border-blue-100 p-2 hover:scale-105 hover:shadow-lg transition" />
                    <img src="/nextdotjs.svg" alt="Next.js" className="h-10 w-auto bg-white rounded-xl shadow border border-blue-100 p-2 hover:scale-105 hover:shadow-lg transition" />
                    <img src="/python.svg" alt="Python" className="h-10 w-auto bg-white rounded-xl shadow border border-blue-100 p-2 hover:scale-105 hover:shadow-lg transition" />
                    <img src="/tailwindcss.svg" alt="Tailwind CSS" className="h-10 w-auto bg-white rounded-xl shadow border border-blue-100 p-2 hover:scale-105 hover:shadow-lg transition" />
                    {/* Suma más si quieres, por ejemplo PostgreSQL, React, etc. */}
                </div>
                <div className="text-sm mt-7 text-center text-altigray font-medium">
                    + Consultoría personalizada en cada etapa &mdash; <span className="text-altiblue">AltiCloud</span>
                </div>
            </div>
        </section>
    );
}
