<script setup>
import { CHART_OPTIONS } from "../../constant";
import useTodoStatistics from "../../hooks/useTodoStatistics";
import useTodos from "../../hooks/useTodos";
const { todos } = useTodos();

const { latestDays, todoCount } = useTodoStatistics(todos);
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
  <apexchart
    v-if="todos.length !== 0"
    width="100%"
    height="300px"
    type="line"
    :options="chartOptions"
    :series="series"
  ></apexchart>
  <div v-else class="nodata">
    <p>이런 현재 할일이 존재 하지 않습니다.</p>
    <p>목록 페이지로 이동해서 할일을 추가해주세요.</p>
  </div>
</template>

<style scoped>
.nodata {
  margin: auto;
}
</style>
