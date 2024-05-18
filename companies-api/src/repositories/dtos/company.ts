export type Company = {
  id: string
  companyName: string
  cnpj: string
  description: string
}

export type CompanyCreateInput = {
  id?: string | undefined
  companyName: string
  cnpj: string
  description: string
}

export type CompanyUpdateInput = {
  id?: string | undefined
  companyName?: string | undefined
  cnpj?: string | undefined
  description?: string | undefined
}