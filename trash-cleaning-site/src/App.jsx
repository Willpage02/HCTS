import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ServiceArea from "./components/ServiceArea";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import QuoteForm from "./components/QuoteForm";
import CancelForm from "./components/CancelForm";


function App() {

  const [showQuote, setShowQuote] = useState(false);

  const [showCancel, setShowCancel] = useState(false);

  const [selectedService, setSelectedService] = useState(null);



  const openQuote = (service) => {

    setSelectedService(service);

    setShowQuote(true);

  };



  const scrollToServices = () => {

    document
      .getElementById("services")
      .scrollIntoView({
        behavior: "smooth",
      });

  };



  const path = window.location.pathname;



  if (path === "/success") {

    return (

      <div className="min-h-screen flex items-center justify-center bg-[#0B1F3A] px-6">

        <div className="bg-white rounded-3xl p-10 text-center max-w-lg">

          <div className="text-5xl mb-5">
            ✅
          </div>

          <h1 className="text-4xl font-bold text-[#0B1F3A]">
            Payment Successful!
          </h1>

          <p className="mt-5 text-gray-600 text-lg">
            Thank you for choosing Honeycomb. Your cleaning service has been scheduled.
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
            Return Home
          </a>

        </div>

      </div>

    );

  }



  if (path === "/cancel") {

    return (

      <div className="min-h-screen flex items-center justify-center bg-[#0B1F3A] px-6">

        <div className="bg-white rounded-3xl p-10 text-center max-w-lg">

          <div className="text-5xl mb-5">
            ⚠️
          </div>


          <h1 className="text-4xl font-bold text-[#0B1F3A]">
            Checkout Canceled
          </h1>


          <p className="mt-5 text-gray-600 text-lg">
            Your payment was not completed. You can return and try again anytime.
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



  return (

    <div className="overflow-x-hidden">


      <Navbar
        openQuote={() => scrollToServices()}
      />



      <main>


        <Hero />


        <Services
          openQuote={openQuote}
        />


        <WhyChooseUs />


        <ServiceArea />


        <FAQ />


        <CTA
          openQuote={() => scrollToServices()}
        />


      </main>



      <Footer
        openCancel={() => setShowCancel(true)}
      />




      {showQuote && (

        <QuoteForm
          service={selectedService}
          onClose={() => setShowQuote(false)}
        />

      )}



      {showCancel && (

        <CancelForm
          onClose={() => setShowCancel(false)}
        />

      )}



    </div>

  );

}


export default App;