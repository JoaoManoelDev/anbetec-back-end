import { Company } from "@/repositories/dtos/company"
import { CompaniesRepository } from "@/repositories/companies-repository"
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error"

interface GetCompanyUseCaseRequest {
  companyId: string
}

interface GetCompanyUseCaseResponse {
  company: Company
}

export class GetCompanyUseCase {
  constructor(private companiesRepository: CompaniesRepository) {}

  async execute({
    companyId
  }: GetCompanyUseCaseRequest): Promise<GetCompanyUseCaseResponse> {
    const company = await this.companiesRepository.findById(companyId)

    if (!company) {
      throw new ResourceNotFoundError()
    }

    return { company }
  }
}