import type { NextPage, GetStaticProps } from "next";
import { Inter } from '@next/font/google'
import styles from '/styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

interface SSRExampleProps {
    data: {
        comments: Array<any>,
    },
}

const SSRExample: NextPage<SSRExampleProps> = (props) => {
    return (
        <main className={styles.main}>
            <div className={styles.grid}>
                <ul>
                    {props.data.comments.map((item: any) => (
                        <li key={item.id}>{item.body}</li>
                    ))}
                </ul>
            </div>
        </main>
    )
};

export const getStaticProps: GetStaticProps<SSRExampleProps> = async () => {
    const res = await fetch('https://dummyjson.com/comments')
    const data = await res.json()

    return {
        props: {
            data,
        },
    }
}

export default SSRExample
