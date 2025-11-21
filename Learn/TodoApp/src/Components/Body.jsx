import { useState } from "react"
import {TodoList, AddTaskForm} from "."

export default function Body(){
    const [openAddTaskForm, setOpenAddTaskForm] = useState(false);
    // const [openTaskId, setOpenTaskId] = useState(null);

    console.log({openAddTaskForm});
    let visible_form = openAddTaskForm ? "block" : "hidden";
    let visible_list = openAddTaskForm ? "hidden" : "block";
    console.log({visible_form, visible_list});

    return <>    
        <div  id="body" className="w-full block px-2 box-border lg:shadow-sm shadow-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-4 p-2 gap-0 md:gap-5">
                <div className={`text-2xl h-[88vh] ${visible_list} md:block col-span-1 md:col-span-2 lg:col-span-1 overflow-auto md:shadow-[8px_0px_10px_-10px] shadow-blue-300 md:border-r-1 border-white`}>
                    <TodoList onAddTask={setOpenAddTaskForm} />
                </div>

                <div className={`col-span-1 ${visible_form} md:block md:col-span-2 lg:col-span-3 p-2 text-l`}>
                    { (!openAddTaskForm) && <span>Create/Select a task.</span>}
                    {
                        openAddTaskForm && <AddTaskForm onSave={()=>{}} onCancel={()=>{setOpenAddTaskForm(false)}} />
                    }
                </div>
            </div>
        </div>
    </>
}