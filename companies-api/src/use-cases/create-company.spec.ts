import { beforeEach, describe, expect, it } from "vitest"

import { InMemoryCompaniesRepository } from "@/repositories/in-memory/in-memory-companies-repository"
import { CreateCompanyUseCase } from "@/use-cases/create-company"
import { CompanyAlreadyExistsError } from "@/use-cases/errors/company-already-exists"

let companyRepository: InMemoryCompaniesRepository
let sut: CreateCompanyUseCase

describe("Create Company Use Case", () => {
  beforeEach(() => {
    companyRepository = new InMemoryCompaniesRepository()
    sut = new CreateCompanyUseCase(companyRepository)
  })

  it("Should be able to create company", async () => {
    const { company } = await sut.execute({
      companyName: "Anbetec",
      cnpj: "12345678000100",
      description: "Technology Company"
    })

    expect(company.id).toEqual(expect.any(String))
    expect(company.cnpj).toEqual("12345678000100")
  })

  it("Should not be able to create company already exists", async () => {
    await companyRepository.create({
      companyName: "Anbetec",
      cnpj: "12345678000100",
      description: "Technology Company"
    })

    await expect(() => sut.execute({
      companyName: "Anbetec",
      cnpj: "12345678000100",
      description: "Technology Company"
    })).rejects.toBeInstanceOf(CompanyAlreadyExistsError)
  })
})