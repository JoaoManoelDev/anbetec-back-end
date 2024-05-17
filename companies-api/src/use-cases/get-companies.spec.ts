import { beforeEach, describe, expect, it } from "vitest"

import { InMemoryCompaniesRepository } from "@/repositories/in-memory/in-memory-companies-repository"
import { GetCompaniesUseCase } from "@/use-cases/get-companies"


let companyRepository: InMemoryCompaniesRepository
let sut: GetCompaniesUseCase

describe("Create Company Use Case", () => {
  beforeEach(() => {
    companyRepository = new InMemoryCompaniesRepository()
    sut = new GetCompaniesUseCase(companyRepository)
  })

  it("Should be able to get companies", async () => {
    companyRepository.create({
      companyName: "Anbetec",
      cnpj: "12345678000100",
      description: "Empresa de tecnologia"
    })

    companyRepository.create({
      companyName: "Anbetec 02",
      cnpj: "12345678000100",
      description: "Empresa de tecnologia"
    })

    const { companies } = await sut.execute()
    
    expect(companies).toEqual([
      expect.objectContaining({ companyName: "Anbetec" }),
      expect.objectContaining({ companyName: "Anbetec 02" }),
    ])
  })
})