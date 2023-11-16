import dayjs from "dayjs";

export default function useTodoStatistics(todos) {
  let latestDays = [];
  let todoCount = [];

  for (let i = 1; i <= 7; i++) {
    latestDays.push(
      dayjs()
        .add(i - 1, "day")
        .format("MM-DD")
    );
    todoCount.push(
      todos.value.filter((todo) =>
        dayjs(todo.date).isSame(dayjs().add(i - 1, "day"), "day")
      ).length
    );
  }

  return { latestDays, todoCount };
}
