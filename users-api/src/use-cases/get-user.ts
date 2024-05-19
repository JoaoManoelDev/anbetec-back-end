import { User } from "@/repositories/dtos/user"
import { UsersRepository } from "@/repositories/users-repository"
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error"

interface GetUserUseCaseRequest {
  name: string
}
interface GetUserUseCaseResponse {
  user: User
}

export class GetUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name
  }: GetUserUseCaseRequest): Promise<GetUserUseCaseResponse> {
    const user = await this.usersRepository.findByName(name)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    return { user }
  }
}