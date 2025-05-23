"use client";

import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
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
    {
      name: "Twitter",
      icon: <Twitter />,
      url: "https://twitter.com/fachryafrz",
      ariaLabel: "Check out my Twitter profile",
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      url: "https://instagram.com/fachryafrz",
      ariaLabel: "Check out my Instagram profile",
    },
  ];

  return (
    <div className={`py-8 flex justify-center items-center`}>
      <ul className={`flex gap-8 text-accent flex-wrap px-4 justify-center`}>
        {socials.map((social, index) => (
          <li key={index}>
            <Link
              href={social.url}
              target={`_blank`}
              aria-label={social.ariaLabel}
              className={`flex hover:-translate-y-1 transition-all focus:outline-0 focus:-translate-y-1`}
            >
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
