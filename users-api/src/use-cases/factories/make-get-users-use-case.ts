import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { GetUsersUseCase } from "../get-users"

export const makeGetUsersUseCase = () => {
  const prismaUsersRepository = new PrismaUsersRepository()
  const getUsersUseCase = new GetUsersUseCase(prismaUsersRepository)

  return getUsersUseCase
}
