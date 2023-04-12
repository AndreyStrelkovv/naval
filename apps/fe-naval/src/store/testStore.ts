//stores/users.js

import { defineStore } from "pinia"
import NavalApi from "@/api/NavalApi"
// Import axios to make HTTP requests

export const useTestStore = defineStore("tests", {
  state: () => ({
    testModal: {},
  }),
  getters: {
    getTestModal(state) {
      return state.testModal
    },
  },
  actions: {
    async fetchTestModal() {
      try {
        // const data = await axios.get(
        //   "https://jsonplaceholder.typicode.com/users"
        // )
        // this.users = data.data
        const data = await NavalApi.getTestModal()
        this.testModal = data.data
      } catch (error) {
        alert(error)
        console.log(error)
      }
    },
  },
})
