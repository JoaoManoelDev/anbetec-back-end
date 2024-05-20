
import { PrismaCompanyRepository } from "@/repositories/prisma/prisma-companies-repository"
import { GetCompanyUseCase } from "@/use-cases/get-company"

export const makeGetCompanyUseCase = () => {
  const prismaCompanyRepository = new PrismaCompanyRepository()
  const getCompanyUseCase = new GetCompanyUseCase(prismaCompanyRepository)

  return getCompanyUseCase
}
