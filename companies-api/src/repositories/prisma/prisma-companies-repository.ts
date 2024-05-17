import { Company, Prisma } from "@prisma/client"

import { prisma } from "@/lib/prisma"
import { CompaniesRepository } from "@/repositories/companies-repository"

export class PrismaCompanyRepository implements CompaniesRepository {
  async create(company: Prisma.CompanyCreateInput) {
    const newCompany = await prisma.company.create({
      data: company
    })

    return newCompany
  }

  async findMany() {
    const companies = await prisma.company.findMany()

    return companies
  }

  async findById(companyId: string) {
    const company = await prisma.company.findUnique({
      where: {
        id: companyId
      }
    })

    return company
  }

  async save(company: Company) {
    const updatedCompany = await prisma.company.update({
      where: {
        id: company.id
      },
      data: company
    })

    return updatedCompany
  }
}
