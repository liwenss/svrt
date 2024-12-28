import Image from "next/image";
import styles from '@/app/components/bottombar.module.css';
import Button from '@mui/material/Button';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import Leftblock from "./leftblock";


export default function Bottombar() {
    return (
        <div className={styles['background']}>
            <p className={styles['lets-chat']}>Let's chat.</p>
            <div className={styles['shaping-and-contact']}>
                <p className={styles['shaping']}>Shaping the future of real estate together</p>
                <Button className={styles['my-button']}>GET IN TOUCH  <ArrowRightAltRoundedIcon /></Button>
            </div>
            <hr className={styles['my-line']} />
            <div className={styles['bottom-part']}>
                <Leftblock/>
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