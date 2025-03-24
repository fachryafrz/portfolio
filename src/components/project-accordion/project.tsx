/* eslint-disable @next/next/no-img-element */
"use client";

import { useImageSlider } from "@/zustand/image-slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { CalendarDays, ExternalLink, Github } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Button } from "../ui/button";
import Link from "next/link";
import toMarkdown from "@sanity/block-content-to-markdown";

export default function Project({ projects, project, index }) {
  return (
    <div className={`px-4 grid md:grid-cols-2 lg:grid-cols-2 gap-4`}>
      {/* Images */}
      <div className={`lg:col-span-1`}>
        <div className={`h-fit sticky flex flex-col gap-4 top-[68px]`}>
          {project.images.map((img, imgIndex) => (
            <ProjectImage
              key={imgIndex}
              img={img}
              imgIndex={imgIndex}
              index={index}
              projects={projects}
            />
          ))}
        </div>
      </div>

      <div className={`space-y-4 h-fit sticky top-[68px]`}>
        {/* Tech Stack */}
        <div
          className={`flex gap-2 flex-wrap justify-center md:justify-start items-center`}
        >
          {project.technologies.map((tech, index) => (
            <TechStack key={index} tech={tech} />
          ))}
        </div>

        {/* Date */}
        <div className={`flex text-accent items-center gap-2`}>
          <CalendarDays size={20} />
          <span className={`block`}>
            {new Date(project.date).toLocaleDateString("US", {
              dateStyle: "long",
            })}
          </span>
        </div>

        {/* Description */}
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          className="prose [&_*]:text-white [&_*]:text-pretty"
          components={{
            p: ({ node, ...props }) => (
              <p {...props} className="!text-neutral-400">
                {props.children}
              </p>
            ),
            li: ({ node, ...props }) => (
              <li {...props} className="!text-neutral-400">
                {props.children}
              </li>
            ),
          }}
        >
          {toMarkdown(project.description)}
        </Markdown>

        {/* CTA */}
        <CTA url={project.url} github={project.github} />
      </div>
    </div>
  );
}

function ProjectImage({ img, imgIndex, index, projects }) {
  const { open, setOpen, setImages, setSelectedIndex } = useImageSlider();

  const handleSetImagesSlider = (index: number, imgIndex: number) => {
    setImages(projects[index].images);
    setSelectedIndex(imgIndex);
    setOpen(!open);
  };

  return (
    <button
      key={imgIndex}
      onClick={() => handleSetImagesSlider(index, imgIndex)}
      className={`overflow-hidden rounded-lg`}
    >
      <img
        src={img}
        alt={``}
        loading={`lazy`}
        draggable={false}
        className={`hover:scale-105 transition-all duration-500`}
      />
    </button>
  );
}

function TechStack({ tech }) {
  return (
    <span>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <img
              src={tech.image}
              width={50}
              height={50}
              alt={``}
              role={`presentation`}
              draggable={false}
              loading={`lazy`}
            />
          </TooltipTrigger>
          <TooltipContent side={`bottom`}>
            <p>{tech.title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </span>
  );
}

function CTA({ url, github }) {
  return (
    <>
      {(url || github) && (
        <div
          className={`flex gap-2 items-center sticky bottom-1 pt-2 pb-1 bg-opacity-60 backdrop-blur-sm bg-[#1a1a1a]`}
        >
          {url && (
            <Button asChild variant="default" className={`bg-accent`}>
              <Link href={url} target={`_blank`}>
                <span>Check it out!</span>
                <ExternalLink />
              </Link>
            </Button>
          )}

          {github && (
            <Button
              asChild
              variant="outline"
              className={`hover:bg-white hover:text-background`}
            >
              <Link href={github} target={`_blank`}>
                <Github />
                <span>GitHub</span>
              </Link>
            </Button>
          )}
        </div>
      )}
    </>
  );
}
