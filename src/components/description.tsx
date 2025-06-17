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
          "prose text-description max-w-none text-sm",
          readMore
            ? ""
            : text.split(" ").length > MAX_DESCRIPTION_LENGTH
              ? "line-clamp-3"
              : "",
        )}
      >
        <Markdown
          components={{
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            strong: ({ node, ...props }) => (
              <strong className="text-accent font-normal" {...props} />
            ),
          }}
        >
          {text}
        </Markdown>
      </div>

      {/* Read more */}
      {text.split(" ").length > MAX_DESCRIPTION_LENGTH && (
        <button
          className="text-accent relative z-10 block w-fit text-sm underline-offset-2 hover:underline"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Show less" : "Read more"}
        </button>
      )}
    </>
  );
}
