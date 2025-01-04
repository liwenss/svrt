import styles from '@/app/homepages/whatwedo.module.css';

export default function Whatwedo() {
    return (
        <div>
            <div className={styles['we-do']}>
                <p className={styles['what-we-do']}>What We Do</p>
                <p className={styles['our-portfolio']}>OUR PORTFOLIO</p>
            </div>
            <p className={styles['what-we-do-maintext']}>We connect real estate, tech, and venture capital professionals, share insights through events, and incubate PropTech startups with mentorship, contracts, and investment..</p>

            <div className={styles['community-text']}>
                <p className={styles['build-a-community']}>Build a Community</p>
                <p className={styles['what-we-do-subtext']}>Create an influential community that connects real estate professionals, technology professionals and entrepreneurs, venture capitalists.</p>
            </div>
            <hr className={styles['my-line']}/>

            <div className={styles['community-text']}>
                <p className={styles['build-a-community']}>Knowledge Sharing</p>
                <p className={styles['what-we-do-subtext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.</p>
            </div>
            <hr className={styles['my-line']}/>

            <div className={styles['community-text']}>
                <p className={styles['build-a-community']}>Become an Incubator</p>
                <p className={styles['what-we-do-subtext']}> Provide structured incubation program including committed contract, advisory and mentorship and direct capital investment
.</p>
            </div>
           <div className={styles['spacing']}></div>

      
        </div>
    )
}
