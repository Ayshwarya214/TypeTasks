type TaskStatus = "todo" | "in-progress" | "done";
interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}
let nextId = 1;
function addTask(tasks: Task[], title: string): Task[] {
    const newTask: Task = {
        id: nextId++,
        title,
        status: "todo"
    };
    return [...tasks, newTask];
}
function completeTask(tasks: Task[], id: number): Task[] {
    return tasks.map((task) =>
        task.id === id ? {...task, status: "done"}: task
    );
}
function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
    return tasks.filter((t) => t.status === status);
}
function advanceTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) => {
    if (task.id !== id) return task;
    if (task.status === "todo") {
      return { ...task, status: "in-progress" };
    }
    if (task.status === "in-progress") {
      return { ...task, status: "done" };
    }
    return task;
});
}