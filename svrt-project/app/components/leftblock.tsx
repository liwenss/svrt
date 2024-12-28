import styles from '@/app/components/leftblock.module.css';

export default function Leftblock() {

    return (
        <div className={styles['bottom-part']}>
        <div className={styles['first-vertical']} >
                    <p>About</p>
                    <p>Portfolio</p>
                    <p>Partners</p>
                </div>
                <div className={styles['second-vertical']} >
                    <p>Events</p>
                    <p>Contact</p>
                </div>
                </div>
    )
}