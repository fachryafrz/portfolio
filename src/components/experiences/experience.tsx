"use client";

import { cn } from "@/src/lib/utils";
import { ArrowUpRight, Building2, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { EXPERIENCES_QUERYResult } from "@/sanity.types";
import dayjs from "dayjs";
import toMarkdown from "@sanity/block-content-to-markdown";

export default function Experience({
  exp,
}: {
  exp: EXPERIENCES_QUERYResult[number];
}) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="@xl:grid-cols-4 group relative -mx-4 grid gap-4 p-4 transition-all hover:bg-accent/10 lg:hover:!opacity-100 lg:group-hover/experiences:opacity-50">
      <Link
        href={exp.companyUrl || ""}
        className={cn(
          "absolute inset-0 block",
          exp.companyUrl ? "" : "pointer-events-none",
        )}
        rel="noopener noreferrer"
        target="_blank"
      ></Link>

      {/* Date & Location */}
      <div className="flex flex-col space-y-2">
        {/* Date */}
        <span className="whitespace-nowrap text-accent">{`${dayjs(exp.startDate).format("MMM YYYY")} - ${
          exp.endDate ? dayjs(exp.endDate).format("MMM YYYY") : "Present"
        }`}</span>

        {/* Location */}
        <div className="flex items-center gap-2 text-description">
          {exp.company ? <Building2 size={16} /> : <MapPin size={16} />}

          <span>{exp.company || exp.location}</span>
        </div>
      </div>

      {/* Info */}
      <div className="col-span-3 space-y-2">
        {/* Role & Type */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg">{`${exp.title} · ${exp.type}`}</h3>

          {exp.companyUrl && (
            <ArrowUpRight
              size={16}
              className="pointer-events-none opacity-0 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
            />
          )}
        </div>

        {/* Description */}
        <p className={cn("text-description", readMore ? "" : "line-clamp-3")}>
          {toMarkdown(exp.description)}
        </p>

        {/* Read more */}
        <button
          className="relative z-10 block text-accent underline-offset-2 hover:underline"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Show less" : "Read more"}
        </button>

        {/* Tech Stack */}
        {exp.technologies?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span
                key={tech.title}
                className="block w-fit rounded-full bg-accent/20 p-1 px-2 font-fira-code text-sm font-medium text-accent"
              >
                {tech.title}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
