
import { PrismaCompanyRepository } from "@/repositories/prisma/prisma-companies-repository"
import { GetCompaniesUseCase } from "../get-companies"

export const makeGetCompaniesUseCase = () => {
  const prismaCompanyRepository = new PrismaCompanyRepository()
  const getCompaniesUseCase = new GetCompaniesUseCase(prismaCompanyRepository)

  return getCompaniesUseCase
}
