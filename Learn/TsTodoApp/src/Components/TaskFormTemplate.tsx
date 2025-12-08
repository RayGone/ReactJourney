import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";
import type { FC, ChangeEvent, FormEvent} from 'react';
import { useState } from "react";
import {btnWithIconStyle} from "../styles";
import type { Task, TaskFormProp } from "../types";


const TaskFormTemplate: FC<TaskFormProp> = ({header="", task=null, onSave=()=>{}, onCancel=()=>{}}) => {
    // console.log({header, task})
    const isEdit =  !!task
    const [form, updateForm] = useState(isEdit ? task : {} as Task);
    // console.log({form})

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const key = e.target.name;
        const value = (e.target.name=="status") ? !form.status : e.target.value;
        updateForm({
            ...form,
            [key]: value
        })
    }

    function onSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        const t = {
            ...form,
            name: form.name.trim(),
            description: `${form.description}`.trim()
        }

        onSave(t);
    }

    // useEffect(()=>{
    //     if(task)
    //         updateForm(task)
    // }, [task])

    return <>
        <h2 className="font-bold text-white-700 text-xl border-0 border-b-1 mb-5">{header}</h2>
        <form className="w-full flex flex-col gap-5 text-md p-8 rounded dark:bg-gray-700 shadow-[inset_0_0_10px_1px_rgba(0,0,0,0.3)]"
            onSubmit={onSubmit}>
            <div className='grid grid-cols-1 gap-1'>
                <label htmlFor='name'>Task Name:</label>
                <input id="name" name="name" className='w-full p-2 dark:bg-gray-700 border border-gray-500 border-l-4 rounded' type='text' 
                        required
                        autoFocus={true}
                        value={form.name} 
                        placeholder="Task Name"
                        onChange={handleChange}/>
            </div> 
            <div className='grid grid-cols-1 gap-1'>
                <label htmlFor='description'>Task Description:</label>
                <textarea id="description" name="description" placeholder="Task description..." className='w-full p-2 dark:bg-gray-700 border border-l-4 border-gray-500 rounded' rows={3} 
                        value={form.description}
                        onChange={handleChange} />
            </div>

            { isEdit && <div className="flex flex-row gap-3">
                    <label htmlFor="status">Is Task Complete?:</label>
                    <input id="status" type="checkbox" name="status" onChange={handleChange} checked={form.status}/>
                </div>}

            <div className="flex flex-col md:flex-row gap-3 w-full justify-start md:justify-between mt-2">
                <button className={btnWithIconStyle} type="submit">Save</button>
                <button className={btnWithIconStyle + " md:flex hidden"} onClick={()=>onCancel()} type="button"><ArrowLeftCircleIcon className="w-5 h-5" /> Back</button>
            </div>
        </form>
    </>;
}

export default TaskFormTemplate