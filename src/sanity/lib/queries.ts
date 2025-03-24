import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`);

export const PROJECTS_QUERY = defineQuery(`*[_type == "projects"]{
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
  }`);
