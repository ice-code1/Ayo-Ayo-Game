import { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "username field is required."],
  },
  email: {
    type: String,
    required: [true, "email field is required."],
  },
  password: {
    type: String,
    required: [true, "password field is required."],
  },
});

export default userSchema;
