import { renderHook } from '@testing-library/react';
import { beforeEach,describe, expect, it, vi } from 'vitest';

import { useFormattedDate } from '../useFormattedDate';

const mockDateTime = vi.fn();
const mockLocale = vi.fn(() => 'ru');

vi.mock('next-intl', () => ({
  useFormatter: () => ({
    dateTime: mockDateTime,
  }),
  useLocale: () => mockLocale(),
}));

describe('useFormattedDate', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('должен корректно обрабатывать невалидную дату', () => {
    const { result } = renderHook(() => useFormattedDate());
    const formatted = result.current.formatDate('not-a-date');
    
    expect(formatted).toBe('[useFormattedDate] Invalid date string: not-a-date');
    expect(mockDateTime).not.toHaveBeenCalled();
  });

  it('должен работать с английской локалью', () => {
    mockLocale.mockReturnValue('en');
    mockDateTime.mockReturnValue('February 7, 2019');
    
    const { result } = renderHook(() => useFormattedDate());
    const formatted = result.current.formatDate('2019-02-07T18:47:18Z');
    
    expect(formatted).toBe('February 7, 2019');
    
    mockLocale.mockReturnValue('ru');
  });
});
