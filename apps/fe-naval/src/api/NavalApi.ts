import HttpClient from "./utils/HttpClient"

const apiClient = HttpClient({
  baseURL: "http://localhost:3000",
})

export default {
  getUserById(id: string) {
    return apiClient.get(`/user/${id}`)
  },
  getTestModal() {
    return apiClient.get("/get-test-modal")
  },
}
