import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    count: 0,
    isWhite: true,
    user: null,
  },
  plugins: [createPersistedState()],
  mutations: {
    setCount: (state, count) => (state.count = count),
    changeTheme: (state, isWhite) => (state.isWhite = isWhite),
    setUser: (state, user) => (state.user = user),
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
    getTheme: (state) => {
      return state.isWhite;
    },
    getUser: (state) => {
      return state.user;
    },
  },
});
export default store;
