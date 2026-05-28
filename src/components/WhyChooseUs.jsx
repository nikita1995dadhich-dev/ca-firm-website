import { motion } from "framer-motion"




function WhyChooseUs() {

  const data = [
    {
      icon: "🏛️",
      title: "Professional & Ethical Approach",
      desc: "Experienced financial and taxation professionals."
    },
    {
      icon: "⏰",
      title: "Timely Service Delivery",
      desc: "Transparent and reliable financial solutions."
    },
    {
      icon: "🤝",
      title: "Personalized Client Support",
      desc: "Fast response and dedicated client support."
    },
    {
      icon: "💰",
      title: "Experienced Financial Advisory",
      desc: "Strategic financial guidance backed by industry knowledge and practical expertise."
    },
    {
      icon: "💻",
      title: "Technology Driven Solutions",
      desc: "Modern tools and digital processes for efficient and accurate financial services."
    },
    {
      icon: "🔍",
      title: "Transparent Communication",
      desc: "Clear, honest, and timely communication to keep clients informed at every step."
    }
  ]

  return (

    <section className="py-32 bg-white relative overflow-hidden">

      {/* Blur */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

       <div className="max-w-7xl mx-auto px-6"> 
        {/*<div className="w-full px-6">*/}

        {/* Heading */}
        <div className="text-center">

          <div className="inline-block px-6 py-2 rounded-full border border-[#55B848] bg-[#F7FAFC] text-[#4B5563] uppercase tracking-[3px] text-sm font-medium">

            Why Choose Us

          </div>

          <h2 className="mt-8 text-6xl font-bold text-[#145886]">

            Why Businesses Trust Us

          </h2>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">

          {data.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F7FAFC] p-10 rounded-[32px] shadow-lg border border-[#55B848] hover:-translate-y-3 hover:shadow-2xl transition duration-500 "
            >

              <div className="w-20 h-20 rounded-2xl bg-[#1E6A9C] text-white flex items-center justify-center text-4xl shadow-xl">
                  {/*bg-gradient-to-r from-[#0A3D78] to-cyan-500 */}
                {item.icon}

              </div>

              <h3 className="mt-8 text-3xl font-bold text-[#145886]">

                {item.title}

              </h3>

              <p className="mt-5 text-[#4B5563] leading-8">

                {item.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default WhyChooseUs