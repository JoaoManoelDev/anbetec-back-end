import { User } from "@/services/dtos/user"

export class GetUserByNameService {
  async execute(name: string): Promise<User | null> {
    const response = await fetch(`http://localhost:3334/users/${name}`)

    const user: User = await response.json()

    if (!user) return null

    return user
  }
}