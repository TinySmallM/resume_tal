import { describe, expect,it } from 'vitest';

import { type GalleryImage,toLightboxSlide, toLightboxSlides } from '../lightbox';

describe('toLightboxSlide', () => {
  it('должен корректно конвертировать строковый src', () => {
    const image: GalleryImage = {
      src: 'https://example.com/image.jpg',
      alt: 'Test image',
      width: 800,
      height: 600,
    };

    const result = toLightboxSlide(image);

    expect(result).toEqual({
      src: 'https://example.com/image.jpg',
      alt: 'Test image',
      width: 800,
      height: 600,
    });
  });
});

describe('toLightboxSlides', () => {
  it('должен конвертировать массив изображений', () => {
    const images: GalleryImage[] = [
      { src: 'image1.jpg', alt: 'Image 1', width: 800, height: 600 },
      { src: 'image2.jpg', alt: 'Image 2', width: 1024, height: 768 },
    ];

    const result = toLightboxSlides(images);

    expect(result).toHaveLength(2);
    expect(result[0].src).toBe('image1.jpg');
    expect(result[1].src).toBe('image2.jpg');
  });

  it('должен возвращать пустой массив для пустого ввода', () => {
    const result = toLightboxSlides([]);

    expect(result).toEqual([]);
  });
});
