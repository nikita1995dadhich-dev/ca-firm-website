import { motion } from "framer-motion"

function Vision() {
    return (
        <section className="relative py-32 overflow-hidden bg-[#FFFFFF]">
            {/* Background Blur */}
            {/* <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-200/20 rounded-full blur-3xl"></div> */}

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Bottom Vision */}
                <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="mt-24 bg-[#F7FAFC]  rounded-[40px] p-16 text-center shadow-2xl"
                >
                    {/*bg-gradient-to-r from-[#0A3D78] to-cyan-900z*/}

                <div className="inline-block px-6 py-2 rounded-full border border-[#55B848] bg-[#EEF7FC] text-[#4B5563] uppercase tracking-[3px] text-sm font-medium">

                    Vision

                </div>
                <h2 className="text-7xl mt-4 font-bold text-[#145886]">

                    Vision

                </h2>
 
                <p className="mt-6 text-xl text-[#6B7280]">

                    To provide professional, ethical, and efficient financial and compliance services to businesses and individuals while building long-term client relationships through trust, quality, and excellence.

                </p>

                <button className="mt-10 bg-[#F37920] text-[#FFFFFF] hover:scale-107 px-10 py-5 rounded-2xl font-semibold shadow-xl transition duration-300">
                    <a href="/about">
                        Get More About Us
                    </a>
                </button>

                </motion.div>
            </div>
        </section>
    )
}
export default Vision