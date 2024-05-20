import { Router } from "express"

import { CreateCompanyController } from "@/http/controllers/companies/create"
import { GetCompaniesController } from "@/http/controllers/companies/find-companies"
import { GetCompanyController } from "@/http/controllers/companies/find-company"
import { UpdateCompanyController } from "@/http/controllers/companies/update"
import { DeleteCompanyController } from "@/http/controllers/companies/delete"
import { FindUsersController } from "@/http/controllers/companies/find-users"
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated"

export const companiesRoutes = Router()

const createCompanyController = new CreateCompanyController()
const getCompaniesController = new GetCompaniesController()
const getCompanyController = new GetCompanyController()
const updateCompanyController = new UpdateCompanyController()
const deleteCompanyController = new DeleteCompanyController()
const findUsersController = new FindUsersController()

companiesRoutes.get("/", ensureAuthenticated, getCompaniesController.handler)
companiesRoutes.get("/:id", ensureAuthenticated, getCompanyController.handler)
companiesRoutes.post("/", ensureAuthenticated, createCompanyController.handler)
companiesRoutes.put("/:id", ensureAuthenticated, updateCompanyController.handler)
companiesRoutes.delete("/:id", ensureAuthenticated, deleteCompanyController.handler)
companiesRoutes.get("/:id/users", ensureAuthenticated, findUsersController.handler)
