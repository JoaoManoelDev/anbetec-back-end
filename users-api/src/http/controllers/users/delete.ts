import { NextFunction, Request, Response } from "express"

import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error"
import { makeDeleteUserUseCase } from "@/use-cases/factories/make-delete-user-use-case"

export class DeleteUserController {
  async handler(request: Request, response: Response, next: NextFunction) {
    try {
      const name = request.params.name

      const deleteCompanyUseCase = makeDeleteUserUseCase()

      await deleteCompanyUseCase.execute({ name })

      return response.status(209).end()

    } catch (error) {
      if (error instanceof ResourceNotFoundError) {
        return response.status(409).json({ message: error.message })
      }
      
      return next(error)
    }
  }
}
