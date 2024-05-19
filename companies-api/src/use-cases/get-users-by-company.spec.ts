import { beforeEach, describe, expect, it, vi } from "vitest"

import { GetUsersByCompanyUseCase } from "@/use-cases/get-users-by-company"
import { UserService } from "@/services/users"
import { User } from "@/services/dtos/user"

let userService: UserService
let sut: GetUsersByCompanyUseCase

const mockUsers: User[] = [
  {
    "name": "John DOe",
    "email": "jonhdoe@email.com",
    "password": "$2a$06$JOQNP5vc9V201D3VmBiAKOjWHTc/qJ7yNQyrYHlNNlFwwm12C8P2m",
    "cpf": "14253707529",
    "phone": "999999999",
    "companyId": "twitter-id"
  },
  {
    "name": "joao",
    "email": "joao@email.com",
    "password": "$2a$06$JOQNP5vc9V201D3VmBiAKOjWHTc/qJ7yNQyrYHlNNlFwwm12C8P2m",
    "cpf": "14123707529",
    "phone": "999999999",
    "companyId": "anbetec-id"
  },
  {
    "name": "eduardo",
    "email": "eduardo@email.com",
    "password": "$2a$06$JOQNP5vc9V201D3VmBiAKOjWHTc/qJ7yNQyrYHlNNlFwwm12C8P2m",
    "cpf": "14123896529",
    "phone": "999999999",
    "companyId": "anbetec-id"
  }
]

describe("Get Users By Company Use Case", () => {
  beforeEach(() => {
    userService = {
      findUsers: vi.fn().mockResolvedValue(mockUsers)
    }
    sut = new GetUsersByCompanyUseCase(userService)
  })

  it("Should be able to get users by company", async () => {
    const { users } = await sut.execute({ companyId: "anbetec-id" })

    expect(users).toEqual([
      expect.objectContaining({ name: "joao" }),
      expect.objectContaining({ name: "eduardo" }),
    ])
  })
})