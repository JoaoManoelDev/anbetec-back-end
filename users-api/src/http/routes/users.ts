import { Router } from "express"

import { CreateUserController } from "@/http/controllers/users/create"
import { GetUsersController } from "@/http/controllers/users/find-users"
import { DeleteUserController } from "@/http/controllers/users/delete"
import { UpdateUserController } from "@/http/controllers/users/update"
import { GetUserController } from "@/http/controllers/users/find-user"

export const usersRoutes = Router()

const createUserController = new CreateUserController()
const getUsersController = new GetUsersController()
const deleteUserController = new DeleteUserController()
const updateUserController = new UpdateUserController()
const getUserController = new GetUserController()

usersRoutes.get("/", getUsersController.handler)
usersRoutes.get("/:name", getUserController.handler)
usersRoutes.post("/", createUserController.handler)
usersRoutes.delete("/:name", deleteUserController.handler)
usersRoutes.put("/:name", updateUserController.handler)
