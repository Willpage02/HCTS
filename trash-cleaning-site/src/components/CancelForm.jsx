import { useState } from "react";


function CancelForm({ onClose }) {

  const [submitted, setSubmitted] = useState(false);


  const [formData, setFormData] = useState({

    name: "",
    email: "",
    phone: "",
    service: "Cancellation Request",

  });



  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();


    try {


      const response = await fetch(

        `${import.meta.env.VITE_API_URL}/api/leads`,

        {

          method: "POST",

          headers: {

            "Content-Type": "application/json",

          },

          body: JSON.stringify({

            ...formData,

            address: "Cancellation Request",

            bins: "",

            serviceName: "Cancellation Request",

          }),

        }

      );



      if (!response.ok) {

        throw new Error("Cancellation request failed");

      }



      setSubmitted(true);


    }


    catch(error){

      console.error(error);

      alert(
        "Something went wrong. Please call Honeycomb directly."
      );

    }


  };



  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">

      <div className="bg-white rounded-3xl p-8 max-w-lg w-full">


        {!submitted ? (

          <>

            <div className="flex justify-between mb-6">

              <h2 className="text-3xl font-bold text-[#0B1F3A]">
                Cancel Subscription
              </h2>


              <button
                onClick={onClose}
                className="text-gray-500 text-xl"
              >
                ✕
              </button>


            </div>



            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >


              <input
                required
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
              />


              <input
                required
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
              />


              <input
                required
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-xl p-3"
              />


              <button
                type="submit"
                className="
                w-full
                bg-red-500
                text-white
                py-4
                rounded-full
                font-bold
                text-lg
                "
              >
                Submit Cancellation Request
              </button>


            </form>


          </>


        ) : (


          <div className="text-center py-10">

            <div className="text-5xl mb-5">
              ✅
            </div>


            <h2 className="text-3xl font-bold text-[#0B1F3A]">
              Request Received
            </h2>


            <p className="mt-4 text-gray-600">
              Honeycomb will process your cancellation request shortly.
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


export default CancelForm;