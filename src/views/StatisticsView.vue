<script setup>
import TodoLineChart from "../components/statistics/TodoLineChart.vue";
import TodoDonutChart from "../components/statistics/TodoDonutChart.vue";
</script>
<template>
  <div class="chat-container">
    <TodoLineChart />
    <TodoDonutChart />
  </div>
</template>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
}
</style>
