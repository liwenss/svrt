import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import styles from '@/app/homepages/upcoming.module.css';
import Image from "next/image";


export default function Upcoming() {
    return (
        <div>
            <div className={styles['make-closer']}>
                <p className={styles['upcoming-title']}>Upcoming</p>
                <div className={styles['events-and-more']}>
                    <p className={styles['upcoming-title']}>Events</p>
                    <p className={styles['more-events']}>MORE EVENTS</p>
                </div>
            </div>

            <div className={styles['image-and-events']}>
                <Image
                    src="/grey-image.png"
                    alt="Description of the image"
                    width={440}
                    height={800}
                />
                <div className={styles['all-events']}>
                    <hr className={styles['my-line']} style={{marginTop: '-3rem'}}/>
                    <div className={styles['eventtitle-and-arrow']}>
                        <p className={styles['end-of-year']}>End-of-Year Celebration with Leaders from PropTech</p>
                        <NorthEastRoundedIcon className={styles['myy-arrow']}/>
                    </div>
                    <div className={styles['small-text']}>
                        <p>San Francisco, CA</p>
                        <p>Dec 17, 2024</p>
                    </div>
                    <hr className={styles['my-line']} style={{marginTop: '-3rem'}}/>

                    <div className={styles['eventtitle-and-arrow']}>
                        <p className={styles['end-of-year']}>SVRT Demo Day</p>
                        <NorthEastRoundedIcon className={styles['myy-arrow']}/>
                    </div>
                    <div className={styles['small-text']}>
                        <p>San Francisco, CA</p>
                        <p>Dec 17, 2024</p>
                    </div>
                    <hr className={styles['my-line']} style={{marginTop: '-3rem'}}/>

                    <div className={styles['eventtitle-and-arrow']}>
                        <p className={styles['end-of-year']}>Effective Investor Communication</p>
                        <NorthEastRoundedIcon className={styles['myy-arrow']}/>
                    </div>
                    <div className={styles['small-text']}>
                        <p>San Francisco, CA</p>
                        <p>Dec 17, 2024</p>
                    </div>
                    <hr className={styles['my-line']} style={{marginTop: '-3rem'}}/>
                </div>
            </div>
        </div>
    )
}