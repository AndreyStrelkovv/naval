<template>
  <v-container class="h-screen">
    <v-row class="text-center h-100" align="center" justify="center">
      <v-col cols="6">
        <h1 class="mb-8">Sign Up Here</h1>
        <v-text-field v-model="userName" placeholder="user name" />
        <v-text-field v-model="email" placeholder="email" />
        <v-text-field
          v-model="password"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          placeholder="password"
          @click:append-inner="showPassword = !showPassword"
        />
        <v-btn block size="x-large" color="indigo-darken-3">Sign Up</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  name: "Sign Up",
  setup() {
    const email = ref("")
    const password = ref("")
    const userName = ref("")
    const showPassword = ref(false)
    return { email, password, userName, showPassword }
  },
})
</script>
