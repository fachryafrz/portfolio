import { Laptop } from "lucide-react";
import { defineField, defineType } from "sanity";

export const technologyType = defineType({
  name: "technologies",
  title: "Technologies",
  type: "document",
  icon: Laptop,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "image_path",
      type: "image",
    }),
  ],
});
