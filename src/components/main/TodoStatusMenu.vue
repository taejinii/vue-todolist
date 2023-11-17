<script setup>
import { TODO_STATUS_LIST, TODO_STATUS_MAPPINGS } from "../../constant";
import { ref } from "vue";

defineProps(["todoStatus"]);
const emit = defineEmits(["change-status"]);
const isStatusMenuVisible = ref(false);
const selectedStatus = ref("진행전");

const onChangeStatus = (status) => {
  selectedStatus.value = status;
  emit("change-status", status);
};

const toggleStatusMenuVisible = () => {
  isStatusMenuVisible.value = !isStatusMenuVisible.value;
};
</script>

<template>
  <div class="status-option" @click="toggleStatusMenuVisible">
    <div class="selcted-status" :class="TODO_STATUS_MAPPINGS[todoStatus]">
      {{ todoStatus }}
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
</template>

<style scoped>
.status-option {
  position: relative;
  border: 1px solid #2d2d2d;
  padding: 5px 20px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border-color: #aaaeb7;
    color: white;
  }
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
