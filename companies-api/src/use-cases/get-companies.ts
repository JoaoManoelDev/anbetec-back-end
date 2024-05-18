import { Company } from "@/repositories/dtos/company"

import { CompaniesRepository } from "@/repositories/companies-repository"

interface GetCompaniesUseCaseResponse {
  companies: Company[]
}

export class GetCompaniesUseCase {
  constructor(private companiesRepositories: CompaniesRepository) { }

  async execute(): Promise<GetCompaniesUseCaseResponse> {
    const companies = await this.companiesRepositories.findMany()

    return { companies }
  }
}
