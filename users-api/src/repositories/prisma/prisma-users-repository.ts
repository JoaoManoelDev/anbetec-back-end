import { UsersRepository } from "@/repositories/users-repository"
import { User, UserUpdateInput } from "@/repositories/dtos/user"
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

  async findByCpf(cpf: string) {
    console.log("INPUT CPF", cpf)

    const user = await prisma.user.findUnique({
      where: {
        cpf: cpf
      }
    })

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

  async findMany() {
    const users = await prisma.user.findMany()
    
    return users
  }

  async delete(name: string) {
    await prisma.user.delete({
      where: {
        name
      }
    })

    return
  }

  async save(user: UserUpdateInput): Promise<User> {
    const updatedUser = await prisma.user.update({
      where: {
        name: user.name
      },
      data: user
    })

    return updatedUser
  }
}