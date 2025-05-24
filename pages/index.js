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
            <main>
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
