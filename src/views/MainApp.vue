<template>
  <div>
    <login v-if="!isLoggedIn"></login>
    <home v-else />
  </div>
</template>
<script>
  import Login from "@/components/Login"
  import Home from "@/components/Home"
  import {
    mapGetters
  } from "vuex"
  export default {
    components: {
      Login,
      Home
    },
    computed: {
      ...mapGetters({
        isLoggedIn: 'auth/isLoggedIn'
      })
    },
  }
</script>