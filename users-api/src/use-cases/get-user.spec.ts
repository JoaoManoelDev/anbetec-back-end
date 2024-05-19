import { beforeEach, describe, expect, it } from "vitest"

import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository"
import { GetUserUseCase } from "@/use-cases/get-user"
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error"

let usersRepository: InMemoryUsersRepository
let sut: GetUserUseCase

describe("Get User Use Case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new GetUserUseCase(usersRepository)
  })

  it("Should be able to get user", async () => {
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

    const { user } = await sut.execute({ name: "John Doe" })
    
    expect(user.name).toEqual("John Doe")
    expect(user).toMatchObject({ email: "johndoe@email.com" })
  })

  it("Should not be able to get a user with an name that doesn't exist", async () => {
    await expect(() => sut.execute({
      name: "non-exists-user-id",
    })).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})