import { type FC } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";

import { ReactSortable } from "react-sortablejs";
import {useTaskStore} from "../Stores";

const TodoListSort: FC = () => {
    const { tasklist, overwriteTasks } = useTaskStore();

    return (<ReactSortable list={tasklist} setList={overwriteTasks} className="pt-2">
                {tasklist.map((task)=> <li key={task.id} 
                                        className={"h-10 group relative flex flex-row justify-between items-center gap-1 border-0 border-l-3 rounded-full hover:shadow-[inset_0_0_10px_1px_rgba(0,0,0,0.5)] \
                                            rounded-r-none px-4 py-1 mr-2 my-2 bg-stone-300 dark:bg-gray-800 dark:active:bg-gray-700 active:bg-stone-200 border-gray-400/80 dark:border-gray-500"}>
                    <span className="text-base truncate w-full md:group-hover:w-[80%]">{task.name}</span>
                    <Bars3Icon className={`w-5 h-5`}/>
                </li>)}
            </ReactSortable>)
}

export default TodoListSort;

