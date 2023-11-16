<script setup>
import { onMounted } from "vue";
import useTodoStatistics from "../../hooks/useTodoStatistics";
import useTodos from "../../hooks/useTodos";
import generateDonutChart from "../../utils";

const { todos } = useTodos();
const { completedTodoCount, pendingTodoCount, processingTodoCount } =
  useTodoStatistics(todos);

const calculatedTodoCount = [
  { status_name: "진행전", status_value: "pending", count: pendingTodoCount },
  {
    status_name: "진행중",
    status_value: "processing",
    count: processingTodoCount,
  },
  {
    status_name: "완료",
    status_value: "completed",
    count: completedTodoCount,
  },
];

onMounted(() => {
  generateDonutChart(calculatedTodoCount, ".donut-chart");
});
</script>
<template>
  <div class="donut-box" v-if="todos.length !== 0">
    <div class="donut-chart"></div>
    <ul class="todo-count-list">
      <li
        class="todo-count-item"
        :class="todo.status_value"
        v-for="todo in calculatedTodoCount"
      >
        <span> {{ todo.status_name }} {{ todo.count }}개 </span>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.donut-box {
  flex: 1;
  display: flex;
  justify-content: center;
}

.todo-count-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  gap: 20px;
}
.todo-count-item {
  padding: 5px 10px;
  border-radius: 4px;
}

.pending {
  background-color: #450a0a;
  color: #ef4444;
  border: 1px solid #dc2626;
}
.processing {
  background-color: #713f12;
  color: #eab308;
  border: 1px solid #eab308;
}
.completed {
  background-color: #21302a;
  color: #069668;
  border: 1px solid #069668;
}
</style>
