import "./index.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Portfolio } from "./sections/Portfolio";
import { Packages } from "./sections/Packages";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";
import { WhatsappButton } from "./components/WhatsappButton";

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] selection:bg-amber-200 selection:text-amber-900 scroll-smooth">
      {/* Menu flutuante fixo */}
      <Navbar />

      {/* Seções de conteúdo estruturadas */}
      <Hero />
      <About />
      <Portfolio />
      <Packages />
      <Testimonials />
      <Contact />

      {/* Componentes Globais de Encerramento */}
      <Footer />
      <WhatsappButton />
    </div>
  );
}

export default App;
