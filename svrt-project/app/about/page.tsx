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
        <Image
          src='/teammember.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <Image
          src='/teammember.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <Image
          src='/teammember.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <Image
          src='/teammember.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
      </div>
      <div className={styles['second-row']}>
        <Image
          src='/teammember.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <Image
          src='/teammember.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <Image
          src='/teammember.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <Image
          src='/teammember.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
      </div>
      <Bottombar/>
    </div>
  );
}
