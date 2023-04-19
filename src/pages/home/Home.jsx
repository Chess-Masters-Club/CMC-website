import AboutUs from "../../components/about/AboutUs";
import ContactUs from "../../components/contactus/ContactUs";
import Events from "../../components/events/Events";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import Partners from "../../components/partners/Partners";
import Arrow from "../../components/shared/Arrow/Arrow";
import Sponsors from "../../components/sponsors/Sponsors";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Events />
      <Sponsors />
      <Partners />
      <ContactUs />
      <Footer />
      <Arrow />
    </>
  );
};

export default Home;
