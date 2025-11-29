import {TaskFormTemplate} from ".";

export default function AddTaskForm({onSave=()=>{}, onCancel=()=>{}}){
    const taskId = crypto.randomUUID()
    const task = {
        id: taskId,
        name: "",
        description: "",
        status: false
    }

    function onSubmit(form_data){
        onSave(form_data);
    }

    return <>
        <TaskFormTemplate header="New Task" task={task} onSave={onSubmit} onCancel={onCancel}></TaskFormTemplate>
    </>;
}