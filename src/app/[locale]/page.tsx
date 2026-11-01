import type { Metadata } from 'next';
import { useTranslations } from "next-intl";
import { getLocale, getTranslations } from 'next-intl/server';

import resumeImg from '@/assets/image/resume.jpg';
import { useFormattedDate } from "@/shared/hooks/useFormattedDate";
import { AnimatedEffect } from "@/shared/motion";
import { Link } from "@/shared/ui/link/Link";
import { Paragraph } from "@/shared/ui/paragraph/Paragraph";

import { CV_HREF, GITHUB_CREATE_AT, GITHUB_HREF } from "../constants";
import { ResumeGallery } from "../widgets/ResumeGallery/ResumeGallery";
import styles from "./page.module.css";


export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations('Home');
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      type: 'website',
      url: `${baseUrl}/${locale}`,
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      title: t('title'),
      description: t('description'),
      siteName: t('site_name'),
      images: [{ url: `${baseUrl}/intro.png`, width: 1200, height: 630, alt: t('title') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${baseUrl}/intro.png`],
    },
    alternates: {
      languages: { ru: '/ru', en: '/en' },
    },
  };
}

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
