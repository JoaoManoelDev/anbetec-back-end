import { Router, Request, Response, response } from "express"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "./swagger.json"

export const apiDocsRoutes = Router()

apiDocsRoutes.get('/', swaggerUi.setup(swaggerDocument))

apiDocsRoutes.get('/terms', (request: Request, response: Response) => {
  return response.status(200).json({
    message: "Terms 0f Services"
  })
})
