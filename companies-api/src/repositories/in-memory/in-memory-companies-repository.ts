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

  async findById(companyId: string) {
    const company = this.companies.find(company => company.id === companyId)

    if (!company) return null

    return company
  }

  async save(company: Company) {
    const companyIndex = this.companies
      .findIndex(company => company.id === company.id)

    if (companyIndex >= 0) {
      this.companies[companyIndex] = company
    }

    return company
  }

  async delete(companyId: string) {
    const companyIndex = this.companies
      .findIndex(company => company.id === companyId)

    if (companyIndex !== -1) {
      this.companies.splice(companyIndex, 1)
    }

    return
  }
}
