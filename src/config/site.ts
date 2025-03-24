export const siteConfig = {
  name: "Fachry Dwi Afriza",
  description: "A place to showcase my work. Feel free to explore!",
  url:
    process.env.NODE_ENV === "production"
      ? "https://www.fachryafrz.com"
      : "http://localhost:3000",
};
