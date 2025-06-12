import { Building2 } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";
import dayjs from "dayjs";

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
      name: "type",
      title: "Job Type",
      type: "string",
      options: {
        list: [
          { title: "Full Time", value: "Full Time" },
          { title: "Part Time", value: "Part Time" },
          { title: "Internship", value: "Internship" },
          { title: "Contract", value: "Contract" },
          { title: "Freelance", value: "Freelance" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "companyUrl",
      title: "Company URL",
      type: "url",
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
  preview: {
    select: {
      title: "title",
      startDate: "startDate",
      endDate: "endDate",
      type: "type",
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `${dayjs(selection.startDate).format("MMM YYYY")} - ${
          selection.endDate
            ? dayjs(selection.endDate).format("MMM YYYY")
            : "Present"
        } (${selection.type})`,
      };
    },
  },
});
