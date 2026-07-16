import logo from "../assets/Honeycomb-logo.PNG";

function Hero() {

  const scrollToServices = () => {

    document
      .getElementById("services")
      .scrollIntoView({
        behavior: "smooth",
      });

  };


  return (
    <section
      className="
      min-h-screen
      relative
      flex
      items-center
      justify-center
      px-6
      pt-32
      bg-[#0B1F3A]
      overflow-hidden
      "
    >

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-[#0B1F3A]
        via-[#12345B]
        to-[#0B1F3A]
        "
      />


      <div
        className="
        relative
        z-10
        max-w-5xl
        mx-auto
        text-center
        "
      >

        <img
          src={logo}
          alt="Honeycomb Trash Bin Cleaning"
          className="
          mx-auto
          w-72
          md:w-96
          mb-10
          rounded-xl
          "
        />


        <h1
          className="
          text-5xl
          md:text-7xl
          font-bold
          text-white
          leading-tight
          "
        >
          Professional Trash Bin Cleaning
        </h1>


        <h2
          className="
          mt-5
          text-3xl
          md:text-5xl
          font-bold
          text-[#F6B72E]
          "
        >
          Fresh. Sanitized. Odor-Free.
        </h2>


        <p
          className="
          mt-6
          max-w-3xl
          mx-auto
          text-lg
          md:text-xl
          text-gray-200
          "
        >
          Honeycomb provides professional trash bin cleaning
          directly at your home or business. Keep your bins
          clean, fresh, and ready for every pickup.
        </p>


        <div
          className="
          mt-14
          flex
          justify-center
          "
        >

          <button
            onClick={scrollToServices}
            className="
            bg-[#F6B72E]
            text-[#0B1F3A]
            px-10
            py-4
            rounded-full
            font-bold
            text-lg
            hover:scale-105
            transition
            "
          >
            Book Now
          </button>


        </div>


      </div>

    </section>
  );
}

export default Hero;