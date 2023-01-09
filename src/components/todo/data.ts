export const data = {
  tasks: {
    "task-1": { id: "task-1", content: "aaaaaaaa" },
    "task-2": { id: "task-2", content: "bbbbbbbb" },
    "task-3": { id: "task-3", content: "cccccccc" },
    "task-4": { id: "task-4", content: "dddddddd" },
    "task-5": { id: "task-5", content: "eeeeeeee" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "t1",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    "column-2": { id: "column-2", title: "t2", taskIds: ["task-4", "task-5"] },
  },
  columnOrder: ["column-1", "column-2"],
};
