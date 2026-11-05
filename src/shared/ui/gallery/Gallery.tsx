import clsx from 'clsx';
import NextImage from 'next/image';
import type { ReactNode } from 'react';

import type { NextImageType } from '@/app/types';

import styles from './Gallery.module.css';

export interface Props extends Omit<NextImageType, ''> {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export const Gallery = ({
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
        className={styles.image}
        loading="eager"
      />
        <div className={styles.gradientOverlay}>
          {children && <span className={styles.hintText}>{children}</span>}
        </div>
      </button>
    </>
  );
};
