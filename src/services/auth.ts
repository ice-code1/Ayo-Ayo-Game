import dotenv from "dotenv";
dotenv.config();
import conn from "../database/database.js";
const db = await conn(process.env.MONGO_URI);

interface IUser {
  username?: string;
  email: string;
  password: string;
}

class Auth {
  #User;
  constructor() {
    this.#User = db.model("User");
  }

  async register({ username, email, password }: IUser) {
    const isExisting = await this.#User.findOne({ email });

    if (isExisting) throw new Error("user already exist.");

    const newUser = this.#User({ username, email, password });
    await newUser.save();
    return newUser;
  }

  async login({ email, password }: IUser) {
    const user = await this.#User.findOne({ email });
    if (!user) throw new Error("user does not exist");

    const isPasswordValid = user.isPasswordCorrect(password);
    if (!isPasswordValid) throw new Error("invalid credentials");
    return user;
  }
}

export default new Auth();
