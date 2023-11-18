<script setup>
import { computed, ref } from "vue";
import CustomInput from "../components/main/CustomInput.vue";
import TodoCategory from "../components/main/TodoCategory.vue";
import AddTodoButton from "../components/main/AddTodoButton.vue";
import useTodos from "../hooks/useTodos";
import store from "../store";
import TodoList from "../components/main/TodoList.vue";

// 전체 TODO 목록을 가져옵니다.
const { todos } = useTodos();
const text = ref("");
const category = computed(() => store.state["category"]);

// 검색어와 카테고리에 따라 TODO를 필터링합니다.
const filteredTodos = computed(() =>
  todos.value.filter((todo) => todo[category.value.value].includes(text.value))
);
</script>

<template>
  <div class="search-box">
    <TodoCategory />
    <CustomInput v-model="text" placeholder="검색어를 입력해주세요." />
  </div>
  <AddTodoButton />
  <TodoList :todos="filteredTodos" />
</template>

<style scoped>
.search-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
</style>
