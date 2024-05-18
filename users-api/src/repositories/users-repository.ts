import { User } from "@/repositories/dtos/user"

export interface UsersRepository {
  create(user: User): Promise<User>
  findByName(name: string): Promise<User | null>
}
