function Counters() {

  const counters = [
    {
      number: "500+",
      label: "Happy Clients"
    },
    {
      number: "10+",
      label: "Years Experience"
    },
    {
      number: "50+",
      label: "Expert Team"
    },
    {
      number: "24/7",
      label: "Client Support"
    }
  ]

  return (

    <section className="py-28 bg-gradient-to-r from-blue-700 to-cyan-600">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">

        {counters.map((item, index) => (

          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[32px] p-10"
          >

            <h2 className="text-6xl font-bold text-white">

              {item.number}

            </h2>

            <p className="mt-5 text-xl text-blue-100">

              {item.label}

            </p>

          </div>

        ))}

      </div>

    </section>

  )
}

export default Counters