import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ElementType,ReactNode } from 'react';

import styles from './Paragraph.module.css';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Tag = 'p' | 'span';

interface Props extends Omit<ComponentPropsWithoutRef<'p'>, 'className'> {
  as?: Tag;
  size?: Size;
  accent?: boolean;
  className?: string;
  children: ReactNode;
}

export const Paragraph = ({
  as,
  size = 'md',
  accent = false,
  children,
  className,
  ...props
}: Props) => {
  const Tag: ElementType = as ?? 'p';

  const classes = clsx(
    styles.paragraph,
    styles[`size-${size}`],
    accent && styles.accent,
    className
  );

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};
