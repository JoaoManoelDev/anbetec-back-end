import { User } from "@/services/dtos/user"

interface IUserService {
  findUsers(): Promise<User[] | []>
}

export class UserService implements IUserService {
  async findUsers() {
    const response = await fetch("http://localhost:3334/users")

    const user: User[] | [] = await response.json()

    return user
  }
}