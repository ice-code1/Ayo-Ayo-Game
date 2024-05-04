import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import asyncWrapper from "./utils/asyncWrapper.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js";
import { Server } from "socket.io";
import databaseConn from "./database/database.js";

const PORT = process.env.PORT || 3000;
const app = express();
const server = createServer(app);
const io = new Server(server);

//listening for socket connection.
io.on("connection", (socket) => {
  console.log(`socket connection established.`);
});

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get(
  "/",
  asyncWrapper(async (req, res) => {
    res.sendFile(join(__dirname, "..", "index.html"));
  })
);

app.use(notFound);
app.use(errorHandler);

async function startApp() {
  await databaseConn(process.env.MONGO_URI);
  console.log(`CONNECTED TO DATABASE SUCCESSFULLY.`);
  server.listen(PORT, () => {
    console.log(
      `server running at http://localhost:${PORT}.Press Ctrl+C to terminate.`
    );
  });
}

startApp();
