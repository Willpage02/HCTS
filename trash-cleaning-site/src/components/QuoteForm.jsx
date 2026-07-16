import { useState } from "react";

function QuoteForm({ service = {}, onClose }) {

  const [submitted, setSubmitted] = useState(false);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    bins: service?.bins || "",
    service: service?.type || "",
    serviceName: service?.title || "",
  });



  const getTitle = () => {

    if (service?.type === "commercial") {
      return "Commercial Cleaning Inquiry";
    }

    if (service?.type === "subscription") {
      return "Start Your Subscription";
    }

    if (service?.type === "booking") {
      return "Book Your Cleaning";
    }

    return "Request Cleaning Service";

  };



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();


    console.log(
      "Sending customer data:",
      formData
    );


    try {


      // Save customer information

      const leadResponse = await fetch(
        "http://localhost:5000/api/leads",
        {

          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),

        }
      );



      const leadResult = await leadResponse.json();



      if (!leadResponse.ok) {

        throw new Error(
          leadResult.message || "Failed to submit form"
        );

      }



      // Commercial inquiries do not use Stripe

      if (service?.type === "commercial") {

        setSubmitted(true);

        return;

      }




      // Booking and subscriptions go to Stripe

      const stripeResponse = await fetch(
        "http://localhost:5000/api/create-checkout-session",
        {

          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },


          body: JSON.stringify({

            service: service,

          }),

        }
      );



      const stripeResult = await stripeResponse.json();



      if (!stripeResponse.ok) {

        throw new Error(
          stripeResult.message || "Stripe checkout failed"
        );

      }



      window.location.href = stripeResult.url;


    }


    catch (error) {

      console.error(
        "Submission error:",
        error
      );

    }


  };



  return (

    <div
      className="
      fixed
      inset-0
      bg-black/50
      flex
      items-center
      justify-center
      z-50
      px-6
      "
    >


      <div
        className="
        bg-white
        rounded-3xl
        p-8
        max-w-lg
        w-full
        "
      >



        {!submitted ? (


          <>


            <div
              className="
              flex
              justify-between
              items-center
              mb-6
              "
            >


              <h2
                className="
                text-3xl
                font-bold
                text-[#0B1F3A]
                "
              >
                {getTitle()}
              </h2>



              <button
                onClick={onClose}
                className="
                text-gray-500
                text-xl
                "
              >
                ✕
              </button>


            </div>





            {service?.title && (

              <div
                className="
                mb-6
                bg-gray-100
                rounded-xl
                p-4
                "
              >

                <p
                  className="
                  font-bold
                  text-[#0B1F3A]
                  "
                >
                  {service.title}
                </p>



                {service.price && (

                  <p className="text-gray-600 mt-1">
                    {service.price} {service.frequency}
                  </p>

                )}



              </div>

            )}






            <form
              onSubmit={handleSubmit}
              className="
              space-y-4
              "
            >



              <input
                required
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="
                w-full
                border
                rounded-xl
                p-3
                "
              />



              <input
                required
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="
                w-full
                border
                rounded-xl
                p-3
                "
              />



              <input
                required
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="
                w-full
                border
                rounded-xl
                p-3
                "
              />




              <input
                required
                name="address"
                placeholder={
                  service?.type === "commercial"
                    ? "Business Address"
                    : "Service Address"
                }
                value={formData.address}
                onChange={handleChange}
                className="
                w-full
                border
                rounded-xl
                p-3
                "
              />




              {service?.type !== "commercial" && (

                <input
                  required
                  type="number"
                  min="1"
                  name="bins"
                  placeholder="Number of Bins"
                  value={formData.bins}
                  onChange={handleChange}
                  className="
                  w-full
                  border
                  rounded-xl
                  p-3
                  "
                />

              )}






              <button
                type="submit"
                className="
                w-full
                bg-[#F6B72E]
                text-[#0B1F3A]
                py-4
                rounded-full
                font-bold
                text-lg
                hover:scale-105
                transition
                "
              >
                Submit Request
              </button>



            </form>


          </>


        ) : (



          <div
            className="
            text-center
            py-10
            "
          >


            <div className="text-5xl mb-5">
              ✅
            </div>



            <h2
              className="
              text-3xl
              font-bold
              text-[#0B1F3A]
              "
            >
              Request Received!
            </h2>




            <p
              className="
              mt-4
              text-gray-600
              "
            >

              {service?.type === "commercial"

                ? "A Honeycomb representative will contact you shortly regarding your commercial cleaning needs."

                : "Thanks for reaching out. Honeycomb will contact you shortly to confirm your service."

              }

            </p>




            <button
              onClick={onClose}
              className="
              mt-8
              bg-[#1E5DB8]
              text-white
              px-8
              py-3
              rounded-full
              font-bold
              "
            >
              Close
            </button>



          </div>


        )}



      </div>


    </div>

  );

}


export default QuoteForm;