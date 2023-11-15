<script setup>
import useTodos from "../hooks/useTodos";
const { todos } = useTodos();
</script>
<template>
  <div class="temp">
    {{ todos.length }}
    <h1>통계</h1>
    <p>통계 페이지 입니다.</p>
  </div>
</template>

<style scoped>
.temp {
  flex: 1;
}
</style>
