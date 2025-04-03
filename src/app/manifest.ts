import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "fachryafrz",
    short_name: "fachryafrz",
    description: "Personal Portfolio Website of Fachrya Dwi Afriza.",
    icons: [
      {
        src: "/maskable/maskable_icon_x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon/fachryafrz-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/fachryafrz-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    start_url: "/",
    display: "standalone",
    background_color: "#1a1a1a",
    theme_color: "#1a1a1a",
  };
}
