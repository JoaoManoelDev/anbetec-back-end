import { UsersRepository } from "@/repositories/users-repository"
import { User } from "@/repositories/dtos/user"
import { prisma } from "@/lib/prisma"

export class PrismaUsersRepository implements UsersRepository {
  async create(user: User) {
    const newUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        cpf: user.cpf,
        password: user.password,
        phone: user.phone,
        companyId: user.companyId
      }
    })

    return  newUser 
  }

  async findByName(name: string) {
    const user = await prisma.user.findUnique({
      where: {
        name
      }
    })

    if (!user) return null

    return user
  }

  async findByCpf(cpf: string): Promise<User | null> {
    console.log("INPUT CPF", cpf)

    const user = await prisma.user.findUnique({
      where: {
        cpf: cpf
      }
    })

    console.log("USER NO REPOSITORY", user)

    if (!user) return null

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (!user) return null

    return user
  }
}