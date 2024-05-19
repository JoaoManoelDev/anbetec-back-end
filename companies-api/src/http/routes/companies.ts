import { Router } from "express"

import { CreateCompanyController } from "@/http/controllers/companies/create"
import { GetCompaniesController } from "@/http/controllers/companies/find"
import { UpdateCompanyController } from "@/http/controllers/companies/update"
import { DeleteCompanyController } from "@/http/controllers/companies/delete"
import { FindUsersController } from "../controllers/companies/find-users"

export const companiesRoutes = Router()

const createCompanyController = new CreateCompanyController()
const getCompaniesController = new GetCompaniesController()
const updateCompanyController = new UpdateCompanyController()
const deleteCompanyController = new DeleteCompanyController()
const findUsersController = new FindUsersController()

companiesRoutes.get("/", getCompaniesController.handler)
companiesRoutes.post("/", createCompanyController.handler)
companiesRoutes.put("/:id", updateCompanyController.handler)
companiesRoutes.delete("/:id", deleteCompanyController.handler)
companiesRoutes.get("/:id/users", findUsersController.handler)
