import { beforeEach, describe, expect, it } from "vitest"

import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository"
import { CreateUserUseCase } from "@/use-cases/create-user"
import { UserAlreadyExistsError } from "@/use-cases/errors/user-already-exists-error"
import { EmailAlreadyExistsError } from "@/use-cases/errors/email-already-exists-error"
import { CpfAlreadyExistsError } from "@/use-cases/errors/cpf-already-exists-error"

let usersRepository: InMemoryUsersRepository
let sut: CreateUserUseCase

describe("Create User Use Case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new CreateUserUseCase(usersRepository)
  })

  it("should be able to create user", async () => {
    const { user } = await sut.execute({
      name: "John Doe",
      email: "johndoe@email.com",
      cpf: "123456788998",
      password: "123456789",
      phone: "999999999",
    })

    expect(user.name).toEqual("John Doe")
    expect(user).toMatchObject({ cpf: "123456788998" })
  })

  it("should not be able to create user with wrong name", async () => {
    await usersRepository.create({
      name: "John Doe",
      email: "johndoe@email.com",
      cpf: "123456788998",
      password: "123456789",
      phone: "999999999",
    })

    await expect(() => sut.execute({
      name: "John Doe",
      email: "johndoe@email.com",
      cpf: "123456788998",
      password: "123456789",
      phone: "999999999",
    })).rejects.toBeInstanceOf(UserAlreadyExistsError)
   
  })

  it("should not be able to create user with wrong name", async () => {
    await usersRepository.create({
      name: "John Doe",
      email: "johndoe@email.com",
      cpf: "123456788998",
      password: "123456789",
      phone: "999999999",
    })

    await expect(() => sut.execute({
      name: "John Doe",
      email: "johndoe@email.com",
      cpf: "123456788998",
      password: "123456789",
      phone: "999999999",
    })).rejects.toBeInstanceOf(UserAlreadyExistsError)
   
  })

  it("should not be able to create user with wrong email", async () => {
    await usersRepository.create({
      name: "John Doe",
      email: "johndoe@email.com",
      cpf: "123456788998",
      password: "123456789",
      phone: "999999999",
    })

    await expect(() => sut.execute({
      name: "John Doe 2",
      email: "johndoe@email.com",
      cpf: "123456788998",
      password: "123456789",
      phone: "999999999",
    })).rejects.toBeInstanceOf(EmailAlreadyExistsError)
   
  })

  it("should not be able to create user with wrong cpf", async () => {
    await usersRepository.create({
      name: "John Doe",
      email: "johndoe@email.com",
      cpf: "123456788998",
      password: "123456789",
      phone: "999999999",
    })

    await expect(() => sut.execute({
      name: "John Doe 2",
      email: "johndoe2@email.com",
      cpf: "123456788998",
      password: "123456789",
      phone: "999999999",
    })).rejects.toBeInstanceOf(CpfAlreadyExistsError)
   
  })
})
