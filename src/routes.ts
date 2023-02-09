import { Router } from "express";
import { AuthenticateUserController } from "./use-cases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./use-cases/create-user/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);

export { router };
