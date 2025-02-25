/* eslint-disable @next/next/no-img-element */
import { useImageSlider } from "@/zustand/image-slider";
import Image from "next/image";
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
import useSWR from "swr";
import axios from "axios";
import { Button } from "../ui/button";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

export default function Project({ projects, project, index }) {
  const { open, setOpen, setImages, setSelectedIndex } = useImageSlider();

  const handleSetImagesSlider = (index, imgIndex) => {
    setImages(projects[index].img_path);
    setSelectedIndex(imgIndex);
    setOpen(!open);
  };

  const { data: description } = useSWR(
    project.description,
    (query) => axios.get(query).then(({ data }) => data),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (
    <div className={`px-4 grid md:grid-cols-2 lg:grid-cols-2 gap-4`}>
      {/* Images */}
      <div className={`lg:col-span-1`}>
        <div className={`h-fit sticky flex flex-col gap-4 top-[68px]`}>
          {project.img_path.map((img, imgIndex) => (
            <button
              key={imgIndex}
              onClick={() => handleSetImagesSlider(index, imgIndex)}
              className={`overflow-hidden rounded-lg`}
            >
              <Image
                src={img}
                alt={``}
                role={`presentation`}
                quality={100}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                loading={`lazy`}
                draggable={false}
                className={`hover:scale-105 transition-all duration-500`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className={`space-y-4 h-fit sticky top-[68px]`}>
        {/* Tech Stack */}
        <TechStack tech={project.tech} />

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
          className="prose [&_*]:text-white [&_*]:text-pretty prose-p:!text-neutral-400 prose-li:!text-neutral-400"
        >
          {description}
        </Markdown>

        {/* CTA */}
        <CTA url={project.url} github={project.github_url} />
      </div>
    </div>
  );
}

function TechStack({ tech }) {
  return (
    <div
      className={`flex gap-2 flex-wrap justify-center md:justify-start items-center`}
    >
      {tech.map((tech, index) => (
        <span key={index}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <img
                  src={`/tech/${encodeURI(tech)}.png`}
                  alt={``}
                  role={`presentation`}
                  width={50}
                  height={50}
                  draggable={false}
                  loading={`lazy`}
                />
              </TooltipTrigger>
              <TooltipContent side={`bottom`}>
                <p>{decodeURI(tech)}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </span>
      ))}
    </div>
  );
}

function CTA({ url, github }) {
  return (
    <>
      {(url || github) && (
        <div
          className={`flex gap-2 items-center sticky -bottom-1 py-2 pb-3 bg-opacity-60 backdrop-blur-sm bg-[#1a1a1a]`}
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
