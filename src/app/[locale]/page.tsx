import { useTranslations } from "next-intl";

import resumeImg from '@/assets/image/resume.jpg';
import { useFormattedDate } from "@/shared/hooks/useFormattedDate";
import { AnimatedEffect } from "@/shared/motion";
import { Link } from "@/shared/ui/link/Link";
import { Paragraph } from "@/shared/ui/paragraph/Paragraph";

import { CV_HREF, GITHUB_CREATE_AT, GITHUB_HREF } from "../constants";
import { ResumeGallery } from "../widgets/ResumeGallery/ResumeGallery";
import styles from "./page.module.css";

export default function Home() {
  const t = useTranslations('Home');
  const { formatDate } = useFormattedDate();

  return (
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.intro_top}>
            <Link href={CV_HREF} isAccent>
              {t('cv')}
            </Link>
            <AnimatedEffect direction="up" duration={0.7}>
              <h1>
                {t('title')} 
              </h1>
            </AnimatedEffect>
            <AnimatedEffect direction="fade" delay={0.2}>
              <Paragraph size="sm">
                {t('description')} 
              </Paragraph>
            </AnimatedEffect>
          </div>
          <div className={styles.intro_bottom}>
            <AnimatedEffect direction="up" delay={0.3} className={styles.intro_animated}>
              <Link href={GITHUB_HREF} variant="gradient">
                {t('github')}
              </Link>
              <Paragraph size="xs" as='span'>
                {t('github_since', {date: formatDate(GITHUB_CREATE_AT)})}
              </Paragraph>
            </AnimatedEffect>
            <AnimatedEffect direction="scale" delay={0.4} className={styles.intro_animated}>
              <ResumeGallery
                slides={[
                  { src: resumeImg, alt: 'Резюме', width: 1200, height: 800 },
                ]}
              />
            </AnimatedEffect>
          </div>
        </main>
      </div>
  );
}
