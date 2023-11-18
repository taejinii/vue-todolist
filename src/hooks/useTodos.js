import store from "../store";
import { ref, computed } from "vue";
import dayjs from "dayjs";

const initialTodo = {
  title: "",
  description: "",
  status: "진행전",
  date: "",
};
export default function useTodos() {
  const newTodo = ref(initialTodo);

  // computed를 사용하여 store의 todos를 가져옵니다.
  const todos = computed(() => store.getters["todos"]);

  const addTodo = (status) => {
    if (!newTodo.value) return;
    const { title, description, date } = newTodo.value;

    // TODO의 ID를 생성합니다. (마지막 TODO의 ID + 1)
    const id = todos.value.length
      ? todos.value[todos.value.length - 1].id + 1
      : 0;
    const payload = {
      id,
      title,
      description,
      status,
      date: dayjs(date).format("YYYY.MM.DD"),
    };
    store.dispatch("ADD_TODO", payload);
    newTodo.value = {
      title: "",
      description: "",
      status: "진행전",
      date: "",
    };
  };
  const updateTodo = (todo) => {
    store.commit("UPDATE_TODO_ITEM", todo);
  };
  const deleteTodo = (todoId) => {
    store.commit("DELETE_TODO_ITEM", todoId);
  };
  return {
    newTodo,
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
  };
}
