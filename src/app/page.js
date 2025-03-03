import Footer from "@/components/footer";
import PixelCursorTrailing from "@/components/pixel-cursor-trailing/page";
import ProjectAccordion from "@/components/project-accordion/page";
import ImageSlider from "@/components/image-slider";

export default function Home() {
  return (
    <div>
      <PixelCursorTrailing />

      <ProjectAccordion />

      <ImageSlider />

      <Footer />
    </div>
  );
}
