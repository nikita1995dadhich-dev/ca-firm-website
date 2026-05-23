import { motion } from "framer-motion"
import { dataInfo } from "../constants/data"
import { Link } from "react-router-dom"

function AboutSection() {
    return (
    
        <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#145886]  to-[#1E6A9C]">
    
          {/* Main Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 grid  gap-20 items-center ">

            {/*  CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
    
              {/* Small Badge */}
              <div className="inline-block px-6 py-2 rounded-full border border-[#55B848] bg-[#1E6A9C] text-[#FFFFFF] uppercase tracking-[3px] text-sm font-medium">
    
                About Our Firm
    
              </div>
    
              {/* Main Heading */}
              
              <h2 className="mt-8 text-6xl font-bold text-[#FFFFFF] leading-tight">
    
                {dataInfo.firstNameF} <span className="text-[#F37920]">
                {" "} & </span> {dataInfo.lastNameF} 
  
              </h2>
    
              {/* Description */}
              <p className="mt-10 text-xl text-[#E5E7EB] leading-9 text-justify">
    
                At <span className="text-[#F37920] bold text-2xl">{dataInfo.firmName}, {dataInfo.subNameF},</span> we are committed to providing professional, ethical, and value-driven financial and compliance solutions to businesses, startups, professionals, and individuals. With a client-focused approach and practical industry experience, we assist our clients in navigating today’s dynamic regulatory and financial environment with confidence and clarity.
                Our firm offers a wide range of services including Income Tax, GST, Audit & Assurance, TDS Compliance, ROC Filings, Financial Advisory, and Fund-Raising Services including IPO-related support. We believe in delivering timely, transparent, and reliable professional services while maintaining the highest standards of integrity and professionalism.
              </p>

              {/* Buttons */}
              <div className="flex gap-6 mt-14">
    
                <button className="bg-[#E58B2A] hover:scale-105 text-[#E5E7EB] px-8 py-4 rounded-2xl shadow-xl transition duration-300">
                    <Link to="/about"> {/*bg-blue-700*/}
                        Learn More
                    </Link>
                </button>
    
                <button className="border border-[#55B848] bg-[#1E6A9C] text-[#E5E7EB] px-8 py-4 rounded-2xl hover:bg-[#E58B2A]  hover:text-white transition duration-300">
                    <Link to="/contact">
                        Contact Us
                    </Link>
                </button>
    
              </div>
    
            </motion.div>
    
          </div>
    
        </section>
    
    )
}

export default AboutSection