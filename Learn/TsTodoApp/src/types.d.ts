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
  updateTask: (task: Task) => void;
  overwriteTasks: (tasks: Tasks) => void;
  markComplete: (task: Task) => void;
  unMarkComplete: (task: Task) => void;
}

export type OpenActionType = "display" | "add" | "edit" | null

export interface OpenSelectAction {
    taskID: string | null,
    action: OpenActionType
}

export type TaskProp = {task: Task}
export type TasksProp = {tasks: Tasks}

interface TaskFormProp{
    header?: string
    task?: Task | null
    onSave(task: Task): void
    onCancel(): void
}