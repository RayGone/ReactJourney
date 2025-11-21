import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";
import { useState, useId } from "react";
import {darkBtnWithIconStyle} from "../common_tailwind";

export default function AddTaskForm({onSave=()=>{}, onCancel=()=>{}}){
    const taskId = useId();

    const [form, updateForm] = useState({
        id: taskId,
        name: "New Task",
        description: "Task Description"
    });

    console.log({form})

    function handleChange(e){
        updateForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function onSubmit(e){
        e.preventDefault();
        onSave();
    }

    return <>
        <h2 className="font-bold text-white-700 text-xl border-0 border-b-1 mb-5">New Task</h2>
        <form className="w-full flex flex-col gap-5 text-md p-8 rounded bg-gray-900 shadow-[inset_0_0_10px_1px_rgba(0,0,0,0.3)]"
            onSubmit={onSubmit}>
            <div className='grid grid-cols-1 gap-1'>
                <label htmlFor='name'>Task Name:</label>
                <input id="name" name="name" className='w-full p-2 bg-gray-900 border rounded' type='text' 
                        value={form.name} 
                        onChange={handleChange}/>
            </div> 
            <div className='grid grid-cols-1 gap-1'>
                <label htmlFor='description'>Task Description:</label>
                <textarea id="description" name="description" className='w-full p-2 bg-gray-900 border rounded' type='text' rows={5} 
                        value={form.description}
                        onChange={handleChange} />
            </div>

            <div className="flex flex-col md:flex-row gap-3 w-full justify-start md:justify-between mt-2">
                <button className={darkBtnWithIconStyle} type="submit">Save</button>
                <button className={darkBtnWithIconStyle} onClick={()=>onCancel()} type="button"><ArrowLeftCircleIcon className="w-5 h-5" /> Back</button>
            </div>
        </form>
    </>;
}