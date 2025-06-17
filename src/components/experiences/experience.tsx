"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight, Building2, MapPin } from "lucide-react";
import Link from "next/link";
import { EXPERIENCES_QUERYResult } from "../../../sanity.types";
import dayjs from "dayjs";
import toMarkdown from "@sanity/block-content-to-markdown";
import ListOfTechnologies from "../list-of-technologies";
import Description from "../description";

export default function Experience({
  exp,
}: {
  exp: EXPERIENCES_QUERYResult[number];
}) {
  return (
    <div className="group hover:bg-accent/10 relative -mx-4 grid gap-4 p-4 transition-all lg:group-hover/experiences:opacity-50 lg:hover:!opacity-100 @xl:grid-cols-4">
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
      <div className="flex flex-col space-y-2 text-sm">
        {/* Date */}
        <span className="text-accent whitespace-nowrap">{`${dayjs(exp.startDate).format("MMM YYYY")} - ${
          exp.endDate ? dayjs(exp.endDate).format("MMM YYYY") : "Present"
        }`}</span>

        {/* Location */}
        <div className="text-description flex items-center gap-2">
          {exp.company ? <Building2 size={16} /> : <MapPin size={16} />}

          <span>{exp.company || exp.location}</span>
        </div>
      </div>

      {/* Info */}
      <div className="col-span-3 space-y-2">
        {/* Role & Type */}
        <div className="flex items-center justify-between">
          <h3>{`${exp.title} · ${exp.type}`}</h3>

          {exp.companyUrl && (
            <ArrowUpRight
              size={16}
              className="pointer-events-none opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
            />
          )}
        </div>

        {/* Description */}
        <Description text={toMarkdown(exp.description)} />

        {/* Tech Stack */}
        {(exp.technologies?.length ?? 0) > 0 && (
          <ListOfTechnologies technologies={exp.technologies ?? []} />
        )}
      </div>
    </div>
  );
}
