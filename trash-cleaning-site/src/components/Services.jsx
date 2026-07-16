function Services({ openQuote }) {
  const services = [
    {
      title: "Seasonal Bee Clean – 2 Bins",
      price: "$35.00",
      frequency: "Every 3 Months",
      type: "subscription",
      bins: 2,
      features: [
        "Deep interior & exterior wash",
        "High-pressure cleaning",
        "Deodorized finish",
      ],
      button: "Subscribe",
    },
    {
      title: "Seasonal Bee Clean – 1 Bin",
      price: "$25.00",
      frequency: "Every 3 Months",
      type: "subscription",
      bins: 1,
      features: [
        "Deep interior & exterior wash",
        "High-pressure cleaning",
        "Deodorized finish",
      ],
      button: "Subscribe",
    },
    {
      title: "Bee Clean One Time – 2 Bins",
      price: "$45.00",
      frequency: "One-Time Service",
      type: "booking",
      bins: 2,
      features: [
        "One-time deep cleaning",
        "High-pressure wash",
        "Fresh deodorized finish",
      ],
      button: "Book Service",
    },
    {
      title: "Busy Bee Clean – 2 Bins",
      price: "$30.00",
      frequency: "Per Month",
      type: "subscription",
      bins: 2,
      features: [
        "Monthly scheduled cleaning",
        "Odor prevention",
        "Automatic scheduling",
      ],
      button: "Subscribe",
    },
    {
      title: "Busy Bee Clean – 1 Bin",
      price: "$20.00",
      frequency: "Per Month",
      type: "subscription",
      bins: 1,
      features: [
        "Monthly scheduled cleaning",
        "Odor prevention",
        "Automatic scheduling",
      ],
      button: "Subscribe",
    },
    {
      title: "Bee Clean One Time – 1 Bin",
      price: "$35.00",
      frequency: "One-Time Service",
      type: "booking",
      bins: 1,
      features: [
        "One-time deep cleaning",
        "High-pressure wash",
        "Fresh deodorized finish",
      ],
      button: "Book Service",
    },
  ];


  const commercialService = {
    title: "Commercial Dumpster Cleaning",
    type: "commercial",
    bins: null,
    price: "",
    frequency: "",
  };


  return (
    <section id="services" className="py-24 px-6 bg-white">

      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-16">

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#0B1F3A]
            "
          >
            Our Services
          </h2>


          <p className="mt-5 text-xl text-gray-600">
            Keep your bins clean year-round.
          </p>

        </div>



        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >

          {services.map((service) => (

            <div
              key={service.title}
              className="
              rounded-3xl
              p-8
              border
              border-gray-200
              hover:-translate-y-2
              transition
              hover:shadow-xl
              "
            >


              <h3
                className="
                text-2xl
                font-bold
                text-[#0B1F3A]
                "
              >
                {service.title}
              </h3>



              <div className="mt-5">

                <p className="text-4xl font-bold text-[#1E5DB8]">
                  {service.price}
                </p>


                <p className="text-gray-500 font-medium mt-1">
                  {service.frequency}
                </p>

              </div>



              <ul className="mt-6 space-y-3 text-gray-700">

                {service.features.map((feature) => (

                  <li key={feature}>
                    ✓ {feature}
                  </li>

                ))}

              </ul>



              <button
                onClick={() => openQuote(service)}
                className="
                mt-8
                w-full
                bg-[#1E5DB8]
                text-white
                py-3
                rounded-full
                font-bold
                hover:bg-blue-700
                "
              >
                {service.button}
              </button>


            </div>

          ))}

        </div>



        <div className="mt-16">


          <div
            className="
            bg-[#0B1F3A]
            rounded-3xl
            p-10
            text-center
            text-white
            "
          >


            <h3 className="text-3xl font-bold">
              Commercial Dumpster Cleaning
            </h3>



            <p
              className="
              mt-6
              text-lg
              max-w-4xl
              mx-auto
              leading-relaxed
              "
            >
              Own a restaurant, apartment complex, HOA, property management
              company, or other business with dumpster service?
            </p>



            <p
              className="
              mt-4
              text-lg
              max-w-4xl
              mx-auto
              leading-relaxed
              text-gray-200
              "
            >
              We provide professional dumpster and commercial waste container
              cleaning. Contact us for a customized quote tailored to your
              property's needs.
            </p>



            <button
              onClick={() => openQuote(commercialService)}
              className="
              mt-8
              bg-[#F6B72E]
              text-[#0B1F3A]
              px-8
              py-3
              rounded-full
              font-bold
              hover:opacity-90
              "
            >
              Request Commercial Inquiry
            </button>



          </div>


        </div>


      </div>

    </section>
  );
}

export default Services;