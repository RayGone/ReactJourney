import { useState } from "react";
import { TodoList, TodoListSort } from "../Components";

export default function Body(){
    const [sortView, setSortView] = useState<boolean>(false);

    return <div className="w-full block box-border px-2">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 md:gap-5">
            <div className="h-[88vh] col-span-1 text-2xl h-[88vh] md:block col-span overflow-auto md:shadow-[8px_2px_10px_-6px] 
                            shadow-blue-900 dark:shadow-gray-900 md:border-r-1 border-black">
                <div className="border-b-1 h-max-32 m-1 ">Task List</div>
                {!sortView && <TodoList />}

                {sortView && <TodoListSort />}

            </div>
            <div className="col-span-1 lg:col-span-2 hidden md:block text-l">
                <span>Create/Select a task.</span>
                
            </div>
            
        </div>
    </div>
}