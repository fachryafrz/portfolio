import { type SchemaTypeDefinition } from "sanity";

import { projectType } from "./projectType";
import { experienceType } from "./experienceType";
import { technologyType } from "./technologyType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, experienceType, technologyType],
};
