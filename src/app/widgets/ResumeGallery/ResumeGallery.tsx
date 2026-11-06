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
      type="native"
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
            width: 80,        
            height: 60,       
            gap: 8,          
            border: 2,        
            borderRadius: 4, 
            padding: 2,      
            imageFit: 'cover',
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
