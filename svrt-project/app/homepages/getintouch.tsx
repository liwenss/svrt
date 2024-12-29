import Image from "next/image";
import Button from '@mui/material/Button';
import * as React from 'react';
import styles from '@/app/homepages/getintouch.module.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


export default function Getintouch() {
    return (
        <div>
            <div className={styles['silicon-valley-based']}>
                <div className={styles['capital-us']}>
                    <p className={styles['venture-capital']}>Venture Capital based in </p>
                    <p className={styles['silicon-valley-us']}> Silicon Valley, US</p>
                </div>
                <Button variant="outlined" className={styles['in-touch-button']}>GET IN TOUCH <ArrowRightAltIcon/></Button>
            </div>
            <p className={styles['connect-maintext']}>Silicon Valley Real Estate Tech (SVRT) is a California-based venture capital firm that invests in PropTech startups. Deeply rooted in the real estate industry, SVRT provides mentorship, contracts, and investment to PropTech startups.</p>
            <div className={styles['website']}>
                <p>hello@svrt.com</p>
            </div>
            <div className={styles['about-and-number']}>
                <p>ABOUT SVRT</p>
                <p>+1 222 333 444</p>
            </div>
        </div>


    );
}
