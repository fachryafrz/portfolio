/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { PROJECTS_QUERYResult } from "@/sanity.types";
import dayjs from "dayjs";
import toMarkdown from "@sanity/block-content-to-markdown";
import ReactMarkdown from "react-markdown";
import { ArrowUpRight, Github } from "lucide-react";
import { useImageSlider } from "@/src/zustand/image-slider";
import ListOfTechnologies from "../list-of-technologies";
import { useEffect, useState } from "react";

const MAX_DESCRIPTION_LENGTH = 45;

export default function Project({
  project,
}: {
  project: PROJECTS_QUERYResult[number];
}) {
  const { open, setOpen, setImages, setSelectedIndex } = useImageSlider();

  const handleSetImagesSlider = (imgIndex: number) => {
    setImages(project.image_path);
    setSelectedIndex(imgIndex);
    setOpen(!open);
  };

  const [readMore, setReadMore] = useState(false);

  const shortDescription = toMarkdown(project.shortDescription);

  useEffect(() => {
    console.log(shortDescription.split(" ").length, project.title);
  }, [project]);

  return (
    <div className="group relative -mx-4 flex flex-col gap-4 p-4 transition-all hover:bg-accent/10 lg:hover:!opacity-100 lg:group-hover/projects:opacity-50">
      <Link
        href={project.url || ""}
        className={cn(
          "absolute inset-0 block",
          project.url ? "" : "pointer-events-none",
        )}
        rel="noopener noreferrer"
        target="_blank"
      ></Link>

      {/* Name & Type */}
      <div className="flex items-center">
        <h3 className="grow text-lg">{`${project.title} · ${project.type}`}</h3>

        {project.github && (
          <Link
            href={project.github}
            className={"z-10 block transition-all hover:text-accent"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github size={16} />
          </Link>
        )}

        {project.url && (
          <ArrowUpRight
            size={16}
            className="pointer-events-none opacity-0 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
          />
        )}
      </div>

      {/* Date */}
      <span className="text-accent">
        {dayjs(project.date).format("MMMM DD, YYYY")}
      </span>

      {/* Description */}
      <div
        className={cn(
          "prose max-w-none text-description",
          readMore ? "" : "line-clamp-3",
        )}
      >
        <ReactMarkdown
          components={{
            strong: ({ node, ...props }) => (
              <strong className="font-normal text-accent" {...props} />
            ),
          }}
        >
          {shortDescription}
        </ReactMarkdown>
      </div>

      {/* Read more */}
      {shortDescription.split(" ").length > MAX_DESCRIPTION_LENGTH && (
        <button
          className="relative z-10 block w-fit text-accent underline-offset-2 hover:underline"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Show less" : "Read more"}
        </button>
      )}

      {/* Tech Stack */}
      <ListOfTechnologies technologies={project.technologies} />

      {/* Images */}
      <div className="z-10 grid grid-cols-3 items-center gap-2 @lg:grid-cols-4 @xl:grid-cols-5">
        {project.image_path.map((img, imgIndex) => (
          <button
            key={imgIndex}
            onClick={() => handleSetImagesSlider(imgIndex)}
            className="aspect-[4/3] overflow-hidden rounded-lg transition-transform hover:scale-105"
          >
            <img
              src={img}
              alt={``}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
