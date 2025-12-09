import {TaskFormTemplate} from ".";
import { getEmptyTask } from "../default.data";
import type { TaskFormProp } from "../types";

export default function TaskEditForm({onSave=()=>{}, onCancel=()=>{}}: TaskFormProp){
    const task = getEmptyTask();

    return <>
        {task && <TaskFormTemplate header="Add Task" task={task} onSave={onSave} onCancel={onCancel}></TaskFormTemplate>}
        {!task && <span>Task Doesn't Exist!!!</span>}
    </>;
}