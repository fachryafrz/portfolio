import { IonIcon } from "@ionic/react";
import * as Icons from "ionicons/icons";
import projects from "../../json/projects.json";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-[425px] sm:max-w-4xl xl:max-w-5xl mx-auto py-8 min-h-screen flex flex-col gap-2 items-center"
    >
      <div className="flex w-full items-center gap-2 before:hidden md:before:block before:w-full before:h-[1px] before:bg-accent before:opacity-50 after:w-full after:h-[1px] after:bg-accent after:opacity-50">
        <h2 className="flex gap-2 font-bold whitespace-nowrap before:content-['02.'] before:text-accent md:text-2xl">
          Featured projects
        </h2>
      </div>
      <div className="flex flex-col gap-6 mt-2 md:last:[&_article]:flex-row-reverse md:last:[&_article]:text-end">
        {projects
          .slice(-2)
          .reverse()
          .map((item, index) => {
            return (
              <article
                key={index}
                className="text-center flex flex-col md:flex-row md:text-start md:items-center gap-4"
              >
                <figure className="featured-projects min-w-[50%] rounded-lg overflow-hidden relative hover:after:backdrop-blur after:transition-all after:z-10 after:absolute after:w-full after:h-full after:top-0 after:left-0">
                  <img
                    src={item.img_path}
                    alt={item.name}
                    className="pointer-events-auto transition-all ease-linear"
                  />
                  <a
                    href={item.url}
                    className="opacity-0 flex bg-accent text-bg rounded-full p-4 w-fit h-fit z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 before:inset-0 before:absolute before:w-full before:h-full before:scale-125 before:border before:border-dashed before:rounded-full before:border-accent hover:before:scale-150 before:transition-all hover:before:rotate-180"
                  >
                    <IonIcon icon={Icons.openOutline} />
                  </a>
                </figure>
                <div className="flex flex-col gap-4">
                  <h3
                    className={`flex flex-col font-bold before:block before:text-accent before:content-["${item.type}"] before:text-xs sm:before:text-sm before:font-medium text-2xl md:text-3xl`}
                  >
                    {item.name}
                  </h3>
                  <p className="text-desc text-xs sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
      </div>
      <a href="#!" className="btn-primary mt-8">
        View all
      </a>
    </section>
  );
}
