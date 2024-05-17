import express from "express"

import { errorHandler } from "@/middlewares/error"
import { routes } from "@/http/routes"

const app = express()

app.use(express.json())

app.use(routes)

app.use(errorHandler)

export { app }
