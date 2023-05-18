import { IonIcon } from "@ionic/react";
import * as Icons from "ionicons/icons";
import { useEffect, useState } from "react";

import personal from "../../json/personal.json";
import socials from "../../json/socials.json";

export default function Contact() {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const getIcons = () => {
      setIcons(socials.map((item) => Icons[item.icon]));
    };

    getIcons();
  }, []);

  return (
    <section
      id="contact"
      className="min-h-screen max-w-[425px] sm:max-w-4xl xl:max-w-5xl mx-auto flex flex-col items-center justify-center gap-8"
    >
      <div className="text-center flex flex-col items-center gap-4">
        <h2 className="before:content-['03.'] flex gap-2 items-center before:text-accent text-sm">
          Let&apos;s connect!
        </h2>
        <h3 className="text-3xl sm:text-6xl font-bold text-accent">
          Get in touch
        </h3>
        <p className="text-desc text-xs sm:text-sm max-w-[500px]">
          Ready to bring your project to life? Let&apos;s connect and discuss
          your vision. With my experience in UI/UX design and web development, I
          can help you turn your ideas into reality. Don&apos;t hesitate,
          contact me today!
        </p>
      </div>
      <a href={`mailto:${personal.email}`} className="btn-primary">
        Say hello <IonIcon icon={Icons.openOutline} />
      </a>
      <div className="flex gap-4 items-center lg:hidden">
        {socials.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              className="text-accent flex hover:-translate-y-1 hover:text-white transition-all text-2xl"
            >
              <IonIcon icon={icons[index]} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
