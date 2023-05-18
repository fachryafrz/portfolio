import heroImg from "/fachry.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center text-center justify-center sm:justify-start"
    >
      <figure>
        <img
          src={heroImg}
          alt="Fachry Dwi Afriza"
          className="w-[328px] sm:w-auto"
        />
      </figure>
      <h1 className="font-tnr font-bold text-4xl sm:text-6xl tracking-wide">
        Fachry D. Afriza
      </h1>
      <span className="text-accent text-xs sm:text-base block sm:mt-2">
        UI/UX Designer, Full-Stack Developer
      </span>
    </section>
  );
}
