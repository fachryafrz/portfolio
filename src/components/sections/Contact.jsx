import { IonIcon } from "@ionic/react";
import { motion as m } from "framer-motion";
import * as Icons from "ionicons/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import personal from "../../json/personal.json";
import socials from "../../json/socials.json";
import Reveal from "../Reveal";

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
      className="min-h-screen max-w-[425px] sm:max-w-4xl xl:max-w-5xl mx-auto flex flex-col items-center justify-center gap-8 relative"
    >
      <div className="text-center flex flex-col items-center gap-4">
        <Reveal>
          <h2 className="before:content-['03.'] flex gap-2 items-center before:text-accent text-sm">
            Let&apos;s connect!
          </h2>
        </Reveal>
        <Reveal>
          <h3 className="text-3xl sm:text-6xl font-bold text-accent">
            Get in touch
          </h3>
        </Reveal>
        <Reveal>
          <p className="text-desc text-xs sm:text-sm max-w-[500px]">
            Ready to bring your project to life? Let&apos;s connect and discuss
            your vision. With my experience in UI/UX design and web development,
            I can help you turn your ideas into reality. Don&apos;t hesitate,
            contact me today!
          </p>
        </Reveal>
      </div>
      <Reveal>
        <a href={`mailto:${personal.email}`} className="btn-primary">
          Say hello <IonIcon icon={Icons.openOutline} />
        </a>
      </Reveal>
      <div className="flex gap-4 items-center lg:hidden">
        {socials.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              className="text-accent flex hover:-translate-y-1 hover:text-white transition-all text-2xl"
              rel="noreferrer"
            >
              <Reveal>
                <IonIcon icon={icons[index]} />
              </Reveal>
            </a>
          );
        })}
      </div>
      <footer className="absolute bottom-8 text-xs text-desc text-center [&_a]:text-accent [&_a]:font-medium hover:[&_a]:text-white [&_a]:transition-all [&_a]:ease-linear">
        <m.div
          initial={{ opacity: 0, y: "20px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
          viewport={{ once: true }}
        >
          Design heavily inspired by{" "}
          <a href="https://brittanychiang.com" target="_blank" rel="noreferrer">
            Brittany Chiang
          </a>{" "}
          <br />& Built by <Link to="/">{personal.name}</Link>
        </m.div>
      </footer>
    </section>
  );
}
