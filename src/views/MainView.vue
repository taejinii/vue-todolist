<script setup>
import SearchTodoInput from "../components/main/SearchTodoInput.vue";
import TodoCategory from "../components/main/TodoCategory.vue";
import AddTodoButton from "../components/main/AddTodoButton.vue";
import TodoItem from "../components/main/TodoItem.vue";
import useTodos from "../hooks/useTodos";

const { todos } = useTodos();
console.log(todos.value);
</script>

<template>
  <div class="search">
    <TodoCategory />
    <SearchTodoInput />
  </div>
  <AddTodoButton />
  <ul>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<style scoped>
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
  padding: 10px;
  margin: 0;
  overflow-y: auto;
  flex: 1;
}
</style>
