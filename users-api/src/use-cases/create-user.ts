import { User } from "@/repositories/dtos/user"
import { UsersRepository } from "@/repositories/users-repository"
import { UserAlreadyExistsError } from "@/use-cases/errors/user-already-exists-error"
import { passwordHash } from "@/lib/hash"

interface CreateUserUseCaseRequest {
  name: string
  email: string
  password: string
  cpf: string
  phone: string
  company_id: string | null
}

interface CreateUserUseCaseResponse {
  user: User
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    cpf,
    email,
    password,
    company_id,
    phone
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const userExists = await this.usersRepository.findByName(name)

    if (userExists) {
      throw new UserAlreadyExistsError()
    }

    const passwordHashed = await passwordHash({ password })

    const newUser = await this.usersRepository.create({
      name,
      cpf,
      email,
      password: passwordHashed,
      company_id,
      phone
    })

    return { user: newUser }
  }
}