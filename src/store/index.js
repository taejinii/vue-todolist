import { createStore } from "vuex";

const localTodos = JSON.parse(localStorage.getItem("todos"));
export default createStore({
  state: {
    todos: localTodos ?? [],
    category: "제목",
  },
  mutations: {
    ADD_TODO_ITEM(state, payload) {
      state.todos = [...state.todos, payload];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    CHANGE_CATEGORY(state, category) {
      state.category = category;
    },
  },
  actions: {
    ADD_TODO({ commit }, payload) {
      commit("ADD_TODO_ITEM", payload);
    },
    SET_CATEGORY({ commit }, payload) {
      commit("CHANGE_CATEGORY", payload);
    },
  },
  getters: {
    todos: (state) => state.todos,
    category: (state) => state.category,
  },
});
