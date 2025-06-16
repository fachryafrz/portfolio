"use client";

import Markdown from "react-markdown";
import { cn } from "../lib/utils";
import { useState } from "react";

const MAX_DESCRIPTION_LENGTH = 50;

export default function Description({ text }: { text: string }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      {/* Description */}
      <div
        className={cn(
          "prose max-w-none text-sm text-description",
          readMore
            ? ""
            : text.split(" ").length > MAX_DESCRIPTION_LENGTH
              ? "line-clamp-3"
              : "",
        )}
      >
        <Markdown
          components={{
            strong: ({ node, ...props }) => (
              <strong className="font-normal text-accent" {...props} />
            ),
          }}
        >
          {text}
        </Markdown>
      </div>

      {/* Read more */}
      {text.split(" ").length > MAX_DESCRIPTION_LENGTH && (
        <button
          className="relative z-10 block w-fit text-sm text-accent underline-offset-2 hover:underline"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Show less" : "Read more"}
        </button>
      )}
    </>
  );
}
