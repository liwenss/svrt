import Image from "next/image";
import styles from '@/app/homepages/logos.module.css';

export default function Logos() {
    return (
        <div>
            <div className={styles['first-row']}>
                <Image
                    src='/logo9.png'
                    alt="Description of the image"
                    width={254}
                    height={1080}
                />
                <Image
                    src='/logo2.png'
                    alt="Description of the image"
                    width={254}
                    height={1080}
                />
                <Image
                    src='/logo3.png'
                    alt="Description of the image"
                    width={254}
                    height={1080}
                />
                <Image
                    src='/logo4.png'
                    alt="Description of the image"
                    width={254}
                    height={1080}
                />
            </div>
            <div className={styles['first-row']}>
                <Image
                    src='/logo5.png'
                    alt="Description of the image"
                    width={254}
                    height={1080}
                />
                <Image
                    src='/logo6.png'
                    alt="Description of the image"
                    width={254}
                    height={1080}
                />
                <Image
                    src='/logo7.png'
                    alt="Description of the image"
                    width={254}
                    height={1080}
                />
                <Image
                    src='/logo8.png'
                    alt="Description of the image"
                    width={254}
                    height={1080}
                />
            </div>
        </div>
    )
}