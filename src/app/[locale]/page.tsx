import Image from "next/image";
import { useTranslations } from "next-intl";

import styles from "./page.module.css";

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>
            {t('title')} 
          </h1>
        </div>
      </main>
    </div>
  );
}
