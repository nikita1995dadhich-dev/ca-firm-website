import { FaLinkedin, FaFacebook, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope , FaMapPin    } from "react-icons/fa"
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { services } from "../constants/services"
import { ContactUsTemplateInfo } from "../constants/email"
import { dataInfo } from "../constants/data"

function Contact() {
    
    const form = useRef()
    
      const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            ContactUsTemplateInfo.YOUR_SERVICE_ID,
            ContactUsTemplateInfo.YOUR_TEMPLATE_ID,
            form.current,
            ContactUsTemplateInfo.YOUR_PUBLIC_KEY
        )
        .then(() => {
          alert("Message Sent Successfully")
          form.current.reset()
        })
        .catch(() => {
          alert("Failed to send message")
        })
      }

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 ">

                {/* Heading */}
                
                <div className="text-center">
                    
                    <div className="inline-block mt-4 text-center px-6 py-1 rounded-full border border-[#55B848] bg-[#F7FAFC] text-[#4B5563] uppercase tracking-[3px] text-sm font-medium">

                        Contact Us
        
                    </div>
                    <h1 className="text-5xl font-bold text-[#145886] mt-4">
                        Contact Us
                    </h1>
                    <div className="w-60 h-1 bg-[#F37920] mx-auto mt-5 rounded-full"></div>
                    <p className="mt-8 text-[#4B5563] text-xl">
                        We're here to help and answer any question you might have.
                    </p>
                </div>
                
                {/* Main Grid */}
                <div className="grid md:grid-cols-2 gap-10 mt-20 ">

                    {/* Left form */}
                    <div className="bg-[#FFFFFF] p-10 rounded-3xl shadow-sm border border-[#55B848]">
                        <h2 className="text-4xl font-medium text-[#145886]">
                            Send Us a Message
                        </h2>
                        <p className="mt-4 text-[#4B5563]">
                            Fill out the form below and we'll get back to you.
                        </p>
                        <form ref={form} onSubmit={sendEmail}>

                            {/* Name */}
                            <div className="mt-10">
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="Your Name"                                       
                                    className="w-full placeholder:text-[#9CA3AF] border  border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-700"
                                    />
                            </div>

                            {/* Email */}
                            <div className="mt-6">
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full placeholder:text-[#9CA3AF] border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-700"
                                    />
                            </div>
                            {/* phone */}
                            <div className="mt-6">
                                <input 
                                    type="phone" 
                                    name="phone"
                                    placeholder="Your phone"
                                    className="w-full placeholder:text-[#9CA3AF] border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-700"
                                    />
                            </div>

                            {/* service */}
                            <div className="mt-6">
                                <select
                                    name="title"
                                    className="w-full  text-[#9CA3AF] border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-700"
                                >

                                    <option value="" className="text-[#9CA3AF]">
                                        Select Service
                                    </option>

                                    {services.map((service) => (
                                        <option key={service.title} value={service.title} className="text-[#9CA3AF]">
                                        {service.title}
                                        </option>
                                    ))}

                                </select>
                            </div>
                        
                            {/* Message */}
                            <div className="mt-6">
                                    <textarea 
                                        name="message"
                                        placeholder="Your Message"
                                        rows="6"
                                        className="w-full placeholder:text-[#9CA3AF] border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-700"
                                        >
                                    </textarea>
                            </div>
                            
                            {/* Button */}
                            <button type="submit" className="mt-8 bg-[#F37920]  hover:scale-105 text-white px-8 py-4 rounded-xl transition">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Info Card */}
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-[#55B848] overflow-hidden">
                        <div className="items-stretch">
                            <h2 className="text-base md:text-4xl font-medium text-[#145886] leading-tight whitespace-nowrap  ">
                                {dataInfo.firstNameF}
                                <span className="text-[#F37920]">
                                    {" "} & </span>
                                {dataInfo.lastNameF}
                            </h2> 
                            <div className="flex items-center gap-1 md:gap-3 whitespace-nowrap mt-1 ">

                                <div className="flex-1 h-[1px] bg-[#F37920]"></div>

                                <p className="text-sm md:text-xl text-[#145886] text-center shrink-0 ">

                                    {dataInfo.subNameF}

                                </p>

                                <div className="flex-1 h-[1px] bg-[#F37920]"></div>

                            </div>
                        </div>
                        <div className="grid md:grid-col-2 gap-10 mt-12">
                            {/* Main Office */}
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className=" text-red-700 w-7 rounded-full flex items-center justify-center text-lg md:text-2xl">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <h3 className="text-lg md:text-2xl font-semibold text-[#1F2937]">
                                        Office Address 
                                    </h3>
                                </div>
                                <p className="mt-6 text-[#4B5563] text-base md:text-lg flex gap-3">
                                    <FaMapPin  className="mt-1 text-3xl  md:text-xl text-red-700" /> 
                                    {dataInfo.address}
                                </p>
                                <p className="mt-4 text-[#4B5563]  text-base md:text-lg flex gap-3">
                                    <FaPhoneAlt className="mt-1 text-blue-700" />
                                    {dataInfo.phoneNo}
                                </p>
                                <p className="mt-4 text-[#4B5563] text-base md:text-lg flex gap-3">
                                    <FaEnvelope className="mt-1 text-black-700" />
                                     {dataInfo.emailAddress}
                                </p>
                            </div>

                            {/* Social Links */}
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className=" text-blue-700 w-7 h-14 rounded-full flex items-center justify-center text-lg md:text-2xl">
                                        🔗
                                    </div>
                                    <h3 className="text-lg md:text-2xl font-semibold text-[#1F2937]">
                                        Follow Us
                                    </h3>
                                </div>
                                <div className="flex gap-4 mt-8">
                                    
                                    <a href={dataInfo.facebookLink} className="bg-white-200 text-blue-500" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook size={30} />
                                    </a>
                                    <a href={dataInfo.instagramLink} className="bg-white-200 text-pink-700" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram size={30} />
                                    </a>
                                    <a href={dataInfo.inkedinLink} className="bg-white-200 text-blue-500" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size={30} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Map */}
                <div className="mt-16 rounded-3xl overflow-hidden shadow-sm border border-[#55B848]">
                    <iframe 
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.394158278004!2d72.58152137571287!3d23.1192637127123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83b5e5b63969%3A0x8e9fab21b1a3b12c!2sAnikedhya%20Atlantis!5e0!3m2!1sen!2sin!4v1779351260177!5m2!1sen!2sin"
                        className="w-full h-[500px]"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        >z
                    </iframe>
                </div>

            </div>
        </section>
    )
}
export default Contact