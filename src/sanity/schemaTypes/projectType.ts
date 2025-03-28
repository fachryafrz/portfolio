import { ProjectsIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  icon: ProjectsIcon,
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
      name: "type",
      type: "string",
    }),
    defineField({
      name: "date",
      type: "date",
    }),
    defineField({
      name: "url",
      type: "url",
    }),
    defineField({
      name: "github",
      type: "url",
    }),
    defineField({
      name: "image_path",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "technologies",
      type: "array",
      of: [
        defineArrayMember({ type: "reference", to: { type: "technologies" } }),
      ],
    }),
    defineField({
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "highlighted",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "show",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image_path",
      date: "date",
      type: "type",
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media[0],
        subtitle: `${new Date(selection.date).toLocaleDateString("US", {
          dateStyle: "long",
        })} (${selection.type})`,
      };
    },
  },
});
