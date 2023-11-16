<script setup>
import useTodos from "../hooks/useTodos";
import useTodoStatistics from "../hooks/useTodoStatistics";

const { todos } = useTodos();
const { latestDays, todoCount } = useTodoStatistics(todos);

const series = [
  {
    name: "할일",
    data: todoCount,
  },
];
const chartOptions = {
  stroke: {
    curve: "smooth",
    width: 3,
  },
  chart: {
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  markers: {
    size: 4,
    hover: {
      size: 10,
    },
  },
  tooltip: {
    style: {
      fontSize: "14px",
    },
  },
  yaxis: {
    tickAmount: 1,
  },
  labels: latestDays,
};
</script>
<template>
  <div class="temp">
    <apexchart
      width="500"
      type="line"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<style scoped>
.temp {
  flex: 1;
}
</style>
