"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Keyboard,
  Mousewheel,
  Navigation,
  Zoom,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/zoom";

import { useImageSlider } from "@/zustand/image-slider";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ImageSlider() {
  const { open, setOpen, images, selectedIndex, setSelectedIndex } =
    useImageSlider();

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <Dialog open={open}>
      <DialogContent
        className={`bg-transparent p-0 border-0 max-w-none h-full backdrop-blur-sm`}
      >
        <DialogHeader className={`sr-only`}>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div
          className={`absolute px-4 flex flex-row-reverse justify-between h-screen items-center inset-x-0 pb-12 xl:pb-0 z-[999] pointer-events-none [&>*]:pointer-events-auto`}
        >
          <button
            id="next"
            className={`rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground`}
          >
            <ChevronRight className={`w-8 h-8`} />
          </button>

          <button
            id="prev"
            className={`rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground`}
          >
            <ChevronLeft className={`w-8 h-8`} />
          </button>
        </div>

        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-[999] rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X />
          <span className="sr-only">Close</span>
        </button>

        {/* Content */}
        <div className={`flex items-center w-screen h-screen justify-center`}>
          <Swiper
            initialSlide={selectedIndex}
            modules={[FreeMode, Zoom, Navigation, Keyboard, Mousewheel]}
            freeMode={false}
            keyboard={true}
            mousewheel={true}
            zoom
            navigation={{
              nextEl: "#next",
              prevEl: "#prev",
            }}
            spaceBetween={16}
            slidesPerView={`auto`}
            className={`w-full h-full !px-4`}
            wrapperClass={``}
          >
            {images?.map((image, index) => (
              <SwiperSlide key={index} className={``}>
                <div className={`swiper-zoom-container h-full pb-12 xl:p-4`}>
                  <img
                    src={image}
                    alt=""
                    loading={`lazy`}
                    className={`rounded-lg`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </DialogContent>
    </Dialog>
  );
}
