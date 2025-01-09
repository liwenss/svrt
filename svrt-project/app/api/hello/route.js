import { db } from '@vercel/postgres';

export async function POST(request) {
    const client = await db.connect();

    try {
        const { name, email, message } = await request.json();
        // Create table if it doesn't exist
        await client.sql`CREATE TABLE IF NOT EXISTS Messages (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255),
            message TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`;
        // Insert data into the table
        await client.sql`
            INSERT INTO Messages (name, email, message)
            VALUES (${name}, ${email}, ${message});
        `;
        return new Response(JSON.stringify({ message: 'Data inserted successfully!' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

export async function GET(request) {
    const client = await db.connect();

    try {
        const pets = await client.sql`SELECT * FROM Messages;`;
        return new Response(JSON.stringify({ pets: pets.rows }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}