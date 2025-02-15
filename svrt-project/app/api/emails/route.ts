import { Resend } from 'resend';
import Welcome from '@/app/emails/Welcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { name, email, message } = await request.json();
    
    await resend.emails.send({ 
        from: 'onboarding@resend.dev',
        to: 'contact@svrt.info',
        subject: 'Welcome!',
        react: Welcome({name, email, message}),
      });

    return new Response();
      
}
