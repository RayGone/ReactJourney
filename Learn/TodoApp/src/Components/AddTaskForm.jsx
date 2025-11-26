import { useId } from "react";
import {TaskFormTemplate} from ".";

export default function AddTaskForm({onSave=()=>{}, onCancel=()=>{}}){
    const taskId = useId();
    const task = {
        id: taskId,
        name: "",
        description: ""
    }

    function onSubmit(form_data){
        onSave(form_data);
    }

    return <>
        <TaskFormTemplate header="New Task" task={task} onSave={onSubmit} onCancel={onCancel}></TaskFormTemplate>
    </>;
}