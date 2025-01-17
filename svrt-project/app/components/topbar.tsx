'use client'
import Mobilebar from "./mobilebar";
import Navbar from "./navbar";
import { useState, useEffect } from "react";

export default function Topbar() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 450);
      };
  
      handleResize(); // Run on mount
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div>
            {isMobile ? <Mobilebar /> : <Navbar />}
  
        </div>
    )
}