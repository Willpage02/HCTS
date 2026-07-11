import { useState } from "react";
import { ChevronDown } from "lucide-react";


function FAQ() {

  const questions = [
    {
      question: "How often should bins be cleaned?",
      answer:
        "Most customers choose monthly cleaning to keep odors and buildup away. Quarterly cleaning is also a great option for seasonal maintenance.",
    },
    {
      question: "Do I need to be home?",
      answer:
        "No. As long as your bins are accessible, we can complete your cleaning without you being home.",
    },
    {
      question: "What products do you use?",
      answer:
        "We use professional cleaning solutions designed to safely clean and deodorize your bins.",
    },
    {
      question: "Do you clean recycling bins?",
      answer:
        "Yes. Recycling bins can collect odors and bacteria as well, and they can be included with your service.",
    },
  ];


  const [open, setOpen] = useState(null);


  return (
    <section
      id="faq"
      className="
      py-24
      px-6
      bg-[#F8FAFC]
      "
    >

      <div className="max-w-4xl mx-auto">


        <div className="text-center mb-14">

          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#0B1F3A]
          ">
            Locally Owned & Operated
          </h2>


          <p className="
            mt-5
            text-xl
            text-gray-600
          ">
            Proudly serving our community with reliable,
            professional trash bin cleaning.
          </p>

        </div>



        <h3 className="
          text-center
          text-4xl
          font-bold
          text-[#0B1F3A]
          mb-10
        ">
          Frequently Asked Questions
        </h3>



        <div className="space-y-5">

          {questions.map((item, index) => (

            <div
              key={item.question}
              className="
              bg-white
              rounded-2xl
              border
              border-gray-200
              overflow-hidden
              "
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="
                w-full
                flex
                justify-between
                items-center
                p-6
                text-left
                "
              >

                <span className="
                  text-lg
                  font-bold
                  text-[#0B1F3A]
                ">
                  {item.question}
                </span>


                <ChevronDown
                  className={`
                    text-[#1E5DB8]
                    transition
                    ${
                      open === index
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />

              </button>


              {open === index && (

                <div className="
                  px-6
                  pb-6
                  text-gray-600
                ">
                  {item.answer}
                </div>

              )}

            </div>

          ))}

        </div>


      </div>

    </section>
  );
}

export default FAQ;