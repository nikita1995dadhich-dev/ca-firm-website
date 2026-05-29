import { motion } from "framer-motion"
import { dataInfo } from "../constants/data"
import  profile  from "../assets/profile.jpeg"
import profile2 from "../assets/profile2.jpeg"
import { Link } from "react-router-dom"

function About() {

  const values = [
    {
      icon: "🤝",
      title: "Integrity",
      desc: "We maintain complete transparency and professionalism in every service."
    },

    {
      icon: "⚡",
      title: "Commitment",
      desc: "Dedicated support and timely solutions for all clients."
    },

    {
      icon: "📈",
      title: "Growth",
      desc: "Helping businesses achieve financial growth and stability."
    }
  ]

  return (

    <section className="relative mt-0 overflow-hidden bg-[#FFFFFF] ">

      {/* HERO SECTION */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6  pt-25 md:pt-32 pb-24 grid grid-cols-1  gap-10 items-center ">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
  
            {/* Small Badge */}
            <div className="inline-block px-6 py-2  rounded-full border border-[#55B848] bg-[#F7FAFC] text-[#4B5563] uppercase tracking-[3px] text-sm font-medium">
  
              About Our Firm
  
            </div>
  
            {/* Main Heading */}
            <h2 className="mt-8 whitespace-nowrap overflow-hidden text-xl md:text-6xl font-bold text-[#145886] leading-tight">
  
              {dataInfo.firstNameF} <span className="text-[#F37920]">
              {" "} & </span> {dataInfo.lastNameF} 

            </h2>
  
            {/* Description */}
            <p className="mt-8 md:mt-10 text-m md:text-xl  text-justify text-[#4B5563] leading-7 break-words w-full max-w-full">
  
              <span className="text-[#F37920] bold text-xl md:text-3xl"> {dataInfo.subNameF} </span> is a professionally managed Chartered Accountancy firm established with the objective of providing comprehensive financial, taxation, compliance, and advisory services under one roof.<br>
              </br>
              <br></br>
              The firm is dedicated to delivering quality professional services with a practical and solution-oriented approach. We cater to startups, small and medium enterprises (SMEs), corporate entities, and individual clients across various sectors. Our focus lies in providing reliable advisory and compliance support while ensuring complete client satisfaction.<br>
              </br>
              <br></br>
              At <span className="text-[#F37920] text-bold">{dataInfo.firmName}</span>, we believe in building lasting professional relationships through trust, transparency, dedication, and quality service.

            </p>

          </motion.div>
          
      </div>

      {/* Proprietor Details */}
      <div className="max-w-7xl mx-auto px-6 py-0">
        
        <div className="inline-block px-6 py-2  rounded-full border border-[#55B848] bg-[#F7FAFC] text-[#4B5563] uppercase tracking-[3px] text-sm font-medium">

          Proprietor Details

        </div>

        <h2 className="mt-8 whitespace-nowrap overflow-hidden text-2xl md:text-6xl font-bold text-[#145886] leading-tight">

          {dataInfo.founderName}

        </h2>
        
        

        <div className="flex flex-col lg:flex-row items-stretch gap-8 w-full">

            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="lg:w-[35%] mt-8 flex items-center justify-center  overflow-hidden p-6"
            >
              
              <img
                src={profile2}
                alt="profile"
                className=" w-48 h-48 object-cover object-[center_top] rounded-3xl  shadow-xl border border-[#55B848]"
              />

            </motion.div>
          
            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >

              
              <div className="flex-1 min-w-0 ">
                <p className="mt-8 md:mt-16 text-m md:text-xl text-justify break-words text-[#4B5563] leading-7  items-start">

                  <span className="text-[#F37920] semibold text-2xl"> {dataInfo.founderName} </span>is the Founder and Proprietor of <span className="text-[#F37920] ">{dataInfo.firmName}</span>. He is a qualified <span className="text-[#F37920] ">{dataInfo.subNameF}</span> who completed his Chartered Accountancy qualification in September 2025.
                  <br></br><br></br>
                  He holds a Bachelor of Commerce (B. Com) degree and possesses strong professional exposure in the areas of Income Tax, GST, Audit & Assurance, TDS Compliance, ROC Compliances, Financial Advisory, and Fund-Raising Services including IPO-related work.
                  
                </p>
              </div>
            

            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="mt-8 text-m md:text-xl text-justify break-words text-[#4B5563] leading-7  items-start w-full">
                  With strong analytical skills, practical knowledge, and a commitment towards professional excellence, <span className="text-[#F37920]">{dataInfo.founderName} </span> aims to provide reliable, efficient, and value-driven financial solutions tailored to client requirements.
                <br></br><br></br>
                His vision is to establish a trusted professional practice known for integrity, quality service, and long-term client relationships.

            </p>

          </motion.div>


          
      </div>

      {/* VALUES SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* Heading */}
        <div className="text-center">

          <div className="inline-block px-6 py-2 rounded-full border border-[#55B848] bg-[#F7FAFC] text-[#4B5563] uppercase tracking-[3px] text-sm font-medium">

            Our Values

          </div>

          <h2 className="mt-8 text-6xl font-bold text-[#145886]">

            Core Values That
            Drive Our Firm

          </h2>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-24">

          {values.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F7FAFC] p-10 rounded-[36px] shadow-lg border border-[#55B848] hover:-translate-y-3 hover:shadow-2xl transition duration-500"
            >

              {/* Icon */}
              <div className="w-20 h-20 rounded-3xl bg-[#1E6A9C] text-white flex items-center justify-center text-4xl shadow-xl">

                {item.icon}

              </div>

              {/* Title */}
              <h3 className="mt-8 text-3xl font-bold text-[#145886]">

                {item.title}

              </h3>

              {/* Desc */}
              <p className="mt-6 text-[#4B5563] leading-8 text-lg">

                {item.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

      {/* CTA SECTION */}
      <div className="max-w-7xl mx-auto px-6 pb-32">

        <div className="bg-gradient-to-b from-[#145886]  to-[#1E6A9C] rounded-[40px] p-20 text-center shadow-2xl">

          <h2 className="text-5xl md:text-6xl font-bold text-[#FFFFFF]">

            Let’s Build Your
            Financial Future Together

          </h2>

          <p className="mt-8 text-xl text-[#FFFFFF] max-w-3xl mx-auto leading-9">

            Get expert financial and taxation services
            tailored for your business needs.

          </p>

          <button className=" border border-[#55B848] mt-12 bg-[#E5E7EB] text-[#1E6A9C]  hover:bg-[#E58B2A] px-10 py-5 rounded-2xl font-semibold shadow-xl hover:scale-105 transition duration-300">
            <Link to="/contact">
              Contact Us
            </Link>
          </button>

        </div>

      </div>

    </section>

  )
}

export default About