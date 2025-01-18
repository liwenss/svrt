import { Button, Html } from "@react-email/components";
import * as React from "react";

export default function Welcome({ name, email, message }: { name: string; email: string; message: string }) {
  return (
    <Html>
      
      <h1>Welcome, {name}!</h1>
            <p>Email: {email}</p>
            <p>Message: {message}</p>
    </Html>
  );
}
