import { NextFunction, Request, Response } from "express"
import { z } from "zod"
import { sign } from "jsonwebtoken"

import { makeAuthenticateUseCase } from "@/use-cases/factories/make-authenticate-use-case"
import { InvalidCredentialsError } from "@/use-cases/errors/invalid-credentials-error"
import { env } from "@/env"

export class AuthenticateController {
  async handler(request: Request, response: Response, next: NextFunction) {
    try {
      const authenticateBodySchema = z.object({
        name: z.string().min(3),
        password: z.string().min(6)
      })
    
      const { name, password } = authenticateBodySchema.parse(request.body)

      const authenticateUseCase = makeAuthenticateUseCase()
  
      const { user } = await authenticateUseCase.execute({ name, password })

      if (!user) return response.status(500).json({
        message: "Something went wrong, try again later"
      })
      
      const token = sign({ name: user.name }, env.JWT_SECRET, {
        subject: user.name,
        expiresIn: "3h"
      })

      return response.status(200).json({ token })
    } catch (error) {
      if (error instanceof InvalidCredentialsError) {
        return response.status(409).send({ message: error.message })
      }

      return next(error)
    }
  }
}
