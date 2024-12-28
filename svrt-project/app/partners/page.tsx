import styles from '@/app/partners/partners.module.css';
import Button from '@mui/material/Button';
import Image from "next/image";
import Bottombar from '../components/bottombar';



export default function Page() {
  return (
    <div className={styles['padding']}>
      <p className={styles['title']}>We partner with</p>
      <p className={styles['maintext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.</p>
      <div className={styles['image-and-content']}>
        <Image
          src='/logo9.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>Company Name</p>
            <Button className={styles['button-text']}>Tag-category</Button>
          </div>
          <p className={styles['subtext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.</p>
        </div>
      </div>
      <hr className={styles['my-line']}/>

      <div className={styles['image-and-content']}>
        <Image
          src='/logo9.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>Company Name</p>
            <Button className={styles['button-text']}>Tag-category</Button>
          </div>
          <p className={styles['subtext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.</p>
        </div>
      </div>
      <hr className={styles['my-line']}/>

      <div className={styles['image-and-content']}>
        <Image
          src='/logo9.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>Company Name</p>
            <Button className={styles['button-text']}>Tag-category</Button>
          </div>
          <p className={styles['subtext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.</p>
        </div>
      </div>
      <hr className={styles['my-line']}/>

      <div className={styles['image-and-content']}>
        <Image
          src='/logo9.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>Company Name</p>
            <Button className={styles['button-text']}>Tag-category</Button>
          </div>
          <p className={styles['subtext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.</p>
        </div>
      </div>
      <hr className={styles['my-line']}/>

      <div className={styles['image-and-content']}>
        <Image
          src='/logo9.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>Company Name</p>
            <Button className={styles['button-text']}>Tag-category</Button>
          </div>
          <p className={styles['subtext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.</p>
        </div>
      </div>
      <hr className={styles['my-line']}/>

      <div className={styles['image-and-content']}>
        <Image
          src='/logo9.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>Company Name</p>
            <Button className={styles['button-text']}>Tag-category</Button>
          </div>
          <p className={styles['subtext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.</p>
        </div>
      </div>
      <div className={styles['some-spacing']}></div>
      <Bottombar/>
    </div>


  )
    ;
}