import { motion } from "framer-motion"
import { FaChartBar, FaRupeeSign, FaFileInvoiceDollar, FaBuilding, FaChartLine, FaBriefcase,  FaCreditCard, FaUserTie, FaBalanceScale, FaRocket,      } from "react-icons/fa";
import { services } from "../constants/services"

function Services() {
  
    return (
        <section className="relative py-32 overflow-hidden bg-[#FFFFFF]">
            {/* Background Blur */}
            {/* <div className="absolute top-0 leftzzz-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-200/20 rounded-full blur-3xl"></div> */}

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
                >

                {/* Small Badge */}
                <div className="inline-block px-6 py-2 rounded-full border border-[#55B848] bg-[#F7FAFC] text-[#4B5563] uppercase tracking-[3px] text-sm font-medium">

                    Our Services

                </div>

                {/* Main Heading */}
                <h2 className="mt-8 text-6xl font-bold text-[#145886]">

                    Professional Services
                    For Your Business

                </h2>

                {/* Description */}
                <p className="mt-8 max-w-3xl mx-auto text-xl text-[#4B5563] leading-9">

                    We provide complete taxation, accounting,
                    audit and business advisory solutions with
                    professionalism and transparency.

                </p>

                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-10 mt-24">

                {services.map((service, index) => (
                  
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-gradient-to-b from-[#145886]  to-[#1E6A9C] border border-gray-100 p-10 rounded-[32px] shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500 relative overflow-hidden"
                    >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-[#2678AE] opacity-0 group-hover:opacity-100 transition duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10">

                        <div className="flex items-start gap-4">
                            {/* Icon */}
                            <div className="w-16 h-16 md:w-20 md:h-20  rounded-3xl bg-[#1E6A9C] text-white flex border border-[#55B848] items-center justify-center text-3xl md:text-4xl shadow-xl shrink-0">
                            {/*bg-gradient-to-br from-blue-600 to-cyan-500*/}
                            {service.icon}

                            </div>

                            {/* Title */}
                            <h3 className=" text-xl md:text-3xl font-bold text-[#FFFFFF] leading-snug">

                            {service.title}

                            </h3>
                        </div>

                        {/* Desc */}
                        <p className="mt-6 text-[#FFFFFF] leading-8 text-xl">

                        {service.description}

                        </p>

                        {/* Learn More */}
                        <button className="mt-8 text-[#F37920] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                            <a href="/services" className="hover:text-[#FFFFFF]">
                                Learn More →
                            </a>
                        </button>

                    </div>

                    </motion.div>

                ))}

                </div>

            </div>

        </section>
    )
}

export default Services