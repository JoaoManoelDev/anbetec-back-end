import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { DeleteUserUseCase } from "@/use-cases/delete-user"

export const makeDeleteUserUseCase = () => {
  const prismaUsersRepository = new PrismaUsersRepository()
  const deleteUserUseCase = new DeleteUserUseCase(prismaUsersRepository)

  return deleteUserUseCase
}
