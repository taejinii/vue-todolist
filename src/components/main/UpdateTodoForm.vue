<script setup>
import { ref } from "vue";
import { ko } from "date-fns/locale";
import useTodos from "../../hooks/useTodos";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import TodoStatusMenu from "./TodoStatusMenu.vue";

const { todo } = defineProps(["todo"]);
const emit = defineEmits(["closeForm"]);
const { updateTodo } = useTodos();
const { id, title, description, date, status } = todo;

const updateTitle = ref(title);
const updateDescription = ref(description);
const updateDate = ref(date);
const updateStatus = ref(status);
const onChangeStatus = (selectedStatus) => {
  updateStatus.value = selectedStatus;
};
const onSubmit = () => {
  updateTodo({
    id,
    title: updateTitle.value,
    description: updateDescription.value,
    date: updateDate.value,
    status: updateStatus.value,
  });
};
</script>
<template>
  <form @submit.prevent="onSubmit" class="input-mode">
    <input
      class="todo-input"
      v-model="updateTitle"
      placeholder="제목을 입력해주세요."
      required
    />
    <input
      class="todo-input"
      v-model="updateDescription"
      placeholder="설명을 입력해주세요."
      required
    />
    <div class="input-mode-options">
      <div class="input-box">
        <VueDatePicker
          v-model="updateDate"
          dark
          :enable-time-picker="false"
          :format-locale="ko"
          placeholder="날짜를 선택해주세요."
          no-today
          auto-apply
          format="yyyy.MM.dd"
          teleport="body"
        />
        <button type="submit">수정</button>
      </div>
      <div class="button-box">
        <TodoStatusMenu @change-status="onChangeStatus" />
        <button type="button" @click="emit('closeForm')">취소</button>
      </div>
    </div>
  </form>
</template>

<style scoped>
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
