import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import styles from './Paragraph.module.css';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ParagraphProps extends Omit<ComponentPropsWithoutRef<'p'>, 'className'> {
  size?: Size;
  accent?: boolean;
  className?: string;
  children: ReactNode;
}

export const Paragraph = ({
  size = 'md',
  accent = false,
  children,
  className,
  ...props
}: ParagraphProps) => {
  const classes = clsx(
    styles.paragraph,
    styles[`size-${size}`],
    accent && styles.accent,
    className
  );

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};
