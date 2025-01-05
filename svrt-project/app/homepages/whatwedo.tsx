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
                <p className={styles['what-we-do-subtext']}>Execute 3 quarterly seminars, 1 monthly discussion session and 1 yearly elevator pitch event. Through those events, participants can learn the trend and need of property industry, advancement in technology that can be potentially applied to real estate, and venture capital's evaluation guideline for a PropTech startup.</p>
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
