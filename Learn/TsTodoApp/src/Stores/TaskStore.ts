import type { TaskStore } from "../types";
import default_tasks from "../default.data";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"

const isDev = import.meta.env.DEV;

const useTaskStore = create<TaskStore>()(
    persist((set)=> ({
        tasklist: isDev ? default_tasks.filter(t=>!t.status) : [],
        completeds: isDev ? default_tasks.filter(t=>t.status) : [],
        addTask: (task) =>
            set((store) => ({
                tasklist: [...store.tasklist, task],
            })),
            
        updateTask: (task) => 
            set((store) => ({
                tasklist: store.tasklist.map((t) => t.id==task.id ? task : t),
            })),

        removeTask: (id) => 
            set((store)=> ({
                tasklist: store.tasklist.filter(t=> t.id!=id),
                completeds: store.completeds.filter(t=> t.id!=id)
            })),

        markComplete: (task) => 
            set((store) => ({
                tasklist: store.tasklist.filter(t => t.id != task.id),
                completeds: [
                    ...store.completeds,
                    {
                        ...task,
                        status: true
                    }
                ]
            })),

        unMarkComplete: (task) => 
            set((store) => ({
                tasklist: [
                    ...store.tasklist,
                    {
                        ...task,
                        status: false
                    }
                ],
                completeds: store.completeds.filter(t => t.id != task.id)
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