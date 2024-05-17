import { Company, Prisma } from "@prisma/client"

export interface CompaniesRepository {
  create(company: Prisma.CompanyCreateInput): Promise<Company>
  findMany(): Promise<Company[] | []>
  findById(companyId: string): Promise<Company | null>
  save(company: Company): Promise<Company>
  delete(companyId: string): Promise<void>
}
