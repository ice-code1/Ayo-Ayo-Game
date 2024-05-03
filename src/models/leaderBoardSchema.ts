import { Schema } from "mongoose";

const leaderBoardSchema = new Schema({
  userId: {
    type: Schema.ObjectId,
    required: [true, "leaderboard details must reference a user."],
  },
  nickname: {
    type: String,
  },
  score: {
    type: Number,
    required: [true, "a score must be provided."],
  },
});

export default leaderBoardSchema;
