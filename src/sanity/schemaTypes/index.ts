import { type SchemaTypeDefinition } from "sanity";

import { projectType } from "./projectType";
import { technologyType } from "./technologyType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, technologyType],
};
