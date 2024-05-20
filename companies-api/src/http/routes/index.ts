import { Router } from "express"
import swaggerUi from "swagger-ui-express"

import { companiesRoutes } from "./companies"
import { authRoutes } from "./auth"
import { apiDocsRoutes } from "./docs"

export const routes = Router()

routes.use("/auth", authRoutes)
routes.use("/companies", companiesRoutes)
routes.use("/api-docs", swaggerUi.serve, apiDocsRoutes)