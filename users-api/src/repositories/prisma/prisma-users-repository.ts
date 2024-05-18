import { UsersRepository } from "@/repositories/users-repository"
import { User } from "@/repositories/dtos/user"
import { prisma } from "@/lib/prisma"

export class PrismaUsersRepository implements UsersRepository {
  async create(user: User) {
    const newUser = await prisma.user.create({
      data: user
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
}