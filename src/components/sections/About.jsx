import personal from "../../json/personal.json";

import { IonIcon } from "@ionic/react";
import * as Icons from "ionicons/icons";

export default function About() {
  return (
    <section className="max-w-[328px] sm:max-w-4xl mx-auto py-4 flex flex-col sm:flex-row gap-4">
      <div className="sm:order-2 md:w-[70%]">
        <div className="sticky top-4 flex flex-col gap-2 ">
          <div className="flex items-center gap-2 before:content-['01.'] before:text-accent before:font-bold before:text-2xl after:w-full after:h-[1px] after:bg-accent after:opacity-50">
            <h2 className="whitespace-nowrap font-bold tracking-wide text-2xl">
              About me
            </h2>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: personal.description }}
            className="text-desc text-xs sm:text-sm"
          ></div>
          {personal.resume !== null && (
            <a href="#!" className="btn-primary mx-auto sm:mx-0 sm:mt-4">
              My resume <IonIcon icon={Icons.openOutline} />
            </a>
          )}
        </div>
      </div>
      <figure className="transition-all ease-linear hover:-translate-x-1 hover:-translate-y-1 hover:shadow-primary rounded-lg h-fit overflow-hidden sticky top-4 min-w-[150px]">
        <img src={personal.img_path} alt={personal.name} />
      </figure>
    </section>
  );
}
