import express from "express";
import cors from "cors"; // Import the cors package
import { foodData } from "./data.js";

const app = express();

// Use the CORS middleware
app.use(cors());

const Port = process.env.Port || 5000; // Default to port 5000 if not set

app.listen(Port, () => {
  console.log(`Port is listening on port ${Port}`);
});

app.get("/api/data2", (request, response) => {
  response.json(foodData);
});
