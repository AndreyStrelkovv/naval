<template>
  <v-app>
    <v-main>
      <v-app-bar :absolute="true" elevation="2">
        <v-btn tag="router-link" to="/sign-up"> Sign Up</v-btn>
        <v-btn tag="router-link" to="/login"> Login</v-btn>
        <v-btn tag="router-link" to="/"> Home</v-btn>
      </v-app-bar>
      <p :key="Object(testModal)">{{ testModal }}</p>
      <!-- <LoginForm /> -->
      <RouterView />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue"
import LoginForm from "./components/LoginForm.vue"
import { TestCommonClass } from "@naval/types/testClass"

import { useTestStore } from "@/store/testStore"

export default defineComponent({
  name: "App",
  components: {
    LoginForm,
  },
  setup() {
    const store = useTestStore()
    const testModal = computed(() => store.getTestModal)
    const testClass = new TestCommonClass()
    console.log(testClass.testClassGetter)
    onMounted(async () => {
      await store.fetchTestModal()
    })
    return { store, testModal }
  },
})
</script>
