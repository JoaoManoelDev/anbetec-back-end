import { Company, CompanyInput } from "@/repositories/dtos/company"

import { prisma } from "@/lib/prisma"
import { CompaniesRepository } from "@/repositories/companies-repository"

export class PrismaCompanyRepository implements CompaniesRepository {
  async create(company: CompanyInput) {
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

  async findByCNPJ(companyCNPJ: string) {
    const company = await prisma.company.findUnique({
      where: {
        cnpj: companyCNPJ
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

  async delete(companyId: string) {
    await prisma.company.delete({
      where: {
        id: companyId
      }
    })

    return
  }
}
