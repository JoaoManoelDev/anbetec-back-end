import { GetUserByNameService } from "@/services/get-user-by-name"
import { User } from "@/services/dtos/user"
import { InvalidCredentialsError } from "@/use-cases/errors/invalid-credentials-error"
import { ApiThirdError } from "@/use-cases/errors/api-third-error"
import { comparePassword } from "@/lib/hash"

interface AuthenticateUseCaseRequest {
  name: string
  password: string
}

interface AuthenticateUseCaseResponse {
  user: User | null,
}

export class AuthenticateUseCase {
  constructor(
    private getUsersByNameService: GetUserByNameService
  ) { }

  async execute({
    name,
    password
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const response = await this.getUsersByNameService.execute(name)

    if (response.status === 200 && response.user !== null) {
      const doesPasswordMatches = await comparePassword({
        password,
        hash: response.user.password
      })

      if (!doesPasswordMatches) {
        throw new InvalidCredentialsError()
      }

      return { user: response.user }
    }

    if (response?.status === 409) {
      throw new InvalidCredentialsError()
    }

    if (response.status === 500) {
      throw new ApiThirdError()
    }

    return { user: response.user }
  }
}