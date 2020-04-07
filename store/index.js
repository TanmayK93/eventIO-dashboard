export const strict = false
export const state = () => ({
  user: {
    isLoggedIn: false,
    isSignedUp: false
  },
  userDetail: [],
  companyDetails: []
})

export const actions = {}
export const getters = {
  isUserLoggedIn(state) {
    return state.user.isLoggedIn
  }
}
export const mutations = {
  isUserLoggedIn: (state, isUserLoggedIn) => {
    state.user.isLoggedIn = isUserLoggedIn
  }
}
