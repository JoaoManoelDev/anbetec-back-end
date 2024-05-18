import { Company, ComponentIdInput } from "@/repositories/dtos/company"

export interface CompaniesRepository {
  create(company: ComponentIdInput): Promise<Company>
  findMany(): Promise<Company[] | []>
  findById(companyId: string): Promise<Company | null>
  save(company: Company): Promise<Company>
  delete(companyId: string): Promise<void>
}
