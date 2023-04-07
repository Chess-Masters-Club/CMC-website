import "./App.css";
import Hero from "./sections/hero";
import Navbar from "./sections/navbar";
import Sponsors from "./sections/sponsors";
import Partners from "./sections/partners";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/footer";
import About from "./sections/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Sponsors />
      <Partners />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
