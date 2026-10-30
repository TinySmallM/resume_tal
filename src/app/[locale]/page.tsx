import { useTranslations } from "next-intl";

import { AnimatedEffect } from "@/shared/motion";
import { Link } from "@/shared/ui/link/Link";

import { CV_HREF } from "../constants";
import styles from "./page.module.css";

export default function Home() {
  const t = useTranslations('Home');

  return (
      <div className={styles.page}>
        <main className={styles.main}>
          <AnimatedEffect direction="fade" delay={0.1}>
            <Link position="center" href={CV_HREF} isAccent>
              {t('cv')}
            </Link>
          </AnimatedEffect>
          <AnimatedEffect direction="right" delay={0.3}>
          <div className={styles.intro}>
            <h1>
              {t('title')} 
            </h1>
          </div>
          </AnimatedEffect>
        </main>
      </div>
  );
}
