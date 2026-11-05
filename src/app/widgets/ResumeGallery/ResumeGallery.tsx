'use client';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css'; // ← Добавили CSS миниатюр

import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import { NextImageType } from '@/app/types';
import { useLightbox } from '@/shared/hooks/useLightbox';
import { Gallery } from '@/shared/ui/gallery/Gallery';

import styles from "./ResumeGallery.module.css";
import { ResumeGallerySkeleton } from './ResumeGallerySkeleton';

interface Props {
  images: NextImageType[];
  previewHeight?: number;
}

export const ResumeGallery = ({ images }: Props) => {
  const { isOpen, open, close, lightboxImages, previewLightboxImage, isEmpty } = useLightbox(images);

  if (isEmpty) {
    return <ResumeGallerySkeleton/>; 
  }

  return (
    <Gallery
      className={styles.resume_gallery}
      src={previewLightboxImage.src}
      alt={previewLightboxImage.alt}
      width={previewLightboxImage.width}
      height={previewLightboxImage.height}
      onClick={open}
    >
      <Lightbox
        open={isOpen}
        close={close}
        slides={lightboxImages}
        plugins={[Zoom, Thumbnails]}
          thumbnails={{
            position: 'bottom',
            width: 80,        // ← ширина миниатюры
            height: 60,       // ← высота миниатюры
            gap: 8,           // ← отступ между миниатюрами
            border: 2,        // ← рамка активной миниатюры
            borderRadius: 4,  // ← скругление
            padding: 2,       // ← внутренний отступ
            imageFit: 'cover', // ← как изображение заполняет миниатюру
          }}
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
