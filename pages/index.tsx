import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yeeun (Yen) Han</title>
        <meta name="description" content="Yeeun Han's Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Yeeun (Yen) Han
        </h1>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
