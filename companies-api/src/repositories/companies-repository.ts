import {
  Company,
  CompanyCreateInput,
  CompanyUpdateInput
} from "@/repositories/dtos/company"

export interface CompaniesRepository {
  create(company: CompanyCreateInput): Promise<Company>
  findMany(): Promise<Company[] | []>
  findById(companyId: string): Promise<Company | null>
  findByCNPJ(companyCNPJ: string): Promise<Company | null>
  save(company: CompanyUpdateInput): Promise<Company>
  delete(companyId: string): Promise<void>
}
