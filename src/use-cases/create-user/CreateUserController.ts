import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, name, password } = request.body;

    console.log("chegando aqui");

    const createUserUseCase = new CreateUserUseCase();
    const user = await createUserUseCase.execute({
      username,
      name,
      password,
    });

    return response.json(user);
  }
}
