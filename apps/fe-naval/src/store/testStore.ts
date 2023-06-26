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
        const data = await NavalApi.getTestModal()
        this.testModal = data.data
      } catch (error) {
        console.log(error)
      }
    },
  },
})
