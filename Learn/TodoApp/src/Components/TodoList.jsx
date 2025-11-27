import { FolderPlusIcon, Bars3BottomRightIcon, PlusIcon, TrashIcon, PencilSquareIcon } from "@heroicons/react/16/solid";
import {iconBtnStyle, colorTransition, darkBtnWithIconStyle} from "../common_tailwind";
import { useContext } from "react";
import { TaskContext } from "../AppContexts";

export default function TodoList({onAddTask=()=>{}, onEditTask=(t_id)=>t_id}){
    const {tasks, removeTask} = useContext(TaskContext);

    // const [taskList, addTaskToList] = useState(default_tasks);
    // console.log("TodoList", {tasks, addTask, updateTask})

    return <div className="relative w-full h-full p-1">
        <div className="w-full border-b-1 flex flex-row justify-between px-2 py-1">
            <span className="text-l">Task List</span>
            <div className="flex flex-row justify-end gap-2">
                <FolderPlusIcon title="Add Task" className={`${iconBtnStyle} ${colorTransition}`}  onClick={()=>onAddTask()}/>
                <Bars3BottomRightIcon title="Sort" className={iconBtnStyle}></Bars3BottomRightIcon>
            </div>
        </div>
        <div className="mt-3 text-base">
            { ( !(tasks) || tasks.length == 0 ) && <i>Create a task.</i> }
                
            {   tasks && <ul>
                    {tasks.map((task)=> <li key={task.id} 
                                            className="h-10 group relative flex flex-row justify-between items-center gap-1 border-0 border-l-1 rounded-full rounded-r-none px-4 py-1 mr-2 my-1 bg-gray-900 hover:bg-gray-800 \
                                                hover:shadow-[inset_0_0_10px_1px_rgba(0,0,0,0.3)]">
                        <span className="text-base truncate w-full md:group-hover:w-[80%]">{task.name}</span>
                        <TrashIcon className={`w-5 h-5 block md:hidden group-hover:block ${iconBtnStyle} ${colorTransition}`} onClick={()=>{removeTask(task.id)}}/>
                        <PencilSquareIcon onClick={()=>onEditTask(task.id)} className={`w-5 h-5 block md:hidden group-hover:block ${iconBtnStyle} ${colorTransition}`} />
                    </li>)}
                </ul>
            }
        </div>

        <div className="absolute bottom-5 w-[98%] flex flex-row justify-center">
            <button className={`${darkBtnWithIconStyle} ${colorTransition}`} 
                type="button"
                onClick={()=>onAddTask()}>Add Task <PlusIcon className="w-7 h-7" /></button>
        </div>
    </div>;
}