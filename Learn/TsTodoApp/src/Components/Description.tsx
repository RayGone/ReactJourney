import type { FC, PropsWithChildren } from "react";
import { useTaskStore } from "../Stores";
import type { Task } from "../types";

const TaskValue: FC<PropsWithChildren> = ({children}) => 
         <div className="font-light w-full text-base border-1 border-l-4 shadow-[inset_1px_1px_3px_2px_rgba(0,0,0,0.1)] dark:shadow-[inset_1px_1px_3px_2px_rgba(0,0,0,0.2)] border-blue-500/30 p-2 rounded">{children}</div>

type Prop = {taskID: string}

const Description: FC<Prop> = ({taskID}) => {
    const task = useTaskStore(store => store.tasklist.find(task => task.id == taskID) ? store.tasklist.find(task => task.id == taskID) : store.completeds.find(task => task.id == taskID)) as Task

    return (<div className="block rounded w-full p-4 text-base
                dark:shadow-[3px_3px_5px_2px_rgba(0,0,0,0.4),_-1px_-1px_5px_2px_rgba(200,200,200,0.3)] 
                shadow-[_-2px_-3px_5px_2px_rgba(180,180,180,0.95),3px_3px_10px_3px_rgba(250,250,250,0.9)] ">
        <h2 className="w-full text-2xl font-semibold py-2 mb-3 border-b-1 text-shadow-sm text-shadow-blue-500/30">{task.name}</h2>
        
        <div className="mb-2">
            <div className="w-full my-2">Description: </div>
            <TaskValue>
                {task.description}
            </TaskValue>
        </div>

        <div className="mb-2">
            <div className="py-2 w-full">Status:</div>
            <TaskValue>{task.status?"Completed":"Not Complete"}</TaskValue>
        </div>   
    </div>);
}

export default Description