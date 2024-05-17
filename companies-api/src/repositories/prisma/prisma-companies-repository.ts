import { Prisma } from "@prisma/client"

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
}
