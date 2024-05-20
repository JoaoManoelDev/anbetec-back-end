import { beforeEach, describe, expect, it } from "vitest"

import { InMemoryCompaniesRepository } from "@/repositories/in-memory/in-memory-companies-repository"
import { UpdateCompanyUseCase } from "@/use-cases/update-company"
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error"

let companyRepository: InMemoryCompaniesRepository
let sut: UpdateCompanyUseCase

describe("Update Company Use Case", () => {
  beforeEach(() => {
    companyRepository = new InMemoryCompaniesRepository()
    sut = new UpdateCompanyUseCase(companyRepository)
  })

  it("Should be able to update a company", async () => {
    companyRepository.create({
      id: "company-01",
      companyName: "Twitter",
      cnpj: "12345678912345",
      description: "Fake description"
    })

    const { company } = await sut.execute({
      companyId: "company-01",
      companyUpdate: {
        companyName: "Anbetec",
        cnpj: "12345678000100",
        description: "Technology Company"
      }
    })
    
    expect(company).toMatchObject({
      companyName: "Anbetec",
      cnpj: "12345678000100",
      description: "Technology Company"
    })
  })

  it("Should not be able to update company with an id that doesn't exist", async () => {
    await expect(() => sut.execute({
      companyId: "non-exists-company-id",
      companyUpdate: {
        companyName: "Anbetec",
        cnpj: "12345678000100",
        description: "Technology Company"
      }
    })).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})