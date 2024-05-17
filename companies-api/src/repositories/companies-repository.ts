import { Company, Prisma } from "@prisma/client"

export interface CompaniesRepository {
  create(company: Prisma.CompanyCreateInput): Promise<Company>
}