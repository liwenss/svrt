import styles from '@/app/about/about.module.css';
import Image from "next/image";
import Bottombar from '../components/bottombar';

export default function Page() {
  return (
    <div className={styles['padding']}>
      <p className={styles['title']}>About SVRT</p>
      <p className={styles['main-text']}>Silicon Valley Real Estate Tech (SVRT) is a California-based venture capital firm that invests in PropTech startups.</p>
      <p className={styles['main-text']}>We connect real estate, tech, and venture capital professionals, share insights through events, and incubate PropTech startups. Deeply rooted in the real estate industry, SVRT provides mentorship, contracts, and investment to PropTech startups.</p>
      <p className={styles['main-text']}>Our team unites experts from technology, real estate, and venture capital, blending industry insights, tech innovation, and investment expertise to mentor startups and drive innovation. This unique blend of skills enables us to empower the next generation of innovators and shape the future of the PropTech industry.</p>

      <div className={styles['first-row']}>
        <div className={styles['a-block']}>
          <Image
            src='/roger.jpg'
            alt="Description of the image"
            width={300}
            height={220}
            objectFit="cover"
            className={styles['a-block-img']}
          />
          <p className={styles['img-text']}>Roger, Board of Director</p>
        </div>
        <div className={styles['a-block']}>
          <Image
            src='/lei.png'
            alt="Description of the image"
            width={300}
            height={220}
            objectFit="cover"
            className={styles['a-block-img']}
          />
          <p className={styles['img-text']}>Lei, Board of Director</p>
        </div>
        <div className={styles['a-block']}>
          <Image
            src='/stephanie.png'
            alt="Description of the image"
            width={300}
            height={220}
            className={styles['a-block-img']}
          />
          <p className={styles['img-text']}>Stephanie, Advisor, Founder & CEO of Alpha X Capital</p>
        </div>
        <div className={styles['a-block']}>
          <Image
            src='/jane.png'
            alt="Description of the image"
            width={300}
            height={220}
            className={styles['a-block-img']}
          />
          <p className={styles['img-text']}>Jane, Advisor, Chief Investment Officer of Alpha X Capital</p>
        </div>
      </div>
      <Bottombar />
    </div>
  );
}
