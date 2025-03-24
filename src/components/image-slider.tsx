"use client";

import { useImageSlider } from "@/zustand/image-slider";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function ImageSlider() {
  const { open, setOpen, images, selectedIndex } = useImageSlider();

  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={images.map((img) => ({ src: img }))}
      index={selectedIndex}
      plugins={[Zoom]}
      carousel={{ 
        finite: true
       }}
    />
  );
}
