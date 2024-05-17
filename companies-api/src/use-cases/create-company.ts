import { Company } from "@prisma/client"

import { CompaniesRepository } from "@/repositories/companies-repository"

interface CreateCompanyUseCaseRequest {
  companyName: string
  cnpj: string
  description: string
}

interface CreateCompanyUseCaseResponse {
  company: Company
}

export class CreateCompanyUseCase {
  constructor(private companiesRepository: CompaniesRepository) {}

  async execute({
    companyName,
    cnpj,
    description
  }: CreateCompanyUseCaseRequest): Promise<CreateCompanyUseCaseResponse> {
    const company = await this.companiesRepository.create({
      companyName,
      cnpj,
      description
    })

    return { company }
  }
}
