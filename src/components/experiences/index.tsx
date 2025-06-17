import { EXPERIENCES_QUERYResult } from "../../../sanity.types";
import { client } from "../../sanity/lib/client";
import { EXPERIENCES_QUERY } from "../../sanity/lib/queries";
import Experience from "./experience";

export default async function Experiences() {
  const experiences: EXPERIENCES_QUERYResult =
    await client.fetch(EXPERIENCES_QUERY);

  return (
    <section className="space-y-2">
      <h2 className="font-fira-code text-accent after:bg-accent flex items-center gap-2 font-medium after:block after:h-[0.5px] after:w-full">
        Experiences
      </h2>

      <ul className="group/experiences">
        {experiences.map((exp) => (
          <li
            key={exp._id}
            className="border-description/30 border-b last:border-b-0"
          >
            <Experience exp={exp} />
          </li>
        ))}
      </ul>
    </section>
  );
}
