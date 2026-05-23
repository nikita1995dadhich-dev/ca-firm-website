import AboutSection from "../components/AboutSection"
import Services from "../components/Services"
import WhyChooseUs from "../components/WhyChooseUs"
import CTA from "../components/CTA"
import Vision from "../components/Vision"
import Mission from "../components/Mission"

function Home() {
    return (
        <>
            <AboutSection />
            <Vision />
            <Mission />
            <Services />
            <WhyChooseUs />
            <CTA />
        </> 
    )
}

export default Home