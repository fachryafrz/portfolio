"use client";

import { cn } from "@/src/lib/utils";
import { ArrowUpRight, Building2, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Experiences as ExperiencesType } from "@/sanity.types";
import dayjs from "dayjs";
import toMarkdown from "@sanity/block-content-to-markdown";

export default function Experience({ exp }: { exp: ExperiencesType }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="group relative -mx-4 grid grid-cols-4 gap-4 p-4 transition-colors hover:bg-accent/10">
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
      <div className="flex flex-col space-y-2 text-description">
        {/* Date */}
        <span className="whitespace-nowrap">{`${dayjs(exp.startDate).format("MMM YYYY")} - ${
          exp.startDate ? dayjs(exp.startDate).format("MMM YYYY") : "Present"
        }`}</span>

        {/* Location */}
        <div className="flex items-center gap-2">
          {exp.company ? <Building2 size={16} /> : <MapPin size={16} />}

          <span>{exp.company || exp.location}</span>
        </div>
      </div>

      {/* Info */}
      <div className="col-span-3 space-y-2">
        {/* Role & Type */}
        <div className="flex items-center justify-between">
          <span className="text-lg">{`${exp.title} · ${exp.type}`}</span>

          {exp.companyUrl && (
            <ArrowUpRight
              size={16}
              className="opacity-0 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
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
      </div>
    </div>
  );
}
