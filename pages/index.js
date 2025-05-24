import Header from '../components/Header1'
import Hero from '../components/Hero'
import Servicios from '../components/Servicios'
import Sobre from '../components/Sobre'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer1'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Servicios />
                <Sobre />
                <Contacto />
            </main>
            <Footer />
        </>
    )
}
