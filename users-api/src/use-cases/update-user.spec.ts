import { beforeEach, describe, expect, it } from "vitest"

import { UpdateUserUseCase } from "@/use-cases/update-user"
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error"
import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository"

let usersRepository: InMemoryUsersRepository
let sut: UpdateUserUseCase

describe("Update User Use Case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new UpdateUserUseCase(usersRepository)
  })

  it("Should be able to update a user", async () => {
    usersRepository.create({
      name: "John Doe",
      email: "johndoe@email.com",
      cpf: "123456788998",
      password: "123456789",
      phone: "999999999",
    })

    const { user } = await sut.execute({
      name: "John Doe",
      userUpdate: {
        email: "johndoeupdate@email.com",
        cpf: "99999999999999",
        phone: "111111111"
      }
    })
    
    expect(user).toMatchObject({
      email: "johndoeupdate@email.com",
      cpf: "99999999999999",
      phone: "111111111"
    })
  })

  it("Should not be able to update user with an name that doesn't exist", async () => {
    await expect(() => sut.execute({
      name: "non-exists-name",
      userUpdate: {
        email: "johndoeupdate@email.com",
      }
    })).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})