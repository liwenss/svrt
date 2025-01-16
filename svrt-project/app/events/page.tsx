import styles from '@/app/events/events.module.css';
import Button from '@mui/material/Button';
import Image from "next/image";
import Bottombar from '../components/bottombar';


export default function Page() {
    return (
        <div className={styles['padding']}>
            <p className={styles['title']}>Events</p>
            <div className={styles['image-and-content']}>
                <div className={styles['image-wrapper']}>
                    <Image
                        src='/svrt-black.png'
                        alt="Description of the image"
                        width={1300}
                        height={1080}
                    />
                </div>
                <div className={styles['right-half']}>

                    <p className={styles['another-maintext']}>From a VC's Eyes -- How Will I Evaluate a Startup</p>
                    <p className={styles['subtext']}>Join us for an in-depth seminar on VC funding in the PropTech industry,
                        covering the total market size, current funding trends, and emerging hot areas. Learn the principles
                        of evaluating early-stage startups and gain insights from case studies of successful investments.
                        We'll also guide you on creating an effective pitch deck to attract investors.
                        This seminar is ideal for entrepreneurs, investors, and professionals looking to deepen their understanding of PropTech's evolving landscape.</p>
                    <div className={styles['dates-and-location']}>
                        <p>Mountain View, CA</p>
                        <p>Coming Soon</p>
                    </div>

                </div>
            </div>
            <hr className={styles['my-line']} />

            <div className={styles['image-and-content']}>
                <div className={styles['image-wrapper']}>
                    <Image
                        src='/svrt-black.png'
                        alt="Description of the image"
                        width={1300}
                        height={1080}
                    />
                </div>
                <div className={styles['right-half']}>

                    <p className={styles['another-maintext']}>Zeitro CEO talk -- How to Build a Successful Real Estate Tech Startup</p>
                    <p className={styles['subtext']}>Join us for an exclusive talk by the CEO of Zeitro, where you'll gain insights into building
                        a successful real estate tech startup. Topics include an introduction to Zeitro, the reasons for choosing PropTech for entrepreneurship,
                        and how to select the right direction in the industry. Learn strategies for finding product-market fit, setting project priorities within
                        a startup, and understanding the advantages of tech-driven companies in real estate. Whether you're looking to start your own venture or
                        join a promising startup, this seminar will guide you on taking the first steps and making informed decisions.</p>
                    <div className={styles['dates-and-location']}>
                        <p>Mountain View, CA</p>
                        <p>Sep 28, 2024</p>
                    </div>

                </div>
            </div>
            <hr className={styles['my-line']} />

            <div className={styles['image-and-content']}>
                <div className={styles['image-wrapper']}>
                    <Image
                        src='/svrt-black.png'
                        alt="Description of the image"
                        width={1300}
                        height={1080}
                    />
                </div>
                <div className={styles['right-half']}>
                    <a
                        href="https://docs.google.com/document/d/1n-by0qT7xO3URgEMs88fdP9sz1HU9NUW11TNZ0xe7PI/edit?tab=t.0#heading=h.2p26v5hpuwtj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles['another-maintext']}
                    >
                        Discussion Forum -- Startup Idea Brainstorm
                    </a>
                    <p className={styles['subtext']}>A discussion focuses on the Bay Area's startup advantages.
                        Discussions around Key value proposition in PropTech -- Evaluating property value is complex, how to leverage diverse data and qualitative insights?
                        Is targeting agents, banks, or large clients over individual buyers is good strategy?</p>
                    <div className={styles['dates-and-location']}>
                        <p>Mountain View, CA</p>
                        <p>Jun 15, 2024</p>
                    </div>
                </div>
            </div>
            <hr className={styles['my-line']} />

            <div className={styles['image-and-content']}>
                <div className={styles['image-wrapper']}>
                    <Image
                        src='/svrt-black.png'
                        alt="Description of the image"
                        width={1300}
                        height={1080}
                 
                    />
                </div>
                <div className={styles['right-half']}>
                    <a
                        href="https://drive.google.com/file/d/1sxvHI3lretS3vMu3hj1WMwnCMwm_hcws/view?usp=share_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles['another-maintext']}
                    >
                        Residential Real Estate Development -- A Full Pipeline Overview
                    </a>
                    <p className={styles['subtext']}>The seminar introduces the real estate value proposition chain,
                        focusing on key pain points like inefficient property valuation, slow market analysis, and funding challenges.
                        Technology, especially PropTech, is shown as a solution to automate valuations, streamline financing,
                        and improve decision-making, enhancing efficiency and reducing costs across the industry.</p>
                    <div className={styles['dates-and-location']}>
                        <p>Mountain View, CA</p>
                        <p>Jun 15, 2024</p>
                    </div>
                </div>
            </div>
            <hr className={styles['my-line']} />

            <div className={styles['image-and-content']}>
                <div className={styles['image-wrapper']}>
                    <Image
                        src='/logo_pret2024.png'
                        alt="Description of the image"
                        width={1300}
                        height={1080}
                      
                    />
                </div>
                <div className={styles['right-half']}>
                    <a
                        href="https://www.pretsummit.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles['another-maintext']}
                    >
                        PRET 2024
                    </a>
                    <p className={styles['subtext']}>Join the Silicon Valley PropTech & Real Estate Trends Conference 2024 on
                        May 11 at the Hyatt Regency Santa Clara. This premier event offers insights into the latest real estate
                        technology, financing, and investment trends, with networking opportunities and expert panels.
                        Don’t miss this chance to connect with industry leaders and stay ahead in the evolving real estate market.</p>
                    <div className={styles['dates-and-location']}>
                        <p>San Jose, CA</p>
                        <p>May 11, 2024</p>
                    </div>
                </div>
            </div>
            <hr className={styles['my-line']} />

            <div className={styles['image-and-content']}>
                <div className={styles['image-wrapper']}>
                    <Image
                        src='/logo_pret2023.png'
                        alt="Description of the image"
                        width={1300}
                        height={1080}
                    />
                </div>
                <div className={styles['right-half']}>
                    <a
                        href="https://www.svpretconf.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles['another-maintext']}
                    >
                        PRET 2023
                    </a>
                    <p className={styles['subtext']}>The Silicon Valley PropTech & Real Estate Trends Conference 2023 (PRET 2023)
                        was held on April 14, 2023, at the Delta Hotels by Marriott Santa Clara. The event gathered industry leaders,
                        including funds, brokers, policymakers, and investors, to discuss market forecasts, financing, PropTech opportunities,
                        and local real estate trends. The conference offered networking, panel discussions, and exclusive benefits for VIP attendees.</p>
                    <div className={styles['dates-and-location']}>
                        <p>San Jose, CA</p>
                        <p>April 14, 2023</p>
                    </div>
                </div>
            </div>
            <div className={styles['some-spacing']}></div>
            <Bottombar />
        </div>
    )
}
