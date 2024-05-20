import { User } from "@/services/dtos/user"

interface ServiceResponse {
  status: number
  message: string
  user: User | null
}

export class GetUserByNameService {
  async execute(name: string): Promise<ServiceResponse> {
    const response = await fetch(`http://localhost:3334/users/${name}`)

    if (response.status === 409) {
      return {
        status: 409,
        message: "Resource not found",
        user: null
      }
    }

    if (response.status === 200) {
      const user: User = await response.json()

      return {
        message: "Success",
        status: 200,
        user
      }
    }

    return {
      status: 500,
      message: "Internal server error",
      user: null
    } 
  }
}