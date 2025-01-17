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
import { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';




export default function Mobilebar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);



    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    // Function to close the drawer
    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const background = pathname === '/'
        ? isScrolled
            ? 'white'
            : 'transparent'
        : 'white';

    const logoPath = pathname === '/' ?
        isScrolled
            ? '/svrt-black.png' :
            '/svrt white.png' :
        '/svrt-black.png';

    const buttonFont = pathname === '/' ?
        isScrolled
            ? styles['navbar-button-font'] :
            styles['home-navbar-button-font'] :
        styles['navbar-button-font'];

    const buttonClass = pathname === '/' ?
        isScrolled
            ? styles['navbar-button'] :
            styles['home-navbar-button'] :
        styles['navbar-button'];

    const menuColor = pathname === '/' ?
        isScrolled
            ? 'black' :
            'white' :
        'black';

    const isActive = (link: string) => pathname === link ?
        isScrolled
            ? 'black' :
            'white' : 'black';

    const shade =
        isScrolled
            ? 'gray' :
            'none';




    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{ backgroundColor: background, boxShadow: shade }}>
                    <Toolbar className={styles['overall-navbar']}>
                        <Image
                            src={logoPath}
                            alt="Description of the image"
                            width="140"
                            height="300"
                        />

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, color: menuColor }}
                            onClick={handleDrawerOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
                <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerClose}>
                    <List>
                        <Link href="/" passHref>
                            <ListItemText className={styles['menu-item']} primary="Home" />
                        </Link>
                        <Link href="/about" passHref>
                            <ListItemText className={styles['menu-item']} primary="About" />
                        </Link>
                        <Link href="/investments" passHref>
                            <ListItemText className={styles['menu-item']} primary="Portfolio" />
                        </Link>
                        <Link href="/partners" passHref>
                            <ListItemText className={styles['menu-item']} primary="Partners" />
                        </Link>
                        <Link href="/events" passHref>
                            <ListItemText className={styles['menu-item']} primary="Events" />
                        </Link>
                        <Link href="/chat" passHref>
                            <ListItemText className={styles['menu-item']} primary="Get in touch" />
                        </Link>
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}