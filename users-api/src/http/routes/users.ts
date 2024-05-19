import { Router } from "express"

import { CreateUserController } from "@/http/controllers/users/create"
import { GetUsersController } from "../controllers/users/find"

export const usersRoutes = Router()

const createUserController = new CreateUserController()
const getUsersController = new GetUsersController()

usersRoutes.get("/", getUsersController.handler)
usersRoutes.post("/", createUserController.handler)

