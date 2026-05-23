import officeImg from "../assets/office.jpg"
import officeImg2 from "../assets/office2.jpg"
import { motion } from "framer-motion"

function HeroSection() {
    return (

        <section className="relative h-screen overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${officeImg2})`
                }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Animated Blur Circle */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse"></div>

            {/* Content */} 
            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">

                <div className="max-w-3xl">

                    {/* Small Tag */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="inline-block bg-blue-700/30 backdrop-blur-md border border-blue-400 text-white px-6 py-2 rounded-full text-sm tracking-widest uppercase"
                    >
                        Trusted Chartered Accountants
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mt-8 text-5xl md:text-7xl font-bold text-white leading-tight"
                    >
                        Smart Financial
                        <span className="text-blue-400"> Solutions </span>
                        For Modern Businesses
                    </motion.h1>

                    {/* Paragraph */}
                    <motion.p 
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="mt-8 text-xl text-gray-300 leading-9"
                    >
                       Professional taxation, audit and accounting services
                       designed to help your business grow with confidence.
                    </motion.p> 

                    {/* Buttons */}
                    <motion.div 
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4 }}
                        className="flex gap-5 mt-12"
                    >

                       <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl shadow-2xl transition transform hover:scale-105">
                            <a href="/contact">
                                Contact Us
                            </a>  
                        </button>

                        <button className="border border-white text-white px-6 py-4 rounded-xl hover:bg-white hover:text-black transition">
                            <a href="/services">
                                Explore Services
                            </a>
                        </button>

                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="flex gap-12 mt-16"
                    >
                        
                        <div>
                            
                            <h2 className="text-4xl font-bold text-blue-400">
                                10+
                            </h2>

                            <p className="text-gray-300 mt-2">
                                Years Experience
                            </p>

                        </div>

                        <div>
                            
                            <h2 className="text-4xl font-bold text-blue-400">
                                500+
                            </h2>

                            <p className="text-gray-300 mt-2">
                                Clients Served
                            </p>

                        </div>

                        <div>
                            
                            <h2 className="text-4xl font-bold text-blue-400">
                                24/7
                            </h2>

                            <p className="text-gray-300 mt-2">
                                Support
                            </p>

                        </div>

                    </motion.div>
                    
                </div>

            </div>
            
        </section>

    )
}

export default HeroSection