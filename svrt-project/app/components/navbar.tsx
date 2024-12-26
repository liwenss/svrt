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

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (link: string) => pathname === link ? 'white' : 'black';
    const buttonClass = pathname === '/' ? styles['home-navbar-button'] :styles['navbar-button'];
    const logoPath = pathname === '/' ? '/svrt white.png' :'/svrt-black.png';

    return (
      <div>
        <Box sx={{ flexGrow: 1}}>
        <AppBar position="absolute"  sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Toolbar className = {styles['overall-navbar']}>
          <Image
        src={logoPath}
        alt="Description of the image"
        width="140"
        height="300"
      />
            <div className = {styles['navbar-menu']}>
            <Typography variant="h6" component="div" sx={{color: isActive('/'), flexGrow: 1, fontSize: '110%'}}>
              Home
            </Typography>
            <Typography variant="h6" component="div" sx={{color: isActive('/'), flexGrow: 1, fontSize: '110%' }}>
              About
            </Typography>
            <Typography variant="h6" component="div" sx={{color: isActive('/'), flexGrow: 1, fontSize: '110%' }}>
              Portfolio
            </Typography>
            <Typography variant="h6" component="div" sx={{color: isActive('/'), flexGrow: 1, fontSize: '110%' }}>
              Partners
            </Typography>
            <Typography variant="h6" component="div" sx={{color: isActive('/'), flexGrow: 1, fontSize: '110%' }}>
              Events
            </Typography>
            </div>
            <Button className = {buttonClass}>GET IN TOUCH</Button>
          </Toolbar>
        </AppBar>
      </Box>
      </div>
    );
  }