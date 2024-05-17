import { beforeEach, describe, expect, it } from "vitest"

import { InMemoryCompaniesRepository } from "@/repositories/in-memory/in-memory-companies-repository"
import { CreateCompanyUseCase } from "@/use-cases/create-company"

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
      description: "Empresa de tecnologia"
    })

    expect(company.id).toEqual(expect.any(String))
    expect(company.cnpj).toEqual("12345678000100")
  })
})