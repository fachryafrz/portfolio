import { IonIcon } from "@ionic/react";
import * as Icons from "ionicons/icons";
import projects from "../../json/projects.json";

import { Link } from "react-router-dom";
import Reveal from "../Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-[425px] sm:max-w-4xl xl:max-w-5xl mx-auto py-8 min-h-screen flex flex-col gap-2 items-center"
    >
      <div className="flex w-full items-center gap-2 before:hidden md:before:block before:w-full before:h-[1px] before:bg-accent before:opacity-50 after:w-full after:h-[1px] after:bg-accent after:opacity-50">
        <Reveal>
          <h2 className="flex gap-2 font-bold whitespace-nowrap before:content-['02.'] before:text-accent md:text-2xl">
            Featured projects
          </h2>
        </Reveal>
      </div>
      <div className="flex flex-col gap-6 mt-2 md:even:[&_article]:flex-row-reverse md:even:[&_article]:text-end">
        {projects
          .slice()
          .reverse()
          .map((item, index) => {
            if (item.highlighted)
              return (
                <article
                  key={index}
                  className="text-center flex flex-col md:flex-row md:text-start md:items-center gap-4"
                >
                  <figure className="featured-projects md:min-w-[50%] md:max-w-[50%] rounded-lg overflow-hidden relative">
                    <Reveal>
                      <img
                        src={item.img_path}
                        alt={item.name}
                        className="pointer-events-auto transition-all ease-linear"
                      />
                    </Reveal>
                    <div className="open-project absolute inset-0 grid place-items-center backdrop-blur-sm opacity-0 hover:opacity-100 transition-all ease-linear">
                      <a
                        href={item.url}
                        target="_blank"
                        className="flex bg-accent text-bg rounded-full p-4 w-fit h-fit relative before:absolute before:inset-0 before:w-full before:h-full before:scale-125 before:border before:border-dashed before:border-accent before:rounded-full hover:before:scale-150 hover:before:rotate-180 before:transition-all before:ease-linear focus:outline-0 focus:before:scale-150 focus:before:rotate-180"
                        rel="noreferrer"
                      >
                        <IonIcon icon={Icons.openOutline} />
                      </a>
                    </div>
                  </figure>
                  <Reveal>
                    <div className="flex flex-col gap-4">
                      <div>
                        <span className="text-accent text-xs sm:text-sm font-medium">
                          {item.type}
                        </span>
                        <h3
                          className={`flex flex-col font-bold before:block before:text-accent text-2xl md:text-3xl`}
                        >
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-desc text-xs sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                </article>
              );
          })}
      </div>
      <Reveal>
        <Link to="/projects" className="btn-primary mt-8">
          View all
        </Link>
      </Reveal>
    </section>
  );
}
