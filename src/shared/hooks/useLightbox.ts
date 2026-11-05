import { useMemo, useState } from 'react';

import { NextImageType } from '@/app/types';

import { prepareSlidesForLightbox } from '../lib/prepareSlidesForLightbox';

export function useLightbox(images: NextImageType[]) {
  const [isOpen, setIsOpen] = useState(false);

  const lightboxImages = useMemo(() => prepareSlidesForLightbox(images), [images]);
  const previewLightboxImage = images[0] ?? null;
  const isEmpty = images.length === 0;

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    lightboxImages,
    previewLightboxImage,
    isEmpty,
  };
}
