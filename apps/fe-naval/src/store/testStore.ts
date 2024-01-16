import { defineStore } from "pinia"
import NavalApi from "@/api/NavalApi"

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
        const response = await NavalApi.getTestModal()
        this.testModal = response.data
      } catch (error) {
        console.log(error)
      }
    },
  },
})
