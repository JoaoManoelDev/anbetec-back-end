import { NextFunction, Request, Response } from "express"

import { makeDeleteCompanyUseCase } from "@/use-cases/factories/make-delete-company-use-case"
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error"

export class DeleteCompanyController {
  async handler(request: Request, response: Response, next: NextFunction) {
    try {
      const companyId = request.params.id

      const deleteCompanyUseCase = makeDeleteCompanyUseCase()

      await deleteCompanyUseCase.execute({ companyId })

      return response.status(209)

    } catch (error) {
      if (error instanceof ResourceNotFoundError) {
        return response.status(409).json({ message: error.message })
      }
      
      return next(error)
    }
  }
}
