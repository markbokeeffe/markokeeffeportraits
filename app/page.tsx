import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import PortraitMasonry from "./components/PortraitMasonry";
import Recognition from "./components/Recognition";
import Testimonial from "./components/Testimonial";
import ArtistStatement from "./components/ArtistStatement";
import AboutSection from "./components/AboutSection";
import Commissions from "./components/Commissions";
import ContactSection from "./components/ContactSection";

export default function Page() {
  return (
    <>
      <Header />

      <main>
        {/* <Hero /> */}
        <PortraitMasonry />
        <Testimonial
          quote="It is an excellent likeness - "
          emphasis="much better than most of the professional pictures that constantly reach me."
          author="EDMUND HILLARY"
        />
        <Recognition />
        <ArtistStatement />
  
        <Footer />
        {/* <AboutSection />
        <Commissions />
        <ContactSection /> */}
      </main>

    </>
  );
}