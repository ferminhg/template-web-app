import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Template web-app</title>
                <meta name="description" content="Template web-app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.description}>
                    <p>
                        🚧 Web-app Template&nbsp;
                        <code className={styles.code}>pages/index.tsx</code>
                    </p>
                </div>

                <div className={styles.center}>
                    <Image
                        alt="This is fine"
                        src="/this-is-fine.webp"
                        width={480}
                        height={270}
                        />
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h2 className={inter.className}>
                            Menu <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Find in-depth information about Next.js features and&nbsp;API.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h2 className={inter.className}>
                            Menu <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Learn about Next.js in an interactive course with&nbsp;quizzes!
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h2 className={inter.className}>
                            Menu <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Discover and deploy boilerplate example Next.js&nbsp;projects.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h2 className={inter.className}>
                            Menu <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            Instantly deploy your Next.js site to a shareable URL
                            with&nbsp;Vercel.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}
