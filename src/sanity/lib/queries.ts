import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`*[_type == "projects" && show == true] {
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
