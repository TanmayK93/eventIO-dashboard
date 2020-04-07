<template>
  <nav class="navbar is-light is-fixed-top">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">EventIO</nuxt-link>

      <button class="button navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable" v-if="isUserLoggedIn">
          <a class="navbar-link">{{this.$store.state.userDetail.companyName}}</a>
          <div class="navbar-dropdown">
            <nuxt-link class="navbar-item" to="/profile">My Profile</nuxt-link>
            <hr class="navbar-divider" />

            <a class="navbar-item" @click="logout">Logout</a>
          </div>
        </div>
        <template v-else>
          <nuxt-link class="navbar-item" to="/register">Register</nuxt-link>
          <nuxt-link class="navbar-item" to="/login">Log In</nuxt-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {}
  },

  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn
    }
  },
  methods: {
    logout() {
      this.$store.commit('isUserLoggedIn', false)
      this.$router.go({ path: 'login' })
    }
  }
}
</script>
<style scoped>
</style>