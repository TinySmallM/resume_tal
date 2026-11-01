import { useMemo,useState } from 'react';

import { type GalleryImage,toLightboxSlides } from '@/shared/lib/lightbox';

export function useLightbox(images: GalleryImage[]) {
  const [isOpen, setIsOpen] = useState(false);

  const slides = useMemo(() => toLightboxSlides(images), [images]);
  const previewImage = images[0] ?? null;
  const isEmpty = images.length === 0;

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    slides,
    previewImage,
    isEmpty,
  };
}
