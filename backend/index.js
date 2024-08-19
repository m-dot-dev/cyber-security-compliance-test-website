import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import http from "http";
import { dirname } from "path";
import { fileURLToPath } from "url";

import { connect } from "./config/db.js";

import { port } from "./utils/constants.js";
import { questionRouter } from "./routes/questions.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

connect(); // Connect to MongoDB database
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Serve static files from the publici directory
app.use("/public", express.static("public"));

// Mount API routes
app.use("/question", questionRouter);

// Create HTTP server
http.createServer(app).listen(port, () => {
  console.log(`Server running on port ${port}`);
});
