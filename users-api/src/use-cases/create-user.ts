import { User } from "@/repositories/dtos/user"
import { UsersRepository } from "@/repositories/users-repository"
import { UserAlreadyExistsError } from "@/use-cases/errors/user-already-exists-error"
import { EmailAlreadyExistsError } from "@/use-cases/errors/email-already-exists-error"
import { CpfAlreadyExistsError } from "@/use-cases/errors/cpf-already-exists-error"
import { passwordHash } from "@/lib/hash"

interface CreateUserUseCaseRequest {
  name: string
  email: string
  password: string
  cpf: string
  phone: string
  companyId?: string | null
}

interface CreateUserUseCaseResponse {
  user: User
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({
    name,
    cpf,
    email,
    password,
    companyId,
    phone
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const userExists = await this.usersRepository.findByName(name)

    if (userExists) throw new UserAlreadyExistsError()

    const emailExists = await this.usersRepository.findByEmail(email)

    if (emailExists) throw new EmailAlreadyExistsError()

    const cpfExists = await this.usersRepository.findByCpf(cpf)

    if (cpfExists) throw new CpfAlreadyExistsError()

    const passwordHashed = await passwordHash({ password })

    const newUser = await this.usersRepository.create({
      name,
      cpf,
      email,
      password: passwordHashed,
      companyId,
      phone
    })

    return { user: newUser }
  }
}
