import { NextFunction, Request, Response } from "express"
import { z } from "zod"

import { makeCreateUserUseCase } from "@/use-cases/factories/make-create-user-use-case"
import { UserAlreadyExistsError } from "@/use-cases/errors/user-already-exists-error"
import { EmailAlreadyExistsError } from "@/use-cases/errors/email-already-exists-error"
import { CpfAlreadyExistsError } from "@/use-cases/errors/cpf-already-exists-error"

export class CreateUserController {
  async handler(request: Request, response: Response, next: NextFunction) {
    try {
      const createTaskBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        cpf: z.string().refine((value) => {
          
          const cpfRegex = /^\d{11}$/ // Regex para validar que o cpf possuí 11 dígitos numéricos consecutivos
          return cpfRegex.test(value)
        }, {
          message: "CPF must be 11 digits"
        }),
        password: z.string(),
        phone: z.string(),
        companyId: z.string().optional().nullable()
      })

      const {
        name,
        email,
        password,
        phone,
        companyId,
        cpf
      } = createTaskBodySchema.parse(request.body)

      const createUserUseCase = makeCreateUserUseCase()

      const { user } = await createUserUseCase.execute({
        name,
        email,
        password,
        phone,
        companyId,
        cpf
      })
    
      return response.status(201).json(user)
    } catch (error) {
      if (
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
