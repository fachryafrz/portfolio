import personal from "../../json/personal.json";

import { IonIcon } from "@ionic/react";
import * as Icons from "ionicons/icons";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-[425px] sm:max-w-4xl xl:max-w-5xl mx-auto py-8 flex flex-col sm:flex-row gap-4"
    >
      <div className="sm:order-2 md:w-[70%]">
        <div className="sticky top-[5.25rem] flex flex-col gap-2 ">
          <div className="flex items-center gap-2 after:w-full after:h-[1px] after:bg-accent after:opacity-50">
            <h2 className="whitespace-nowrap font-bold sm:text-2xl before:content-['01.'] before:text-accent flex gap-2">
              About me
            </h2>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: personal.description }}
            className="text-desc text-xs sm:text-sm"
          ></div>
          {personal.resume !== null && (
            <a
              href={personal.resume}
              target="_blank"
              className="btn-primary mx-auto sm:mx-0 sm:mt-4"
              rel="noreferrer"
            >
              My resume <IonIcon icon={Icons.openOutline} />
            </a>
          )}
        </div>
      </div>
      <figure className="transition-all ease-linear hover:-translate-x-1 hover:-translate-y-1 hover:shadow-primary rounded-lg h-fit overflow-hidden sticky top-[5.25rem] w-[200px] mx-auto sm:min-w-[150px] sm:mx-0 md:w-[300px]">
        <img src={personal.img_path} alt={personal.name} className="w-full" />
      </figure>
    </section>
  );
}
