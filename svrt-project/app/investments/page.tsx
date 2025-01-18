import styles from '@/app/investments/investment.module.css';
import Button from '@mui/material/Button';
import Image from "next/image";
import Bottombar from '../components/bottombar';



export default function Page() {
  return (
    <div className={styles['padding']}>
      <p className={styles['title']}>What we Invest In</p>
      <p className={styles['maintext']}>Our Portfolio features technology innovators reshaping the real estate industry.
        With deep industry ties, SVRT offers unique contracts and growth opportunities to our invested companies.
        Reach out to us for collaborations, contracts, or direct financing to drive your business forward.</p>
      <div className={styles['image-and-content']}>
     
          <Image
            src='/logo_zeitro.jpg'
            alt="Description of the image"
            width={254}
            height={1080}
            className={styles['image-wrapper']}
          />
     
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <a href="https://www.zeitro.com" target="_blank" rel="noopener noreferrer" className={styles['another-maintext']}>Zeitro</a>
            <Button className={styles['button-text']}>Financing</Button>
          </div>
          <p className={styles['subtext']}>Zeitro is committed to redefining the future of mortgage origination.
            Headquartered in Silicon Valley, we serve over 3,000 mortgage professionals across the nation, offering AI-driven solutions
            that enhance every stage of the mortgage process. Built on a foundation of deep industry expertise and powered by advanced AI technology,
            Zeitro automates the end-to-end loan origination process, ensuring a streamlined experience for loan officers, borrowers, and lenders alike.</p>
        </div>
      </div>
      <hr className={styles['my-line']} />

      <div className={styles['image-and-content']}>
     
          <Image
            src='/logo_parcelz.png'
            alt="Description of the image"
            width={254}
            height={1080}
            className={styles['image-wrapper']}
          />
 
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <a href="https://www.parcel-z.com" target="_blank" rel="noopener noreferrer" className={styles['another-maintext']}>Parcel Z</a>
            <Button className={styles['button-text']}>Acquisition</Button>
          </div>
          <p className={styles['subtext']}>ParcelZ uses advanced AI to streamline property acquisition, offering tailored insights for both
            new and seasoned investors. Their platform simplifies complex processes, empowering users to make informed real estate investment decisions.</p>
        </div>
      </div>
      <hr className={styles['my-line']} />

      <div className={styles['image-and-content']}>
       
          <Image
            src='/logo_ayla.png'
            alt="Description of the image"
            width={254}
            height={1080}
            className={styles['image-wrapper']}
          />
  
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <a href="https://www.designbyayla.com" target="_blank" rel="noopener noreferrer" className={styles['another-maintext']}>Ayla</a>
            <Button className={styles['button-text']}>Interior Design</Button>
          </div>
          <p className={styles['subtext']}>Ayla Design is a San Jose-based interior design and home staging studio.
            Leveraging AI, they create personalized spaces, blending form and function, with designs ranging from minimalist to traditional.</p>
        </div>
      </div>
      <hr className={styles['my-line']} />

      <div className={styles['image-and-content']}>
     
          <Image
            src='/logo_kassa.png'
            alt="Description of the image"
            width={254}
            height={1080}
            className={styles['image-wrapper']}
          />
  
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <a href="https://www.kassacabinet.com" target="_blank" rel="noopener noreferrer" className={styles['another-maintext']}>Kassa</a>
            <Button className={styles['button-text']}>Construction</Button>
          </div>
          <p className={styles['subtext']}>KASSA Kitchen and Bath, based in San Jose, offers premium kitchen and bathroom products, including cabinets,
            countertops, and flooring. By leveraging technology, they streamline the selection and design process, providing a more efficient and personalized experience for customers.</p>
        </div>
      </div>
      <hr className={styles['my-line']} />

      <div className={styles['image-and-content']}>
       
          <Image
            src='/logo_apex_homes.png'
            alt="Description of the image"
            width={254}
            height={1080}
            className={styles['image-wrapper']}
          />
    
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <a href="https://www.apex-homes.us" target="_blank" rel="noopener noreferrer" className={styles['another-maintext']}>Apex Homes</a>
            <Button className={styles['button-text']}>Construction</Button>
          </div>
          <p className={styles['subtext']}>Apex Homes US specializes in eco-friendly, energy-efficient accessory dwelling units (ADUs).
            They use advanced design software and sustainable construction methods to streamline the building process, offering high-quality,
            customizable living spaces. Their services cover everything from permits to financing, providing a seamless experience for homeowners.</p>
        </div>
      </div>

      <div className={styles['some-spacing']}></div>
      <Bottombar />
    </div>


  )
    ;
}
