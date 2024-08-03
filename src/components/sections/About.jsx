import personal from "../../json/personal.json";

import { IonIcon } from "@ionic/react";
import * as Icons from "ionicons/icons";
import Reveal from "../Reveal";

export default function About() {
  const startedYear = 2020;
  const currentYear = new Date().getFullYear();

  const yearsExperience = currentYear - startedYear;

  return (
    <section
      id="about"
      className="max-w-[425px] sm:max-w-4xl xl:max-w-5xl mx-auto py-8 flex flex-col sm:flex-row gap-4"
    >
      <div className="sm:order-2 md:w-[70%]">
        <div className="sticky top-[5.25rem] flex flex-col gap-2 ">
          <Reveal>
            <div className="flex items-center gap-2 after:w-full after:h-[1px] after:bg-accent after:opacity-50">
              <h2 className="whitespace-nowrap font-bold sm:text-2xl before:content-['01.'] before:text-accent flex gap-2">
                About me
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="text-desc text-xs sm:text-sm">
              <p>
                Hi there! My name is Fachry Dwi Afriza, and I&apos;m a{" "}
                <span className={`text-accent font-medium`}>
                  Front-End Web Developer
                </span>{" "}
                with over {yearsExperience} years of experience. I started my
                career in mid-2020, and since then, I have been passionate about
                creating amazing web applications with the best user experience.
                My skill set includes Nuxt, NextJS, Flutter, and Laravel, which are all
                modern and widely-used frameworks for building fast and
                responsive applications.
              </p>
              <br />
              <p>
                My goal as a web developer is to create innovative and intuitive
                web solutions that cater to the needs of my clients. I believe
                that every project is unique and requires a personalized
                approach, which is why I always strive to understand the
                client&apos;s vision and provide solutions that exceed their
                expectations.
              </p>
            </div>
          </Reveal>
          {personal.resume !== null && (
            <Reveal>
              <a
                href={personal.resume}
                target="_blank"
                className="btn-primary mx-auto sm:mx-0 sm:mt-4"
                rel="noreferrer"
              >
                My resume <IonIcon icon={Icons.openOutline} />
              </a>
            </Reveal>
          )}
        </div>
      </div>
      <Reveal>
        <figure className="transition-all ease-linear hover:-translate-x-1 hover:-translate-y-1 hover:shadow-primary rounded-lg h-fit overflow-hidden sticky top-[5.25rem] w-[200px] mx-auto sm:min-w-[150px] sm:mx-0 md:w-[300px]">
          <img src={personal.img_path} alt={personal.name} className="w-full" />
        </figure>
      </Reveal>
    </section>
  );
}
