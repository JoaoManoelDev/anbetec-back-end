export class UserAlreadyExistsError extends Error {
  constructor() {
    super("User name already exists.")
  }
}
