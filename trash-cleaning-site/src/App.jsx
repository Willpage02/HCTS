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


function App() {

  const [showQuote, setShowQuote] = useState(false);

  const [selectedService, setSelectedService] = useState(null);



  const openQuote = (service) => {

    setSelectedService(service);

    setShowQuote(true);

  };



  return (
    <div className="overflow-x-hidden">


      <Navbar />


      <main>


        <Hero />


        <Services
          openQuote={openQuote}
        />


        <WhyChooseUs />


        <ServiceArea />


        <FAQ />


        <CTA />


      </main>



      <Footer />



      {showQuote && (

        <QuoteForm
          service={selectedService}
          onClose={() => setShowQuote(false)}
        />

      )}



    </div>
  );
}


export default App;