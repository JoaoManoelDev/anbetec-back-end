import { GetUserByNameService } from "@/services/get-user-by-name"
import { AuthenticateUseCase } from "@/use-cases/authenticate"

export const makeAuthenticateUseCase = () => {
  const getUserByNameService = new GetUserByNameService()
  const authenticateUseCase = new AuthenticateUseCase(getUserByNameService)

  return authenticateUseCase
}
