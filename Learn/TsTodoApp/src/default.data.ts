import type { Task, Tasks } from './types'

const tasks: Tasks = [
    {
        id: "001",
        name: "Task 1",
        description: "This is task 1",
        status: false
    },
    {
        id: "002",
        name: "Task 2",
        description: "This is another task to do.",
        status: false
    },
    {
        id: "003",
        name: "Task with a very long name for testing purpose.",
        description: "This is yet another task in our to do list which has a very long name.",
        status: false
    },
    {
        id: "004",
        name: "This task is complete.",
        description: "Already completed task in the list.",
        status: true
    }
]

export function getEmptyTask(): Task{
    return {
        id: crypto.randomUUID(),
        name: "",
        description: "",
        status: false
    }
}

export default tasks;