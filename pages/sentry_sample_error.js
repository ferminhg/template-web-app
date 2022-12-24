import styles from "../styles/Home.module.css";
const boxStyles = { padding: '12px', border: '1px solid #eaeaea', borderRadius: '10px' };
export default function SampleError() {
    return (
        <>
            <main className={styles.main}>
                <button type="button" style={{
                    ...boxStyles,
                    backgroundColor: '#c73852',
                    borderRadius: '12px',
                    border: 'none'
                }} onClick={() => {
                    throw new Error("Sample Sentry error");
                }}>
                    Throw error
                </button>
            </main>
        </>
    )
}

