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

  const [serviceType, setServiceType] = useState("quote");


  const openQuote = (type) => {
    setServiceType(type);
    setShowQuote(true);
  };


  return (
    <div className="overflow-x-hidden">

      <Navbar
        openQuote={openQuote}
      />


      <main>

        <Hero
          openQuote={openQuote}
        />

        <Services
          openQuote={openQuote}
        />

        <WhyChooseUs />

        <ServiceArea />

        <FAQ />

        <CTA
          openQuote={openQuote}
        />

      </main>


      <Footer />


      {showQuote && (

        <QuoteForm
          serviceType={serviceType}
          onClose={() => setShowQuote(false)}
        />

      )}

    </div>
  );
}

export default App;