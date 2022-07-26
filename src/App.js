import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Skills />
      {/* <Work/> */ }
      <Contact/>
    </div>
  );
}

export default App;
