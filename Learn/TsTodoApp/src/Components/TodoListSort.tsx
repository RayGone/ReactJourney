import { type FC } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";

import { ReactSortable } from "react-sortablejs";
import {useTaskStore} from "../Stores";

const TodoListSort: FC = () => {
    const { tasklist, overwriteTasks } = useTaskStore();

    return (<ReactSortable list={tasklist} setList={overwriteTasks}>
                {tasklist.map((task)=> <li key={task.id} 
                                        className={(task.status ? "bg-teal-500 hover:bg-teal-400 dark:border-teal-100 border-teal-700 " : "") + "h-10 group relative flex flex-row justify-between items-center gap-1 border-0 border-l-3 rounded-full \
                                            rounded-r-none px-4 py-1 mr-2 my-2 bg-neutral-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:border-zinc-500 dark:active:bg-gray-700 active:bg-neutral-200 hover:shadow-[inset_0_0_10px_1px_rgba(0,0,0,0.3)]".replace(task.status ? "bg-neutral-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:border-zinc-500" : "", "")}>
                    <span className="text-base truncate w-full md:group-hover:w-[80%]">{task.name}</span>
                    <Bars3Icon className={`w-5 h-5`}/>
                </li>)}
            </ReactSortable>)
}

export default TodoListSort;

