import styles from '@/app/partners/partners.module.css';
import Button from '@mui/material/Button';
import Image from "next/image";
import Bottombar from '../components/bottombar';



export default function Page() {
  return (
    <div className={styles['padding']}>
      <p className={styles['title']}>We partner with</p>
      <p className={styles['maintext']}>SVRT proudly collaborates with industry-leading companies across the entire real estate value chain, 
        including acquisition, financing, development, management, and disposition. This enables 
        us to offer unparalleled resources and expertise to our portfolio companies. Whether you're seeking collaborations, contracts, or direct 
        financing, SVRT provides the support and connections necessary to drive innovation and growth. 
        Reach out to us to explore how we can help your business thrive.</p>
      <div className={styles['image-and-content']}>
        <Image
          src='/Ratedna-05.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>Rate DNA</p>
            <Button className={styles['button-text']}>Loan Service</Button>
          </div>
          <p className={styles['subtext']}>RateDNA Lending is a direct private money lender for 1-4 residential loans in Bay Area. RateDNA is 
          also one of the fastest- growing mortgage brokers in California and provides all various programs to all home buyers and investors, 
          including but not limited to Prime Jumbo & Conventional agency programs and many Non-QM Products (Easy VOE, P&L, DSCR PLUS, and more). </p>
        </div>
      </div>
      <hr className={styles['my-line']}/>

      <div className={styles['image-and-content']}>
        <Image
          src='/yeelee.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>Yeelee Capital</p>
            <Button className={styles['button-text']}>Private Lending</Button>
          </div>
          <p className={styles['subtext']}> Yeelee Capital, established in 2023, is based in San Jose, CA, where a group of seasoned real estate experts 
          come together to form a company dedicated to providing tailored lending solutions. We will offer a wide range of lending programs meticulously 
          designed to cater to the diverse requirements of real estate developers and investors. At Yeelee Capital, we harness the power of cutting-edge
           data technology and rigorous due diligence to achieve consistent and secure returns on real estate debt investments. Our unwavering commitment 
           will be to ensure transparency, reliability, and efficiency in every aspect of our operations. </p>
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
            <p className={styles['another-maintext']}>AL Homes</p>
            <Button className={styles['button-text']}>New Construction Development</Button>
          </div>
          <p className={styles['subtext']}>AL Homes specializes in cutting-edge home design and development in Silicon Valley, blending quality 
          craftsmanship, innovative design, and a commitment to green living. We believe a house should be more than just a place to live-it should 
          be a sanctuary. Our approach transforms concepts into reality, creating spaces that set new standards for modern living, both aesthetically 
          pleasing and environmentally responsible. 
</p>
        </div>
      </div>
      <hr className={styles['my-line']}/>

      <div className={styles['image-and-content']}>
        <Image
          src='/TDDG.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>TDDG</p>
            <Button className={styles['button-text']}>Design and Development</Button>
          </div>
          <p className={styles['subtext']}>Started since 2019, TDDGUS has done 50 - 75 projects every year so far, with plans to do more every year. 
          After being in the industry for many years, The Design Group has established a great portfolio of designs that bridge the gap between art form 
          and lifestyle. We are iconography masters -- culture and environment interpreters. Our home architect designs leave our clients happy and content 
          with its unique style which blends together the environment and its surroundings. 
</p>
        </div>
      </div>
      <hr className={styles['my-line']}/>

      <div className={styles['image-and-content']}>
        <Image
          src='/Apex-Logo-19.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>Apex Homes</p>
            <Button className={styles['button-text']}>Affordable Housing Construction</Button>
          </div>
          <p className={styles['subtext']}>Apex Homes is dedicated to providing sustainable and attainable home solutions to address the
           California housing crisis. Its goal is to build a thousand standardized homes, focusing on innovative, cost-effective, and efficient 
           sustainable construction methods. Particularly targeting the "missing middle" - those middle-class families who struggle to find 
           affordable housing. Help homeowners to create generational wealth by improving their properties and provide options/opportunities 
           for multi-generational living. 
</p>
        </div>
      </div>
      <hr className={styles['my-line']}/>

      <div className={styles['image-and-content']}>
        <Image
          src='/Speed.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>Speed</p>
            <Button className={styles['button-text']}>Home and Community Construction</Button>
          </div>
          <p className={styles['subtext']}> With over 150 successful projects and a wealth of experience, Speed Construction is dedicated 
          to crafting high-quality homes and shaping vibrant communities. Our expertise extends beyond building; we're passionate about the 
          development and entitlement process, ensuring every aspect of your project reflects excellence, from concept to completion. Count 
          on us to deliver exceptional service and create not just homes, but thriving communities. </p>
        </div>
      </div>
      <hr className={styles['my-line']}/>
      <div className={styles['image-and-content']}>
        <Image
          src='/ayla.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>Ayla</p>
            <Button className={styles['button-text']}>Loan Service</Button>
          </div>
          <p className={styles['subtext']}> AYLA is a leading interior design company specializing in transforming living spaces into 
          personalized works of art. From minimalist elegance to rich traditional styles, AYLA expertly blends form and function to reflect each 
          client's unique lifestyle. With years of experience in interior design and home staging, AYLA is committed to delivering creative, 
          precise, and elegant solutions that bring every vision to life.  </p>
        </div>
      </div>
      <hr className={styles['my-line']}/>
      <div className={styles['image-and-content']}>
        <Image
          src='/KASSA.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>KASSA</p>
            <Button className={styles['button-text']}>Loan Service</Button>
          </div>
          <p className={styles['subtext']}>KASSA is a leading provider of Premium Cabinets and Countertops in the San Jose Bay Area, California. 
          At KASSA Kitchen and Bath, we specialize in the collision of luxury and affordability. As kitchen and bathroom experts dedicated to 
          mid-to-high-end cabinets and bathroom products, we prioritize service, integrity, innovation, and sustainable development. With over a 
          decade of industry expertise, KASSA Kitchen and Bath is recognized as one of the premier suppliers in the Bay Area. Explore our extensive 
          selection of high-quality cabinets, vanities, quartz, flooring, tiles, sinks, faucets, and accessories to bring your dream kitchen and 
          bathroom projects to life with excellence. </p>
        </div>
      </div>
      <hr className={styles['my-line']}/>

      <div className={styles['image-and-content']}>
        <Image
          src='/SoLeap.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>SoLeap</p>
            <Button className={styles['button-text']}>Solar Panels</Button>
          </div>
          <p className={styles['subtext']}>Coming soon in Spring 2025 ...................
          ........................................................................................
           </p>
        </div>
      </div>
      <hr className={styles['my-line']}/>
      <div className={styles['image-and-content']}>
        <Image
          src='/JMH Weiss.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>JWH Weiss</p>
            <Button className={styles['button-text']}>Loan Service</Button>
          </div>
          <p className={styles['subtext']}>With over 60 years in business, JMH Weiss has been delivering advanced sustainable solutions to real 
          estate development projects, including commercial, industrial, residential, institutional, advanced technology, and healthcare facilities 
          worldwide. JMH Weiss was founded in 1957 by Robert McDermott and William Heiss who created Jennings, McDermott and Heiss (called JMH). 
          JMH provided land planning, surveying, and civil engineering services for developments throughout the San Francisco Bay Area. In 1995 
          Kevin Weiss, a Penn State graduate in civil engineering and urban planning, acquired the firm and renamed it to JMH Weiss. Since then, 
          JMH Weiss has expanded its reach to all of western US and Hawaii. JMH Weiss diversified into all aspects of land development including 
          niche services in master planning, entitlement processing, sustainability leadership, environmental consulting, and renewable energy 
          infrastructure guidance, setting JMH Weiss apart from more traditional engineering firms. </p>
        </div>
      </div>
      <hr className={styles['my-line']}/>
      <div className={styles['image-and-content']}>
        <Image
          src='/tranvu.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>Tranvu, LLC</p>
            <Button className={styles['button-text']}>Land Survey, Building Design, Civil and Structural Engineering</Button>
          </div>
          <p className={styles['subtext']}>Tranvu, LLC is a one stop company for land development and home improvements. Tranvu, LLC provides 
          services that help clients to eliminate the need to deal with several firms to finish a project. You need to sign only one contract 
          with Tranvu, LLC to have your project done instead of signing several separate contracts with an architect, a civil engineer, a 
          surveyor, a structural engineering, etc. </p>
        </div>
      </div>
      <hr className={styles['my-line']}/>
      <div className={styles['image-and-content']}>
        <Image
          src='/alphax-re.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>AlphaX RE Capital</p>
            <Button className={styles['button-text']}>Real Estate Investment and Asset Management</Button>
          </div>
          <p className={styles['subtext']}>As the fastest growing and most diversified real estate investment and asset management group with 
          the most comprehensive strengths in Silicon Valley (San Francisco Bay Area) in the past five years, its business involves acquisition 
          and development of residential projects, land acquisition and land use approval, loans, architectural design, interior design, project 
          management, long and short-term rental management, real estate sales, and supply of building materials, etc. Currently, we have over 
          $300 million in assets under management and more than 630 projects in operation. We are committed to building a vertically-integrated 
          U.S. real estate investment platform, based in Silicon Valley, radiating to the whole California and even the whole U.S., providing 
          professional, safe and stable real estate investment products for all kinds of investors. 
 </p>
        </div>
      </div>
      <hr className={styles['my-line']}/>
      <div className={styles['image-and-content']}>
        <Image
          src='/Asky.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>Asky</p>
            <Button className={styles['button-text']}>Rental Service</Button>
          </div>
          <p className={styles['subtext']}>  ASKY is a real estate investment firm based in California's Bay Area that specializes in 
          short-term rental investment. We offer a unique approach to real estate investment, leveraging cutting-edge software and real-time data 
          analysis to identify the best locations for short-term rental investment, allowing us to acquire appropriate properties that offer 
          maximum benefits to our investors.</p>
        </div>
      </div>
      <hr className={styles['my-line']}/>
      <div className={styles['image-and-content']}>
        <Image
          src='/axis.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>Axis Realty</p>
            <Button className={styles['button-text']}>Buying and Selling</Button>
          </div>
          <p className={styles['subtext']}> Axis Realty is a prominent Bay Area real estate company specializing in helping clients buy and 
          sell houses. We have always been committed to helping every customer to "Home for Every Phase, Partner for Every Stage" and to
           become a one-stop real estate company with depth and warmth. We complete repairing, cleaning and staging within one week, which 
           streamlines the real estate process and ensures our clients can navigate the competitive market with ease. Our partners include 
           top agents, experienced builders, successful entrepreneurs, well- known lawyers, senior CPA, and architectural designers. Our 
           real estate transactions and development projects are mainly concentrated in all regions of the Bay Area. 
 </p>
        </div>
      </div>
      <hr className={styles['my-line']}/>
      <div className={styles['image-and-content']}>
        <Image
          src='/Aspire Logo.png'
          alt="Description of the image"
          width={254}
          height={1080}
        />
        <div className={styles['right-half']}>
          <div className={styles['company-and-tag']}>
            <p className={styles['another-maintext']}>Aspire Homes</p>
            <Button className={styles['button-text']}>Brokerage</Button>
          </div>
          <p className={styles['subtext']}> Aspire Homes Realty was established in 2022, based in the Bay Area, founded by a group 
          of investors and real estate brokers with over 10 years of experience in the real estate and investment fields.  </p>
        </div>
      </div>
      <div className={styles['some-spacing']}></div>
      <Bottombar/>
    </div>


  )
    ;
}
