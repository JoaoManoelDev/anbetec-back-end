import { Router } from "express"

import { CreateUserController } from "@/http/controllers/users/create"
import { GetUsersController } from "@/http/controllers/users/find"
import { DeleteUserController } from "@/http/controllers/users/delete"

export const usersRoutes = Router()

const createUserController = new CreateUserController()
const getUsersController = new GetUsersController()
const deleteUserController = new DeleteUserController()

usersRoutes.get("/", getUsersController.handler)
usersRoutes.post("/", createUserController.handler)
usersRoutes.delete("/:name", deleteUserController.handler)

