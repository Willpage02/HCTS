function Cancel() {

  return (

    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#0B1F3A]
      px-6
      "
    >

      <div
        className="
        bg-white
        rounded-3xl
        p-10
        max-w-lg
        w-full
        text-center
        "
      >

        <div className="text-5xl mb-6">
          ❌
        </div>


        <h1
          className="
          text-4xl
          font-bold
          text-[#0B1F3A]
          "
        >
          Checkout Cancelled
        </h1>


        <p
          className="
          mt-5
          text-gray-600
          text-lg
          "
        >
          Your payment was not completed. If you would like to continue,
          you can return and select your service again.
        </p>


        <a
          href="/"
          className="
          inline-block
          mt-8
          bg-[#F6B72E]
          text-[#0B1F3A]
          px-8
          py-3
          rounded-full
          font-bold
          "
        >
          Back to Services
        </a>


      </div>

    </div>

  );

}


export default Cancel;