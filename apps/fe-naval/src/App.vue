<template>
  <v-app>
    <v-main>
      <p :key="Object(testModal)">{{ testModal }}</p>
      <LoginForm />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue"
import LoginForm from "./components/LoginForm.vue"

import { useTestStore } from "@/store/testStore"

export default defineComponent({
  name: "App",
  components: {
    LoginForm,
  },
  setup() {
    const store = useTestStore()
    const testModal = computed(() => store.getTestModal)
    onMounted(async () => {
      await store.fetchTestModal()
    })
    return { store, testModal }
  },
})
</script>
