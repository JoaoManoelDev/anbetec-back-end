import { NextFunction, Request, Response } from "express"
import { z } from "zod"

import { makeUpdateCompanyUseCase } from "@/use-cases/factories/make-update-company-use-case"
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error"

export class UpdateCompanyController {
  async handler(request: Request, response: Response, next: NextFunction) {
    try {
      const companyId = request.params.id

      const updateCompanyBodySchema = z.object({
        companyName: z.string(),
        cnpj: z.string().refine((value) => {
          
          const cnpjRegex = /^\d{14}$/ // Regex para validar que o cnpj possuí 14 dígitos numéricos consecutivos
          return cnpjRegex.test(value)
        }, {
          message: "CNPJ must be 14 digits"
        }),
        description: z.string(),
      })

      const {
        companyName,
        cnpj,
        description
      } = updateCompanyBodySchema.parse(request.body)

      const updateCompanyUseCase = makeUpdateCompanyUseCase()

      const { company } = await updateCompanyUseCase.execute({
        companyId,
        companyUpdate: {
          companyName,
          cnpj,
          description
        }
      })

      return response.status(200).json(company)

    } catch (error) {
      if (error instanceof ResourceNotFoundError) {
        return response.status(409).json({ message: error.message })
      }

      return next(error)
    }
  }
}
