import styles from '@/app/about/about.module.css';
import Image from "next/image";
import Bottombar from '../components/bottombar';

export default function Page() {
  return (
    <div className={styles['padding']}>
      <p className={styles['title']}>About SVRT</p>
      <p className={styles['main-text']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p className={styles['main-text']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.</p>
      <p className={styles['main-text']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.</p>

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