import { motion } from "framer-motion"

function CTA() {
    return (
        <section className="relative py-32 overflow-hidden bg-[#FFFFFF]">
   
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Bottom CTA */}
                <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="mt-24 bg-gradient-to-b from-[#145886]  to-[#1E6A9C]  rounded-[40px] p-16 text-center shadow-2xl"
                >
                    <h2 className="text-5xl font-bold text-[#FFFFFF]">

                        Need Professional Financial Help?

                    </h2>
 
                    <p className="mt-6 text-xl text-[#FFFFFF]">

                        Let’s discuss how we can help your business grow.

                    </p>

                    <button className="border border-[#55B848] mt-10 bg-[#E5E7EB] text-[#1E6A9C]  hover:bg-[#E58B2A] px-10 py-5 rounded-2xl font-semibold shadow-xl transition duration-300">
                        <a href="/contact">
                            Contact Us
                        </a>
                    </button>

                </motion.div>
            </div>
        </section>
    )
}
export default CTA