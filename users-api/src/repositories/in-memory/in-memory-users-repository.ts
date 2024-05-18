import { UsersRepository } from "@/repositories/users-repository"
import { UserInput, User } from "@/repositories/dtos/user"

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = []

  async create(user: UserInput) {
    const newUser = {
      name: user.name,
      company_id: user.company_id,
      cpf: user.cpf,
      email: user.email,
      password: user.password,
      phone: user.phone
    } as User

    this.users.push(newUser)

    return newUser
  }

  async findByName(name: string) {
    const user = this.users.find(user => user.name === name)

    if (!user) return null

    return user
  }
}