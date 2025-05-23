import Image from "next/image";
import styles from '@/app/components/bottombar.module.css';
import Button from '@mui/material/Button';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import Leftblock from "./leftblock";
import Link from "next/link";


export default function Bottombar() {
    return (
        <div className={styles['background']}>
            <p className={styles['lets-chat']}>Let's chat.</p>
            <div className={styles['shaping-and-contact']}>
                <p className={styles['shaping']}>Shaping the future of real estate together</p>
                
                <Button component="a"
  href="/chat" className={styles['my-button']}>GET IN TOUCH  <ArrowRightAltRoundedIcon /></Button>
             
            </div>
            <hr className={styles['my-line']} />
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
                        
                    </div>
                    <a href="https://groups.google.com/u/3/g/svrt-forum" >
                            <p className={styles['subscribe-to-events']}>Subscribe to Events</p>
                        </a>
                    <div className={styles['email-and-number']}>
                        <p className={styles['email']}>contact@svrt.info</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
