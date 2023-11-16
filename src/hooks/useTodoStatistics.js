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
  const calculateTodoCount = (status) => {
    return todos.value.filter((todo) => todo.status === status).length;
  };
  const pendingTodoCount = calculateTodoCount("진행전");
  const processingTodoCount = calculateTodoCount("진행중");
  const completedTodoCount = calculateTodoCount("완료");

  return {
    latestDays,
    todoCount,
    pendingTodoCount,
    processingTodoCount,
    completedTodoCount,
  };
}
