import { Link } from "react-router-dom"
import { FaPhoneAlt,  FaEnvelope , FaMapPin    } from "react-icons/fa"
import { dataInfo } from "../constants/data"
import { colors } from "../constants/colors"


function Footer() {
    return (
        <footer className="bg-[#0D3E5F] text-[#CBD5E1] py-12">

            <div className=" max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

                {/* Cpmpany Info */}
                <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#FFFFFF] whitespace-nowrap">
                        {dataInfo.firmName}
                    </h2>
                    
                    <p className="mt-4 text-[#CBD5E1] leading-7 text-sm md:text-base">
                        Professional taxation, audit and accounting services
                        for businesses and individuals.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl text-[#FFFFFF] font-semibold">
                        Quick Links
                    </h2>
                    
                    <ul className="text-sm md:text-base mt-4 space-y-3 text-[#CBD5E1]">
                        <li>
                            <Link to="/" className="hover:text-[#F37920]">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-[#F37920]">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="hover:text-[#F37920]">
                            Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-[#F37920]">
                            Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact info */}
                <div>
                    <h3 className="text-xl text-[#FFFFFF] font-semibold">
                        Contact Us
                    </h3>
                    
                    <ul className="text-sm md:text-base mt-4 space-y-3 text-[#CBD5E1]">
                        <li className="flex gap-3">
                            <div className="mt-2 text-pink-500">
                                <FaMapPin  />
                            </div>
                            <div>
                                {dataInfo.address}
                            </div>
                        </li> 
                        <li className="flex gap-3">
                            <div className="mt-1 text-pink-500">
                                <FaPhoneAlt  />
                            </div>
                            <div>
                                {dataInfo.phoneNo}
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <div className="mt-2 text-black-700">
                                <FaEnvelope  />
                            </div>
                            <div>
                                {dataInfo.emailAddress}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="text-sm md:text-base border-t border-gray-700 mt-10 pt-6 text-center text-[#CBD5E1]">
                Copyright © 2026 | Powered by JAISANSARIYA & ASSOCIATES | All Rights Reserved. 
            </div>
            
        </footer>
    )
}

export default Footer