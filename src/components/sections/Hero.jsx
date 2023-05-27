import { motion as m } from "framer-motion";
import heroImg from "/fachry.png";
import personal from "../../json/personal.json";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col items-center text-center justify-center -mt-8"
    >
      <figure className="w-[328px] sm:w-auto aspect-square overflow-hidden">
        <m.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          src={heroImg}
          alt={personal.name}
          className="w-[328px] sm:w-auto"
        />
      </figure>
      <m.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 1.25 }}
        className="font-tnr font-bold text-4xl flex flex-col items-center gap-2 sm:text-6xl sm:tracking-wide"
      >
        Fachry D. Afriza
      </m.h1>
      <m.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 1.5 }}
        className="mt-2 text-xs font-fira-code text-accent sm:text-base font-medium"
      >
        UI/UX Designer, Full-Stack Developer
      </m.span>
    </section>
  );
}
