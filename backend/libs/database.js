import pg from "pg";
import dotenv from "dotenv";

dotenv.config(); // Đảm bảo gọi trước khi dùng biến môi trường

const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URI,
  ssl: {
    rejectUnauthorized: false, // Để đảm bảo hoạt động trên Render
  },
});
