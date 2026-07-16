function Success() {

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
          ✅
        </div>


        <h1
          className="
          text-4xl
          font-bold
          text-[#0B1F3A]
          "
        >
          Payment Successful!
        </h1>


        <p
          className="
          mt-5
          text-gray-600
          text-lg
          "
        >
          Thank you for choosing Honeycomb. Your service has been scheduled.
          We will contact you shortly with any additional details.
        </p>


        <a
          href="/"
          className="
          inline-block
          mt-8
          bg-[#1E5DB8]
          text-white
          px-8
          py-3
          rounded-full
          font-bold
          "
        >
          Return Home
        </a>


      </div>

    </div>

  );

}


export default Success;