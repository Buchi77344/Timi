import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import TechStack from "./components/TechStack";
import Process from "./components/Process";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <Work />
      <Testimonials />
      <TechStack />
      <Process />
      <Contact />
    </main>
  );
}
