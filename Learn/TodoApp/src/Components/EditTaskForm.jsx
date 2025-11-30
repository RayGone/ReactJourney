import {TaskFormTemplate} from ".";

export default function EditTaskForm({task=null, onSave=()=>{}, onCancel=()=>{}}){
    function onSubmit(form_data){
        onSave(form_data);
    }

    const name = !!task ? (task.name.substring(0, 20).trim() + (task.name.length > 20 ? "..." : "" )) : "";
    return <>
        {task && <TaskFormTemplate header={<span>Edit Task - <i>{name}</i></span>} task={task} onSave={onSubmit} onCancel={onCancel}></TaskFormTemplate>}
        {(task==null) && <span>Task Doesn't Exist!!!</span>}
    </>;
}