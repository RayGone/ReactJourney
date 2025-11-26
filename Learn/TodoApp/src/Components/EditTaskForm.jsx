import {TaskFormTemplate} from ".";

export default function EditTaskForm({task=null, onSave=()=>{}, onCancel=()=>{}}){
    function onSubmit(form_data){
        onSave(form_data);
    }

    return <>
        {task && <TaskFormTemplate header="Edit Task" task={task} onSave={onSubmit} onCancel={onCancel}></TaskFormTemplate>}
        {(task==null) && <span>Task Doesn't Exist!!!</span>}
    </>;
}