function Services() {

  const services = [
    {
      title: "One-Time Bin Cleaning",
      description:
        "Give your trash bin a deep clean and fresh start.",
      features: [
        "Interior & exterior wash",
        "High-pressure cleaning",
        "Deodorized finish",
      ],
      button: "Book Service",
    },
    {
      title: "Monthly Cleaning",
      popular: true,
      description:
        "The easiest way to keep your bins clean all year.",
      features: [
        "Every 4 weeks",
        "Odor prevention",
        "Automatic scheduling",
      ],
      button: "Subscribe",
    },
    {
      title: "Quarterly Cleaning",
      description:
        "Perfect for seasonal maintenance and upkeep.",
      features: [
        "Every 3 months",
        "Seasonal cleaning",
        "Flexible scheduling",
      ],
      button: "Book",
    },
    {
      title: "Commercial Dumpster Cleaning",
      description:
        "Reliable cleaning for businesses and properties.",
      features: [
        "Restaurants",
        "Apartments & HOAs",
        "Commercial dumpsters",
      ],
      button: "Request Quote",
    },
  ];


  return (
    <section
      id="services"
      className="py-24 px-6 bg-white"
    >

      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-16">

          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#0B1F3A]
          ">
            Our Services
          </h2>


          <p className="mt-5 text-xl text-gray-600">
            Keep your bins clean year-round.
          </p>

        </div>


        <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
        ">

          {services.map((service) => (

            <div
              key={service.title}
              className={`
                relative
                rounded-3xl
                p-8
                border
                hover:-translate-y-2
                transition
                hover:shadow-xl
                ${
                  service.popular
                    ? "border-[#F6B72E] shadow-lg"
                    : "border-gray-200"
                }
              `}
            >

              {service.popular && (
                <span className="
                  absolute
                  -top-4
                  left-1/2
                  -translate-x-1/2
                  bg-[#F6B72E]
                  px-5
                  py-1
                  rounded-full
                  font-bold
                  text-sm
                ">
                  MOST POPULAR
                </span>
              )}


              <h3 className="
                text-2xl
                font-bold
                text-[#0B1F3A]
              ">
                {service.title}
              </h3>


              <p className="mt-4 text-gray-600">
                {service.description}
              </p>


              <ul className="mt-6 space-y-3 text-gray-700">

                {service.features.map((feature) => (
                  <li key={feature}>
                    ✓ {feature}
                  </li>
                ))}

              </ul>


              <button className="
                mt-8
                w-full
                bg-[#1E5DB8]
                text-white
                py-3
                rounded-full
                font-bold
                hover:bg-blue-700
              ">
                {service.button}
              </button>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;