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

export type UserUpdateInput = {
  name?: string | undefined
  email?: string | undefined
  password?: string | undefined
  cpf?: string | undefined
  phone?: string | undefined
  companyId?: string | null
}