import { useState } from "react";
import { TodoList, TodoListSort } from "../Components";
import { iconBtnStyle } from "../styles";
import { Bars3Icon, FolderPlusIcon } from "@heroicons/react/16/solid";

export default function Body(){
    const [sortView, setSortView] = useState<boolean>(false);

    return <div className="w-full block box-border px-2">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 md:gap-5">
            <div className="h-[88vh] col-span-1 text-xl h-[88vh] md:block col-span overflow-auto md:shadow-[8px_2px_10px_-6px] 
                            shadow-blue-900 dark:shadow-gray-900 md:border-r-1 border-black">
                <div className="py-2 px-1 border-b-1 h-max-32 m-1 flex flex-row justify-start gap-2">
                    <span className="mr-auto">Task List</span>
                    <FolderPlusIcon className={`${iconBtnStyle}`} title="Add Task" />
                    <Bars3Icon className={`${!sortView ? "" : "dark:bg-blue-500 bg-blue-800/80 text-white hover:text-black border-blue-700 border-2"} ${iconBtnStyle}`} 
                        title="Sort List" onClick={()=>setSortView(v => !v)} />               
                </div>
                {!sortView && <TodoList />}

                {sortView && <TodoListSort />}

            </div>
            <div className="col-span-1 lg:col-span-2 hidden md:block text-l">
                <span>Create/Select a task.</span>
                
            </div>
            
        </div>
    </div>
}