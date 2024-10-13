// src/utils/fetchPosts.js
import { createClient } from "@libsql/client";
import dotenv from 'dotenv';

dotenv.config();

const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export async function fetchPosts() {
  try {
    const { rows } = await client.execute('SELECT * FROM posts');
    return rows;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

