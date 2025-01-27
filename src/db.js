// import {
//   PG_DATABASE,
//   PG_HOST,
//   PG_PASSWORD,
//   PG_PORT,
//   PG_USER,
// } from "./config.js";
import pg from "pg";

export const pool = new pg.Pool({
  port: 5432,
  host: "localhost",
  user: "postgres",
  password: "root",
  database: "tasksdb",
});

pool.on("connect", () => {
  console.log("Database connected");
});
