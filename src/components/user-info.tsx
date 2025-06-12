"use client";

import { FileText, Github, Mail, Linkedin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function UserInfo() {
  const socials = [
    {
      name: "GitHub",
      icon: <Github />,
      url: "https://github.com/fachryafrz",
      ariaLabel: "Check out my GitHub profile",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      url: "https://linkedin.com/in/fachryafrz",
      ariaLabel: "Check out my LinkedIn profile",
    },
    {
      name: "GMail",
      icon: <Mail />,
      url: "mailto:fachrydwiafriza@gmail.com",
      ariaLabel: "Send me an email",
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <div
        className={`min-h-[48px] gap-2 font-tnr text-4xl font-bold sm:text-5xl sm:tracking-wide`}
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Fachry D. Afriza")
              .callFunction((cb) => {
                cb.elements.cursor.style.display = "none";
              })
              .start();
          }}
          options={{
            delay: 90,
          }}
        />
      </div>

      <div className={`min-h-[24px] font-fira-code font-medium text-accent`}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1800)
              .callFunction((cb) => {
                cb.elements.cursor.classList.remove("hidden");
              })
              .typeString("Front-End Web Developer")
              .start();
          }}
          options={{
            delay: 60,
            cursorClassName: "Typewriter__cursor hidden",
          }}
        />
      </div>

      {/* Links */}
      <div className="flex items-center gap-4">
        <Link
          href={
            "https://drive.google.com/file/d/117BF8rl1kuY6ZAsgWDm1331a4YCBfUpE/view?usp=drive_link"
          }
          target={`_blank`}
          aria-label={"Check out my resume"}
          className={`group flex w-fit items-center gap-2 border border-white p-2 transition-all hover:border-accent hover:text-accent`}
          rel="noopener noreferrer"
        >
          <FileText size={16} />
          <span className="font-fira-code">Resume</span>
          <ArrowUpRight
            size={16}
            className="transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>

        {socials.map((social, index) => (
          <Link
            key={index}
            href={social.url}
            target={`_blank`}
            aria-label={social.ariaLabel}
            className={`transition-all hover:text-accent`}
            rel="noopener noreferrer"
          >
            {social.icon}
          </Link>
        ))}
      </div>

      {/* Description */}
      <p className="max-w-[495px] text-pretty">
        I&apos;m a{" "}
        <span className="text-accent">
          Web Developer specializing in Front-End
        </span>
        , based in Jakarta. Experienced in developing{" "}
        <span className="text-accent">
          responsive and interactive web applications
        </span>{" "}
        using frameworks such as Next.js, Nuxt, and Laravel. Expert in
        <span className="text-accent">
          {" "}
          translating UI/UX designs into efficient and functional code
        </span>
        , and committed to providing the best user experience.
      </p>
    </section>
  );
}
