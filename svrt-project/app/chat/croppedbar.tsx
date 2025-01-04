import styles from '@/app/chat/croppedbar.module.css';
import Image from "next/image";
import Button from '@mui/material/Button';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import Leftblock from '../components/leftblock';

export default function Croppedbar() {
    return (
        <div className={styles['background']}>
            <div className={styles['bottom-part']}>
                <Leftblock />
                <div className={styles['right-block']}>
                    <div className={styles['first-horizontal']}>
                        <p>WeChat</p>
                        <p>Youtube</p>
                        <p>Linkedin</p>
                    </div>
                    <div className={styles['email-and-number']}>
                        <p className={styles['email']}>hello@svrt</p>
                        <p className={styles['number']}>+1 222 333 444</p>
                    </div>
                </div>
            </div>
        </div>
    )
}