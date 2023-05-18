export default function Navbar() {
  return (
    <nav className="flex items-center py-6 justify-center gap-4 sm:gap-12 bg-bg bg-opacity-95 backdrop-blur-sm">
      <a
        href="#about"
        className="flex items-center gap-1 before:content-['01.'] before:text-accent hover:text-white transition-all focus:outline-none focus:text-white"
      >
        About
      </a>
      <a
        href="#projects"
        className="flex items-center gap-1 before:content-['02.'] before:text-accent hover:text-white transition-all focus:outline-none focus:text-white"
      >
        Projects
      </a>
      <a
        href="#contact"
        className="flex items-center gap-1 before:content-['03.'] before:text-accent hover:text-white transition-all focus:outline-none focus:text-white"
      >
        Contact
      </a>
    </nav>
  );
}
