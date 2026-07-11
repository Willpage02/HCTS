import { useState } from "react";

function QuoteForm({ serviceType = "quote", onClose }) {

  const [submitted, setSubmitted] = useState(false);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    bins: "",
    service: serviceType,
  });


  const getTitle = () => {

    if (serviceType === "booking") {
      return "Book Your Cleaning";
    }

    if (serviceType === "subscription") {
      return "Start Your Monthly Service";
    }

    return "Get Your Quote";
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

      const response = await fetch(
        "http://localhost:5000/api/leads",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );


      const result = await response.json();


      console.log(
        "Backend response:",
        result
      );


      if (!response.ok) {

        throw new Error(
          result.message || "Failed to submit form"
        );

      }


      setSubmitted(true);


    } catch (error) {

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
                placeholder="Service Address"
                value={formData.address}
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
                type="number"
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


              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="
                w-full
                border
                rounded-xl
                p-3
                "
              >

                <option value="quote">
                  Request Quote
                </option>


                <option value="booking">
                  Book Service
                </option>


                <option value="subscription">
                  Monthly Subscription
                </option>


              </select>



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

            <div
              className="
              text-5xl
              mb-5
              "
            >
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
              Thanks for reaching out.
              Honeycomb will contact you shortly.
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