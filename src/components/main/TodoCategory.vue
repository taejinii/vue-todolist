<script setup>
import { ref, computed } from "vue";
import { TODO_CATEGORY_LIST } from "../../constant";
import store from "../../store";

const isCategoryMenuVisible = ref(false);
const handleCategoryVisible = () => {
  isCategoryMenuVisible.value = !isCategoryMenuVisible.value;
};
const onChangeCategory = (category) => {
  store.commit("CHANGE_CATEGORY", category);
};
const selectedCategory = computed(() => store.getters["category"]);
</script>

<template>
  <div class="category" @click="handleCategoryVisible">
    <div>{{ selectedCategory.name }}</div>
    <transition name="fade">
      <ul class="category-menu" v-show="isCategoryMenuVisible">
        <li
          class="category-menu-item"
          v-for="category in TODO_CATEGORY_LIST"
          :key="category.name"
          @click="onChangeCategory(category)"
        >
          {{ category.name }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped>
.category {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #2d2d2d;
  padding: 10px;
  width: 100px;
  border-radius: 10px;
  cursor: pointer;
}
.category:hover {
  border-color: #aaaeb7;
  color: white;
}
.category-menu {
  position: absolute;
  text-align: center;
  margin-top: 215px;
  border: 1px solid #2d2d2d;
  border-radius: 5px;
  background-color: #1b1b1b;
  color: #a3a3a3;
  width: 100%;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.category-menu-item {
  padding: 10px;
  cursor: pointer;
}
.category-menu-item:last-child {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.category-menu-item:first-child {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.category-menu-item:hover {
  background-color: #262626;
  color: white;
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
