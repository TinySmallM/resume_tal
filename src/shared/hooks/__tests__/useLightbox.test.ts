import { act,renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import type { GalleryImage } from '@/shared/lib/lightbox';

import { useLightbox } from '../useLightbox';

// Мокаем toLightboxSlides
vi.mock('@/shared/lib/lightbox', () => ({
  toLightboxSlides: vi.fn((images: GalleryImage[]) => 
    images.map(img => ({ src: img.src, width: img.width, height: img.height, alt: img.alt }))
  ),
}));

const mockImages: GalleryImage[] = [
  { src: 'image1.jpg', alt: 'Image 1', width: 800, height: 600 },
  { src: 'image2.jpg', alt: 'Image 2', width: 800, height: 600 },
];

describe('useLightbox', () => {
  it('должен возвращать пустое состояние при пустом массиве', () => {
    const { result } = renderHook(() => useLightbox([]));

    expect(result.current.isOpen).toBe(false);
    expect(result.current.isEmpty).toBe(true);
    expect(result.current.previewImage).toBeNull();
    expect(result.current.slides).toEqual([]);
  });

  it('должен возвращать первое изображение как previewImage', () => {
    const { result } = renderHook(() => useLightbox(mockImages));

    expect(result.current.isEmpty).toBe(false);
    expect(result.current.previewImage).toEqual(mockImages[0]);
  });

  it('должен открывать и закрывать лайтбокс', () => {
    const { result } = renderHook(() => useLightbox(mockImages));

    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.open();
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.close();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it('должен мемоизировать slides (не пересчитывать при том же массиве)', () => {
    const { result, rerender } = renderHook(() => useLightbox(mockImages));
    
    const firstSlides = result.current.slides;
    
    rerender();
    
    expect(result.current.slides).toBe(firstSlides);
  });
});
