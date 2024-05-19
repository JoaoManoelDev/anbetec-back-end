import { User } from "@/services/dtos/user"

interface GetUsersByCompanyServiceRequest {
  companyId: string
}

export class GetUsersByCompanyService {
  async execute({
    companyId
  }: GetUsersByCompanyServiceRequest) {
    const response = await fetch("http://localhost:3334/users")

    const data: User[] = await response.json()

    const users = data.filter(user => user.companyId === companyId)

    return { users }
  }
}