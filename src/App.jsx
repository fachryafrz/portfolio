import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Socials from "./components/Socials";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllProjects from "./page/AllProjects";

function App() {
  return (
    <Router>
      <>
        {/* Main Contents */}
        <main className="bg-bg text-white font-fira-code px-4 min-h-screen">
          <Switch>
            <Route exact path="/">
              {/* Navbar */}
              <header className="font-fira-code text-xs xs:text-sm z-50 text-white text-opacity-50 fixed top-0 inset-x-0 w-full">
                <Navbar />
              </header>
              {/* Navbar */}
              <Hero />
              <About />
              <Projects />
              <Contact />
            </Route>
            <Route path="/projects">
              <AllProjects />
            </Route>
          </Switch>
        </main>
        {/* Main Contents */}

        <Socials />
      </>
    </Router>
  );
}

export default App;
