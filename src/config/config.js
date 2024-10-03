import { configDotenv } from "dotenv";

configDotenv({ path: "./.env" });

const config = {
  PORT: process.env.PORT,
};

export default config;
