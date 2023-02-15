import { client } from "../prisma/client";
import dayjs from "dayjs";

export class GenerateRefreshToken {
  async execute(userId: string) {
    const expiresIn = dayjs().add(15, "second").unix();

    return client.refreshToken.create({
      data: {
        userId,
        expiresIn,
      },
    });
  }
}
