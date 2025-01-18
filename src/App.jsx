import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Certificate from './component/Certificate';
import Resume from "./component/Resume";
import Contact from "./component/Contact";

function App() {
  return (
    <>
        <div id="body">
          <Navbar />
          <Home/>
          <Projects />
          <Certificate />
          <Resume />
        <Contact />
        </div>
    </>
  );
}

export default App;
