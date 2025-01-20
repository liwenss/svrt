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
                        <a href="https://drive.google.com/file/d/1Pxi7OOSL_9KwQlZvY-VcVtxIy5nCnJCX/view?usp=sharing" >
                            <p>WeChat</p>
                        </a>
                        <a href="https://www.youtube.com/@SiliconValleyRealEstateTech" >
                            <p>Youtube</p>
                        </a>
                        <a href="https://groups.google.com/u/3/g/svrt-forum" >
                            <p>Subscribe to Events</p>
                        </a>
                    </div>
                    <div className={styles['email-and-number']}>
                        <p className={styles['email']}>admin@svrt.info</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
