import { Router } from "express"

import { CreateUserController } from "@/http/controllers/users/create"
import { GetUsersController } from "@/http/controllers/users/find"
import { DeleteUserController } from "@/http/controllers/users/delete"
import { UpdateUserController } from "@/http/controllers/users/update"

export const usersRoutes = Router()

const createUserController = new CreateUserController()
const getUsersController = new GetUsersController()
const deleteUserController = new DeleteUserController()
const updateUserController = new UpdateUserController()

usersRoutes.get("/", getUsersController.handler)
usersRoutes.post("/", createUserController.handler)
usersRoutes.delete("/:name", deleteUserController.handler)
usersRoutes.put("/:name", updateUserController.handler)
