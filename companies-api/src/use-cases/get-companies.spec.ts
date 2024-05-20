import { beforeEach, describe, expect, it } from "vitest"

import { InMemoryCompaniesRepository } from "@/repositories/in-memory/in-memory-companies-repository"
import { GetCompaniesUseCase } from "@/use-cases/get-companies"

let companyRepository: InMemoryCompaniesRepository
let sut: GetCompaniesUseCase

describe("Get Companies Use Case", () => {
  beforeEach(() => {
    companyRepository = new InMemoryCompaniesRepository()
    sut = new GetCompaniesUseCase(companyRepository)
  })

  it("Should be able to get companies", async () => {
    companyRepository.create({
      companyName: "Anbetec",
      cnpj: "12345678000100",
      description: "Technology Company"
    })

    companyRepository.create({
      companyName: "Anbetec 02",
      cnpj: "12345678000100",
      description: "Technology Company"
    })

    const { companies } = await sut.execute()
    
    expect(companies).toEqual([
      expect.objectContaining({ companyName: "Anbetec" }),
      expect.objectContaining({ companyName: "Anbetec 02" }),
    ])
  })
})