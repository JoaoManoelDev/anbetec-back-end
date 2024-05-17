import { Router } from "express"

import { companiesRoutes } from "./companies"

export const routes = Router()

routes.use("/companies", companiesRoutes)