import type { TaskStore } from "../types";
import default_tasks from "../default.data";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"

const useTaskStore = create<TaskStore>()(
    persist((set)=> ({
        tasklist: default_tasks.filter(t=>!t.status),
        completeds: default_tasks.filter(t=>t.status),
        addTask: (task) =>
            set((store) => ({
                tasklist: [...store.tasklist, task],
            })),
            
        updateTask: (task) => 
            set((store) => ({
                tasklist: store.tasklist.map((t) => t.id==task.id ? task : t)
            })),

        removeTask: (id) => 
            set((store)=> ({
                tasklist: store.tasklist.filter(t=> t.id!=id)
            })),
        overwriteTasks: (tasks) => 
            set(() => ({
                tasklist: tasks
            }))
    }),{
        name: "taskStore",
        storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    })
);

export default useTaskStore