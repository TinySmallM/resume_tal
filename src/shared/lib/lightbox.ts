import type { StaticImageData } from 'next/image';
import type { Slide as LightboxSlide } from 'yet-another-react-lightbox';

export interface GalleryImage {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
}

export function toLightboxSlide(image: GalleryImage): LightboxSlide {
  return {
    src: typeof image.src === 'string' ? image.src : image.src.src,
    alt: image.alt,
    width: image.width,
    height: image.height,
  };
}

export function toLightboxSlides(images: GalleryImage[]): LightboxSlide[] {
  return images.map(toLightboxSlide);
}
