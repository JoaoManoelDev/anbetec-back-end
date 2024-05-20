import { beforeEach, describe, expect, it } from "vitest"

import { InMemoryCompaniesRepository } from "@/repositories/in-memory/in-memory-companies-repository"
import { GetCompanyUseCase } from "@/use-cases/get-company"
import { ResourceNotFoundError } from "./errors/resource-not-found-error"

let usersRepository: InMemoryCompaniesRepository
let sut: GetCompanyUseCase 

describe("Get User Use Case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryCompaniesRepository
    sut = new GetCompanyUseCase(usersRepository)
  })

  it("Should be able to get a company", async () => {
    usersRepository.create({
      id: "company-01",
      companyName: "Anbetec",
      description: "Technology Company",
      cnpj: "12345678912345"
    })

    usersRepository.create({
      id: "company-02",
      companyName: "IBM",
      description: "Technology Company 2",
      cnpj: "12345678912345"
    })

    const { company } = await sut.execute({ companyId: "company-01" })
    
    expect(company.companyName).toEqual("Anbetec")
    expect(company).toMatchObject({ description: "Technology Company" })
  })

  it("Should not be able to get a company with an id that doesn't exist", async () => {
    await expect(() => sut.execute({
      companyId: "non-exists-company-id",
    })).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})