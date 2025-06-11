import { Building2 } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const experienceType = defineType({
  name: "experiences",
  title: "Experiences",
  type: "document",
  icon: Building2,
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      description: "Kosongkan jika masih bekerja",
    }),
    defineField({
      name: "isCurrent",
      title: "Currently Working Here",
      type: "boolean",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "technologies",
      type: "array",
      of: [
        defineArrayMember({ type: "reference", to: { type: "technologies" } }),
      ],
    }),
  ],
});
