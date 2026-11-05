import clsx from 'clsx';
import NextImage from 'next/image';
import type { ReactNode } from 'react';

import type { NextImageType } from '@/app/types';

import styles from './Gallery.module.css';

export interface Props extends Omit<NextImageType, ''> {
  type?: 'next' | 'native';
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export const Gallery = ({
  type = 'next',
  src,
  alt,
  width,
  height,
  className,
  onClick,
  children,
}: Props) => {
  return (
    <>
      <button
        type="button"
        className={clsx(styles.trigger, className)}
        onClick={onClick}
      >
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized={type === 'next' ? true : false}
        className={styles.image}
        loading={type === 'next' ? 'eager' : 'lazy'}
      />
        <div className={styles.gradientOverlay}>
          {children && <span className={styles.hintText}>{children}</span>}
        </div>
      </button>
    </>
  );
};
