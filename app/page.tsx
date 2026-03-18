import Header from "./components/Header";
import Hero from "./components/Hero";
import PortraitMasonry from "./components/PortraitMasonry";
import Recognition from "./components/Recognition";
import Testimonial from "./components/Testimonial";
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
          quote="An extraordinary likeness—deeply human and beautifully observed."
          emphasis="deeply human and beautifully observed"
          author="MICHAEL D. HIGGINS"
        />
        <Recognition />
        
  
        
        {/* <AboutSection />
        <Commissions />
        <ContactSection /> */}
      </main>

      <footer className="site-footer">
        <div className="container">
          © Mark O&apos;Keeffe Portraits · Graphite portraiture · Ireland
        </div>
      </footer>
    </>
  );
}