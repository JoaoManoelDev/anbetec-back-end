export class CompanyAlreadyExistsError extends Error {
  constructor() {
    super("This CNPJ already exists.")
  }
}
