import { env } from "@/env"
import cron from "node-cron"

const NAME = env.NAME
const PASSWORD = env.PASSWORD
const COMPANY_ID = env.COMPANY_ID
const USERS_API = env.USERS_API

const authenticate = async () => {
  const response = await fetch(`${USERS_API}/auth/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: NAME,
      password: PASSWORD
    })
  })

  if (response.status === 200) {
    const token = await response.json()

    return token
  }

  if (response.status === 401) {
    console.log("Invalid credentials.")

    return null
  }

  return null
}

export const cronGetUsersByCompany =  () => {
  cron.schedule("*/10 * * * * *", async () => {
    const auth = await authenticate()

    if (auth.token) {
      const response = await fetch(`${USERS_API}/companies/${COMPANY_ID}/users`, {
        headers: {
          "Authorization": `Bearer ${auth.token}`
        },
      })

      if (response.status === 200) {
        const users = await response.json()

        return console.log("USERS", users)
      } else {
        console.log("Users could not be found.")
      }
    }
  
    console.log("Users could not be found.")
  })
}


