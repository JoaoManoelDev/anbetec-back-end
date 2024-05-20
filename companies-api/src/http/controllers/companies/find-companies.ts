import { NextFunction, Request, Response } from "express"

import { makeGetCompaniesUseCase } from "@/use-cases/factories/make-get-companies-use-case"

export class GetCompaniesController {
  async handler(_: Request, response: Response, next: NextFunction) {
    try {

      const getCompanyUseCase = makeGetCompaniesUseCase()

      const { companies } = await getCompanyUseCase.execute()

      return response.status(200).json(companies)

    } catch (error) {
      return next(error)
    }
  }
}
