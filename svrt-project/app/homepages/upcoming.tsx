import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import styles from '@/app/homepages/upcoming.module.css';
import Image from "next/image";


export default function Upcoming() {
    return (
        <div>
            <div className={styles['make-closer']}>
                <p className={styles['upcoming-title']}>Upcoming & Past</p>
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
                        <p className={styles['end-of-year']}>From a VC's Eyes -- How Will I Evaluate a Startup</p>
                        <NorthEastRoundedIcon className={styles['myy-arrow']}/>
                    </div>
                    <div className={styles['small-text']}>
                        <p>Mountain View, CA</p>
                        <p>Jan 11, 2025</p>
                    </div>
                    <hr className={styles['my-line']} style={{marginTop: '-3rem'}}/>

                    <div className={styles['eventtitle-and-arrow']}>
                        <p className={styles['end-of-year']}>Residential Real Estate Development -- A Full Pipeline Overview</p>
                        <NorthEastRoundedIcon className={styles['myy-arrow']}/>
                    </div>
                    <div className={styles['small-text']}>
                        <p>Mountain View, CA</p>
                        <p>Jun 15, 2024</p>
                    </div>
                    <hr className={styles['my-line']} style={{marginTop: '-3rem'}}/>

                    <div className={styles['eventtitle-and-arrow']}>
                        <p className={styles['end-of-year']}>PRET 2024</p>
                        <NorthEastRoundedIcon className={styles['myy-arrow']}/>
                    </div>
                    <div className={styles['small-text']}>
                        <p>San Jose, CA</p>
                        <p>May 11, 2024</p>
                    </div>
                    <hr className={styles['my-line']} style={{marginTop: '-3rem'}}/>
                </div>
            </div>
        </div>
    )
}
