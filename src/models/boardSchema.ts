import { Schema } from "mongoose";

const boardSchema = new Schema({
  ayoBoard: {
    type: [Array],
    default: [
      [4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 4, 4],
    ],
  },
});

export default boardSchema;
