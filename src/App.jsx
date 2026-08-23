import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContentWork from "./components/ContentWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <ContentWork />
        <Contact />
      </main>

      <Footer />
    </>
  );
}