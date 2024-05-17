import { randomUUID } from "node:crypto"
import { Company, Prisma } from "@prisma/client"

import { CompaniesRepository } from "@/repositories/companies-repository"

export class InMemoryCompaniesRepository implements CompaniesRepository {
  public companies: Company[] = []

  async create(company: Prisma.CompanyCreateInput) {
    const newCompany = {
      id: company.id ?? randomUUID(),
      companyName: company.companyName,
      cnpj: company.cnpj,
      description: company.description
    }

    this.companies.push(newCompany)

    return newCompany
  }

  async findMany() {
    const companies = this.companies

    return companies
  }
}
