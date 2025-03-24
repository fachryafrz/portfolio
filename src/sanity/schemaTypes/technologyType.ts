import { StackCompactIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const technologyType = defineType({
  name: "technologies",
  title: "Technologies",
  type: "document",
  icon: StackCompactIcon,
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
