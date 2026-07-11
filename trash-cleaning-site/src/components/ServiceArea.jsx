import { MapPin } from "lucide-react";

function ServiceArea() {

  const cities = [
    "Memphis",
    "Bartlett",
    "Germantown",
    "Collierville",
    "Cordova",
    "Southaven",
  ];


  return (
    <section
      id="service-area"
      className="
      py-24
      px-6
      bg-white
      "
    >

      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-14">

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#0B1F3A]
            "
          >
            Service Area
          </h2>


          <p
            className="
            mt-5
            text-xl
            text-gray-600
            "
          >
            Professional trash bin cleaning
            delivered right to your driveway.
          </p>

        </div>



        <div
          className="
          rounded-3xl
          bg-[#0B1F3A]
          p-10
          md:p-16
          "
        >

          <h3
            className="
            text-3xl
            font-bold
            text-white
            text-center
            "
          >
            Proudly Serving Local Communities
          </h3>


          <p
            className="
            mt-4
            text-center
            text-gray-300
            "
          >
            Check back soon for our service area expansion.
          </p>



          <div
            className="
            mt-10
            grid
            sm:grid-cols-2
            md:grid-cols-3
            gap-5
            "
          >

            {cities.map((city) => (

              <div
                key={city}
                className="
                bg-white/10
                border
                border-white/20
                rounded-2xl
                p-5
                flex
                flex-col
                items-center
                text-white
                hover:bg-white/20
                transition
                "
              >

                <MapPin
                  className="text-[#F6B72E]"
                  size={32}
                />

                <p
                  className="
                  mt-3
                  text-lg
                  font-semibold
                  "
                >
                  {city}
                </p>

              </div>

            ))}

          </div>


        </div>

      </div>

    </section>
  );
}

export default ServiceArea;