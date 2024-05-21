import express from "express"
import cors from "cors"

import { errorHandler } from "@/middlewares/error"
import { routes } from "@/http/routes"

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

app.use(errorHandler)

export { app }
