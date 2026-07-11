import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ServiceArea from "./components/ServiceArea";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";


function App() {

  return (
    <div className="overflow-x-hidden">

      <Navbar />


      <main>

        <Hero />

        <Services />

        <WhyChooseUs />

        <ServiceArea />

        <FAQ />

        <CTA />

      </main>


      <Footer />

    </div>
  );
}


export default App;