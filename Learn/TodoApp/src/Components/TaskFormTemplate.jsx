import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";
import {darkBtnWithIconStyle} from "../common_tailwind";

export default function TaskFormTemplate({header=null, task=null, onSave=()=>{}, onCancel=()=>{}}){
    // console.log({header, task})
    const [form, updateForm] = useState(task);
    const isEdit = task.name.length > 0
    // console.log({form})

    function handleChange(e){
        updateForm({
            ...form,
            [e.target.name]: (e.target.name=="state") ? e.target.value == "on" : e.target.value
        })
    }

    function onSubmit(e){
        e.preventDefault();

        form.name = form.name.trim()
        form.description = `${form.description}`.trim()
        onSave(form);
    }

    useEffect(()=>{
        updateForm(task)
    }, [task])

    return <>
        <h2 className="font-bold text-white-700 text-xl border-0 border-b-1 mb-5">{header ?? "New Task"}</h2>
        <form className="w-full flex flex-col gap-5 text-md p-8 rounded bg-gray-900 shadow-[inset_0_0_10px_1px_rgba(0,0,0,0.3)]"
            onSubmit={onSubmit}>
            <div className='grid grid-cols-1 gap-1'>
                <label htmlFor='name'>Task Name:</label>
                <input id="name" name="name" className='w-full p-2 bg-gray-900 border rounded' type='text' 
                        required
                        autoFocus={true}
                        value={form.name} 
                        placeholder="Task Name"
                        onChange={handleChange}/>
            </div> 
            <div className='grid grid-cols-1 gap-1'>
                <label htmlFor='description'>Task Description:</label>
                <textarea id="description" name="description" placeholder="Task description..." className='w-full p-2 bg-gray-900 border rounded' type='text' rows={5} 
                        value={form.description}
                        onChange={handleChange} />
            </div>

            { isEdit && <div className="flex flex-row gap-3">
                    <label htmlFor="state">Is Task Complete?:</label>
                    <input id="state" type="checkbox" name="state" onChange={handleChange}/>
                </div>}

            <div className="flex flex-col md:flex-row gap-3 w-full justify-start md:justify-between mt-2">
                <button className={darkBtnWithIconStyle} type="submit">Save</button>
                <button className={darkBtnWithIconStyle} onClick={()=>onCancel()} type="button"><ArrowLeftCircleIcon className="w-5 h-5" /> Back</button>
            </div>
        </form>
    </>;
}