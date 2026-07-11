import {
  Leaf,
  Droplets,
  ShieldCheck,
  Truck,
  Smile,
  Star,
} from "lucide-react";


function WhyChooseUs() {

  const benefits = [
    {
      icon: <Leaf size={42} />,
      title: "Eco-Friendly",
      description:
        "Responsible cleaning methods designed with your property and environment in mind.",
    },
    {
      icon: <Droplets size={42} />,
      title: "Hot Water Sanitization",
      description:
        "Powerful cleaning methods help remove buildup, odors, and grime.",
    },
    {
      icon: <ShieldCheck size={42} />,
      title: "Deep Cleaning",
      description:
        "Professional service designed to remove bacteria and unpleasant smells.",
    },
    {
      icon: <Truck size={42} />,
      title: "Mobile Service",
      description:
        "We come directly to your driveway so your bins never leave your property.",
    },
    {
      icon: <Smile size={42} />,
      title: "Friendly Local Business",
      description:
        "Reliable service from a team that cares about the community.",
    },
    {
      icon: <Star size={42} />,
      title: "Satisfaction Guaranteed",
      description:
        "We take pride in delivering a service you can count on.",
    },
  ];


  return (
    <section
      id="why"
      className="
      py-24
      px-6
      bg-[#F8FAFC]
      "
    >

      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-16">

          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#0B1F3A]
          ">
            Why Choose Honeycomb?
          </h2>


          <p className="
            mt-5
            text-xl
            text-gray-600
          ">
            Professional cleaning with a simple,
            reliable experience.
          </p>

        </div>



        <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">

          {benefits.map((benefit) => (

            <div
              key={benefit.title}
              className="
              bg-white
              rounded-3xl
              p-8
              border
              border-gray-100
              hover:shadow-xl
              transition
              "
            >

              <div className="
                text-[#1E5DB8]
                mb-5
              ">
                {benefit.icon}
              </div>


              <h3 className="
                text-2xl
                font-bold
                text-[#0B1F3A]
              ">
                {benefit.title}
              </h3>


              <p className="
                mt-4
                text-gray-600
              ">
                {benefit.description}
              </p>

            </div>

          ))}

        </div>


      </div>

    </section>
  );
}

export default WhyChooseUs;