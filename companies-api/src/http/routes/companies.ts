import { Router } from "express"
import { CreateCompanyController } from "@/http/controllers/companies/create"

export const companiesRoutes = Router()

const createCompanyController = new CreateCompanyController()

companiesRoutes.post("/", createCompanyController.handler)