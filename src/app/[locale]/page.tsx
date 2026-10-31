import { useTranslations } from "next-intl";

import { AnimatedEffect } from "@/shared/motion";
import { Link } from "@/shared/ui/link/Link";
import { Paragraph } from "@/shared/ui/paragraph/Paragraph";

import { CV_HREF } from "../constants";
import styles from "./page.module.css";

export default function Home() {
  const t = useTranslations('Home');

  return (
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.intro}>
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
        </main>
      </div>
  );
}
