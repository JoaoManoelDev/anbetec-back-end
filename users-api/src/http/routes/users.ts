import { Router } from "express"

import { CreateUserController } from "@/http/controllers/users/create"

export const usersRoutes = Router()

const createUserController = new CreateUserController()

usersRoutes.post("/", createUserController.handler)
