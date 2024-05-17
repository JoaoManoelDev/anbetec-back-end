import { CompaniesRepository } from "@/repositories/companies-repository"
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error"

interface DeleteCompanyUseCaseRequest {
  companyId: string
}

export class DeleteCompanyUseCase {
  constructor(private companiesRepository: CompaniesRepository) {}

  async execute({ companyId }: DeleteCompanyUseCaseRequest) {
    const company = await this.companiesRepository.findById(companyId)

    if (!company) {
      throw new ResourceNotFoundError()
    }

    await this.companiesRepository.delete(company.id)

    return
  }
}
