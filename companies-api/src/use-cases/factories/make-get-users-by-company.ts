import { GetUsersByCompanyUseCase } from "@/use-cases/get-users-by-company"
import { UserService } from "@/services/users"

export const makeGetUsersByCompanyUseCase = () => {
  const userService = new UserService()
  const getUsersByCompanyUseCase = new GetUsersByCompanyUseCase(userService)

  return getUsersByCompanyUseCase
}
