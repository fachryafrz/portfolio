import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY =
  defineQuery(`*[_type == "projects" && show == true] {
    _id, 
    date, 
    description, 
    "image_path": image_path[].asset->url, 
    title, 
    slug, 
    type, 
    "technologies": technologies[]->{
      title, 
      "image_path": image_path.asset->url
    }, 
    url,
    github,
    show
  } | order(date desc)`);

export const EXPERIENCES_QUERY = defineQuery(`*[_type == "experiences" ] {
    _id,
    title,
    type,
    company,
    companyUrl,
    location,
    startDate,
    endDate,
    isCurrent,
    description,
    "technologies": technologies[]->{
      title,
      "image_path": image_path.asset->url
    },
  } | order(startDate desc)`);
