import { NextFunction, Request, Response } from "express"

import { makeGetCompanyUseCase } from "@/use-cases/factories/make-get-company-use-case"

export class GetCompaniesController {
  async handler(_: Request, response: Response, next: NextFunction) {
    try {

      const getCompanyUseCase = makeGetCompanyUseCase()

      const { companies } = await getCompanyUseCase.execute()

      return response.status(200).json(companies)

    } catch (error) {
      return next(error)
    }
  }
}
