<script setup>
import SearchTodoInput from "../components/main/SearchTodoInput.vue";
import TodoCategory from "../components/main/TodoCategory.vue";
import AddTodoButton from "../components/main/AddTodoButton.vue";
import TodoItem from "../components/main/TodoItem.vue";
</script>

<template>
  <div class="search">
    <TodoCategory />
    <SearchTodoInput />
  </div>
  <AddTodoButton />
  <ul>
    <TodoItem v-for="n in 20" />
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
