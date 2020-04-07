<template>
  <div>
    <dashboard v-if="isUserLoggedIn" />
    <login />
  </div>
</template>
<script>
import dashboard from '../pages/dashboard'
import login from '../pages/login'
export default {
  components: {
    dashboard,
    login
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn
    }
  }
}
</script>