<template>
  <div id="app">
    <navbar v-if="isUserLoggedIn" />
    <nuxt />
  </div>
</template>
<script>
import navbar from '~/components/Navbar/navbar'
export default {
  components: {
    navbar
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn
    }
  }
}
</script>