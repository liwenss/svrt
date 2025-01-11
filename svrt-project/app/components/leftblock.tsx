import styles from '@/app/components/leftblock.module.css';
import Link from 'next/link';


export default function Leftblock() {

    return (
        <div className={styles['bottom-part']}>
        <div className={styles['first-vertical']} >
                <Link href="/about" passHref>
                    <p>About</p>
                </Link>
                <Link href="/investments" passHref>
                    <p>Portfolio</p>
                </Link>
                <Link href="/partners" passHref>
                    <p>Partners</p>
                </Link>
                </div>
                <div className={styles['second-vertical']} >
                <Link href="/events" passHref>
                    <p>Events</p>
                </Link>
                <Link href="/chat" passHref>
                    <p>Contact</p>
                </Link>
                </div>
                </div>
    )
}