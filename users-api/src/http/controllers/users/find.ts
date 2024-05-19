import { NextFunction, Request, Response } from "express"

import { makeGetUsersUseCase } from "@/use-cases/factories/make-get-users-use-case"

export class GetUsersController {
  async handler(_: Request, response: Response, next: NextFunction) {
    try {

      const getUsersUseCase = makeGetUsersUseCase()

      const { users } = await getUsersUseCase.execute()

      return response.status(200).json(users)

    } catch (error) {
      return next(error)
    }
  }
}
