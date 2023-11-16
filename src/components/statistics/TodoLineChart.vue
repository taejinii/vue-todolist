<script setup>
import { CHART_OPTIONS } from "../../constant";
import useTodoStatistics from "../../hooks/useTodoStatistics";
import useTodos from "../../hooks/useTodos";
const { todos } = useTodos();

const { latestDays, todoCount } = useTodoStatistics(todos);
const chartOptions = {
  ...CHART_OPTIONS,
  labels: latestDays,
};
const series = [
  {
    name: "할일",
    data: todoCount,
  },
];
</script>

<template>
  <apexchart
    width="100%"
    height="100%"
    type="line"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<style scoped></style>
