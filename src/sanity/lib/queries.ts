import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`*[_type == "projects" && show == true] {
    _id, 
    date, 
    description, 
    "images": image_path[].asset->url, 
    title, 
    slug, 
    type, 
    "technologies": technologies[]->{
      title, 
      "image": image_path.asset->url
    }, 
    url,
    show
  } | order(date desc)`);
