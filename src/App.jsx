import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContentWork from "./components/ContentWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Reveal><About /></Reveal>
        <Reveal delay={80}><Services /></Reveal>
        <Reveal delay={80}><Skills /></Reveal>
        <Reveal delay={80}><Projects /></Reveal>
        <Reveal delay={80}><ContentWork /></Reveal>
        <Reveal delay={80}><Contact /></Reveal>
      </main>
      <Footer />
    </>
  );
}

export default App;
