export const TODO_CATEGORY_LIST = [
  { name: "제목", value: "title" },
  { name: "설명", value: "description" },
  { name: "날짜", value: "date" },
  { name: "상태", value: "status" },
];

export const TODO_STATUS_LIST = ["진행전", "진행중", "완료"];
export const TODO_STATUS_MAPPINGS = {
  진행전: "pending",
  진행중: "processing",
  완료: "completed",
};

export const CHART_OPTIONS = {
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
  xaxis: {
    labels: {
      style: {
        colors: "#fff",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#fff",
      },
    },
  },
};
