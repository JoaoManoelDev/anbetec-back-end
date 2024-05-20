import { NextFunction, Request, Response } from "express"

import { makeGetCompanyUseCase } from "@/use-cases/factories/make-get-company-use-case"
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error"

export class GetCompanyController {
  async handler(request: Request, response: Response, next: NextFunction) {
    try {
      const companyId = request.params.id

      const getCompanyUseCase = makeGetCompanyUseCase()

      const { company } = await getCompanyUseCase.execute({ companyId })

      return response.status(200).json(company)

    } catch (error) {
      if (error instanceof ResourceNotFoundError) {
        return response.status(409).json({ message: error.message })
      }

      return next(error)
    }
  }
}