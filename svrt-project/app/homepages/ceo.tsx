import styles from '@/app/homepages/ceo.module.css';
import CircleIcon from '@mui/icons-material/Circle';



export default function Ceo() {
    return (
        <div>
            <div className={styles['centering']}>
                <p className={styles['ceo-maintext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={styles['circle-icon']}>
            <CircleIcon className={styles['circle']}/>
            </div>
            <div className={styles['first-name']}>
                <p className={styles['bold-text']}>First Name</p>
                <p className={styles['ceo-description']}>, CEO of AlphaX RE Capital</p>
            </div>
        </div>
    )
}