import Hero from "./components/Hero/Hero";
import Quote from "./components/Quote/Quote";
import About from "./components/About/About";
import Techskills from "./components/Techskills/Techskills";
import Benefits from "./components/Benefits/Benefits";
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <Header/> 
      <Hero />
      <Quote />
      <About />
      <Techskills />
      <Benefits />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
