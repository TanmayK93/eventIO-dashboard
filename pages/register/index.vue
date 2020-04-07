<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Register Account!</h2>
          <br />

          <Notification :message="error" v-if="error" />

          <form method="post" @submit.prevent="register">
            <div class="field">
              <label class="label">Company Name</label>

              <div class="control">
                <input
                  type="text"
                  class="input"
                  name="username"
                  v-model="form.companyName"
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>

              <div class="control">
                <input type="email" class="input" name="email" v-model="form.email" required />
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>

              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="form.password"
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Confirm Password</label>

              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="form.password2"
                  required
                />
              </div>
            </div>

            <br />
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Register</button>
            </div>
          </form>

          <br />

          <div class="has-text-centered" style="margin-top: 20px">
            Already got an account?
            <nuxt-link to="/login">Login</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      form: {
        companyName: '',
        email: '',
        password: '',
        password2: ''
      },

      show: true
    }
  },
  methods: {
    async register() {
      try {
        await this.$axios.post('user/add', {
          companyName: this.form.companyName,
          email: this.form.email,
          password: this.form.password
        })
        const userInfo = {
          email: this.form.email,
          companyName: this.form.companyName
        }
        this.$store.state.userDetail = userInfo
        this.$store.commit('isUserLoggedIn', true)
        this.$router.push({ path: 'dashboard' })
      } catch (e) {
        this.error = e.response.data
      }
    }
  }
}
</script>