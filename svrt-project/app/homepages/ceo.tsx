import styles from '@/app/homepages/ceo.module.css';
import CircleIcon from '@mui/icons-material/Circle';



export default function Ceo() {
    return (
        <div>
            <div className={styles['centering']}>
                <p className={styles['ceo-maintext']}>Partnering with SVRT lets us access innovative PropTech solutions, mentor startups, and stay ahead of industry trends. Together, we combine expertise to drive mutual growth and create value for the real estate industry.</p>
            </div>
            <div className={styles['circle-icon']}>
            <CircleIcon className={styles['circle']}/>
            </div>
            <div className={styles['first-name']}>
                <p className={styles['bold-text']}>Stephanie</p>
                <p className={styles['ceo-description']}>, CEO of AlphaX RE Capital</p>
            </div>
        </div>
    )
}
