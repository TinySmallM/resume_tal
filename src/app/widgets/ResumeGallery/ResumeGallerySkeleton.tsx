import { Paragraph } from '@/shared/ui/paragraph/Paragraph';

import styles from './ResumeGallerySkeleton.module.css';

export const ResumeGallerySkeleton = () => {
  return (
    <div className={styles.resume_skeleton}>
      <div className={styles.resume_card}>
        <div className={styles.icon_wrapper}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
        <Paragraph size="xs">Резюме</Paragraph>
      </div>
    </div>
  );
};
