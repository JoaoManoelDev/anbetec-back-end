import { UsersRepository } from "@/repositories/users-repository"
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error"

interface DeleteUserUseCaseRequest {
  name: string
}

export class DeleteUserUseCase {
  constructor (private usersRepository: UsersRepository) {}

  async execute({ name }: DeleteUserUseCaseRequest) {
    const user = await this.usersRepository.findByName(name)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    await this.usersRepository.delete(user.name)

    return
  }
}