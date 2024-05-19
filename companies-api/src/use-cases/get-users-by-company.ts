import { User } from "@/services/dtos/user"
import { GetUsersService } from "@/services/get-users"

interface GetUsersByCompanyUseCaseRequest {
  companyId: string
}

interface GetUsersByCompanyUseCaseResponse {
  users: User[]
}

export class GetUsersByCompanyUseCase {
  constructor(private getUsersService: GetUsersService) {}

  async execute({
    companyId
  }: GetUsersByCompanyUseCaseRequest): Promise<GetUsersByCompanyUseCaseResponse> {
    const data = await this.getUsersService.execute()

    const users = data.filter(user => user.companyId === companyId)

    return { users }
  }
} 