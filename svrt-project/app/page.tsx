"use client"
import Image from "next/image";
import Button from '@mui/material/Button';
import * as React from 'react';
import styles from '@/app/homepage.module.css';
import Getintouch from "./homepages/getintouch";
import Whatwedo from "./homepages/whatwedo";
import Numbers from "./homepages/numbers";
import Ceo from "./homepages/ceo";
import Logos from "./homepages/logos";
import Upcoming from "./homepages/upcoming";
import Bottombar from "./components/bottombar";
import Styles from './entirepage.module.css';
import Pastevents from "./homepages/pastevents";
import { StyledEngineProvider } from '@mui/material/styles';

export default function Home() {
  return (
    <StyledEngineProvider injectFirst>
    <div>
      <div className={Styles['my-background']}>
        <p className={Styles['big-text']}>Invest the Future of Real Estate</p>
        <div className={Styles['my-container']}>
          <p className={Styles['sub-text']}>
            We are the investors, innovators and leaders of PropTech shaping the future of real estate.
            We create an influential community that connects real estate professionals, technology professionals
            and entrepreneurs, venture capitalists.
          </p>
        </div>
      </div>

      <Getintouch />
      <Image
        src='/past-event.png'
        alt="Description of the image"
        layout="responsive"
        width={1920}
        height={1080}
      />
      <section id="about">
        <Whatwedo />
      </section>
      <div style={{ position: 'relative' }}>
        <Numbers />
      </div>
      <Ceo />
      <Logos />
      <Upcoming />
      <Bottombar />



    </div>
    </StyledEngineProvider>



  );
}
