// import { FolderPlusIcon, Bars3BottomRightIcon, PlusIcon, TrashIcon, PencilSquareIcon, Bars3Icon } from "@heroicons/react/16/solid";
// import { iconBtnStyle, colorTransition, darkBtnWithIconStyle } from "../styles";
// import { useContext, useEffect, useState } from "react";

import type { FC } from "react";

// import { ReactSortable } from "react-sortablejs";
import { useTaskStore } from "../Stores";
import type { Tasks } from "../types";


const TodoList: FC = () => {
    const {tasklist, completeds} = useTaskStore();
    const tasks = ([] as Tasks).concat(tasklist).concat(completeds)
    console.log({tasks});

    return <>
        Todo List Sort Component.
    </>
}

export default TodoList;
// export default function TodoList({onAddTask=()=>{}, onEditTask=(t_id: string)=>t_id}){
//     const { tasklist } = useTaskStore();

//     const isThereCompleted = tasklist.some(t => t.status);
//     const isThereRemaining = tasklist.some(t => !t.status);

//     // console.log({filter, isThereCompleted, isThereRemaining})

//     // function setList(list){
//     //     console.log(list);
//     //     setTasksState(list)
//     //     overwriteTasks(list)
//     // }

//     // function onRemoveTask(task_id){
//     //     removeTask(task_id)
//     //     setTasksState(tasksState.filter((t)=> t.id!=task_id))
//     // }

//     // useEffect(() => {
//     //     setTasksState(tasks);
//     // }, [tasks])

//     function condition(t){
//         return (filter=="all") || (filter=="com" && t.status) || (filter=="rem" && !t.status)
//     }

//     return <div className="relative w-full h-full p-1">
//         <div className="w-full border-b-1 flex flex-row justify-between px-2 py-1">
//             <span className="text-l">Task List</span>
//             <div className="flex flex-row justify-end gap-2">
//                 <FolderPlusIcon title="Add Task" className={`${iconBtnStyle} ${colorTransition}`}  onClick={()=>onAddTask()}/>
//                 {(!!tasksState && tasksState.length>1) && <Bars3BottomRightIcon onClick={()=>setViewMode(!normalViewMode)} title="Sort" className={`${normalViewMode ? "" : "bg-blue-500 border-blue-700 border-2"} ${iconBtnStyle}`}></Bars3BottomRightIcon>}
//             </div>
//         </div>
//         <span className="mr-auto text-sm">{tasksState.filter(t=>!t.status).length} tasks remaining</span>
//         <div className={"w-full flex flex-row justify-end items-center gap-2 text-sm " + ((isThereCompleted && isThereRemaining) && normalViewMode ? "" : "hidden")}>
//             <span className={"cursor-pointer px-2 py-2 " + (filter==='all' ? "text-blue-500 border-b-1 " : "")} onClick={()=>setFilter('all')}>All</span>
//             <span className={"cursor-pointer px-2 py-2 " + (filter==='rem' ? "text-blue-500 border-b-1  " : "")} onClick={()=>setFilter('rem')}>Remaining</span>
//             <span className={"cursor-pointer px-2 py-2 " + (filter==='com' ? "text-blue-500 border-b-1  " : "") + (isThereCompleted ? "" : "hidden")} onClick={()=>setFilter("com")}>Completed</span>
//         </div>
//         <div className="mt-3 text-base">
//             { ( !tasksState || tasksState.length == 0 ) && <i>Create a task.</i> }
                
//             { (normalViewMode && tasksState) && <ul>
//                     {tasksState.map((task)=> condition(task) && <li key={task.id}
//                                             className={(task.status ? " bg-teal-500 hover:bg-teal-400 border-teal-100 " : "") + 
//                                                 "group relative flex flex-row h-10 justify-between items-center gap-1 border-0 border-l-3 border-zinc-500 rounded-full \
//                                                 rounded-r-none px-4 py-1 mr-2 my-1 bg-gray-900 hover:bg-gray-800 hover:shadow-[inset_0_0_10px_1px_rgba(0,0,0,0.3)]".replace(task.status ? "border-zinc-500" : "", "")}>
//                         <span className="text-base truncate w-full md:group-hover:w-[80%]">{task.name}</span>
//                         <PencilSquareIcon onClick={(e)=>{onEditTask(task.id); e.stopPropagation() }} className={`w-5 h-5 block md:hidden group-hover:block ${iconBtnStyle} ${colorTransition}`} />
//                         <TrashIcon className={`w-5 h-5 block md:hidden group-hover:block ${iconBtnStyle} ${colorTransition}`} onClick={(e)=>{onRemoveTask(task.id); e.stopPropagation() }}/>
//                         <span className={`flex items-center justify-center border-0 rounded-full shadow-sm shadow-blue-300 ${colorTransition}`}>
//                             <input name="state" type="checkbox" checked={task.status} onChange={()=> setList(tasksState.map((ts) => {
//                                 if(ts.id !== task.id) return ts
//                                 else return {
//                                     ...ts,
//                                     status: !ts.status
//                                 }
//                             }))} />
//                         </span>
//                     </li>)}
//                 </ul>
//             }
                
//             { (!normalViewMode && tasksState) && <ReactSortable list={tasksState} setList={setList}>
//                     {tasksState.map((task)=> <li key={task.id} 
//                                             className={(task.status ? " bg-teal-500 hover:bg-teal-400 border-teal-100 " : "") + "h-10 group relative flex flex-row justify-between items-center gap-1 border-0 border-l-3 rounded-full \
//                                                 rounded-r-none px-4 py-1 mr-2 my-2 bg-zinc-900 hover:bg-zinc-800 border-zinc-500 active:bg-gray-700 hover:shadow-[inset_0_0_10px_1px_rgba(0,0,0,0.3)]".replace(task.status ? "bg-zinc-900 hover:bg-zinc-800 border-zinc-500 " : "", "")}>
//                         <span className="text-base truncate w-full md:group-hover:w-[80%]">{task.name}</span>
//                         <Bars3Icon className={`w-5 h-5 ${colorTransition}`}/>
//                     </li>)}
//                 </ReactSortable>
//             }
//         </div>

//         <div className="absolute bottom-5 w-[98%] flex flex-row justify-center">
//             <button className={`${darkBtnWithIconStyle} ${colorTransition}`} 
//                 type="button"
//                 onClick={()=>onAddTask()}>Add Task <PlusIcon className="w-7 h-7" /></button>
//         </div>
//     </div>;
// }