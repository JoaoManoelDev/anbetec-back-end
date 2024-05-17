import { Router } from "express"

import { CreateCompanyController } from "@/http/controllers/companies/create"
import { GetCompaniesController } from "@/http/controllers/companies/find"

export const companiesRoutes = Router()

const createCompanyController = new CreateCompanyController()
const getCompaniesController = new GetCompaniesController()

companiesRoutes.get("/", getCompaniesController.handler)
companiesRoutes.post("/", createCompanyController.handler)