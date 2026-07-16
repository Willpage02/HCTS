function CTA() {

  return (
    <section
      className="
      py-24
      px-6
      bg-[#0B1F3A]
      "
    >

      <div
        className="
        max-w-5xl
        mx-auto
        text-center
        "
      >

        <h2
          className="
          text-4xl
          md:text-6xl
          font-bold
          text-white
          "
        >
          Ready for Cleaner Trash Bins?
        </h2>


        <p
          className="
          mt-6
          text-xl
          text-gray-200
          "
        >
          Get fresh, sanitized, odor-free bins
          without the hassle.
        </p>


        <div
          className="
          mt-10
          flex
          justify-center
          "
        >

          <button
            onClick={() =>
              document
                .getElementById("services")
                .scrollIntoView({
                  behavior: "smooth",
                })
            }
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

export default CTA;