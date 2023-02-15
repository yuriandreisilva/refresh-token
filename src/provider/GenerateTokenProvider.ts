import { sign } from "jsonwebtoken";

export class GenerateTokenProvider {
  async execute(userId: string) {
    const token = sign({}, process.env.SECRET, {
      subject: userId,
      expiresIn: "20s",
    });

    return token;
  }
}
