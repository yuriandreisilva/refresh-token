import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { client } from "../../prisma/client";

interface IRequest {
  username: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute({ username, password }: IRequest) {
    /*
     * Verify if user exists
     */
    const userAlreadyExists = await client.user.findFirst({
      where: {
        username,
      },
    });

    if (!userAlreadyExists) {
      throw new Error("User or password incorrect!");
    }

    /*
     * Verify if password is correct
     */

    const passwordMatch = compare(password, userAlreadyExists.password);

    if (!passwordMatch) {
      throw new Error("User or password incorrect!");
    }

    /*
     * Generate token in JWT
     */
    const token = sign({}, process.env.SECRET, {
      subject: userAlreadyExists.id,
      expiresIn: "20s",
    });

    return { token };
  }
}
