import { Schema } from "mongoose";

const customizationSchema = new Schema({
  themes: {
    type: [String],
  },
  backgroundSong: {
    type: [String],
  },
});

export default customizationSchema;
