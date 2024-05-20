import { compare } from "bcryptjs"

interface ComparePasswordProps {
  password: string
  hash: string
}

export const comparePassword = async ({
  password,
  hash
}: ComparePasswordProps) => {
  const passwordCompared = await compare(password, hash)

  return passwordCompared
}