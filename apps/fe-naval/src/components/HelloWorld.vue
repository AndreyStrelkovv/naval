<template>
  <h1>{{ msg }}</h1>
  <p>{{ version }}</p>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue"
import version from "@naval/types/version"

export default defineComponent({
  data() {
    return {
      version: version,
    }
  },
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  setup() {
    const count = ref(0)
    // const version = ref(version)

    return {
      count,
    }
  },
})
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
