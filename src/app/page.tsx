import Footer from "@/components/footer";
import PixelCursorTrailing from "@/components/pixel-cursor-trailing";
import ProjectAccordion from "@/components/project-accordion";
import ImageSlider from "@/components/image-slider";
import { siteConfig } from "@/config/site";

export const revalidate = 60;

export default function Home() {
  return (
    <div>
      <h1 className="sr-only">{siteConfig.name}</h1>

      <PixelCursorTrailing />

      <ProjectAccordion />

      <ImageSlider />

      <Footer />
    </div>
  );
}
