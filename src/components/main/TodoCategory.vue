<script setup>
import { ref } from "vue";
import { TODO_CATEGORY_LIST } from "../../constant";

const isCategoryMenuVisible = ref(false);
const categoryMenu = ref("제목");
const handleCategoryVisible = () => {
  isCategoryMenuVisible.value = !isCategoryMenuVisible.value;
};
const handleCategoryMenu = (menu) => {
  categoryMenu.value = menu;
};
</script>

<template>
  <div class="category" @click="handleCategoryVisible">
    <div>{{ categoryMenu }}</div>
    <ul class="category-menu" v-show="isCategoryMenuVisible">
      <li
        class="category-menu-item"
        v-for="category in TODO_CATEGORY_LIST"
        @click="handleCategoryMenu(category)"
      >
        {{ category }}
      </li>
    </ul>
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
}
.category-menu {
  position: absolute;
  text-align: center;
  margin-top: 230px;
  border: 1px solid #2d2d2d;
  border-radius: 5px;
  background-color: #1b1b1b;
  color: #a3a3a3;
  width: 100%;
  list-style: none;
  padding: 0;
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
</style>
