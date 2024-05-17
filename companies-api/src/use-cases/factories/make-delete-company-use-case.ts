import { PrismaCompanyRepository } from "@/repositories/prisma/prisma-companies-repository"
import { DeleteCompanyUseCase } from "@/use-cases/delete-company"

export const makeDeleteCompanyUseCase = () => {
  const prismaCompanyRepository = new PrismaCompanyRepository()
  const deleteCompanyUseCase = new DeleteCompanyUseCase(prismaCompanyRepository)

  return deleteCompanyUseCase
}
