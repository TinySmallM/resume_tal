'use client';

import 'yet-another-react-lightbox/styles.css';

import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import { useLightbox } from '@/shared/hooks/useLightbox';
import type { GalleryImage } from '@/shared/lib/lightbox';
import { Gallery } from '@/shared/ui/gallery/Gallery';

import styles from "./ResumeGallery.module.css";

interface ResumeGalleryProps {
  slides: GalleryImage[];
  previewHeight?: number;
}

export const ResumeGallery = ({ slides }: ResumeGalleryProps) => {
  const { isOpen, open, close, slides: lightboxSlides, previewImage, isEmpty } = useLightbox(slides);

  if (isEmpty) return null;

  return (
    <Gallery
      className={styles.resume_gallery}
      src={previewImage!.src}
      alt={previewImage.alt}
      width={previewImage.width}
      height={previewImage.height}
      onClick={open}
    >
      <Lightbox
        open={isOpen}
        close={close}
        slides={lightboxSlides}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 5,
          zoomInMultiplier: 1.5,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          scrollToZoom: true,
        }}
      />
    </Gallery>
  );
};
