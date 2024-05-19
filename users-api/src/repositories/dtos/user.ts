export type User = {
  name: string
  email: string
  password: string
  cpf: string
  phone: string
  companyId?: string | null
}

export type UserCreateInput = {
  name?: string | undefined
  email: string
  password: string
  cpf: string
  phone: string
  companyId?: string | null
}