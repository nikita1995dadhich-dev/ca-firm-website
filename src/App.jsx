import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import ServicesPage from "./pages/ServicesPage"
import Contact from "./pages/Contact"
import {  Routes, Route } from "react-router-dom"
import { dataInfo } from "./constants/data"
import { FaWhatsapp } from "react-icons/fa"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
          <a
            href={`https://wa.me/${dataInfo.whatsappNo}`}
            target="_blank"
            className="fixed bottom-6 right-6 bg-[#55B848]  px-4 py-3 rounded-full shadow-lg"
          >
            <FaWhatsapp className="text-[#FFFFFF] text-4xl" />
          </a>
        </div>
      <Footer />
    </div>
  )
}

export default App
