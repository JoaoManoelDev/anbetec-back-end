import { NextFunction, Request, Response } from "express"
import { z } from "zod"

import { makeCreateCompanyUseCase } from "@/use-cases/factories/make-create-company-use-case"

export class CreateCompanyController {
  async handler(request: Request, response: Response, next: NextFunction) {
    try {
      const createCompanyBodySchema = z.object({
        companyName: z.string(),
        cnpj: z.string(),
        description: z.string(),
      })

      const {
        companyName,
        cnpj,
        description
      } = createCompanyBodySchema.parse(request.body)

      const createCompanyUseCase = makeCreateCompanyUseCase()

      const { company } = await createCompanyUseCase.execute({
        companyName,
        cnpj,
        description
      })

      return response.status(201).json(company)

    } catch (error) {
      return next(error)
    }
  }
}