import { Router } from "express"
import swaggerUi from "swagger-ui-express"

import { usersRoutes } from "./users"
import { apiDocsRoutes } from "./docs"

export const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/api-docs", swaggerUi.serve, apiDocsRoutes)
