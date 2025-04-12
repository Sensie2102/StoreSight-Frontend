import Footer from "@/components/Footer"
import ContactSection from "@/components/HomePage/Contactsection"
import Featuresection from "@/components/HomePage/Featuresection"
import Herosection from "@/components/HomePage/Herosection"
import Navbar from "@/components/Navbar"

const Home = () => {
    return (
        <>
            <Navbar />
            <Herosection />
            <section id="features" >
                <Featuresection />
            </section>
            <section id="Contact" >
                <ContactSection />
            </section>
            <Footer />
        </>

    )
}

export default Home
