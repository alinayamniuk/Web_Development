import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.config.productionTip = false

const api_base = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/'
});

Vue.use({
  install (Vue) {
    Vue.prototype.$api = api_base
  }
})
Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    token: localStorage.getItem('token') || null,
    user: localStorage.getItem('user'),
    endpoints: {
      obtainJWT: 'auth/obtain_token/',
    }
  },
  mutations: {
    updateToken(state, newToken) {
      localStorage.setItem('token', newToken);
      state.token = newToken;
    },
    removeToken(state) {
      localStorage.removeItem('token');
      state.token = null;
    },
    updateUser(state, token) {
      localStorage.setItem('user', jwt_decode(token));
      console.log(jwt_decode(token));
      state.user = jwt_decode(token);
    },
    removeUser(state) {
      localStorage.removeItem('user');
      state.user = null;
    },

  },
  actions:{
    obtainToken(context, credentials) {
      const username = credentials.username;
      const password = credentials.password;
      const payload = {
        username: username,
        password: password,
      }

      return new Promise((resolve, reject) => {
        api_base.post(this.state.endpoints.obtainJWT, payload)
            .then(response => {
              this.commit('updateToken', response.data.token);
              this.commit('updateUser', response.data.token);
              resolve();
            })
            .catch(e => {
              console.log(e);
              reject(e);
            })
      })
    },
    logoutUser() {
      this.commit('removeToken');
      this.commit('removeUser');
    }
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
