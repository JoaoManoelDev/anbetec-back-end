import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { GetUserUseCase } from "@/use-cases/get-user"

export const makeGetUserUseCase = () => {
  const prismaUsersRepository = new PrismaUsersRepository()
  const getUserUseCase = new GetUserUseCase(prismaUsersRepository)

  return getUserUseCase
}
