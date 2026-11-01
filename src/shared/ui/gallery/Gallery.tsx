import clsx from 'clsx';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { ReactNode } from 'react';

import styles from './Gallery.module.css';

interface Props {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
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
      <Image
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
