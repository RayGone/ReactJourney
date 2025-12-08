export interface Task{
    id: string,
    name: string,
    description: string,
    status: boolean
}

export type Tasks = Task[];

export interface TaskStore {
  tasklist: Tasks;
  completeds: Tasks;
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
  markComplete: (task: Task) => void;
  updateTask: (task: Task) => void;
  overwriteTasks: (tasks: Tasks) => void;
}