import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Excursions from "@/components/Excursions";
import Restaurants from "@/components/Restaurants";
import Hebergements from "@/components/Hebergements";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Excursions />
      <Restaurants />
      <Hebergements />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
