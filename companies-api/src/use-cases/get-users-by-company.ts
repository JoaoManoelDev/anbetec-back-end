import { User } from "@/services/dtos/user"
import { UserService } from "@/services/users"

interface GetUsersByCompanyUseCaseRequest {
  companyId: string
}

interface GetUsersByCompanyUseCaseResponse {
  users: User[]
}

export class GetUsersByCompanyUseCase {
  constructor(private useService: UserService) {}

  async execute({
    companyId
  }: GetUsersByCompanyUseCaseRequest): Promise<GetUsersByCompanyUseCaseResponse> {
    const data = await this.useService.findUsers()

    const users = data.filter(user => user.companyId === companyId)

    return { users }
  }
} 