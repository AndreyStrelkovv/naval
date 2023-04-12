<template>
  <v-app>
    <v-main>
      <p>{{ store.getTestModal }}</p>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue"
import HelloWorld from "./components/HelloWorld.vue"
import { useTestStore } from "@/store/testStore"

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
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
