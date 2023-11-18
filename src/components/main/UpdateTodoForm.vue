<script setup>
import { ref } from "vue";
import { ko } from "date-fns/locale";
import useTodos from "../../hooks/useTodos";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import TodoStatusMenu from "./TodoStatusMenu.vue";
import CustomInput from "./CustomInput.vue";

const { todo } = defineProps(["todo"]);
const emit = defineEmits(["closeForm"]);
const { updateTodo, deleteTodo } = useTodos();
const { id, title, description, date, status } = todo;
const updateTitle = ref(title);
const updateDescription = ref(description);
const updateDate = ref(date);
const updateStatus = ref(status);

const onChangeStatus = (selectedStatus) => {
  updateStatus.value = selectedStatus;
};
const onDeleteTodo = (todoId) => {
  deleteTodo(todoId);
};
// 수정 버튼 클릭시 수정된 TODO를 저장합니다.
const handleUpdateTodo = () => {
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
  <form @submit.prevent="handleUpdateTodo" class="input-mode">
    <CustomInput v-model="updateTitle" placeholder="제목을 입력해주세요." />
    <CustomInput
      v-model="updateDescription"
      placeholder="설명을 입력해주세요."
    />
    <div class="input-mode-options">
      <div class="input-box-left">
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
        <div>
          <button type="submit">수정</button>
          <button type="button" @click="onDeleteTodo(id)">삭제</button>
        </div>
      </div>
      <div class="input-box-right">
        <TodoStatusMenu
          @change-status="onChangeStatus"
          :todo-status="updateStatus"
        />
        <button @click="emit('closeForm')">취소</button>
      </div>
    </div>
  </form>
</template>

<style scoped>
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
  gap: 15px;
}
.input-mode-options div {
  display: flex;
  gap: 15px;
}
.input-mode-options div :first-child {
  flex: 1;
}
.input-box-left {
  display: flex;
  flex-direction: column;
  flex: 4;
}
.input-box-right {
  display: flex;
  flex-direction: column;
  flex: 1;
}
button {
  padding: 5px;
}
</style>
