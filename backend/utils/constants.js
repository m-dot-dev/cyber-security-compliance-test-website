import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT;
export const mongo = { uri: process.env.MONGO_URI };
export const JWT_SECRET = process.env.JWT_SECRET;
export const SENDER_EMAIL = process.env.SENDER_EMAIL;
export const SENDER_EMAIL_PASSWORD = process.env.SENDER_EMAIL_PASSWORD;
export const FRONT_END_BASE_URL = process.env.FRONT_END_BASE_URL;
export const PAYMENT_CURRENCY = process.env.PAYMENT_CURRENCY;
export const MAPS_API_KEY = process.env.MAPS_API_KEY;
