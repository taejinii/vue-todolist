<script setup>
import SearchTodoInput from "../components/main/SearchTodoInput.vue";
import TodoCategory from "../components/main/TodoCategory.vue";
import AddTodoButton from "../components/main/AddTodoButton.vue";
</script>

<template>
  <div class="search">
    <TodoCategory />
    <SearchTodoInput />
  </div>
  <AddTodoButton />
</template>

<style scoped>
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
</style>
