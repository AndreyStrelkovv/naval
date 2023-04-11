<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ test }}</p>
    <p>{{ version }}</p>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"
import version from "@naval/types/version"
import test from "@naval/types/testClass"

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      version: version,
      test: test,
    }
  },
}
</script>
