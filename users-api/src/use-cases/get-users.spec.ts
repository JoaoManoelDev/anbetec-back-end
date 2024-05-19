import { beforeEach, describe, expect, it } from "vitest"

import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository"
import { GetUsersUseCase } from "./get-users"

let usersRepository: InMemoryUsersRepository
let sut: GetUsersUseCase

describe("Get User Use Case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new GetUsersUseCase(usersRepository)
  })

  it("Should be able to get users", async () => {
    usersRepository.create({
      name: "John Doe",
      email: "johndoe@email.com",
      cpf: "12345678963",
      password: "123456",
      phone: "999999999",
    })

    usersRepository.create({
      name: "John Doe 2",
      email: "johndoe2@email.com",
      cpf: "12345678965",
      password: "123456",
      phone: "999999999",
    })

    const { users } = await sut.execute()
    
    expect(users).toEqual([
      expect.objectContaining({ name: "John Doe" }),
      expect.objectContaining({ name: "John Doe 2" }),
    ])
  })
})