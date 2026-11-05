import { act,renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { NextImageType } from '@/app/types';

import { useLightbox } from '../useLightbox';

// Мокаем toLightboxSlides
vi.mock('@/shared/lib/lightbox', () => ({
  toLightboxSlides: vi.fn((images: NextImageType[]) => 
    images.map(img => ({ src: img.src, width: img.width, height: img.height, alt: img.alt }))
  ),
}));

const mockImages: NextImageType[] = [
  { src: 'image1.jpg', alt: 'Image 1', width: 800, height: 600 },
  { src: 'image2.jpg', alt: 'Image 2', width: 800, height: 600 },
];

describe('useLightbox', () => {
  it('должен возвращать пустое состояние при пустом массиве', () => {
    const { result } = renderHook(() => useLightbox([]));

    expect(result.current.isOpen).toBe(false);
    expect(result.current.isEmpty).toBe(true);
    expect(result.current.previewLightboxImage).toBeNull();
    expect(result.current.lightboxImages).toEqual([]);
  });

  it('должен возвращать первое изображение как previewLightboxImage', () => {
    const { result } = renderHook(() => useLightbox(mockImages));

    expect(result.current.isEmpty).toBe(false);
    expect(result.current.previewLightboxImage).toEqual(mockImages[0]);
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
    
    const firstSlides = result.current.lightboxImages;
    
    rerender();
    
    expect(result.current.lightboxImages).toBe(firstSlides);
  });
});
