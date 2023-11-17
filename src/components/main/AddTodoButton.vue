<script setup>
import { ref } from "vue";
import { ko } from "date-fns/locale";
import useTodos from "../../hooks/useTodos";
import VueDatePicker from "@vuepic/vue-datepicker";
import TodoStatusMenu from "./TodoStatusMenu.vue";

const isInputModeVisible = ref(false);
const selectedStatus = ref("진행전");
const { addTodo, newTodo } = useTodos();

const toggleTodoForm = () => {
  isInputModeVisible.value = !isInputModeVisible.value;
};
const onChangeTodoStatus = (status) => {
  selectedStatus.value = status;
};
const onSubmit = (status) => {
  addTodo(status);
  isInputModeVisible.value = false;
};
</script>

<template>
  <button
    @click="toggleTodoForm"
    v-show="!isInputModeVisible"
    class="input-mode-button"
    type="button"
  >
    +
  </button>
  <form
    @submit.prevent="onSubmit(selectedStatus)"
    v-show="isInputModeVisible"
    class="input-mode"
  >
    <input
      class="todo-input"
      v-model="newTodo.title"
      placeholder="제목을 입력해주세요."
      required
    />
    <input
      class="todo-input"
      v-model="newTodo.description"
      placeholder="설명을 입력해주세요."
      required
    />
    <div class="input-mode-options">
      <div class="input-box">
        <VueDatePicker
          v-model="newTodo.date"
          dark
          :enable-time-picker="false"
          :format-locale="ko"
          placeholder="날짜를 선택해주세요."
          no-today
          auto-apply
          format="yyyy.MM.dd"
          required
        />
        <button type="submit">추가</button>
      </div>
      <div class="button-box">
        <TodoStatusMenu @change-status="onChangeTodoStatus" />
        <button type="button" @click="toggleTodoForm">취소</button>
      </div>
    </div>
  </form>
</template>

<style scoped>
.input-mode-button {
  width: 100%;
  border-radius: 10px;
  border: none;
  padding: 5px;
  font-size: xx-large;
  background-color: #262626;
  cursor: pointer;
  &:hover {
    background-color: #3d3d3d;
  }
}

.input-mode {
  display: flex;
  flex-direction: column;
  border: 1px solid #cccccc;
  border-radius: 10px;
  justify-content: center;
  gap: 20px;
  padding: 15px;
}
.todo-input {
  border-radius: 4px;
  border: none;
  padding: 10px;
  &:focus {
    outline: none;
  }
}
.input-mode-options {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.input-mode-options div {
  display: flex;
  gap: 20px;
}
.input-mode-options div :first-child {
  flex: 1;
}
.input-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 4;
}
.button-box {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.button-box button,
.input-box button {
  padding: 5px;
}
</style>
