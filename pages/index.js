import Header from '../components/Header'
import Hero from '../components/Hero'
import Servicios from '../components/Servicios'
import Ventajas from '../components/Ventajas'
import Testimonios from '../components/Testimonios'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <main className="px-2 sm:px-0">
                <Hero />
                <Servicios />
                <Ventajas />
                <Testimonios />
                <Contacto />
            </main>
            <Footer />
        </>
    );
}
