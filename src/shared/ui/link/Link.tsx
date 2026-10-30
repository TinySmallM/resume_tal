import clsx from 'clsx';
import NextLink from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import styles from './Link.module.css';

type Variant = 'primary' | 'muted' | 'accent';
type Pos = 'left' | 'center' | 'right';

interface LinkProps extends Omit<ComponentPropsWithoutRef<typeof NextLink>, 'href' | 'className'> {
  href: string;
  position?: Pos
  variant?: Variant;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  isAccent?: boolean;
}

export const Link = ({
  href,
  position = 'left',
  variant = 'primary',
  children,
  className,
  target,
  rel,
  isAccent,
  ...props
}: LinkProps) => {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');

  const classes = clsx(
    styles.link,
    styles[`link-${variant}`],
    styles[`position-${position}`],
    isAccent && styles['link-accent'],
    className
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={target || '_blank'}
        rel={rel || 'noopener noreferrer'}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={classes} {...props}>
      {children}
    </NextLink>
  );
};
