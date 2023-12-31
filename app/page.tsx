import Image from 'next/image'
import styles from './page.module.css'

import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navContainer}>
          <Link href={'/home'} className={styles.navLink}>Home</Link>
          <Link href={'/debounce'} className={styles.navLink}>Debounce</Link>
          <Link href={'/throttle'} className={styles.navLink}>Throttle</Link>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  )
}
