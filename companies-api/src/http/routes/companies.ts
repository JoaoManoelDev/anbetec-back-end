import { Router } from "express"
import { CreateCompanyController } from "../controllers/companies/create"

export const companiesRoutes = Router()

const createCompanyController = new CreateCompanyController()

companiesRoutes.post("/", createCompanyController.handler)