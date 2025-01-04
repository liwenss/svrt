import styles from '@/app/events/events.module.css';
import Button from '@mui/material/Button';
import Image from "next/image";
import Bottombar from '../components/bottombar';


export default function Page() {
    return (
        <div className={styles['padding']}>
            <p className={styles['title']}>Events</p>
            <div className={styles['image-and-content']}>
                <Image
                    src='/content.png'
                    alt="Description of the image"
                    width={1300}
                    height={1080}
                />
                <div className={styles['right-half']}>
                    <p className={styles['another-maintext']}>Event ####</p>
                    <p className={styles['subtext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className={styles['dates-and-location']}>
                        <p>Mountain View, CA</p>
                        <p>Nov 21, 2024</p>
                    </div>
                </div>
            </div>
            <hr className={styles['my-line']} />

            <div className={styles['image-and-content']}>
                <Image
                    src='/content.png'
                    alt="Description of the image"
                    width={1300}
                    height={1080}
                />
                <div className={styles['right-half']}>
                    <p className={styles['another-maintext']}>Event ####</p>
                    <p className={styles['subtext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className={styles['dates-and-location']}>
                        <p>Mountain View, CA</p>
                        <p>Nov 21, 2024</p>
                    </div>
                </div>
            </div>
            <hr className={styles['my-line']} />

            <div className={styles['image-and-content']}>
                <Image
                    src='/content.png'
                    alt="Description of the image"
                    width={1300}
                    height={1080}
                />
                <div className={styles['right-half']}>
                    <p className={styles['another-maintext']}>Event ####</p>
                    <p className={styles['subtext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className={styles['dates-and-location']}>
                        <p>Mountain View, CA</p>
                        <p>Nov 21, 2024</p>
                    </div>
                </div>
            </div>
            <hr className={styles['my-line']} />

            <div className={styles['image-and-content']}>
                <Image
                    src='/content.png'
                    alt="Description of the image"
                    width={1300}
                    height={1080}
                />
                <div className={styles['right-half']}>
                    <p className={styles['another-maintext']}>Event ####</p>
                    <p className={styles['subtext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className={styles['dates-and-location']}>
                        <p>Mountain View, CA</p>
                        <p>Nov 21, 2024</p>
                    </div>
                </div>
            </div>
            <hr className={styles['my-line']} />

            <div className={styles['image-and-content']}>
                <Image
                    src='/content.png'
                    alt="Description of the image"
                    width={1300}
                    height={1080}
                />
                <div className={styles['right-half']}>
                    <p className={styles['another-maintext']}>Event ####</p>
                    <p className={styles['subtext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className={styles['dates-and-location']}>
                        <p>Mountain View, CA</p>
                        <p>Nov 21, 2024</p>
                    </div>
                </div>
            </div>
            <div className={styles['some-spacing']}></div>
            <Bottombar/>
        </div>
    )
}