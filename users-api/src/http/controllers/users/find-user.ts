import { NextFunction, Request, Response } from "express"

import { makeGetUserUseCase } from "@/use-cases/factories/make-get-user-use-case"

export class GetUserController {
  async handler(request: Request, response: Response, next: NextFunction) {
    try {
      const name = request.params.name

      const getUserUseCase = makeGetUserUseCase()

      const { user } = await getUserUseCase.execute({ name })

      return response.status(200).json(user)

    } catch (error) {
      return next(error)
    }
  }
}
