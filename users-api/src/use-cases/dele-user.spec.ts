import { beforeEach, describe, expect, it } from "vitest"

import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error"
import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository"
import { DeleteUserUseCase } from "@/use-cases/delete-user"

let usersRepository: InMemoryUsersRepository
let sut: DeleteUserUseCase

describe("Delete User Use Case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new DeleteUserUseCase(usersRepository)
  })

  it("Should be able to delete a user", async () => {
    await usersRepository.create({
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

    await sut.execute({ name: "John Doe 2" })
    
    const users = await usersRepository.findMany()

    expect(users).toHaveLength(1)
  })

  it("Should not be able to delete user with wrong id", async () => {
    await expect(() => sut.execute({
      name: "non-exists-user-id",
    })).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})