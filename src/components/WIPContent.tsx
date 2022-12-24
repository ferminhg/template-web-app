import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function WIPContent() {
    return (
            <main className={styles.main}>
                <div role="heading" className={styles.description}>
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
                        priority={true}
                    />
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h2 className={inter.className}>
                            SSR Example <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            SSR example :<a href={'/ssr'}>SSR Example</a>
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
    )
}
