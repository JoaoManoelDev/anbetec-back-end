import { Company } from "@/repositories/dtos/company"
import { CompaniesRepository } from "@/repositories/companies-repository"
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error"

interface UpdateCompanyUseCaseRequest {
  companyId: string
  companyUpdate: {
    companyName: string | undefined
    cnpj: string | undefined
    description: string | undefined
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

    const companyUpdateToSave = {
      ...company,
      companyName: companyUpdate.companyName,
      cnpj: companyUpdate.cnpj,
      description: companyUpdate.description
    }

    const updatedCompany = await this.companiesRepositories.save(companyUpdateToSave)

    return { company: updatedCompany }
  }
}
