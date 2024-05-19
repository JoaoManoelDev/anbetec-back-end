import { NextFunction, Request, Response } from "express"
import { z } from "zod"

import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error"
import { makeUpdateUserUseCase } from "@/use-cases/factories/make-update-user-use-case"
import { UserAlreadyExistsError } from "@/use-cases/errors/user-already-exists-error"
import { CpfAlreadyExistsError } from "@/use-cases/errors/cpf-already-exists-error"
import { EmailAlreadyExistsError } from "@/use-cases/errors/email-already-exists-error"

export class UpdateUserController {
  async handler(request: Request, response: Response, next: NextFunction) {
    try {
      const name = request.params.name

      const updateUserBodySchema = z.object({
        email: z.string().email().optional(),
        cpf: z.string().refine((value) => {
          
          const cpfRegex = /^\d{11}$/ // Regex para validar que o cpf possuí 11 dígitos numéricos consecutivos
          return cpfRegex.test(value)
        }, {
          message: "CPF must be 11 digits"
        }).optional(),
        password: z.string().optional(),
        phone: z.string().optional(),
        companyId: z.string().optional()
      })

      const {
        email,
        password,
        cpf,
        phone,
        companyId
      } = updateUserBodySchema.parse(request.body)

      const createCompanyUseCase = makeUpdateUserUseCase()

      const { user } = await createCompanyUseCase.execute({
        name,
        userUpdate: {
          email,
          password,
          cpf,
          phone,
          companyId,
        }
      })

      return response.status(200).json(user)

    } catch (error) {
      if (
        error instanceof ResourceNotFoundError ||
        error instanceof UserAlreadyExistsError ||
        error instanceof CpfAlreadyExistsError ||
        error instanceof EmailAlreadyExistsError
      ) {
        return response.status(409).json({ message: error.message })
      }

      return next(error)
    }
  }
}
