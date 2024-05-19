import { Router } from "express"

import { usersRoutes } from "./users"

export const routes = Router()

routes.use("/users", usersRoutes)