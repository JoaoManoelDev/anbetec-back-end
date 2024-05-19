import { UsersRepository } from "@/repositories/users-repository"
import { User } from "@/repositories/dtos/user"

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = []

  async create(user: User) {
    const newUser = {
      name: user.name,
      companyIdd: user.companyId,
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

  async findByCpf(cpf: string): Promise<User | null> {
    const user = this.users.find(user => user.cpf === cpf)

    if (!user) return null

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find(user => user.email === email)

    if (!user) return null

    return user
  }

  async findMany() {
    return this.users
  }

  async delete(name: string) {
    const companyIndex = this.users
      .findIndex(user => user.name === name)

    if (companyIndex !== -1) {
      this.users.splice(companyIndex, 1)
    }

    return
  }
}