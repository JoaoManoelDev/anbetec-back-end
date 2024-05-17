import { CreateCompanyUseCase } from "@/use-cases/create-company"
import { PrismaCompanyRepository } from "@/repositories/prisma/prisma-companies-repository"

export const makeCreateCompanyUseCase = () => {
  const prismaCompanyRepository = new PrismaCompanyRepository()
  const createCompanyUseCase = new CreateCompanyUseCase(prismaCompanyRepository)

  return createCompanyUseCase
}
