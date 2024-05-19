import { NextFunction, Request, Response } from "express"

import { makeGetUsersByCompanyUseCase } from "@/use-cases/factories/make-get-users-by-company"

export class FindUsersController {
  async handler(request: Request, response: Response, next: NextFunction) {
    try {
      const companyId = request.params.id

      const GetUsersByCompanyUseCase = makeGetUsersByCompanyUseCase()

      const users = await GetUsersByCompanyUseCase.execute({ companyId })

      return response.status(200).json(users)

    } catch (error) {
      return next(error)
    }
  }
}
