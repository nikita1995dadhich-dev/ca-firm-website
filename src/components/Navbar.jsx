import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { FaPhoneAlt } from "react-icons/fa"
import  logo  from "../assets/caIndiaLogo.png"
import { colors } from "../constants/colors"
import { color } from "framer-motion"
import { dataInfo } from "../constants/data"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    return (

        <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFFFFF] backdrop-blur-lg border-b border-gray-200 shadow-sm"> 

            <div className="w-full px-2 md:px-4 lg:px-8 py-4 pb-0 flex items-stretch justify-between">

                {/* logo Section */}
                    <div className="flex items-stretch gap-1 md:gap-3 pb-0">

                        {/* Logo */}
                        <div className="shrink-0">
                            <Link to="/" onClick={() => setMenuOpen(false)} >
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="w-10 h-8 md:w-17 md:h-15 "
                                />
                            </Link> 
                        </div>  
                    


                        {/* Text */}
                        <div>
                            <Link to="/" onClick={() => setMenuOpen(false)}>
                                <h1 className="text-lg whitespace-nowrap overflow-hidden text-ellipsis leading-4 md:text-5xl font-bold text-[#145886] md:leading-9">

                                    {dataInfo.firstNameF}
                                    <span className="text-[#F37920] ">
                                        {" "} & </span>
                                    {dataInfo.lastNameF}

                                </h1>
                            </Link>

                            <div className=" flex items-center gap-3   py-0 whitespace-nowrap">

                                <div className=" flex-1 h-[2px] bg-[#F37920]"></div>

                                <p className="text-sm md:text-2xl lg:text-2xl  text-[#145886] text-center  shrink-0">

                                    {dataInfo.subNameF}

                                </p>

                                <div className="flex-1   h-[2px] bg-[#F37920]"></div>

                            </div>

                        </div>

                    </div>

                    {/* DESKTOP MENU */}
                    <div className="hidden lg:flex items-center gap-10 py-4 ">

                        <ul className="flex items-center gap-10 text-[#1F2937] font-medium text-lg py-3 ">

                            <li className={`${ location.pathname === "/" ? "text-[#F37920] hover:text-[#F37920]  cursor-pointer transition duration-300" : "hover:text-[#F37920]  cursor-pointer transition duration-300 text-[#145886]" } `}>
                                <Link to="/" className="text-2xl" >
                                    Home
                                </Link>
                            </li>

                            <li className={`${ location.pathname === "/about" ? "text-[#F37920] hover:text-[#F37920]  cursor-pointer transition duration-300" : "hover:text-[#F37920]  cursor-pointer transition duration-300 text-[#145886]" } `}>
                                <Link to="/about" className="text-2xl">
                                    About
                                </Link>
                            </li>

                            <li className={`${ location.pathname === "/services" ? "text-[#F37920] hover:text-[#F37920]  cursor-pointer transition duration-300" : "hover:text-[#F37920]  cursor-pointer transition duration-300 text-[#145886]" } `}>
                                <Link to="/services" className="text-2xl">
                                Services
                                </Link>
                            </li>

                            <li className={`${ location.pathname === "/contact" ? "text-[#F37920] hover:text-[#F37920]  cursor-pointer transition duration-300" : "hover:text-[#F37920]  cursor-pointer transition duration-300 text-[#145886]" } `}>
                                <Link to="/contact" className="text-2xl">
                                Contact
                                </Link>
                            </li>

                        </ul>

                        {/* Button */}
                        <Link to="/contact">
                            <button className="flex items-center gap-3 bg-[#F37920]  hover:scale-105 text-white px-7 py-4 rounded-2xl shadow-xl transition duration-300">
                                {/*bg-gradient-to-r from-blue-700 to-cyan-500*/}
                                    <FaPhoneAlt />

                                    Get Consultation
                                
                            </button>
                        </Link>

                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <div className="lg:hidden mt-0 h-10 md:h-22 md:w-20  flex  items-start justify-center ">
                        <button
                            className="text-5xl md:text-6xl  text-[#1F2937]  shrink-0"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >

                            {menuOpen ? <HiX /> : <HiMenuAlt3 />}

                        </button>
                    </div>
                    
                 
            </div>
                
            {/* MOBILE MENU */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-500 bg-[[#FFFFFF] border-t border-gray-100 ${
                menuOpen ? "max-h-[500px] py-6" : "max-h-0"
                }`}
            >

                <div className="px-6">

                    <ul className="flex flex-col gap-6 text-[#1F2937] font-medium text-lg">

                        <li className="hover:text-[#F37920]  cursor-pointer transition duration-300">
                            <Link to="/" className="text-xl" onClick={() => setMenuOpen(false)}>
                                Home
                            </Link>
                        </li>

                        <li className="hover:text-[#F37920]  cursor-pointer transition duration-300">
                            <Link to="/about" className="text-xl" onClick={() => setMenuOpen(false)}>
                                About
                            </Link>
                        </li>

                        <li className="hover:text-[#F37920]  cursor-pointer transition duration-300">
                            <Link to="/services" className="text-xl" onClick={() => setMenuOpen(false)}>
                            Services
                            </Link>
                        </li>

                        <li className="hover:text-[#F37920]  cursor-pointer transition duration-300">
                            <Link to="/contact" className="text-xl" onClick={() => setMenuOpen(false)}>
                            Contact
                            </Link>
                        </li>

                    </ul>
            
                    {/* Mobile Button */}
                     <Link to="/contact" onClick={() => setMenuOpen(false)}>
                        <button className="mt-8 w-full flex items-center justify-center gap-3 bg-[#F37920] hover:scale-105  text-white px-7 py-4 rounded-2xl shadow-xl">
                            {/*bg-gradient-to-r from-blue-700 to-cyan-500*/}
                                <FaPhoneAlt />
                            
                            Get Consultation

                        </button>
                    </Link>

                </div>

            </div> 

        </nav>

    )
}

export default Navbar