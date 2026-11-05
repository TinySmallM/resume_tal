import type { Slide as LightboxSlide } from 'yet-another-react-lightbox';

import { NextImageType } from '@/app/types';

/**
 * Преобразует изображения галереи в формат, совместимый с lightbox.
 * Lightbox принимает только строковые URL, поэтому StaticImageData
 */
export function prepareSlidesForLightbox(images: NextImageType[]): LightboxSlide[] {
  return images.map((image) => ({
    src: typeof image.src === 'string' ? image.src : image.src.src,
    alt: image.alt,
    width: image.width,
    height: image.height,
  }));
}
