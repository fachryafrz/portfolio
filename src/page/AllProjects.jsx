import { IonIcon } from "@ionic/react";
import * as Icons from "ionicons/icons";
import { Link } from "react-router-dom";
import projects from "../json/projects.json";

export default function AllProjects() {
  return (
    <section className="max-w-[425px] sm:max-w-4xl xl:max-w-5xl mx-auto flex flex-col gap-4 lg:gap-8 py-16 items-center lg:items-start">
      <Link
        to={`/`}
        className="hidden sm:flex items-center gap-4 text-center [&_ion-icon]:hover:-translate-x-2 [&_*]:transition-all hover:text-accent justify-center lg:justify-start w-fit"
      >
        <IonIcon icon={Icons.returnUpBackOutline} />
        Go back
      </Link>
      <h1
        className={`text-accent font-bold text-center lg:text-start text-2xl sm:text-5xl flex flex-col sm:gap-4 after:content-["A_list_of_things_I've_worked_on"] after:text-xs sm:after:text-sm after:font-normal after:text-desc`}
      >
        Projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-2 mt-4">
        {projects
          .slice()
          .reverse()
          .map((item, index) => {
            return (
              <article
                key={index}
                className="all-projects relative rounded-lg overflow-hidden"
              >
                <figure className="rounded-lg overflow-hidden relative">
                  <img src={item.img_path} alt={item.name} />
                </figure>
                <div className="absolute inset-0 p-4 flex flex-col justify-end backdrop-blur-sm bg-gradient-to-t from-black opacity-0 hover:opacity-100 transition-all ease-linear before:absolute before:inset-0 before:bg-gradient-to-t before:from-black before:to-black before:opacity-70 before:-z-10">
                  <span className="text-accent text-xs sm:text-sm font-medium">
                    {item.type}
                  </span>
                  <h2 className="font-bold text-2xl">{item.name}</h2>
                  {item.description !== null && (
                    <p className="hidden lg:block text-sm text-desc mt-2">
                      {item.description}
                    </p>
                  )}
                  {item.url !== null && (
                    <a
                      href={item.url}
                      target="_blank"
                      className="bg-accent text-bg rounded-full flex w-fit p-2 absolute top-4 right-4 before:absolute before:w-full before:h-full before:scale-125 before:border before:border-dashed before:inset-0 before:rounded-full before:border-accent hover:before:scale-150 before:transition-all hover:before:rotate-180"
                      rel="noreferrer"
                    >
                      <IonIcon icon={Icons.openOutline} />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
}
