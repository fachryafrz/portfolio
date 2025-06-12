import { Experiences as ExperiencesType } from "@/sanity.types";
import { client } from "../../sanity/lib/client";
import { EXPERIENCES_QUERY } from "../../sanity/lib/queries";
import Experience from "./experience";

export default async function Experiences() {
  const experiences: ExperiencesType[] = await client.fetch(EXPERIENCES_QUERY);

  return (
    <section className="space-y-2">
      <h2 className="font-fira-code font-medium text-accent">Experiences</h2>

      <ul>
        {experiences.map((exp) => (
          <li key={exp._id}>
            <Experience exp={exp} />
          </li>
        ))}
      </ul>
    </section>
  );
}
