<script setup>
import useTodos from "../hooks/useTodos";
import useTodoStatistics from "../hooks/useTodoStatistics";
import generateDonutChart from "../utils";
import { onMounted } from "vue";
import { CHART_OPTIONS } from "../constant";
const { todos } = useTodos();
const {
  latestDays,
  todoCount,
  completedTodoCount,
  pendingTodoCount,
  processingTodoCount,
} = useTodoStatistics(todos);
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
const series = [
  {
    name: "할일",
    data: todoCount,
  },
];
const chartOptions = {
  ...CHART_OPTIONS,
  labels: latestDays,
};
</script>
<template>
  <div class="chat-container">
    <apexchart
      width="100%"
      height="100%"
      type="line"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <div class="donut-box">
      <div class="donut-chart"></div>
      <ul class="todo-count-box">
        <li
          class="todo-count-item"
          :class="todo.status_value"
          v-for="todo in calculatedTodoCount"
        >
          <span> {{ todo.status_name }} {{ todo.count }}개 </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
}
.donut-box {
  flex: 1;
  display: flex;
  justify-content: center;
}

.todo-count-box {
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
