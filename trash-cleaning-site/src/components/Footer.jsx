function Footer({ openCancel }) {

  return (
    <footer
      className="
      bg-[#0B1F3A]
      text-white
      px-6
      py-16
      "
    >

      <div className="max-w-7xl mx-auto">


        <div
          className="
          grid
          md:grid-cols-4
          gap-10
          "
        >


          {/* Brand */}
          <div>

            <h2
              className="
              text-3xl
              font-bold
              text-[#F6B72E]
              "
            >
              Honeycomb
            </h2>


            <p
              className="
              mt-4
              text-gray-300
              leading-relaxed
              "
            >
              Professional trash bin cleaning
              that keeps your bins fresh,
              sanitized, and odor-free.
            </p>

          </div>





          {/* Contact */}
          <div>

            <h3
              className="
              text-xl
              font-bold
              mb-5
              "
            >
              Contact
            </h3>


            <ul
              className="
              space-y-4
              text-gray-300
              "
            >


              <li>

                <p className="font-semibold text-white">
                  Wade
                </p>


                <a
                  href="tel:9016740359"
                  className="hover:text-[#F6B72E]"
                >
                  📞 (901) 674-0359
                </a>


                <br />


                <a
                  href="mailto:wadecline@honeycombtrash.com"
                  className="hover:text-[#F6B72E]"
                >
                  ✉️ wadecline@honeycombtrash.com
                </a>


              </li>




              <li>


                <p className="font-semibold text-white">
                  Deontrez
                </p>


                <a
                  href="tel:9013994113"
                  className="hover:text-[#F6B72E]"
                >
                  📞 (901) 399-4113
                </a>


                <br />


                <a
                  href="mailto:Deontreztodd88@gmail.com"
                  className="hover:text-[#F6B72E]"
                >
                  ✉️ Deontreztodd88@gmail.com
                </a>


              </li>


            </ul>


          </div>






          {/* Social */}
          <div>

            <h3
              className="
              text-xl
              font-bold
              mb-5
              "
            >
              Follow Us
            </h3>


            <ul
              className="
              space-y-3
              text-gray-300
              "
            >

              <li>

                <a
                  href="#"
                  className="hover:text-[#F6B72E]"
                >
                  Facebook
                </a>

              </li>



              <li>

                <a
                  href="#"
                  className="hover:text-[#F6B72E]"
                >
                  Instagram
                </a>

              </li>


            </ul>


          </div>






          {/* Subscription */}
          <div>


            <h3
              className="
              text-xl
              font-bold
              mb-5
              "
            >
              Subscription
            </h3>



            <button
              onClick={openCancel}
              className="
              bg-[#F6B72E]
              text-[#0B1F3A]
              px-6
              py-3
              rounded-full
              font-bold
              hover:scale-105
              transition
              "
            >
              Cancel Subscription
            </button>



            <p
              className="
              mt-4
              text-gray-300
              leading-relaxed
              "
            >
              Need to stop your service?
              Submit a cancellation request
              and Honeycomb will handle it.
            </p>


          </div>



        </div>






        {/* Bottom Footer */}
        <div
          className="
          mt-12
          pt-8
          border-t
          border-white/20
          text-center
          text-gray-400
          "
        >

          © {new Date().getFullYear()} Honeycomb.
          All rights reserved.

        </div>



      </div>


    </footer>
  );

}


export default Footer;