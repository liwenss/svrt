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

export default function Home() {
  return (
    <div>
      <div style={{ position: 'relative', height: '100vh' }}>
        <Image
          src="/numberbase.png"
          alt="Description of the image"
          layout="fill"
        />
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            color: "white",
            textAlign: "left",
            paddingTop: "10%",
            paddingLeft: "4%",
            fontFamily: "inter",
            fontSize: "900%",
            maxWidth: "90%",
            lineHeight: "1",
            alignSelf: "right"
          }}
        >
          <p>Invest the Future of Real Estate</p>
        </div>

        <div
          style={{
            position: "absolute",
            zIndex: 1,
            color: "white",
            textAlign: "right",
            paddingTop: "36%",
            right: "4%",
            fontFamily: "inter",
            fontSize: "186%",
            width: "71%",
          }}
        >
          <p>
            We are the investors, innovators and leaders of PropTech shaping the future of real estate.
            We create an influential community that connects real estate professionals, technology professionals
            and entrepreneurs, venture capitalists.
          </p>
        </div>
      </div>
      <Getintouch/>
      <Image
        src='/past-event.png'
        alt="Description of the image"
        layout="responsive"
        width={1920}       
        height={1080} 
      />
      <Whatwedo/>
      <div style={{ position: 'relative'}}>
      <Numbers/>
      </div>
      <Ceo/>
      <Logos/>
      <Upcoming/>
      
      <Bottombar/>

      
    </div>
    


  );
}
