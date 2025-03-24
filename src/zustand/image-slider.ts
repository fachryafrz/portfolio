import { create } from "zustand";

interface ImageSliderState {
  open: boolean;
  setOpen: (open: boolean) => void;
  images: string[];
  setImages: (images: string[]) => void;
  selectedIndex: number;
  setSelectedIndex: (selectedIndex: number) => void;
}

export const useImageSlider = create<ImageSliderState>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
  images: [],
  setImages: (images) => set({ images }),
  selectedIndex: 0,
  setSelectedIndex: (selectedIndex) => set({ selectedIndex }),
}));
