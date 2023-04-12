import HttpClient from "./utils/HttpClient"

const apiClient = HttpClient({
  baseURL: "http://localhost:3000",
})

export default {
  getTestModal() {
    return apiClient.get("/get-test-modal")
  },
}
