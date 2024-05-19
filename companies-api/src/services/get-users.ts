import { User } from "@/services/dtos/user"

export class GetUsersService {
  async execute(): Promise<User[] | []> {
    const response = await fetch("http://localhost:3334/users")

    const users: User[] | [] = await response.json()

    return users
  }
}