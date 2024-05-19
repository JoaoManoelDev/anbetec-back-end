import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { UpdateUserUseCase } from "@/use-cases/update-user"

export const makeUpdateUserUseCase = () => {
  const prismaUsersRepository = new PrismaUsersRepository()
  const updateUserUseCase = new UpdateUserUseCase(prismaUsersRepository)

  return updateUserUseCase
}
