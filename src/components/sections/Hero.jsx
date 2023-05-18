import heroImg from "/fachry.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col items-center text-center sm:justify-start"
    >
      <div className="absolute inset-x-0 flex flex-col items-center top-[20%] sm:static">
        <figure>
          <img
            src={heroImg}
            alt="Fachry Dwi Afriza"
            className="w-[328px] sm:w-auto"
          />
        </figure>
        <h1 className="font-tnr font-bold text-4xl flex flex-col items-center gap-2 sm:text-6xl sm:tracking-wide after:content-['UI/UX_Designer,_Full-Stack_Developer'] after:text-xs after:font-fira-code after:text-accent sm:after:text-base after:font-medium">
          Fachry D. Afriza
        </h1>
      </div>
    </section>
  );
}
