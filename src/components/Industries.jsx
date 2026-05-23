import { motion } from "framer-motion"

function Industries() {

  const industries = [
    "Healthcare",
    "Real Estate",
    "Retail",
    "Manufacturing",
    "Technology",
    "Finance"
  ]

  return (

    <section className="py-32 bg-gradient-to-b from-[#F8FAFC] to-[#EEF4FF]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <div className="inline-block px-6 py-2 rounded-full border border-blue-200 bg-blue-100 text-blue-700 uppercase tracking-[3px] text-sm font-medium">

            Industries

          </div>

          <h2 className="mt-8 text-6xl font-bold text-gray-900">

            Industries We Serve

          </h2>

          <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-9">

            We provide financial and taxation services
            across multiple industries and business sectors.

          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-24">

          {industries.map((industry, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[32px] shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-500 text-center border border-gray-100"
            >

              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 text-white flex items-center justify-center text-5xl shadow-xl">

                🏢

              </div>

              <h3 className="mt-10 text-3xl font-bold text-gray-900">

                {industry}

              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Industries