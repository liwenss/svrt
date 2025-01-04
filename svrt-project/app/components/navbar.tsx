'use client';
import React from 'react';
import Image from "next/image";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '@/app/components/navbar.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';




export default function Navbar() {
  const pathname = usePathname();

  const isActive = (link: string) => pathname === link ? 'white' : 'black';
  const buttonClass = pathname === '/' ? styles['home-navbar-button'] : styles['navbar-button'];
  const buttonFont = pathname === '/' ? styles['home-navbar-button-font'] : styles['navbar-button-font'];
  const logoPath = pathname === '/' ? '/svrt white.png' : '/svrt-black.png';

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="absolute" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Toolbar className={styles['overall-navbar']}>
            <Image
              src={logoPath}
              alt="Description of the image"
              width="140"
              height="300"
            />
            <div className={styles['navbar-menu']}>
              <Link href="/" passHref>
                <Typography variant="h6" component="div" sx={{ color: isActive('/'), flexGrow: 1, fontSize: '110%' }}>
                  Home
                </Typography>
              </Link>
              <Link href="/#about" passHref>
                <Typography variant="h6" component="div" sx={{ color: isActive('/'), flexGrow: 1, fontSize: '110%' }}>
                  About
                </Typography>
              </Link>
              <Link href="/investments" passHref>
                <Typography variant="h6" component="div" sx={{ color: isActive('/'), flexGrow: 1, fontSize: '110%' }}>
                  Portfolio
                </Typography>
              </Link>
              <Link href="/partners" passHref>
                <Typography variant="h6" component="div" sx={{ color: isActive('/'), flexGrow: 1, fontSize: '110%' }}>
                  Partners
                </Typography>
              </Link>
              <Link href="/events" passHref>
                <Typography variant="h6" component="div" sx={{ color: isActive('/'), flexGrow: 1, fontSize: '110%' }}>
                  Events
                </Typography>
              </Link>
            </div>
            <Link href="/chat" passHref className={buttonClass}>
              <Button className={buttonFont} >GET IN TOUCH</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}