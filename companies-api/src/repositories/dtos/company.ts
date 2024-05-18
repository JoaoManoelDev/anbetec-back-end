export type Company = {
  id: string
  companyName: string
  cnpj: string
  description: string
}

export type CompanyInput = {
  id?: string | undefined
  companyName: string
  cnpj: string
  description: string
}