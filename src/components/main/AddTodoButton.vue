<script setup>
import { ref } from "vue";
import { ko } from "date-fns/locale";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
const date = ref();
const isInputModeActive = ref(false);
const todoTitle = ref("");
const todoDescription = ref("");
const handleInputMode = () => {
  isInputModeActive.value = !isInputModeActive.value;
};
</script>

<template>
  <button
    @click="handleInputMode"
    v-show="!isInputModeActive"
    class="input-mode-button"
  >
    +
  </button>

  <div v-show="isInputModeActive" class="input-mode">
    <input v-model="todoTitle" placeholder="제목을 입력해주세요." />
    <input v-model="todoDescription" placeholder="설명을 입력해주세요." />
    <div class="input-mode-options">
      <div>
        <VueDatePicker
          v-model="date"
          dark
          :enable-time-picker="false"
          :format-locale="ko"
          placeholder="날짜를 선택해주세요."
          no-today
          auto-apply
        />
        <button>선택</button>
      </div>
      <div>
        <button>추가</button>
        <button @click="handleInputMode">취소</button>
      </div>
    </div>
  </div>
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
  margin-top: 20px;
}
input {
  border-radius: 10px;
  border: none;
  padding: 10px;
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
