import styles from '@/app/homepages/whatwedo.module.css';

export default function Whatwedo() {
    return (
        <div>
            <div className={styles['we-do']}>
                <p className={styles['what-we-do']}>What We Do</p>
                <p className={styles['our-portfolio']}>OUR PORTFOLIO</p>
            </div>
            <p className={styles['what-we-do-maintext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>

            <div className={styles['community-text']}>
                <p className={styles['build-a-community']}>Build a Community</p>
                <p className={styles['what-we-do-subtext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.</p>
            </div>
            <hr className={styles['my-line']}/>

            <div className={styles['community-text']}>
                <p className={styles['build-a-community']}>Lorem ipsum</p>
                <p className={styles['what-we-do-subtext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.</p>
            </div>
            <hr className={styles['my-line']}/>

            <div className={styles['community-text']}>
                <p className={styles['build-a-community']}>Lorem ipsum</p>
                <p className={styles['what-we-do-subtext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.</p>
            </div>
            <hr className={styles['my-line']}/>

            <div className={styles['community-text']}>
                <p className={styles['build-a-community']}>Lorem ipsum</p>
                <p className={styles['what-we-do-subtext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.</p>
            </div>
            <hr className={styles['my-line']}/>

            <div className={styles['community-text']}>
                <p className={styles['build-a-community']}>Lorem ipsum</p>
                <p className={styles['what-we-do-subtext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.</p>
            </div>
            <hr className={styles['my-line']}/>
        </div>
    )
}