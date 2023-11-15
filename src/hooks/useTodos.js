import store from "../store";
import { ref, computed } from "vue";
import dayjs from "dayjs";

const initialTodo = {
  title: "",
  description: "",
  status: { name: "진행전", value: "pending" },
  date: "",
};
export default function useTodos() {
  const newTodo = ref(initialTodo);
  const todos = computed(() => store.getters["todos"]);

  const addTodo = (status) => {
    if (!newTodo.value) return;
    const { title, description, date } = newTodo.value;
    const id = todos.value.length
      ? todos.value[todos.value.length - 1].id + 1
      : 0;
    const payload = {
      id,
      title,
      description,
      status,
      date: dayjs(date).format("YYYY-MM-DD"),
    };
    store.dispatch("ADD_TODO", payload);
    newTodo.value = {
      title: "",
      description: "",
      status: { name: "진행전", value: "pending" },
      date: "",
    };
  };
  return {
    newTodo,
    todos,
    addTodo,
  };
}
