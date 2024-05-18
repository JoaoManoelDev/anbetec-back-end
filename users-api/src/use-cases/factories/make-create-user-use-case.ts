import { CreateUserUseCase } from "@/use-cases/create-user"
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"

export const makeCreateUserUseCase = () => {
  const prismaUsersRepository = new PrismaUsersRepository()
  const createUserUseCase = new CreateUserUseCase(prismaUsersRepository)

  return createUserUseCase
}
