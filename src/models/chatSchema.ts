import { Schema } from "mongoose";

const opts = { timestamps: true };
const chatSchema = new Schema(
  {
    userId: {
      type: Schema.ObjectId,
      required: [true, "a chat must reference a user."],
    },
    text: {
      type: String,
      required: [true, "text field is required."],
    },
  },
  opts
);

export default chatSchema;
