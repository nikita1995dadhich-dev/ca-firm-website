import { motion } from "framer-motion"
import { services } from "../constants/services"

function ServicesPage() {

 

  return (

    <section className="relative py-32 overflow-hidden bg-[#FFFFFF]">


      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <div className="inline-block px-6 py-2 rounded-full border border-[#55B848] bg-[#F7FAFC] text-[#4B5563] uppercase tracking-[3px] text-sm font-medium">

            Our Services

          </div>

          <h2 className="mt-8 text-6xl font-bold text-[#145886]">

            Complete Financial
            Solutions For Your Business

          </h2>

          

        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols- gap-10 mt-24">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#F7FAFC] rounded-[36px] p-10 shadow-lg border border-[#55B848] hover:shadow-2xl hover:-translate-y-3 transition duration-500 relative overflow-hidden"
            >

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Content */}
              <div className="relative z-10">

                {/* Top */}
                <div className="flex items-center gap-6">

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-3xl bg-[#1E6A9C] text-white flex items-center justify-center text-4xl shadow-xl">

                    {service.icon}

                  </div>

                  {/* Title */}
                  <div className="inline-block">

                    <h3 className="text-3xl font-bold text-[#145886]">

                      {service.title}

                    </h3>

                    <div className="w-full h-1 bg-[#F37920] rounded-full mt-4"></div>

                  </div>

                </div>

                {/* Description */}
                <p className="mt-8 text-[#4B5563] leading-8 text-xl">

                  {service.description}

                </p>

                {/* Sub Services */}
                <div className="mt-10 space-y-6">

                  {service.subServices.map((item, i) => (

                    <div
                      key={i}
                      className="flex gap-5 bg-gray-50 p-5  rounded-2xl hover:bg-white hover:shadow-md transition duration-300"
                    >

                      {/* Tick */}
                      <div className="min-w-[45px] h-[45px] rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-lg font-bold">

                      {/*  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-400  to-gray-300 text-white flex items-center justify-center text-2xl shadow-xl"> */}

                          {item.icon}

                       {/* </div> */}

                      </div>

                      {/* Text */}
                      <div>

                        <h4 className="text-xl font-semibold text-[#145886]">

                          {item.name}

                        </h4>

                        <p className="mt-2 text-[#4B5563] leading-7">

                          {item.desc}

                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default ServicesPage