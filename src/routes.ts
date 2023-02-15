import { Router } from "express";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { AuthenticateUserController } from "./use-cases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./use-cases/create-user/CreateUserController";
import { RefreshTokenUserController } from "./use-cases/refreshTokenUser/RefreshTokenUserController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/refresh-token", refreshTokenUserController.handle);

router.get("/courses", ensureAuthenticated, (_, response) => {
  return response.json([
    { id: 1, name: "NodeJS" },
    { id: 2, name: "ReactJS" },
    { id: 3, name: "React Native" },
    { id: 4, name: "Flutter" },
    { id: 5, name: "Elixir" },
  ]);
});

export { router };
