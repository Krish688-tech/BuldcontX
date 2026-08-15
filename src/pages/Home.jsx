import SEO from "../components/SEO";
import Navbar from "../components/navigation/Navbar";
import HeroVideo from "../components/hero/HeroVideo";
import StatementMarquee from "../components/sections/StatementMarquee";
import VisionToSpace from "../components/sections/VisionToSpace";
import DesignJourney from "../components/sections/DesignJourney";
import Packages from "../components/sections/Packages";
import Projects from "../components/sections/Projects";
import MaterialMarquee from "../components/sections/MaterialMarquee";
import WhyBuldContx from "../components/sections/WhyBuldContx";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <>
      <SEO />

      <Navbar />

      <main>
        <HeroVideo />

        <StatementMarquee />

        <WhyBuldContx />

        <VisionToSpace />

        <DesignJourney />

        <Packages />

        <Projects />

        <MaterialMarquee />

        <Testimonials />

        <Contact />

        <Footer />
      </main>
    </>
  );
}