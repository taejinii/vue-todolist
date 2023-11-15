<script setup>
import { defineProps } from "vue";
const { todo } = defineProps(["todo"]);
const { title, description, date, status } = todo;
</script>

<template>
  <div class="todo-item">
    <div class="todo-text-section">
      <span class="todo-text todo-title">{{ title }}</span>
      <span class="todo-text">{{ description }}</span>
    </div>
    <div class="todo-status-section">
      <span>{{ date }} </span>
      <span class="todo-status" :class="status.value">{{ status.name }}</span>
    </div>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px;
  border-radius: 10px;
  background-color: #262626;
}
.todo-text-section,
.todo-status-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.todo-text-section {
  width: 80%;
}
.todo-status-section {
  width: 20%;
}
.todo-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.todo-title {
  font-size: x-large;
  font-weight: bold;
}
.todo-status {
  text-align: center;
  padding: 0.5rem;
  border-radius: 5px;
}
.pending {
  background-color: #450a0a;
  color: #ef4444;
  border: 1px solid #dc2626;
}
.processing {
  background-color: #713f12;
  color: #eab308;
  border: 1px solid #eab308;
}
.completed {
  background-color: #21302a;
  color: #069668;
  border: 1px solid #069668;
}
</style>
