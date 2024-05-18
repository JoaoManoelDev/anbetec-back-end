export type User = {
  name: string
  email: string
  password: string
  cpf: string
  phone: string
  company_id: string | null
}

export type UserInput = {
  name?: string
  email: string
  password: string
  cpf: string
  phone: string
  company_id: string | null
}