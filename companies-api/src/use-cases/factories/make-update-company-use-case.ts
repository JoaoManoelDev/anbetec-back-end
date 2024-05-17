
import { PrismaCompanyRepository } from "@/repositories/prisma/prisma-companies-repository"
import { UpdateCompanyUseCase } from "@/use-cases/update-company"

export const makeUpdateCompanyUseCase = () => {
  const prismaCompanyRepository = new PrismaCompanyRepository()
  const updateCompanyUseCase = new UpdateCompanyUseCase(prismaCompanyRepository)

  return updateCompanyUseCase
}
