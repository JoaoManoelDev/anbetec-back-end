import { Router } from "express"

import { companiesRoutes } from "./companies"
import { authRoutes } from "./auth"

export const routes = Router()

routes.use("/auth", authRoutes)
routes.use("/companies", companiesRoutes)