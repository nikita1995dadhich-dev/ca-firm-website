import { motion } from "framer-motion"


function Mission() {

  const data = [
    
      " To deliver accurate, timely, and practical financial and compliance solutions.",
    
      " To maintain the highest standards of professional ethics and integrity.",
    
      " To assist businesses in achieving sustainable growth through strategic financial guidance.",
    
      " To build long-term relationships by understanding client needs and providing personalized services.", 
    
      " To continuously upgrade knowledge and adapt to changing laws, regulations, and business environments."
    
]

  return (

    <section className="py-32 bg-[#FFFFFF] relative overflow-hidden">


       <div className="max-w-7xl mx-auto px-6"> 

        {/* Heading */}
        <div className="text-center">

          <div className="inline-block px-6 py-2 rounded-full border border-[#55B848] bg-[#EEF7FC] text-[#4B5563] uppercase tracking-[3px] text-sm font-medium">

            Mission

          </div>

          <h2 className="mt-8 text-6xl font-bold text-[#145886]">

            Reliable Professional Ethical

          </h2>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2  gap-8 mt-24">

          {data.map((item, index ) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-b from-[#145886]  to-[#1E6A9C]  p-10 rounded-[32px] shadow-lg hover:-translate-y-3 hover:shadow-2xl
                 transition duration-500 border border-gray-100 flex items-start gap-3
                    ${
                    data.length % 2 !== 0 &&
                    index === data.length - 1
                      ? "md:col-span-2 md:w-1/2 md:mx-auto"
                      : ""
                  }
              `}
            >

              <span className="text-[#55B848] text-xl shrink-0 mt-1">
                ✅
              </span>

              <p className="mt-1 text-xl font-bold text-[#FFFFFF] md:text-base">

                {item}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Mission