<template>
  <v-app>
    <v-main>
      <LoginForm />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue"
import LoginForm from "./components/LoginForm.vue"

import { useTestStore } from "@/store/testStore"

export default defineComponent({
  name: "App",
  components: {
    LoginForm,
  },
  setup() {
    const store = useTestStore()
    // const testModal = store.getTestModal()
    onMounted(() => {
      store.fetchTestModal()
    })
    return { store }
  },
})
</script>
