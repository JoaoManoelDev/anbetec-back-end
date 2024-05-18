import { Company } from "@/repositories/dtos/company"
import { CompaniesRepository } from "@/repositories/companies-repository"
import { CompanyAlreadyExistsError } from "@/use-cases/errors/company-already-exists"

interface CreateCompanyUseCaseRequest {
  companyName: string
  cnpj: string
  description: string
}

interface CreateCompanyUseCaseResponse {
  company: Company
}

export class CreateCompanyUseCase {
  constructor(private companiesRepository: CompaniesRepository) { }

  async execute({
    companyName,
    cnpj,
    description
  }: CreateCompanyUseCaseRequest): Promise<CreateCompanyUseCaseResponse> {
    const companyExists = await this.companiesRepository.findByCNPJ(cnpj)

    if (companyExists) {
      throw new CompanyAlreadyExistsError()
    }

    const company = await this.companiesRepository.create({
      companyName,
      cnpj,
      description
    })

    return { company }
  }
}
