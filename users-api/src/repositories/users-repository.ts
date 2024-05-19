import { User, UserCreateInput } from "@/repositories/dtos/user"

export interface UsersRepository {
  create(user: UserCreateInput): Promise<User>
  findByName(name: string): Promise<User | null>
  findByCpf(cpf: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
}
