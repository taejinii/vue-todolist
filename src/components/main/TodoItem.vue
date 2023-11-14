<script setup></script>

<template>
  <div class="todo-item">
    <div class="todo-text-section">
      <span class="todo-text todo-title">Todo tlee</span>
      <span class="todo-text">TOdo 설명</span>
    </div>
    <div class="todo-status-section">
      <span
        >{{ new Date().getFullYear() }}.{{ new Date().getMonth() }}.{{
          new Date().getDate()
        }}
      </span>
      <span>완료</span>
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
</style>
