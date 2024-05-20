import { GetUsersByCompanyUseCase } from "@/use-cases/get-users-by-company"
import { GetUsersService } from "@/services/get-users"

export const makeGetUsersByCompanyUseCase = () => {
  const getUsersService = new GetUsersService()
  const getUsersByCompanyUseCase = new GetUsersByCompanyUseCase(getUsersService)

  return getUsersByCompanyUseCase
}
