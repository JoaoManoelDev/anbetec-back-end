import { Router } from "express"

import { AuthenticateController } from "@/http/controllers/auth/authenticate"

export const authRoutes = Router()

const authenticateController = new AuthenticateController()

authRoutes.post("/sign-in", authenticateController.handler)
