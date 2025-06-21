import Hero from "./components/Hero/Hero";
import Quote from "./components/Quote/Quote";
import About from "./components/About/About";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <Hero />
      <Quote />
      <About />
    </div>
  );
}

export default App;
