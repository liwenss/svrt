"use client"
import styles from '@/app/chat/chat.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Croppedbar from './croppedbar';
import { useState } from 'react';


export default function Page() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async () => {
        const res = await fetch('/api/emails', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message }),
        });

        if (res.ok) {
            alert('Email sent successfully!');
        } else {
            alert('Failed to send email.');
        }
    };
    return (
        <div>
            <div className={styles['padding']}>
                <div className={styles['left-part']}>
                    <p className={styles['title']}>Let's chat.</p>
                    <p className={styles['subtext']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.</p>
                    <p className={styles['another-maintext']}>Email</p>
                    <p className={styles['small-text']}>hello@svrt.com</p>
                    <p className={styles['another-maintext']}>Socials</p>
                    <p className={styles['small-text']}>WeChat</p>
                    <p className={styles['small-text']}>Youtube</p>
                    <p className={styles['small-text']}>Linkedin</p>
                </div>
                <div className={styles['right-part']}>
                    <p className={styles['small-label']}>Name</p>
                    <TextField id="filled-basic" label="Name" variant="filled" style={{ width: '220%' }} 
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                    <p className={styles['small-label']}>Email</p>
                    <TextField id="filled-basic" label="Email" variant="filled" style={{ width: '220%' }} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                    <p className={styles['small-label']}>Message</p>
                    <TextField id="filled-basic" label="Message" variant="filled" style={{ width: '220%' }} multiline minRows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} />
                    <Button className={styles['the-button']} onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
            <Croppedbar />
        </div>
    )
}