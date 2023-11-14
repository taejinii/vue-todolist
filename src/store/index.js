import { createStore } from "vuex";

export default createStore({
  state: {
    category: "제목",
  },
  mutations: {
    CHANGE_CATEGORY(state, category) {
      state.category = category;
    },
  },
  actions: {
    SET_CATEGORY({ commit }, payload) {
      commit("CHANGE_CATEGORY", payload);
    },
  },
  getters: {
    category: (state) => state.category,
  },
});
