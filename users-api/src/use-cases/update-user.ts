import { passwordHash } from "@/lib/hash"
import { User } from "@/repositories/dtos/user"
import { UsersRepository } from "@/repositories/users-repository"
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error"
import { EmailAlreadyExistsError } from "./errors/email-already-exists-error"
import { CpfAlreadyExistsError } from "./errors/cpf-already-exists-error"

interface UpdateUserUseCaseRequest {
  name: string,
  userUpdate: {
    email?: string
    password?: string
    cpf?: string
    phone?: string
    companyId?: string | null
  }
}

interface UpdateUserUseCaseResponse {
  user: User
}

export class UpdateUserUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({
    name,
    userUpdate
  }: UpdateUserUseCaseRequest): Promise<UpdateUserUseCaseResponse> {
    const user = await this.usersRepository.findByName(name)

    if (!user) throw new ResourceNotFoundError()

    if (userUpdate.email !== undefined) {
      const emailExists = await this.usersRepository.findByEmail(userUpdate.email)
      if (emailExists) throw new EmailAlreadyExistsError()
    }

    if (userUpdate.cpf !== undefined) {
      const cpfExists = await this.usersRepository.findByCpf(userUpdate.cpf)
      if (cpfExists) throw new CpfAlreadyExistsError()
    }
    
    const passwordHashed = userUpdate.password ? await passwordHash({ password: userUpdate.password }) : undefined

    const userUpdateToSave = {
      ...user,
      email: userUpdate.email,
      password: passwordHashed,
      cpf: userUpdate.cpf,
      phone: userUpdate.phone,
      companyId: userUpdate.companyId
    }

    const updatedUser = await this.usersRepository.save(userUpdateToSave)

    return { user: updatedUser }
  }
}