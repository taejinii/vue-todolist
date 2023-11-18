import { createStore } from "vuex";

const localTodos = JSON.parse(localStorage.getItem("todos"));
export default createStore({
  state: {
    // 로컬스토리지에 저장된 todos가 있으면 가져오고 없으면 빈 배열을 할당합니다.
    todos: localTodos ?? [],
    category: { name: "제목", value: "title" },
  },
  mutations: {
    ADD_TODO_ITEM(state, payload) {
      state.todos = [...state.todos, payload];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    UPDATE_TODO_ITEM(state, payload) {
      const index = state.todos.findIndex((todo) => todo.id === payload.id);
      state.todos[index] = payload;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    DELETE_TODO_ITEM(state, payload) {
      const index = state.todos.findIndex((todo) => todo.id === payload);
      state.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    CHANGE_CATEGORY(state, category) {
      state.category = category;
    },
  },
  getters: {
    todos: (state) => state.todos,
    category: (state) => state.category,
  },
});
