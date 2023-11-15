<script setup>
import { ref } from "vue";
import { ko } from "date-fns/locale";
import useTodos from "../../hooks/useTodos";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import TodoStatusMenu from "./TodoStatusMenu.vue";

const isInputModeActive = ref(false);
const initialStatus = "진행전";
const selectedStatus = ref(initialStatus);
const { addTodo, newTodo } = useTodos();

const toggleInputMode = () => {
  isInputModeActive.value = !isInputModeActive.value;
};

const onChangeStatus = (status) => {
  selectedStatus.value = status;
};
const handleAddTodo = (status) => {
  addTodo(status);
  selectedStatus.value = initialStatus;
  isInputModeActive.value = false;
};
</script>

<template>
  <button
    @click="toggleInputMode"
    v-show="!isInputModeActive"
    class="input-mode-button"
  >
    +
  </button>
  <form
    @submit.prevent="handleAddTodo(selectedStatus)"
    v-show="isInputModeActive"
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
      <div>
        <VueDatePicker
          v-model="newTodo.date"
          dark
          :enable-time-picker="false"
          :format-locale="ko"
          placeholder="날짜를 선택해주세요."
          no-today
          auto-apply
          required=""
        />
        <TodoStatusMenu @change-status="onChangeStatus" />
      </div>
      <div>
        <button type="submit">추가</button>
        <button type="button" @click="toggleInputMode">취소</button>
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
}
.input-mode-button:hover {
  background-color: rgba(82, 82, 89, 0.68);
  color: #10b981;
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
  flex-direction: column;
  gap: 10px;
}
.input-mode-options div {
  display: flex;
  gap: 20px;
}
.input-mode-options div :first-child {
  flex: 1;
}
</style>
