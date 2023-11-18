<script setup>
import { ref } from "vue";
import UpdateTodoForm from "./UpdateTodoForm.vue";
import TodoItem from "./TodoItem.vue";

const editingTodo = ref(null);
const selectEditTodo = (todo) => {
  editingTodo.value = todo;
};
const closeUpdateTodoForm = () => {
  editingTodo.value = null;
};

defineProps(["todos"]);
</script>
<template>
  <ul>
    <li v-for="todo in todos">
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
ul {
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  flex: 1;
}
</style>
