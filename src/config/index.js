import dotenv from "dotenv";

dotenv.config();

export const envVars = {
    port: process.env.PORT || 5000,
    db_uri: process.env.DB_URI, 
}
