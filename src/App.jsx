import Hero from "./components/Hero/Hero";
import Quote from "./components/Quote/Quote";
import About from "./components/About/About";
import Techskills from "./components/Techskills/Techskills";
import Benefits from "./components/Benefits/Benefits";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <Hero />
      <Quote />
      <About />
      <Techskills />
      <Benefits />
    </div>
  );
}

export default App;
