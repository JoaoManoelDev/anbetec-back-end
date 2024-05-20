import express from "express"
import cors from "cors"

import { routes } from "@/http/routes"
import { errorHandler } from "@/middlewares/error"
import { cronGetUsersByCompany } from "@/services/cron-get-users-by-company"

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

app.use(errorHandler)

// cronGetUsersByCompany()

export { app }
