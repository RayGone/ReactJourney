import { TrashIcon, PencilSquareIcon } from "@heroicons/react/16/solid";
// import { iconBtnStyle, colorTransition, darkBtnWithIconStyle } from "../styles";
import { useState } from "react";

import type { FC } from "react";

// import { ReactSortable } from "react-sortablejs";
import { useTaskStore } from "../Stores";
import type { Task, Tasks } from "../types";
import { colorTransition, iconBtnStyle } from "../styles";

interface ListItemProps{
    task: Task,
    onDelete: (id: string) => void
    onEdit: (id: string) => void
    updateStatus: (id: string) => void
}

const ListItem: FC<ListItemProps> = ({task, onDelete, onEdit, updateStatus}) => (
    <li className={`h-10 group relative flex flex-row gap-2 justify-between items-center border-0 border-l-3 rounded-full 
        ${task.status ? "bg-teal-300 dark:bg-teal-900 active:bg-teal-200 dark:active:bg-teal-950 border-teal-700/80 dark:border-teal-950/90" : "bg-stone-300 dark:bg-gray-800 dark:active:bg-gray-700 active:bg-stone-200 border-gray-400/80 dark:border-gray-500 "}
        rounded-r-none px-4 mr-2  hover:shadow-[inset_0_0_10px_1px_rgba(0,0,0,0.5)]`}
        onClick={()=>{console.log("whole item clicked")}}>
        <span className="text-base truncate w-full md:group-hover:w-[80%]">{task.name}</span>
        <TrashIcon className={`text-blue-700/80 dark:text-white block md:hidden group-hover:block ${iconBtnStyle} ${colorTransition}`} onClick={(e)=>{e.stopPropagation(); onDelete(task.id)}}>Delete</TrashIcon>
        <PencilSquareIcon className={`text-blue-700/80 dark:text-white block md:hidden group-hover:block ${iconBtnStyle} ${colorTransition}`} onClick={(e)=>{e.stopPropagation(); onEdit(task.id)}}>Edit</PencilSquareIcon>
        <span className={`flex items-center justify-center border-0 rounded-full shadow-sm shadow-blue-300 ${colorTransition}`}
            onClick={(e)=> {e.stopPropagation();}}>
            <input name="state" type="checkbox" checked={task.status} 
                onChange={()=> {updateStatus(task.id)}} />
        </span>
    </li>
)

const TodoList: FC = () => {
    const {tasklist, completeds} = useTaskStore();
    const tasks = ([] as Tasks).concat(tasklist).concat(completeds)
    console.log({tasks});

    const [showRemaining, setShowRemaining] = useState(true)
    const selected_style = "border-b-1 text-blue-500/90 text-shadow-md text-shadow-blue-800/20";

    return (<div className="w-full">
        <div className="w-full text-sm flex flex-row flex-start gap-2 p-2">
            <span className="mr-auto">{tasklist.length} remaining</span>
            <span className={`${showRemaining ? selected_style : ""} cursor-pointer`} onClick={()=>setShowRemaining(true)}>Remaining</span>
            <span className={`${!showRemaining ? selected_style : ""} cursor-pointer`} onClick={()=>setShowRemaining(false)}>Completed</span>
        </div>

        <ul className="w-full flex flex-col gap-1 py-2 text-sm">
            {(showRemaining ? tasklist : completeds).map(t => (
                <ListItem key={t.id} task={t} 
                    onEdit={(id)=>console.log("onEdit", id)} 
                    onDelete={(id)=>console.log("onDelete", id)} 
                    updateStatus={(id)=>console.log("updateStatus", id)} />
            ))}
        </ul>
    </div>);
}

export default TodoList;