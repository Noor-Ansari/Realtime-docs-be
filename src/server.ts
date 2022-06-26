import express, { Application, Request, Response } from "express";
import cors from "cors";
import { createServer } from "http";

import DocRoutes from "./modules/document/routes";
import { initDocSocket } from "./modules/document/utils";
import { connectDB } from "./shared/db";

const app: Application = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/docs", DocRoutes);

const httpServer = createServer(app);

try {
  httpServer.listen(port, (): void => {
    connectDB();
    initDocSocket(httpServer);
    console.log(`Server running on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
