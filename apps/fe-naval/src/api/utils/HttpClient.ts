import axios from "axios"
// import axiosBetterStacktrace from "axios-better-stacktrace"

export default ({ ...config } = {}) => {
  const defaultConfig = {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
  }

  const client = axios.create({
    ...defaultConfig,
    ...config,
  })

  // axiosBetterStacktrace(client)

  return client
}
