import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => {
    return new Vuex.Store({
        state: {
            loading: false  // 追加
        },
        mutations: {
              setUser(state, payload) {
                  state.currentUser = payload
              },
              setLoading(state, payload) {
                  state.loading = payload //追加
              }
          },
        actions: {
        }
    })
}

export default store