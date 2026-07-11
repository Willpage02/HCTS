function Footer() {

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
              space-y-3
              text-gray-300
              "
            >

              <li>
                📞 (XXX) XXX-XXXX
              </li>


              <li>
                ✉️ email@example.com
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




          {/* Information */}
          <div>

            <h3
              className="
              text-xl
              font-bold
              mb-5
              "
            >
              Information
            </h3>


            <ul
              className="
              space-y-3
              text-gray-300
              "
            >

              <li>
                Service Area
              </li>


              <li>
                Privacy Policy
              </li>


              <li>
                Terms & Conditions
              </li>

            </ul>

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