import { beforeEach, describe, expect, it } from "vitest"

import { InMemoryCompaniesRepository } from "@/repositories/in-memory/in-memory-companies-repository"
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error"
import { DeleteCompanyUseCase } from "@/use-cases/delete-company"

let companyRepository: InMemoryCompaniesRepository
let sut: DeleteCompanyUseCase

describe("Delete Company Use Case", () => {
  beforeEach(() => {
    companyRepository = new InMemoryCompaniesRepository()
    sut = new DeleteCompanyUseCase(companyRepository)
  })

  it("Should be able to delete a company", async () => {
    companyRepository.create({
      id: "company-01",
      companyName: "Anbetec",
      cnpj: "12345678000100",
      description: "Technology Company"
    })

    companyRepository.create({
      id: "company-02",
      companyName: "Twitter",
      cnpj: "12345678912345",
      description: "Fake description"
    })

    await sut.execute({ companyId: "company-02" })
    
    const companies = await companyRepository.findMany()

    expect(companies).toHaveLength(1)
  })

  it("Should not be able to delete company with an id that doesn't exist", async () => {
    await expect(() => sut.execute({
      companyId: "non-exists-company-id",
    })).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})