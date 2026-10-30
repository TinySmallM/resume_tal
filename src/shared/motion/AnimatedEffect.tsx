'use client';

import { motion, type Variants } from 'motion/react';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';

export interface AnimatedEffectProps {
  children: ReactNode;
  direction?: Direction;
  duration?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
  className?: string;
}

const variants: Record<Direction, Variants> = {
  up: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function AnimatedEffect({
  children,
  direction = 'up',
  duration = 0.5,
  delay = 0,
  once = true,
  amount = 0.3,
  className,
}: AnimatedEffectProps) {
  return (
    <motion.div
      variants={variants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
