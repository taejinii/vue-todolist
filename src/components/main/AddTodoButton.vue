<script setup>
import { ref } from "vue";
import { ko } from "date-fns/locale";
import { TODO_STATUS_LIST, TODO_STATUS_MAPPINGS } from "../../constant";
import useTodos from "../../hooks/useTodos";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const isInputModeActive = ref(false);
const isStatusMenuVisible = ref(false);
const initialStatus = "진행전";
const selectedStatus = ref(initialStatus);
const { addTodo, newTodo } = useTodos();

const toggleInputMode = () => {
  isInputModeActive.value = !isInputModeActive.value;
};
const toggleStatusMenuVisible = () => {
  isStatusMenuVisible.value = !isStatusMenuVisible.value;
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

        <div class="status-option" @click="toggleStatusMenuVisible">
          <div
            class="selcted-status"
            :class="TODO_STATUS_MAPPINGS[selectedStatus]"
          >
            {{ selectedStatus }}
          </div>
          <transition name="fade">
            <ul class="status-option-menu" v-show="isStatusMenuVisible">
              <li
                v-for="status in TODO_STATUS_LIST"
                @click="onChangeStatus(status)"
                class="status-option-item"
                :key="status"
              >
                <div :class="TODO_STATUS_MAPPINGS[status]">{{ status }}</div>
              </li>
            </ul>
          </transition>
        </div>
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
.status-option {
  position: relative;
  border: 1px solid #2d2d2d;
  padding: 5px 20px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.status-option:hover {
  border-color: #aaaeb7;
  color: white;
}
.selcted-status {
  align-items: center;
}
.status-option-menu {
  position: absolute;
  margin-top: 170px;
  border: 1px solid #2d2d2d;
  border-radius: 5px;
  background-color: #1b1b1b;
  color: #a3a3a3;
  width: 100%;

  z-index: 1;
}
.status-option-item {
  padding: 10px;
  cursor: pointer;
}

.status-option-item:last-child {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.status-option-item:first-child {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.status-option-item:hover {
  background-color: #262626;
  color: white;
}
.pending {
  color: #ef4444;
}
.processing {
  color: #eab308;
}
.completed {
  color: #069668;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  scale: 0.3;
}
</style>
