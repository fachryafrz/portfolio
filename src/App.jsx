import Hero from "./components/Hero";
import Socials from "./components/Socials";

function App() {
  return (
    <>
      {/* Navbar */}
      <header>
        <nav></nav>
      </header>
      {/* Navbar */}

      {/* Main Contents */}
      <main className="bg-bg text-white font-fira-code px-4">
        <Hero />
        <Socials />
      </main>
      {/* Main Contents */}
    </>
  );
}

export default App;
