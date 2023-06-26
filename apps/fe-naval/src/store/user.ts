import { defineStore } from "pinia"
import NavalApi from "@/api/NavalApi"

export const useTestStore = defineStore("user", {
  state: () => ({
    user: {},
  }),
  getters: {
    getUserById(state) {
      return state.user
    },
  },
  actions: {
    async fetchUserById(id: string) {
      try {
        const data = await NavalApi.getUserById(id)
        this.user = data.data
      } catch (error) {
        console.log(error)
      }
    },
  },
})
