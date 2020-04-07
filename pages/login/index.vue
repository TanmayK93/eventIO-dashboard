<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Welcome to EventIO!</h2>

          <h5 class="has-text-centered">Please Sign in.</h5>

          <br />

          <!--<Notification :message="error" v-if="error" /> -->

          <form method="post" @submit.prevent="authenticate">
            <div class="field">
              <label class="label">Email</label>

              <div class="control">
                <input type="email" class="input" name="email" v-model="form.email" />
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>

              <div class="control">
                <input type="password" class="input" name="password" v-model="form.password" />
              </div>
            </div>

            <br />

            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Log In</button>
            </div>
          </form>

          <br />

          <div class="has-text-centered" style="margin-top: 20px">
            <p>
              Don't have an account?
              <nuxt-link to="/Register">Register</nuxt-link>
            </p>
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
        email: null,
        password: null
      },
      show: true
    }
  },
  methods: {
    async authenticate() {
      if (this.form.email != null && this.form.password != null) {
        await this.$axios
          .post('user/login', {
            email: this.form.email,
            password: this.form.password
          })
          .then(
            (response) => {
              if (response.status === 200) {
                const userInfo = {
                  userid: response.data[0].id,
                  email: response.data[0].email,
                  companyName: response.data[0].companyName
                }
                this.$store.state.userDetail = userInfo
                this.$store.commit('isUserLoggedIn', true)
                this.$router.push({ path: 'dashboard' })
              } else {
                console.log(response)
                this.$toast('Username or Password is invalid', {
                  color: 'red',
                  y: 'top',
                  dismissable: true,
                  queueable: true
                })
              }
            },
            (error) => {
              this.$toast('Username or Password is invalid', {
                color: 'red',
                y: 'top',
                dismissable: true,
                queueable: true
              })
            }
          )
      } else {
        this.$toast('Username or Password is invalid', {
          color: 'red',
          y: 'top',
          dismissable: true,
          queueable: true
        })
      }
    }
  }
}
</script>
