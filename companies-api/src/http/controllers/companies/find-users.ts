import { NextFunction, Request, Response } from "express"

import { GetUsersByCompanyService } from "@/services/get-users-by-company"

export class FindUsersController {
  async handler(request: Request, response: Response, next: NextFunction) {
    try {
      const companyId = request.params.id

      const getUsers = new GetUsersByCompanyService()

      const users = await getUsers.execute({ companyId })

      console.log("CONTROLLER SERVICE", users)

      return response.status(200).json(users)

    } catch (error) {
      return next(error)
    }
  }
}
