import { Button, Html } from "@react-email/components";
import * as React from "react";

export default function Welcome({ name, email, message }: { name: string; email: string; message: string }) {
  return (
    <Html>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
      <h1>Welcome, {name}!</h1>
            <p>Email: {email}</p>
            <p>Message: {message}</p>
    </Html>
  );
}
