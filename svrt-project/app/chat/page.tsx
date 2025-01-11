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

        try {
            const dbRes = await fetch('/api/hello', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            if (dbRes.ok) {
                console.log('Data saved to the database successfully.');
            } else {
                const errorData = await dbRes.json();
                console.error(`Failed to save data: ${errorData.error}`);
            }
        } catch (error) {
            console.error(`An error occurred while saving to the database`);
        }
    };

    return (
        <div>
            <div className={styles['padding']}>
                <div className={styles['left-part']}>
                    <p className={styles['title']}>Let's chat.</p>
                    <p className={styles['subtext']}>Reach out if you want to get funding or partner with us.</p>
                    <p className={styles['another-maintext']}>Email</p>
                    <p className={styles['small-text']}>admin@svrt.info</p>
                    <p className={styles['another-maintext']}>Socials</p>
                    <div>
                        <a href="https://drive.google.com/file/d/1Pxi7OOSL_9KwQlZvY-VcVtxIy5nCnJCX/view?usp=sharing" className={styles['small-text']}>WeChat</a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/@SiliconValleyRealEstateTech" className={styles['small-text']}>Youtube</a>
                    </div>
                </div>
                <div className={styles['right-part']}>
                    <p className={styles['small-label']}>Name</p>
                    <TextField id="filled-basic" label="Name" variant="filled" style={{ width: '220%' }}
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <p className={styles['small-label']}>Email</p>
                    <TextField id="filled-basic" label="Email" variant="filled" style={{ width: '220%' }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
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
