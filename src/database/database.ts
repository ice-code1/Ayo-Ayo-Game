import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import boardSchema from "../models/boardSchema.js";
import chatSchema from "../models/chatSchema.js";
import customizationSchema from "../models/customizationSchema.js";
import gameStatSchema from "../models/gameStatSchema.js";
import leaderBoardSchema from "../models/leaderBoardSchema.js";
import userSchema from "../models/userSchema.js";

const connection = async (url: string): Promise<any> => {
  try {
    const connection = await mongoose.connect(url);
    connection.model("Board", boardSchema);
    connection.model("Chat", chatSchema);
    connection.model("Customization", customizationSchema);
    connection.model("GameStat", gameStatSchema);
    connection.model("LeaderBoard", leaderBoardSchema);
    connection.model("User", userSchema);
    return connection;
  } catch (error) {
    console.error(`Error: `, error.message);
    console.error(error);
  }
};

export default connection;
