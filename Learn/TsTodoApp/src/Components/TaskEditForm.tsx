import {TaskFormTemplate} from ".";
import { useTaskStore } from "../Stores";
import type { Task, TaskFormProp } from "../types";

export default function TaskEditForm({taskID, onSave=()=>{}, onCancel=()=>{}}: {taskID: string} & TaskFormProp){
    const task = useTaskStore(store => store.tasklist.find(task => task.id == taskID)) as Task

    return <>
        {task && <TaskFormTemplate header="Edit Task" task={task} onSave={onSave} onCancel={onCancel}></TaskFormTemplate>}
        {!task && <span>Task Doesn't Exist!!!</span>}
    </>;
}