import { Company } from "@/repositories/dtos/company"
import { CompaniesRepository } from "@/repositories/companies-repository"
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error"

interface UpdateCompanyUseCaseRequest {
  companyId: string
  companyUpdate: {
    companyName: string
    cnpj: string
    description: string
  }
}

interface UpdateCompanyUseCaseResponse {
  company: Company
}

export class UpdateCompanyUseCase {
  constructor(private companiesRepositories: CompaniesRepository) { }

  async execute({
    companyId,
    companyUpdate
  }: UpdateCompanyUseCaseRequest): Promise<UpdateCompanyUseCaseResponse> {
    const company = await this.companiesRepositories.findById(companyId)

    if (!company) {
      throw new ResourceNotFoundError()
    }

    company.companyName = companyUpdate.companyName
    company.cnpj = companyUpdate.cnpj
    company.description = companyUpdate.description

    const updatedCompany = await this.companiesRepositories.save(company)

    return { company: updatedCompany }
  }
}
