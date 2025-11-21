import { FolderPlusIcon, Bars3BottomRightIcon, PlusIcon } from "@heroicons/react/16/solid";
import {iconBtnStyle, colorTransition, darkBtnWithIconStyle} from "../common_tailwind";

export default function TodoList({onAddTask}){

    const task_list = null;

    return <div className="relative w-full h-full p-1">
        <div className="w-full border-b-1 flex flex-row justify-between px-2 py-1">
            <span className="text-l">Task List</span>
            <div className="flex flex-row justify-end gap-2">
                <FolderPlusIcon title="Add Task" className={`${iconBtnStyle} ${colorTransition}`}  onClick={()=>onAddTask(true)}/>
                <Bars3BottomRightIcon title="Sort" className={iconBtnStyle}></Bars3BottomRightIcon>
            </div>
        </div>
        <div className="mt-2">
            {<i>Create a task.</i> ?? task_list}
        </div>

        <div className="absolute bottom-5 w-[98%] flex flex-row justify-center">
            <button className={`${darkBtnWithIconStyle} ${colorTransition}`} 
                type="button"
                onClick={()=>onAddTask(true)}>Add Task <PlusIcon className="w-7 h-7" /></button>
        </div>
    </div>;
}