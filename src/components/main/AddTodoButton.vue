<script setup>
import { ref } from "vue";
import { ko } from "date-fns/locale";
import useTodos from "../../hooks/useTodos";
import VueDatePicker from "@vuepic/vue-datepicker";
import TodoStatusMenu from "./TodoStatusMenu.vue";
import CustomInput from "./CustomInput.vue";

const isInputModeVisible = ref(false);
const selectedStatus = ref(null);
const { addTodo, newTodo } = useTodos();

const toggleInputMode = () => {
  isInputModeVisible.value = !isInputModeVisible.value;
};
const onChangeTodoStatus = (status) => {
  selectedStatus.value = status;
};
// TODO를 추가합니다. 할일 상태를 선택하지 않는다면 경고창을 띄웁니다.
const handleAddTodo = (status) => {
  if (!status) {
    alert("상태를 선택해주세요.");
    return;
  }
  addTodo(status);
  isInputModeVisible.value = false;
  selectedStatus.value = null;
};
</script>

<template>
  <button
    @click="toggleInputMode"
    v-show="!isInputModeVisible"
    class="input-mode-button"
    type="button"
  >
    +
  </button>
  <form
    @submit.prevent="handleAddTodo(selectedStatus)"
    v-show="isInputModeVisible"
    class="input-mode"
  >
    <CustomInput v-model="newTodo.title" placeholder="제목을 입력해주세요." />
    <CustomInput
      v-model="newTodo.description"
      placeholder="설명을 입력해주세요."
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
        <TodoStatusMenu
          @change-status="onChangeTodoStatus"
          :todo-status="selectedStatus"
        />
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
  background-color: #262626;
  cursor: pointer;
  &:hover {
    background-color: #3d3d3d;
  }
}

.input-mode {
  display: flex;
  flex-direction: column;
  border: 1px solid #262626;
  border-radius: 10px;
  justify-content: center;
  gap: 20px;
  padding: 15px;
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
