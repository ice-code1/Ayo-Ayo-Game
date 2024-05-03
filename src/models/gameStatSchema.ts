import { Schema } from "mongoose";

const gameStatSchema = new Schema({
  userId: {
    type: Schema.ObjectId,
    required: [true, "gameStat must reference a user."],
  },
  wins: {
    type: Number,
  },
  losses: {
    type: Number,
  },
  gameDuration: {
    type: Date,
  },
  gamesPlayed: {
    type: Number,
  },
  previousMoves: {
    type: [Array],
  },
});

export default gameStatSchema;
