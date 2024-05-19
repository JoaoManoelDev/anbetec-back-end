import { User } from "@/repositories/dtos/user"
import { UsersRepository } from "@/repositories/users-repository"

interface GetUsersUseCaseResponse {
  users: User[]
}

export class GetUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<GetUsersUseCaseResponse> {
    const users = await this.usersRepository.findMany()

    return { users }
  }
}