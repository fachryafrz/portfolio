import { motion as m } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="flex items-center py-6 justify-center gap-4 sm:gap-12 bg-bg bg-opacity-90 backdrop-blur-sm overflow-hidden">
      <m.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.25 }}
        href="#about"
        className="flex items-center gap-1 before:content-['01.'] before:text-accent hover:text-white transition-all focus:outline-0 focus:text-white"
      >
        About
      </m.a>
      <m.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        href="#projects"
        className="flex items-center gap-1 before:content-['02.'] before:text-accent hover:text-white transition-all focus:outline-0 focus:text-white"
      >
        Projects
      </m.a>
      <m.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.75 }}
        href="#contact"
        className="flex items-center gap-1 before:content-['03.'] before:text-accent hover:text-white transition-all focus:outline-0 focus:text-white"
      >
        Contact
      </m.a>
    </nav>
  );
}
