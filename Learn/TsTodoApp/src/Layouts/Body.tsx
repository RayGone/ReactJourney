import { useState } from "react";
import { TaskEditForm, TodoList, TodoListSort, Description, AddTaskForm } from "../Components";
import { iconBtnStyle } from "../styles";
import { Bars3Icon, FolderPlusIcon, XCircleIcon } from "@heroicons/react/16/solid";
import { useTaskStore } from "../Stores";
import type { OpenSelectAction } from "../types";
import type { PropsWithChildren } from "react";

export default function Body({children}: PropsWithChildren){
    const [sortView, setSortView] = useState<boolean>(false);
    const {tasklist, addTask, updateTask, markComplete} = useTaskStore()
    const num_tasks = tasklist.length;

    const [openSelected, setOpenSelected] = useState<OpenSelectAction>({taskID: null, action: null})
    const isDesc = !!openSelected.taskID && openSelected.action == "display"
    const isEdit = !!openSelected.taskID && openSelected.action == "edit"
    const isAdd = openSelected.action == "add"
    const taskID = !openSelected.taskID ? "-1" : openSelected.taskID

    const visibility = isDesc || isEdit || isAdd;
    const closeForms = ()=>setOpenSelected({taskID: null, action: null});

    return <div className="w-full block box-border px-2">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 md:gap-5">
            <div className={`h-[88vh] col-span-1 text-xl h-[88vh] md:block col-span overflow-auto md:shadow-[8px_2px_10px_-6px] 
                            shadow-blue-900 dark:shadow-gray-900 md:border-r-1 border-black ${visibility ? "hidden" : "block"}`}>
                <div className="py-2 px-1 border-b-1 h-max-32 m-1 flex flex-row justify-start gap-2">
                    <span className="mr-auto">Task List</span>
                    <FolderPlusIcon className={`${iconBtnStyle}`} title="Add Task" onClick={()=>setOpenSelected({taskID: "-1", action: 'add'})} />
                    <Bars3Icon className={`${!sortView ? "" : "dark:bg-blue-500 bg-blue-800/80 text-white hover:text-black border-blue-700 border-2"}
                                ${num_tasks ? "" : "hidden"} ${iconBtnStyle}`} 
                        title="Sort List" onClick={()=>setSortView(v => !v)} />               
                </div>
                {!sortView && <TodoList onOpen={(open)=>{setOpenSelected(open)}} />}
                {sortView && <TodoListSort />}

            </div>
            <div className={`p-2 col-span-1 lg:col-span-2 md:block text-l ${visibility ? "block" : "hidden"}`}>
                <XCircleIcon className={`block md:hidden ${iconBtnStyle} float-right`} onClick={closeForms} />
                { (!isDesc && !isEdit && !isAdd) && <span>Create/Select a task.</span> }
                { children }

                { isDesc && <Description taskID={taskID} /> }
                { isEdit && <TaskEditForm taskID={taskID} onSave={(task)=>{
                    if(task.status){
                        markComplete(task)
                    }else{
                        updateTask(task)
                    }
                    setOpenSelected({taskID: task.id, action: "display"})
                }} onCancel={closeForms}/> }
                { isAdd && <AddTaskForm onSave={(task)=>{addTask(task); setOpenSelected({taskID: task.id, action: "display"})}} onCancel={closeForms} /> }
            </div>
            
        </div>
    </div>
}