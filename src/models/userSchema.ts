import { Schema } from "mongoose";
import pkg from "bcryptjs";
const { genSalt, hash, compare } = pkg;
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "username field is required."],
    lowercase: true,
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

userSchema.methods.isPasswordCorrect = async function (
  userPassword: string
): Promise<boolean> {
  return await compare(userPassword, this.password);
};

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    const saltRound = await genSalt(12);
    this.password = await hash(this.password, saltRound);
  }
});

export default userSchema;
