<script setup>
import { computed, ref } from "vue";
import SearchTodoInput from "../components/main/SearchTodoInput.vue";
import TodoCategory from "../components/main/TodoCategory.vue";
import AddTodoButton from "../components/main/AddTodoButton.vue";
import TodoItem from "../components/main/TodoItem.vue";
import useTodos from "../hooks/useTodos";
import store from "../store";
import UpdateTodoForm from "../components/main/UpdateTodoForm.vue";

// 전체 TODO 목록을 가져옵니다.
const { todos } = useTodos();
const searchText = ref("");
const category = computed(() => store.state["category"]);

// 검색어와 카테고리에 따라 TODO를 필터링합니다.
const filteredTodos = computed(() =>
  todos.value.filter((todo) =>
    todo[category.value.value].includes(searchText.value)
  )
);
const editingTodo = ref(null);
const selectEditTodo = (todo) => {
  editingTodo.value = todo;
};
const closeUpdateTodoForm = () => {
  editingTodo.value = null;
};
</script>

<template>
  <div class="search-box">
    <TodoCategory />
    <SearchTodoInput v-model="searchText" />
  </div>
  <AddTodoButton />
  <ul>
    <li v-for="todo in filteredTodos">
      <TodoItem
        v-if="editingTodo !== todo"
        :key="todo.id"
        :todo="todo"
        @click="selectEditTodo(todo)"
      />
      <div v-else>
        <UpdateTodoForm :todo="todo" @closeForm="closeUpdateTodoForm" />
      </div>
    </li>
  </ul>
</template>

<style scoped>
.search-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  flex: 1;
}
</style>
